# Putting the Impakt Digital site online

This site is not a plain folder of HTML files — it is built and then served by a small
web server, so **GitHub Pages cannot run it** (Pages only serves static files, which is why
you saw the README instead of the site).

Keep the code on GitHub and let one of the hosts below build and serve it.

## Option A — Cloudflare Workers (already configured, free tier)

Everything is ready in this repo: `wrangler.toml` and `.github/workflows/deploy.yml`.

1. Create a free Cloudflare account.
2. In Cloudflare: **My Profile → API Tokens → Create Token → Edit Cloudflare Workers**. Copy the token.
3. Copy your **Account ID** from the Cloudflare dashboard sidebar.
4. In GitHub: **Settings → Secrets and variables → Actions → New repository secret**, add:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
5. Push to `main`. The workflow builds the site and deploys it automatically.

Your site appears at `https://impakt-digital.<your-subdomain>.workers.dev`, and a custom
domain can be attached in the Cloudflare dashboard.

## Option B — Netlify or Vercel (no config needed)

1. Sign in with GitHub and import this repository.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Deploy. Both hosts detect the framework and run the server side for you.

## Option C — Publish from Lovable

One click on **Publish** in the Lovable editor gives a live URL immediately, with the
option to connect your own domain.

## Local check

```bash
npm install
npm run build
npm run preview
```
