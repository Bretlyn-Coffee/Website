"""Generates the static Bretlyn Coffee pages into ../site from shared partials."""
import pathlib, sys
OUT = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else pathlib.Path(__file__).resolve().parent.parent

ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'

def head(title, desc, path):
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="https://bretlyn.com/{path}">
<meta name="theme-color" content="#0a2378">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Bretlyn Coffee">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="https://bretlyn.com/{path}">
<meta property="og:image" content="https://bretlyn.com/assets/img/og-image.jpg">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" href="/assets/img/favicon-512.png">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/styles.css">
</head>'''

def header(active, solid=False):
    def link(href, label, key):
        cur = ' aria-current="page"' if key == active else ''
        return f'<li><a href="{href}"{cur}>{label}</a></li>'
    cls = "site-header solid" if solid else "site-header"
    return f'''<body>
<a class="skip" href="#main">Skip to content</a>
<header class="{cls}">
  <nav class="wrap nav" aria-label="Main">
    <a class="brand" href="/" aria-label="Bretlyn Coffee home"><img src="/assets/img/logo-white.png" alt="Bretlyn Coffee" width="240" height="88"></a>
    <button class="nav-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
    <ul class="nav-links">
      {link("/", "Home", "home")}
      {link("/about.html", "About Us", "about")}
      {link("/menu.html", "Menu", "menu")}
    </ul>
  </nav>
</header>
<main id="main">'''

I = {
 "pin": '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"/></svg>',
 "mail": '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2L4 7.3V17h16V7.3l-8 4.9Z"/><path d="M4 7l8 5 8-5" fill="none"/></svg>',
 "ig": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
 "li": '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm3.3 7H5v8h2.3v-8Zm-1.1-3.7a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6ZM19 13.4c0-2.3-1.2-3.6-3.1-3.6-1.3 0-2 .7-2.3 1.2V10h-2.3v8h2.3v-4.2c0-1.1.4-1.9 1.4-1.9s1.6.7 1.6 1.9V18H19v-4.6Z"/></svg>',
 "fb": '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-5v-7h2.4l.4-2.8H15V9.4c0-.8.3-1.4 1.4-1.4H18V5.5a19 19 0 0 0-2.3-.1c-2.3 0-3.8 1.4-3.8 3.9v1.9H9.5V14H12v7H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/></svg>',
 "yt": '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z"/></svg>',
}

# >>> Replace these with your real social profile URLs <<<
SOCIAL = {
 "Instagram": ("https://www.instagram.com/", "ig"),
 "LinkedIn": ("https://www.linkedin.com/", "li"),
 "Facebook": ("https://www.facebook.com/", "fb"),
 "Youtube": ("https://www.youtube.com/", "yt"),
}

def footer():
    soc = "\n".join(f'<li><a href="{u}" target="_blank" rel="noopener">{I[k]}{n}</a></li>' for n, (u, k) in SOCIAL.items())
    return f'''</main>
<footer class="site-footer">
  <div class="wrap">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="/assets/img/logo-white.png" alt="Bretlyn Coffee" width="240" height="88" loading="lazy">
        <div class="f-row">{I["pin"]}<address style="font-style:normal">BRETLYN GLOBAL PRIVATE LIMITED<br>235, 2nd Floor, 13th Cross Road, 3rd Stage,<br>Indiranagar, Bengaluru – 560038<br>Karnataka, India</address></div>
        <div class="f-row">{I["mail"]}<a href="mailto:contact@bretlyn.com">contact@bretlyn.com</a></div>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul><li><a href="/">Home</a></li><li><a href="/about.html">About Us</a></li><li><a href="/menu.html">Menu</a></li></ul>
      </div>
      <div>
        <h4>Follow Us</h4>
        <ul>{soc}</ul>
      </div>
      <div>
        <h4>Legal</h4>
        <ul><li><a href="/privacy-policy.html">Privacy Policy</a></li><li><a href="/terms.html">Terms &amp; Conditions</a></li></ul>
      </div>
    </div>
    <div class="footer-bottom">© <span data-year>2026</span> Bretlyn Global Private Limited. All Rights Reserved.</div>
  </div>
