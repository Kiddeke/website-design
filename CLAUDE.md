# Project: Full Clear Solutions Website

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
- **Tailwind CSS 3** + **DaisyUI 4** for styling
- Three themes: `autumn`, `nord`, `business` (set via `data-theme` on `<html>`)
- PostCSS + Autoprefixer for CSS processing
- No JS framework -- vanilla JS in `public/script.js`

## Key Files
- `src/pages/*.html` -- page source files (edit these, not public/)
- `src/partials/navbar.html`, `head.html`, `footer.html` -- shared fragments
- `public/styles.css` -- custom CSS (scroll animations, dashboard styles, layout)
- `public/script.js` -- all client JS (media query, scroll reveal, stat counters, dashboard AI demo)
- `public/style.css` -- Tailwind build output (do not edit directly)
- `build-html.js` -- 28-line build script for partial includes

## External Services
- **Formspree** (`formspree.io/f/xgejqdlo`) -- contact/newsletter forms
- No analytics, no tracking, no cookies

## Git
- Default branch: `master`
- Remote: `https://github.com/Kiddeke/website-design.git`

## Conventions
- Use DaisyUI component classes (`card`, `btn`, `hero`, `stats`, etc.) over custom CSS
- Use Tailwind utility classes for layout and spacing
- Add `reveal` class to sections that should fade in on scroll
- Stat counters use `<span class="counter" data-target="N">0</span>` for animated counting
- Keep pages SEO-friendly: proper `<title>`, meta descriptions, OG tags, structured data
