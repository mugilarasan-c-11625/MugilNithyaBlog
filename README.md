# Mugil & Nithya — Wedding Invitation

A static, mobile-friendly wedding invitation site for **mugilnithyadiaries.in**.

## Files
- [index.html](index.html) — page structure & content
- [styles.css](styles.css) — visual design (warm cream + gold + blush palette)
- [script.js](script.js) — countdown timer + RSVP handler

## Preview locally
Open `index.html` directly in a browser, or serve the folder:
```bash
cd /Users/mugil-11625/Documents/MN_Blog
python3 -m http.server 8080
# then visit http://localhost:8080
```

## What to customize
Edit these in [index.html](index.html):
- Full names, families, dates, times, venue addresses
- Story timeline (years & captions)
- Hero background image — replace the Unsplash URL in [styles.css](styles.css#L29) with your own photo (drop a `hero.jpg` in this folder and use `url("hero.jpg")`)
- Google Maps embed — replace `Chennai` in the iframe `src` and the "Open in Google Maps" link with your real venue
- RSVP deadline text

Edit in [script.js](script.js#L2):
- `WEDDING_DATE` — set your exact muhurtham date & time

## RSVP backend
The form currently logs to the browser console and shows a thank-you. To collect responses, point the form at one of:
- **Formspree** — set `<form action="https://formspree.io/f/XXXX" method="POST">` and remove the `onsubmit` handler
- **Google Forms** — embed a Google Form iframe instead
- **Netlify Forms** — add `netlify` attribute on the form tag if hosting on Netlify

## Deploying to mugilnithyadiaries.in
Pick one (all free for a single static page):

1. **Netlify** — drag-and-drop this folder at app.netlify.com, then add your domain under Site settings → Domain management. Update your domain's DNS at the registrar to Netlify's nameservers (or add A/CNAME records Netlify shows you).
2. **Cloudflare Pages** — connect a Git repo or use Direct Upload. Add `mugilnithyadiaries.in` as a custom domain.
3. **GitHub Pages** — push to a repo, enable Pages, then add a `CNAME` file with `mugilnithyadiaries.in` and point DNS to GitHub Pages IPs.
4. **Your existing host** — upload `index.html`, `styles.css`, `script.js` to the web root via cPanel / FTP / SFTP.

After DNS propagates (minutes to a few hours), `https://mugilnithyadiaries.in` will serve the invitation.
