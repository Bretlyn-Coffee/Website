# Bretlyn Coffee — bretlyn.com

React + Material UI (MUI) website for Bretlyn Coffee, built with Vite.
Every push to `main` is built by GitHub Actions and deployed to Hostinger over SSH.

## Structure
```
src/
  theme.js            MUI theme: Bretlyn colours, fonts, buttons, breakpoints
  data/site.js        ← edit company details, social links, menu & prices here
  brand/              vector Bretlyn logo (compass mark)
  components/         Header, Footer, shared blocks, scroll reveal
  pages/              Home, About, Menu, Privacy, Terms, 404
public/
  assets/img/         logo SVGs, favicons, enhanced photos (WebP + JPG, 960/1600 px)
  .htaccess           HTTPS, www → bretlyn.com, SPA routing, caching, security headers
.github/workflows/
  deploy.yml          main → npm build → rsync dist/ to Hostinger
  preview.yml         mui-dev → build check, output pushed to the preview-build branch
```

## Local development
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Common edits
- **Menu and prices:** `src/data/site.js` → `MENU` (the current prices are placeholders)
- **Social links:** `src/data/site.js` → `SOCIAL`
- **Colours and fonts:** `src/theme.js`
- **Photos:** replace files in `public/assets/img/` and keep the same names (`hero-cups`, `beans`, `espresso` at `-960`/`-1600` in `.jpg` and `.webp`)

## Deployment secrets (GitHub → Settings → Secrets → Actions)
| Secret | Value |
|---|---|
| `HOSTINGER_HOST` | `46.202.161.177` |
| `HOSTINGER_PORT` | `65002` |
| `HOSTINGER_USER` | `u680478455` |
| `HOSTINGER_PATH` | `/home/u680478455/domains/bretlyn.com/public_html` |
| `HOSTINGER_SSH_KEY` | private deploy key |

## SSL
- `bretlyn.com` and `www`: free Lifetime SSL in hPanel → Security → SSL (auto-renews).
- Wildcard `*.bretlyn.com`: Hostinger supports wildcard certificates only on VPS plans. On this plan, each subdomain gets its own free SSL, or you can use Cloudflare's free Universal SSL in front of the site.
