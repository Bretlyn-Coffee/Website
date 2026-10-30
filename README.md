# Bretlyn Coffee — bretlyn.com

A static website for Bretlyn Coffee: plain HTML, CSS and JS with no build step needed.
Every push to `main` deploys automatically to Hostinger over SSH.

```
index.html  about.html  menu.html  privacy-policy.html  terms.html  404.html
assets/css/styles.css   assets/js/main.js   assets/img/*
.htaccess               HTTPS redirect, www → apex, caching, security headers
.github/workflows/deploy.yml   GitHub Actions → Hostinger (rsync over SSH)
tools/build.py          optional: regenerates all pages from shared header/footer/menu data
```

## Editing content
- **Menu items and prices:** edit the `MENU` list in `tools/build.py`, then run `python3 tools/build.py`. You can also edit `menu.html` directly.
- **Social links:** edit `SOCIAL` in `tools/build.py` (they currently point to the generic Instagram/LinkedIn/Facebook/YouTube home pages).
- **Photos:** the images in `assets/img/` (`hero-cups.jpg`, `beans.jpg`, `espresso.jpg`) were cropped from the design mock-up. Replace them with high-resolution originals using the same file names.

---

## 1. Push the code to GitHub

On your computer (Git installed), in the unzipped folder:

```bash
git init
git add .
git commit -m "Bretlyn Coffee website"
git branch -M main
git remote add origin https://github.com/Bretlyn-Coffee/Website.git
git push -u origin main
```

## 2. Connect GitHub → Hostinger (one-time setup)

**a. Create a deploy key** (on your computer, in PowerShell or a terminal):

```bash
ssh-keygen -t ed25519 -C "github-deploy-bretlyn" -f bretlyn_deploy -N ""
```

This creates `bretlyn_deploy` (private key) and `bretlyn_deploy.pub` (public key).

**b. Add the public key to Hostinger:** hPanel → Advanced → **SSH Access** → **Add SSH key**, then paste the contents of `bretlyn_deploy.pub`. Make sure SSH access is **enabled**.

**c. Find the web root.** SSH in once and check:

```bash
ssh -p 65002 u680478455@46.202.161.177
ls ~/domains/bretlyn.com/public_html
```

The deploy path is normally `/home/u680478455/domains/bretlyn.com/public_html`.

**d. Add GitHub secrets:** GitHub repo → Settings → Secrets and variables → Actions → **New repository secret**

| Secret | Value |
|---|---|
| `HOSTINGER_HOST` | `46.202.161.177` |
| `HOSTINGER_PORT` | `65002` |
| `HOSTINGER_USER` | `u680478455` |
| `HOSTINGER_PATH` | `/home/u680478455/domains/bretlyn.com/public_html` |
| `HOSTINGER_SSH_KEY` | full contents of the private key file `bretlyn_deploy` |

**e. Deploy:** go to Actions → *Deploy to Hostinger* → **Run workflow** (or just push to `main`).

> ⚠️ The workflow uses `rsync --delete`, so it **replaces everything** in `public_html`. Back up anything already there (for example a WordPress install) before the first run.

## 3. SSL certificate (HTTPS)

1. Point the domain to Hostinger. If bretlyn.com was bought elsewhere, set nameservers to `ns1.dns-parking.com` / `ns2.dns-parking.com`, or add A records for `@` and `www` → your hosting IP.
2. hPanel → Websites → bretlyn.com → **Security → SSL** → install the free **Lifetime SSL**. It covers `bretlyn.com` and `www.bretlyn.com` and renews automatically.
3. Turn on **Force HTTPS** there too. The included `.htaccess` also redirects all traffic to `https://bretlyn.com`.

## 4. Wildcard certificate (`*.bretlyn.com`)

Hostinger's Web and Cloud hosting plans **do not support wildcard SSL**; Hostinger only supports wildcard certificates on VPS plans.
Your options:

- **A. Free SSL per subdomain (simplest).** Create each subdomain you need (shop., order., etc.) in hPanel → Domains → Subdomains. Each one gets its own free Lifetime SSL automatically. This gives the same result as a wildcard for every subdomain you actually use.
- **B. Cloudflare in front (free wildcard at the edge).** Move bretlyn.com's DNS to Cloudflare (free plan). Cloudflare's Universal SSL covers `bretlyn.com` and `*.bretlyn.com`. Keep Hostinger's Lifetime SSL on the server and set Cloudflare SSL mode to **Full (strict)**.
- **C. Hostinger VPS.** On a VPS you can issue a real wildcard with Let's Encrypt (certbot DNS-01 challenge) or install a purchased wildcard certificate.
