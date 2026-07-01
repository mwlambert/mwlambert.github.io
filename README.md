# Michael Lambert — photography site

A minimal, fast photo portfolio. Static site built with [Astro](https://astro.build),
hosted free on Netlify. Images are optimized automatically at build time (resized +
WebP/AVIF), so it stays well within Netlify's free bandwidth.

## Adding photos (the whole workflow)

1. Drop images straight into `src/photos/`:

   ```
   src/photos/
     2026-06-20-colosseum.jpg
     2026-06-15-lisbon-tram.jpg
     ...
   ```

2. Commit and push:

   ```
   git add . && git commit -m "Add photos" && git push
   ```

Netlify rebuilds and publishes in ~1 minute. That's it.

### Ordering — no manual reordering, ever

Photos sort **newest-first by filename**. Prefix each name with a date
(`2026-06-20-...`) and the newest always lands on top automatically. To force a
photo to the very top later, just give it a later date. That's the whole
"add a photo at the top" problem, gone.

Supported image types: `.jpg .jpeg .png .webp .avif`. Filenames are never shown
on the site, so name them however's convenient for sorting.

## Editing text / links

- **Name, Instagram, email, nav:** `src/layouts/Base.astro` (top of file)
- **About page:** `src/pages/about.astro`
- **Domain:** `astro.config.mjs`

## Running locally

```
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview    # preview the production build
```

## Deploying to Netlify (one-time)

1. Push this repo to GitHub.
2. On [netlify.com](https://netlify.com): **Add new site → Import from Git** → pick
   the repo. Build settings are auto-detected from `netlify.toml`
   (`npm run build` → `dist`).
3. Add your domain: **Domain settings → Add custom domain** → `lambertspace.com`,
   then repoint DNS at your registrar to Netlify (they show the exact records).

Free tier covers this site. Only recurring cost is the domain registration.