</footer>
<script src="/assets/js/main.js" defer></script>
</body>
</html>
'''

COMPASS = '''<svg viewBox="0 0 400 400" fill="none" stroke="#fff" aria-hidden="true">
  <circle cx="200" cy="200" r="196" stroke-opacity=".35" stroke-width="1.5"/>
  <circle cx="200" cy="200" r="182" stroke-opacity=".2" stroke-dasharray="2 8" stroke-width="2"/>
  <g fill="#fff" stroke="none">
    <path d="M200 0l7 22h-14z"/><path d="M200 400l-7-22h14z"/><path d="M0 200l22-7v14z"/><path d="M400 200l-22 7v-14z"/>
    <path d="M58.6 58.6l17 9-8 8z" opacity=".7"/><path d="M341.4 58.6l-9 17-8-8z" opacity=".7"/>
    <path d="M58.6 341.4l9-17 8 8z" opacity=".7"/><path d="M341.4 341.4l-17-9 8-8z" opacity=".7"/>
  </g>
</svg>'''

# Simple illustrated cups for the signature drinks
def cup_hot():
    return '''<svg viewBox="0 0 120 150" aria-hidden="true"><ellipse cx="60" cy="144" rx="38" ry="5" fill="#0a2378" opacity=".12"/>
<path d="M18 30h84l-10 110H28z" fill="#1240d6"/><rect x="14" y="22" width="92" height="12" rx="4" fill="#0a2378"/>
<ellipse cx="60" cy="24" rx="44" ry="7" fill="#c98b52"/><path d="M48 23c6-6 18-6 24 0-6 3-18 3-24 0z" fill="#f3dcc0"/>
<circle cx="60" cy="86" r="16" fill="none" stroke="#fff" stroke-width="3"/><text x="60" y="93" text-anchor="middle" font-family="Barlow Condensed" font-weight="800" font-size="20" fill="#fff">B</text></svg>'''
def cup_iced(dark=True):
    liquid = '#2b140a' if dark else '#c99a6b'
    layer = '' if dark else '<path d="M25 104h70l-4 36H29z" fill="#fbf4ea"/>'
    return f'''<svg viewBox="0 0 120 150" aria-hidden="true"><ellipse cx="60" cy="144" rx="38" ry="5" fill="#0a2378" opacity=".12"/>
<path d="M16 24h88l-12 116H28z" fill="#e9f1ff" stroke="#b9ccf5" stroke-width="2"/>
<path d="M20 40h80l-9 100H29z" fill="{liquid}"/>{layer}
<g fill="#fff" opacity=".55"><rect x="30" y="34" width="20" height="18" rx="4" transform="rotate(-12 40 43)"/><rect x="58" y="30" width="22" height="20" rx="4" transform="rotate(10 69 40)"/><rect x="44" y="52" width="18" height="16" rx="4" transform="rotate(20 53 60)"/></g>
<rect x="12" y="18" width="96" height="8" rx="3" fill="#c7d6f7"/>
<circle cx="60" cy="92" r="15" fill="none" stroke="#fff" stroke-width="3"/><text x="60" y="99" text-anchor="middle" font-family="Barlow Condensed" font-weight="800" font-size="19" fill="#fff">B</text></svg>'''
def cup_frappe():
    return '''<svg viewBox="0 0 120 150" aria-hidden="true"><ellipse cx="60" cy="144" rx="38" ry="5" fill="#0a2378" opacity=".12"/>
<path d="M18 46h84l-10 94H28z" fill="#e2a874" stroke="#d29361" stroke-width="2"/>
<path d="M18 46c0-14 12-22 20-20 2-12 16-18 24-12 8-8 24-2 24 10 10 0 18 10 16 22z" fill="#fffaf2"/>
<path d="M30 36c10 6 20-8 30 0s20-6 30 2" fill="none" stroke="#c46f22" stroke-width="4" stroke-linecap="round"/>
<path d="M40 26c8 4 14-4 22 0s14-2 18 2" fill="none" stroke="#c46f22" stroke-width="3" stroke-linecap="round"/>
<circle cx="60" cy="94" r="15" fill="none" stroke="#fff" stroke-width="3"/><text x="60" y="101" text-anchor="middle" font-family="Barlow Condensed" font-weight="800" font-size="19" fill="#fff">B</text></svg>'''

MARQUEE_WORDS = ["Single Origin", "Freshly Ground", "Freshly Brewed", "Made in India", "Specialty Grade", "Everyday Habit"]
def marquee():
    items = "".join(f"<span>{w}</span>" for w in MARQUEE_WORDS) * 2
    return f'<div class="marquee" aria-hidden="true"><div class="marquee-track">{items}{items}</div></div>'

# ------------------------------------------------------------------ HOME
home = head("Bretlyn Coffee — Happiness Lies in Every Sip",
            "Bretlyn Coffee brings high-quality, single origin Indian specialty coffee to everyone — freshly ground, freshly brewed, affordable and accessible.", "") + header("home") + f'''
