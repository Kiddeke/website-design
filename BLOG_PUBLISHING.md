# Blog publishing guide (used by the automated OneStream news publisher)

This site is built from `src/` into `public/` — **never edit `public/` by hand**. Publishing a
post means these steps, all of which must stay in sync:

1. **Create the post page** at `src/pages/blogpostN.html`, where N is the next unused number
   (check `src/pages/` and `blog-posts.json`). Copy the structure of the most recent
   `src/pages/blogpostN.html` exactly: `<!-- include:head.html -->`, canonical URL
   `https://www.fullclearsolutions.com/blogpostN`, the seo:meta block, JSON-LD Article with
   author Grant Deker and the correct `datePublished`, `<!-- include:navbar.html -->`, the
   `<article class="article">` body (a `.lead` opening paragraph, then `<h3>` sections, ending
   with an "Our Take" section), the "Book an assessment" CTA section, and
   `<!-- include:footer.html -->`. Source links go inline in the article text as
   `<a href="..." rel="noopener" target="_blank">` — every fact must trace to a linked source.
2. **Add an article entry at the TOP of the list** in `src/pages/blog.html` (inside
   `<div class="border-t border-line">`), copying the existing `<article>` block structure:
   date + category (use `Industry news` for news posts), linked title, one-sentence summary,
   and the `Read →` link, all pointing at `./blogpostN`.
3. **Prepend an entry to `blog-posts.json`** (title, date, page, category, summary, topics,
   sources). Validate: `python3 -c "import json; json.load(open('blog-posts.json'))"`.
4. **Build**: `npm install` (first time in a fresh environment) then `npm run build`. This
   regenerates `public/` from `src/`. Confirm `public/blogpostN.html` and `public/blog.html`
   were produced and contain the new content.
5. **Commit both `src/` and `public/` changes** and push to `master` (the deployed branch).

## Editorial rules for the automated publisher

- Only publish about **genuinely new OneStream news** (roughly the last 1–2 days): product
  releases, company announcements, acquisitions, major customer/government contract news,
  Splash and other events, analyst recognition (e.g. Gartner), significant partner news.
  "OneStream" means the CPM/EPM software company — ignore unrelated uses of the word.
- **Maximum 2 posts per run/day.** One strong post beats two thin ones. If there is no real
  news, publish nothing — do not pad, and do not write generic evergreen content.
- **De-duplicate first**: check every candidate story against the titles, topics, and source
  URLs already in `blog-posts.json`. A story already covered (even under a different
  headline) must be skipped.
- **Never fabricate.** Every fact must come from a real source found via web search and be
  linked inline in the article. If details can't be verified, leave them out.
- Tone: professional, concise, practical — written for finance/EPM leaders, matching the
  existing posts. 300–600 words. End with an "Our Take" `<h3>` section that connects the news
  to practical implications for OneStream customers. No prices, promises, or invented claims
  about Full Clear beyond what the site itself says.
