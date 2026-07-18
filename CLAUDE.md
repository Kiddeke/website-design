# Project: Full Clear Website (fullclearsolutions.com)

## Brand
- **`/brand/BRAND.md` is the single source of truth** for colors, typography, logo, components, motion, and copy voice. Read it before styling anything.
- Display name is **"Full Clear"** — "Full Clear Solutions" (legal name) appears only in the footer copyright line, the privacy page, and JSON-LD `legalName`.
- CTAs site-wide: primary **"Book an assessment"**, secondary **"See capabilities"**. No "Get Started" / "Learn More".
- Services are always **Implement / Optimize / Rescue**, in that order.
- The site contains **no client stats or testimonials** — never add invented results or quotes. Illustrative visuals (e.g. the hero ledger) must be labeled as such ("not client data").

## Architecture
- Static HTML site -- no framework, no client-side routing
- Source files: `src/pages/` (pages) and `src/partials/` (reusable fragments)
- Built output: `public/` (this is what gets deployed)
- Partials use `<!-- include:filename.html -->` syntax, processed by `build-html.js`

## Build
- `npm run build` -- builds HTML (partial includes) then rebuilds CSS (postcss)
- `npm run build:html` -- HTML only
- `npm run build:css` -- CSS only
- **Always run `npm run build` after editing files in `src/`**
- No watch mode or dev server -- rebuild manually

## Stack
- **Tailwind CSS v4** (via `@tailwindcss/postcss`). No DaisyUI, no component libraries.
- Design tokens live in the `@theme` block in `src/style.css` (copied exactly from BRAND.md §2). **Never hardcode hex values, font families, or radii** — any value outside the tokens is a bug.
- Fonts: Spectral (headings), Public Sans (body), IBM Plex Mono (eyebrows/data) via Google Fonts with `display=swap` + preconnect (in `src/partials/head.html`).
- Signature component classes (defined in `src/style.css`): `.btn/.btn-primary/.btn-ghost`, `.eyebrow`, `.focus-frame`, `.ledger*`, `.resolve`, `.quote`, `.field-*`, `.article`, `.on-dark`.
- Motion: hero `.resolve` blur-in only, hover transitions <=150ms. Everything wrapped in `prefers-reduced-motion`. No scroll reveals, no counters.
- No JS framework -- vanilla JS in `public/script.js` (dashboard AI demo only)

## Key Files
- `brand/BRAND.md` -- brand system (tokens, voice, components); `brand/homepage-mockup.html` -- homepage reference
- `src/style.css` -- Tailwind v4 entry: `@theme` tokens + component layer (edit this for styling)
- `src/pages/*.html` -- page source files (edit these, not public/)
- `src/partials/navbar.html`, `head.html`, `footer.html` -- shared fragments
- `public/style.css` -- Tailwind build output (do not edit directly)
- `public/script.js` -- dashboard AI demo JS
- `public/images/mark.svg`, `mark-dark.svg` -- logo mark (light/dark); `og.png`, `apple-touch-icon.png` -- generated brand images
- `build-html.js` -- 28-line build script for partial includes

## External Services
- **Formspree** (`formspree.io/f/xgejqdlo`) -- contact form
- No analytics, no tracking, no cookies

## Git
- Default branch: `master`
- Remote: `https://github.com/Kiddeke/website-design.git`

## Conventions
- Tailwind utilities for layout/spacing; the component classes above for repeated brand patterns
- Sections: 80px vertical padding, max-width 1120px (`max-w-[1120px] px-6`), separated by 1px `border-line` rules — not background changes. Max one dark `bg-ink` band per page (`.on-dark`).
- Every section may open with a mono uppercase burgundy `.eyebrow` label
- Quality floor: responsive to 360px, visible keyboard focus (2px slate outline), WCAG AA contrast, semantic HTML
- Keep pages SEO-friendly: proper `<title>`, meta descriptions, OG tags, structured data (og:image is `images/og.png`)