<section class="hero">
  <div class="wrap hero-grid">
    <div>
      <span class="eyebrow">Specialty Coffee · Bengaluru</span>
      <h1 class="display"><span class="line"><span>Happiness lies in</span></span><span class="line"><span>every <span class="accent">sip.</span></span></span></h1>
      <p class="lead">Bretlyn started to transform specialty coffee from an occasional treat into an everyday habit — delivering high-quality specialty coffee, affordable and accessible to everyone.</p>
      <div class="hero-actions">
        <a class="btn btn-solid" href="/menu.html">Explore Menu {ARROW}</a>
        <a class="btn btn-outline" href="/about.html">Our Story</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="compass-ring">{COMPASS}</div>
      <div class="photo"><img src="/assets/img/hero-cups.jpg" alt="Bretlyn hot latte, iced americano, iced latte and caramel frappé" width="476" height="453"></div>
      <div class="hero-badge"><img src="/assets/img/mark-navy.png" alt="" width="40" height="40" style="width:40px"><div><strong>100%</strong><small>Indian specialty<br>arabica</small></div></div>
    </div>
  </div>
  <div class="scroll-cue"><i></i>Scroll</div>
</section>
{marquee()}

<section class="section origin">
  <div class="wrap split">
    <div class="media-card reveal"><img src="/assets/img/beans.jpg" alt="Roasted coffee beans spilling from a woven basket beside ripe coffee cherries" loading="lazy" width="530" height="330"><span class="media-tag">Farm to cup</span></div>
    <div class="reveal d1">
      <span class="eyebrow">Our Beans</span>
      <h2 class="display">Single origin<br>specialty coffee</h2>
      <p>Sourced from India's finest coffee-growing regions. Every lot is traceable to the estates that grow it — shade-grown, hand-picked and roasted to bring out its own character.</p>
      <ul class="regions"><li>Chikmagalur</li><li>Coorg</li><li>Araku Valley</li><li>Wayanad</li><li>Nilgiris</li><li>Baba Budangiri</li></ul>
    </div>
  </div>
</section>

<section class="section brew">
  <div class="wrap split reverse">
    <div class="reveal">
      <span class="eyebrow">Our Craft</span>
      <h2 class="display">Freshly ground.<br>Freshly brewed.</h2>
      <p>We carefully select specialty-grade coffee beans and grind and brew them with precision to deliver consistently great coffee, in every cup.</p>
      <div class="steps">
        <div class="step"><div><h3>Select</h3><p>Only specialty-grade beans make the cut.</p></div></div>
        <div class="step"><div><h3>Grind</h3><p>Ground fresh, moments before every shot.</p></div></div>
        <div class="step"><div><h3>Brew</h3><p>Dialled-in recipes for the same great cup, every time.</p></div></div>
      </div>
    </div>
    <div class="media-card reveal d1"><img src="/assets/img/espresso.jpg" alt="Espresso pouring into a blue Bretlyn cup" loading="lazy" width="464" height="454" style="aspect-ratio:1/1"><span class="media-tag">Pulled to order</span></div>
  </div>
</section>

<section class="stats">
  <div class="wrap stats-grid">
    <div class="stat reveal"><strong data-count="100" data-suffix="%">100%</strong><span>Indian arabica</span></div>
    <div class="stat reveal d1"><strong data-count="6">6</strong><span>Growing regions</span></div>
    <div class="stat reveal d2"><strong data-count="20" data-suffix="+">20+</strong><span>Handcrafted drinks</span></div>
    <div class="stat reveal d3"><strong data-count="1">1</strong><span>Promise: great coffee</span></div>
  </div>
