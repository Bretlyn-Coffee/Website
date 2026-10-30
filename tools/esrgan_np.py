"""Real-ESRGAN x4plus (RRDBNet) inference in pure NumPy, tiled. Usage: esrgan_np.py weights.pth in.jpg out.png"""
import sys, zipfile, pickle, numpy as np, time
from PIL import Image

def load_pth(path):
    z = zipfile.ZipFile(path)
    prefix = z.namelist()[0].split('/')[0]
    dtypes = {'FloatStorage': np.float32, 'HalfStorage': np.float16}
    class Storage:
        def __init__(s, arr): s.arr = arr
    def rebuild(storage, offset, size, stride, *a):
        arr = storage.arr
        if len(size) == 0: return arr[offset]
        itemsize = arr.itemsize
        return np.lib.stride_tricks.as_strided(arr[offset:], shape=size, strides=[st * itemsize for st in stride]).copy()
    class U(pickle.Unpickler):
        def find_class(s, mod, name):
            if name == '_rebuild_tensor_v2': return rebuild
            if name.endswith('Storage'): return name
            if mod == 'collections' and name == 'OrderedDict':
                import collections; return collections.OrderedDict
            if name == '_rebuild_parameter': return lambda t, *a: t
            return super().find_class(mod, name)
        def persistent_load(s, pid):
            _, stype, key, loc, numel = pid
            dt = dtypes.get(stype if isinstance(stype, str) else stype, np.float32)
            buf = z.read(f'{prefix}/data/{key}')
            return Storage(np.frombuffer(buf, dtype=dt))
    sd = U(z.open(f'{prefix}/data.pkl')).load()
    if 'params_ema' in sd: sd = sd['params_ema']
    elif 'params' in sd: sd = sd['params']
    return {k: np.asarray(v, dtype=np.float32) for k, v in sd.items()}

W = None
def conv(x, name):
    """x: (H, W, C) -> (H, W, Cout), 3x3 same padding."""
    w, b = W[name + '.weight'], W[name + '.bias']  # (Cout, Cin, 3, 3)
    H, Wd, C = x.shape
    p = np.pad(x, ((1, 1), (1, 1), (0, 0)))
    cols = np.empty((H, Wd, 9, C), np.float32)
    k = 0
    for dy in range(3):
        for dx in range(3):
            cols[:, :, k, :] = p[dy:dy + H, dx:dx + Wd, :]; k += 1
    wm = w.transpose(2, 3, 1, 0).reshape(9 * C, -1)  # (9*Cin, Cout)
    return cols.reshape(H * Wd, 9 * C) @ wm + b if False else (cols.reshape(H * Wd, 9 * C) @ wm + b).reshape(H, Wd, -1)

def lrelu(x): return np.where(x > 0, x, 0.2 * x)
def up2(x): return x.repeat(2, 0).repeat(2, 1)

def rdb(x, n):
    x1 = lrelu(conv(x, n + '.conv1'))
    x2 = lrelu(conv(np.concatenate([x, x1], 2), n + '.conv2'))
    x3 = lrelu(conv(np.concatenate([x, x1, x2], 2), n + '.conv3'))
    x4 = lrelu(conv(np.concatenate([x, x1, x2, x3], 2), n + '.conv4'))
    x5 = conv(np.concatenate([x, x1, x2, x3, x4], 2), n + '.conv5')
    return x5 * 0.2 + x

def net(img):
    feat = conv(img, 'conv_first')
    b = feat
    nb = len({k.split('.')[1] for k in W if k.startswith('body.')})
    for i in range(nb):
        o = rdb(b, f'body.{i}.rdb1'); o = rdb(o, f'body.{i}.rdb2'); o = rdb(o, f'body.{i}.rdb3')
        b = o * 0.2 + b
    feat = feat + conv(b, 'conv_body')
    feat = lrelu(conv(up2(feat), 'conv_up1'))
    feat = lrelu(conv(up2(feat), 'conv_up2'))
    return conv(lrelu(conv(feat, 'conv_hr')), 'conv_last')

def run(img, tile=128, pad=10):
    H, Wd, _ = img.shape
    out = np.zeros((H * 4, Wd * 4, 3), np.float32)
    t0 = time.time(); n = 0; total = -(-H // tile) * -(-Wd // tile)
    for y in range(0, H, tile):
        for x in range(0, Wd, tile):
            y0, x0 = max(y - pad, 0), max(x - pad, 0)
            y1, x1 = min(y + tile + pad, H), min(x + tile + pad, Wd)
            o = net(img[y0:y1, x0:x1])
            ty, tx = min(tile, H - y), min(tile, Wd - x)
            oy, ox = (y - y0) * 4, (x - x0) * 4
            out[y * 4:(y + ty) * 4, x * 4:(x + tx) * 4] = o[oy:oy + ty * 4, ox:ox + tx * 4]
            n += 1; print(f'tile {n}/{total} {time.time()-t0:.0f}s', flush=True)
    return out

if __name__ == '__main__':
    W = load_pth(sys.argv[1])
    im = np.asarray(Image.open(sys.argv[2]).convert('RGB'), np.float32) / 255.
    o = np.clip(run(im), 0, 1)
    Image.fromarray((o * 255 + .5).astype(np.uint8)).save(sys.argv[3])
    print('done', sys.argv[3])
