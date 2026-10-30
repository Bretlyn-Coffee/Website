"""Replace AI-generated cup logos with the official Bretlyn logo (stacked), wrapped onto the cup."""
import cv2, numpy as np, sys

SRC_LOGO = '/mnt/user-data/uploads/21334e0a-image.jpg'

def official_parts():
    g = cv2.imread(SRC_LOGO, cv2.IMREAD_GRAYSCALE).astype(np.float32)
    a = np.clip((g - 40) / 160, 0, 1)
    icon = a[:, :931]; text = a[:, 931:]
    def crop(m):
        n, lab, st, _ = cv2.connectedComponentsWithStats((m > 0.3).astype(np.uint8), 8)
        keep = [i for i in range(1, n) if st[i, cv2.CC_STAT_AREA] > 200]
        x0 = min(st[i, 0] for i in keep); y0 = min(st[i, 1] for i in keep)
        x1 = max(st[i, 0] + st[i, 2] for i in keep); y1 = max(st[i, 1] + st[i, 3] for i in keep)
        return m[y0:y1, x0:x1]
    icon = crop(icon); text = crop(text)
    rows = np.where(text.max(1) > 0.3)[0]
    gaps = np.where(np.diff(rows) > 5)[0]
    split = rows[gaps[0]] + 1
    bretlyn = crop(text[:split]); coffee = crop(text[split:])
    return icon, bretlyn, coffee

def stacked(icon, bretlyn, coffee, mark_w, text_w):
    """Build stacked lockup alpha: mark, BRETLYN, COFFEE (COFFEE keeps its official size relative to BRETLYN)."""
    s_t = text_w / bretlyn.shape[1]
    b = cv2.resize(bretlyn, None, fx=s_t, fy=s_t, interpolation=cv2.INTER_AREA)
    c = cv2.resize(coffee, None, fx=s_t, fy=s_t, interpolation=cv2.INTER_AREA)
    s_m = mark_w / icon.shape[1]
    m = cv2.resize(icon, None, fx=s_m, fy=s_m, interpolation=cv2.INTER_AREA)
    gap1 = int(b.shape[0] * 0.75); gap2 = int(b.shape[0] * 0.38)
    W = max(m.shape[1], b.shape[1], c.shape[1]) + 8
    H = m.shape[0] + gap1 + b.shape[0] + gap2 + c.shape[0] + 8
    out = np.zeros((H, W), np.float32); y = 4
    for part, g in ((m, gap1), (b, gap2), (c, 0)):
        x = (W - part.shape[1]) // 2
        out[y:y + part.shape[0], x:x + part.shape[1]] = np.maximum(out[y:y + part.shape[0], x:x + part.shape[1]], part)
        y += part.shape[0] + g
    return out, m.shape[0]

def cylinder_wrap(alpha, R):
    """Map flat print onto a cylinder of radius R (px) seen from the front."""
    H, W = alpha.shape
    cx = W / 2
    xs = np.arange(W, dtype=np.float32) - cx
    # screen x = R*sin(u/R)  -> u = R*asin(x/R)
    u = R * np.arcsin(np.clip(xs / R, -0.999, 0.999))
    mapx = np.tile((u + cx).astype(np.float32), (H, 1))
    mapy = np.tile(np.arange(H, dtype=np.float32)[:, None], (1, W))
    return cv2.remap(alpha, mapx, mapy, cv2.INTER_LINEAR, borderValue=0)

def process(img, cups, icon, bretlyn, coffee):
    out = img.copy()
    for c in cups:
        x0, y0, x1, y1 = c['box']
        roi = out[y0:y1, x0:x1].astype(np.float32)
        lum = cv2.cvtColor(roi.astype(np.uint8), cv2.COLOR_BGR2GRAY).astype(np.float32)
        bg = cv2.medianBlur(lum.astype(np.uint8), 41).astype(np.float32)
        mask = ((lum - bg) > c.get('thr', 18)).astype(np.uint8) * 255
        mask = cv2.dilate(mask, np.ones((5, 5), np.uint8), iterations=2)
        for ex0, ey0, ex1, ey1 in c.get('erase', []):
            mask[ey0 - y0:ey1 - y0, ex0 - x0:ex1 - x0] = 255
        ink = np.median(roi[mask > 0], axis=0) if (mask > 0).any() else np.array([250, 250, 250])
        ink = np.array(c.get('ink', ink), np.float32)
        clean = cv2.inpaint(out[y0:y1, x0:x1], mask, 9, cv2.INPAINT_TELEA)
        # smooth the filled area so no ghost of the old logo remains
        blur = cv2.GaussianBlur(clean, (0, 0), 6)
        soft = cv2.GaussianBlur(mask.astype(np.float32) / 255, (0, 0), 4)[..., None]
        clean = (clean * (1 - soft) + blur * soft).astype(np.uint8)
        # add back a little grain so the fill matches the photo texture
        noise = np.random.normal(0, 1.6, clean.shape).astype(np.float32)
        clean = np.clip(clean.astype(np.float32) + noise * soft, 0, 255).astype(np.uint8)
        out[y0:y1, x0:x1] = clean

        # new logo
        lock, _ = stacked(icon, bretlyn, coffee, c['mark_w'], c['text_w'])
        lock = cylinder_wrap(lock, c['R'])
        lock = cv2.GaussianBlur(lock, (0, 0), c.get('soft', 0.7))
        h, w = lock.shape
        cx, ty = c['center_x'], c['top']
        lx0, ly0 = int(cx - w / 2), int(ty)
        region = out[ly0:ly0 + h, lx0:lx0 + w].astype(np.float32)
        # printed ink follows the cup's lighting
        rl = cv2.cvtColor(region.astype(np.uint8), cv2.COLOR_BGR2GRAY).astype(np.float32)
        rl = cv2.GaussianBlur(rl, (0, 0), 15)
        shade = np.clip((rl / max(rl.mean(), 1)) ** c.get('shade', 0.35), 0.75, 1.15)[..., None]
        a = (lock * c.get('opacity', 0.96))[..., None]
        col = np.clip(ink[None, None, :] * shade, 0, 255)
        out[ly0:ly0 + h, lx0:lx0 + w] = np.clip(region * (1 - a) + col * a, 0, 255).astype(np.uint8)
    return out

if __name__ == '__main__':
    import json
    cfg = json.load(open(sys.argv[1]))
    icon, bretlyn, coffee = official_parts()
    img = cv2.imread(cfg['src'])
    res = process(img, cfg['cups'], icon, bretlyn, coffee)
    cv2.imwrite(cfg['out'], res)
    print('wrote', cfg['out'])