</section>

<section class="section drinks">
  <div class="wrap">
    <div class="section-head">
      <div><span class="eyebrow">Signatures</span><h2 class="display">Pick your<br>everyday ritual</h2></div>
      <a class="btn btn-ghost-navy" href="/menu.html">Full Menu {ARROW}</a>
    </div>
    <div class="drink-grid">
      <article class="drink reveal"><div class="drink-art">{cup_hot()}</div><h3>Classic Latte</h3><p>Velvety espresso and steamed milk, finished with latte art.</p></article>
      <article class="drink reveal d1"><span class="tag">Bestseller</span><div class="drink-art">{cup_iced(True)}</div><h3>Iced Americano</h3><p>Bold double shot over ice. Clean, bright and refreshing.</p></article>
      <article class="drink reveal d2"><div class="drink-art">{cup_iced(False)}</div><h3>Iced Latte</h3><p>Chilled milk layered with espresso for the perfect pour.</p></article>
      <article class="drink reveal d3"><span class="tag">New</span><div class="drink-art">{cup_frappe()}</div><h3>Caramel Frappé</h3><p>Blended coffee, whipped cream and a caramel drizzle.</p></article>
    </div>
  </div>
</section>

<section class="cta">
  <div class="wrap">
    <div class="cta-box reveal">
      <div><h2 class="display">Your daily cup<br>is waiting.</h2><p>Great specialty coffee shouldn't be a once-in-a-while treat. Come make it part of your day.</p></div>
      <div class="hero-actions"><a class="btn btn-solid" href="/menu.html">See the Menu {ARROW}</a><a class="btn btn-outline" href="mailto:contact@bretlyn.com">Contact Us</a></div>
    </div>
  </div>
</section>
''' + footer()

# ------------------------------------------------------------------ ABOUT
def svg_icon(p): return f'<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">{p}</svg>'
about = head("About Us — Bretlyn Coffee", "Bretlyn Coffee is on a mission to make specialty coffee an everyday habit — high quality, affordable and accessible to everyone.", "about.html") + header("about") + f'''
<section class="page-hero">
  <div class="wrap"><span class="eyebrow">About Us</span><h1 class="display">Specialty coffee,<br>every day.</h1>
  <p>Bretlyn started with a simple belief: great coffee shouldn't be an occasional treat. It should be part of everyone's day.</p></div>
</section>
<section class="section origin">
  <div class="wrap split">
    <div class="reveal"><span class="eyebrow">Our Story</span><h2 class="display">From India's hills<br>to your hands</h2>
      <p>India grows some of the world's most distinctive coffee — shade-grown under forest canopies, alongside pepper and cardamom. Yet most of that specialty coffee has been hard to find and expensive to enjoy.</p>
      <p style="margin-top:1rem">Bretlyn exists to change that. We work with India's finest growing regions, choose specialty-grade lots, and brew them with precision — so a genuinely great cup is something you can enjoy every single day.</p></div>
    <div class="media-card reveal d1"><img src="/assets/img/beans.jpg" alt="Roasted coffee beans and ripe coffee cherries" loading="lazy" width="530" height="330"></div>
  </div>
</section>
<section class="section brew">
  <div class="wrap">
    <div class="section-head"><div><span class="eyebrow">What we stand for</span><h2 class="display">Our compass</h2></div></div>
    <div class="values">
      <div class="value reveal"><div class="ico">{svg_icon('<path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3z"/>')}</div><h3>Quality</h3><p>Specialty-grade beans only, freshly ground and brewed with care and consistency.</p></div>
      <div class="value reveal d1"><div class="ico">{svg_icon('<circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/>')}</div><h3>Accessible</h3><p>Honest prices so specialty coffee can be an everyday habit, not a luxury.</p></div>
      <div class="value reveal d2"><div class="ico">{svg_icon('<path d="M4 20c4-1 6-4 6-8V4c4 0 10 4 10 10a6 6 0 0 1-6 6z"/><path d="M10 12c2 2 4 3 7 3"/>')}</div><h3>Rooted in India</h3><p>Proudly single origin, celebrating the estates and growers behind every cup.</p></div>
    </div>
  </div>
