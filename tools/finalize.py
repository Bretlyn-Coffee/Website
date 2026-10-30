import sys
from PIL import Image, ImageFilter, ImageEnhance
name, out = sys.argv[1], sys.argv[2]
im = Image.open(f'{name}_x4.png').convert('RGB')
im = im.filter(ImageFilter.UnsharpMask(radius=1.2, percent=40, threshold=2))
im = ImageEnhance.Color(im).enhance(1.04)
for w in (960, 1600):
    r = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
    r.save(f'{out}/{name}-{w}.jpg', quality=86, optimize=True, progressive=True)
    r.save(f'{out}/{name}-{w}.webp', quality=84, method=6)
    print(name, w, r.size)