</section>
<section class="section drinks">
  <div class="wrap"><p class="quote reveal">“Happiness lies in <em>every sip</em> — and every sip should be worth it.”</p></div>
</section>
<section class="cta"><div class="wrap"><div class="cta-box reveal">
  <div><h2 class="display">Come say hello.</h2><p>Find us in Indiranagar, Bengaluru — or drop us a line at contact@bretlyn.com.</p></div>
  <div class="hero-actions"><a class="btn btn-solid" href="/menu.html">Explore Menu {ARROW}</a></div>
</div></div></section>
''' + footer()

# ------------------------------------------------------------------ MENU
# >>> Edit menu items and prices here (prices in ₹) <<<
MENU = [
 ("hot", "Hot Coffee", "Espresso based", [
   ("Espresso", "A concentrated double shot of our house single origin.", 120),
   ("Americano", "Espresso lengthened with hot water. Smooth and bold.", 140),
   ("Cappuccino", "Equal parts espresso, steamed milk and silky foam.", 170),
   ("Classic Latte", "Espresso with steamed milk and a thin layer of microfoam.", 180),
   ("Flat White", "Double ristretto with velvety milk. Strong and smooth.", 190),
   ("Mocha", "Espresso, dark chocolate and steamed milk.", 210),
 ]),
 ("iced", "Iced Coffee", "Served over ice", [
   ("Iced Americano", "Double shot over ice and chilled water.", 160),
   ("Iced Latte", "Cold milk layered with fresh espresso.", 190),
   ("Iced Spanish Latte", "Espresso, condensed milk and cold milk.", 220),
   ("Cold Brew", "Steeped for 18 hours for a naturally sweet cup.", 200),
   ("Vietnamese Iced Coffee", "Strong coffee with sweetened condensed milk.", 210),
   ("Espresso Tonic", "Espresso poured over tonic water and citrus.", 220),
 ]),
 ("frappe", "Frappés", "Blended & indulgent", [
   ("Caramel Frappé", "Blended coffee, whipped cream, caramel drizzle.", 240),
   ("Mocha Frappé", "Coffee blended with chocolate and topped with cream.", 240),
   ("Hazelnut Frappé", "Nutty, creamy and perfectly chilled.", 250),
   ("Classic Coffee Frappé", "Just coffee, milk and ice, blended smooth.", 220),
 ]),
 ("brew", "Manual Brews", "Single origin, by hand", [
   ("Pour Over", "Choose today's single origin, brewed by hand.", 220),
   ("AeroPress", "Full-bodied and clean, brewed to order.", 210),
   ("French Press", "Rich and textured. Serves one or two.", 230),
   ("South Indian Filter Kaapi", "Our tribute to the classic — decoction and frothy milk.", 120),
 ]),
]
tabs = "".join(f'<button data-target="{k}" aria-selected="{str(i==0).lower()}">{n}</button>' for i,(k,n,_,_) in enumerate(MENU))
cats = ""
for k, n, sub, items in MENU:
    rows = "".join(f'<div class="menu-item"><h3>{a}</h3><span class="price">₹{p}</span><p>{d}</p></div>' for a, d, p in items)
    cats += f'<section class="menu-cat reveal" id="{k}"><h2>{n}<small>{sub}</small></h2><div class="menu-list">{rows}</div></section>'
menu = head("Menu — Bretlyn Coffee", "Explore the Bretlyn Coffee menu: hot espresso drinks, iced coffee, frappés and single origin manual brews.", "menu.html") + header("menu") + f'''
<section class="page-hero">
  <div class="wrap"><span class="eyebrow">Our Menu</span><h1 class="display">Pick your<br>perfect cup.</h1>
  <p>Every drink is made with freshly ground single origin Indian specialty coffee. Ask about oat or almond milk.</p></div>
</section>
<section class="section drinks" style="padding-top:3rem">
  <div class="wrap">
    <div class="menu-tabs" role="tablist">{tabs}</div>
    {cats}
    <p class="menu-note">Prices are inclusive of applicable taxes. Menu and prices may vary by location.</p>
  </div>
</section>
''' + footer()

# ------------------------------------------------------------------ LEGAL
privacy = head("Privacy Policy — Bretlyn Coffee", "How Bretlyn Global Private Limited collects, uses and protects your information.", "privacy-policy.html") + header("", solid=True) + '''
<section class="page-hero" style="padding-bottom:4rem"><div class="wrap"><span class="eyebrow">Legal</span><h1 class="display">Privacy Policy</h1></div></section>
<section class="section"><div class="wrap legal">
<p class="updated">Last updated: October 2026</p>
<p>This Privacy Policy explains how Bretlyn Global Private Limited ("Bretlyn", "we", "us") collects, uses and protects information when you visit bretlyn.com or interact with us.</p>
<h2>Information we collect</h2>
<ul><li>Information you give us, such as your name, email address and message when you contact us.</li><li>Basic technical information such as browser type, device and pages visited, collected through standard server logs.</li></ul>
<h2>How we use it</h2>
<ul><li>To respond to your enquiries and provide our services.</li><li>To improve our website and customer experience.</li><li>To comply with applicable laws, including the Digital Personal Data Protection Act, 2023.</li></ul>
<h2>Sharing</h2>
<p>We do not sell your personal data. We may share it with service providers who help us run our website and business, under appropriate confidentiality obligations, or where required by law.</p>
<h2>Your rights</h2>
<p>You may request access to, correction of, or deletion of your personal data by writing to <a href="mailto:contact@bretlyn.com"><u>contact@bretlyn.com</u></a>.</p>
<h2>Contact</h2>
<p>Bretlyn Global Private Limited, 235, 2nd Floor, 13th Cross Road, 3rd Stage, Indiranagar, Bengaluru – 560038, Karnataka, India.</p>
</div></section>
''' + footer()

terms = head("Terms & Conditions — Bretlyn Coffee", "Terms and conditions for using bretlyn.com.", "terms.html") + header("", solid=True) + '''
<section class="page-hero" style="padding-bottom:4rem"><div class="wrap"><span class="eyebrow">Legal</span><h1 class="display">Terms &amp; Conditions</h1></div></section>
<section class="section"><div class="wrap legal">
<p class="updated">Last updated: October 2026</p>
<p>By using bretlyn.com you agree to these terms. If you do not agree, please do not use the website.</p>
<h2>Use of the website</h2>
<p>The content on this website is for general information about Bretlyn Coffee and our products. You agree not to misuse the website or attempt to interfere with its operation.</p>
<h2>Intellectual property</h2>
<p>The Bretlyn name, logo, images and content on this site belong to Bretlyn Global Private Limited and may not be used without our written permission.</p>
<h2>Menu and pricing</h2>
<p>Menu items, prices and availability shown on the website are indicative and may change without notice or vary by location.</p>
<h2>Limitation of liability</h2>
<p>We aim to keep information accurate and up to date but make no warranties about its completeness. To the extent permitted by law, Bretlyn is not liable for any loss arising from use of this website.</p>
<h2>Governing law</h2>
<p>These terms are governed by the laws of India, and the courts of Bengaluru, Karnataka shall have exclusive jurisdiction.</p>
<h2>Contact</h2>
<p>Questions? Write to <a href="mailto:contact@bretlyn.com"><u>contact@bretlyn.com</u></a>.</p>
</div></section>
''' + footer()

notfound = head("Page not found — Bretlyn Coffee", "This page could not be found.", "404.html") + header("") + f'''
<section class="hero" style="min-height:100svh"><div class="wrap" style="position:relative;z-index:2;padding-top:6rem">
<span class="eyebrow">Error 404</span><h1 class="display" style="font-size:clamp(3.4rem,9vw,7rem);margin:1rem 0">Lost your<br>way?</h1>
<p class="lead" style="margin-bottom:2rem">This page has wandered off. Let our compass guide you back.</p>
<a class="btn btn-solid" href="/">Back Home {ARROW}</a></div></section>
''' + footer()

for name, html in {"index.html": home, "about.html": about, "menu.html": menu,
                   "privacy-policy.html": privacy, "terms.html": terms, "404.html": notfound}.items():
    (OUT / name).write_text(html, encoding="utf-8")
print("built", OUT)
