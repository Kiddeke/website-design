# Full Clear — Brand System (Direction A)

Handoff doc for implementation. Feed this file to Claude Code as project context. It defines the visual identity, design tokens, logo assets, copy voice, and component patterns for fullclearsolutions.com.

## 1. Identity

- **Brand name (display):** Full Clear — never "Full Clear Solutions" in the logo, nav, or headlines. "Full Clear Solutions" is the legal name; use it only in the footer copyright and legal pages.
- **What we are:** Independent OneStream consultancy for enterprise finance teams. Implementation, optimization, and rescue.
- **Brand idea:** *Financials brought into focus.* Everything visual derives from this — the focus-bracket logo, the blur-to-sharp motion signature, the ledger-style content cards.
- **Personality:** Precise, candid, senior. A trusted advisor who speaks plainly, not an agency that sells. Premium but warm — editorial serif on paper, not corporate blue on white.

## 2. Design tokens

Use CSS custom properties (or the Tailwind v4 `@theme` block below). Never introduce colors outside this palette.

| Token | Hex | Use |
|---|---|---|
| `--color-paper` | `#FAF8F5` | Page background (warm off-white, never pure white pages) |
| `--color-card` | `#FFFFFF` | Card/surface background |
| `--color-ink` | `#1C171A` | Headings, primary text, dark band backgrounds |
| `--color-ink-soft` | `#4E4549` | Body text, secondary text |
| `--color-burgundy` | `#7A1F31` | Brand color: primary CTAs, links, accents, logo |
| `--color-burgundy-deep` | `#5C1624` | Hover state for burgundy |
| `--color-slate` | `#3E5C76` | Secondary accent, focus rings, charts |
| `--color-line` | `#E5DFD7` | Hairline rules, borders, dividers |
| `--color-success` | `#2E6B4F` | "On time" / positive statuses (bg tint `#E8F2EC`) |

On dark (`--color-ink`) backgrounds: text `#F1ECEE`, muted text `#C9C2C5`, burgundy lifts to `#8E2A3E` for hover.

### Tailwind v4 theme block

```css
@theme {
  --color-paper: #FAF8F5;
  --color-card: #FFFFFF;
  --color-ink: #1C171A;
  --color-ink-soft: #4E4549;
  --color-burgundy: #7A1F31;
  --color-burgundy-deep: #5C1624;
  --color-slate: #3E5C76;
  --color-line: #E5DFD7;
  --color-success: #2E6B4F;
  --font-display: "Spectral", Georgia, serif;
  --font-body: "Public Sans", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", monospace;
  --radius-sm: 4px;
  --radius-md: 6px;
}
```

## 3. Typography

Google Fonts import: `Spectral:wght@400;500;600`, `Public+Sans:wght@400;500;600`, `IBM+Plex+Mono:wght@400;500`.

| Role | Face | Rules |
|---|---|---|
| Display / headings | **Spectral** 500–600 | Letter-spacing −0.01 to −0.015em, line-height 1.1–1.2. Italic + burgundy for one emphasized phrase per hero (e.g., "*in full clarity.*") |
| Body | **Public Sans** 400–600 | 16–17px base, line-height 1.6, max width ~60ch |
| Labels / data / eyebrows | **IBM Plex Mono** 400–500 | 11–12px, uppercase, letter-spacing 0.08–0.16em. Used for eyebrows, table figures, captions, footer |

Type scale: hero `clamp(2.4rem, 4.6vw, 3.6rem)`; section h2 `clamp(1.7rem, 3vw, 2.3rem)`; card titles ~1.25rem Spectral 600.

Never use Spectral for body copy or Public Sans for headlines. All numbers/data use Plex Mono.

## 4. Logo

Mark = focus brackets (burgundy) framing three rising bars (two ink, tallest bar burgundy). Meaning: financials brought into focus. Lockup = mark + "Full Clear" in Spectral 600.

**Primary mark (light backgrounds):**

```svg
<svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 13 V8 a4 4 0 0 1 4-4 h5" stroke="#7A1F31" stroke-width="3" stroke-linecap="round"/>
  <path d="M36 27 v5 a4 4 0 0 1 -4 4 h-5" stroke="#7A1F31" stroke-width="3" stroke-linecap="round"/>
  <rect x="12" y="21" width="4.5" height="7" rx="1" fill="#1C171A"/>
  <rect x="18" y="16" width="4.5" height="12" rx="1" fill="#1C171A"/>
  <rect x="24" y="11" width="4.5" height="17" rx="1" fill="#7A1F31"/>
</svg>
```

**Dark-background variant:** bars `#EDE7E2` (keep tallest bar burgundy, lifted to `#A93A50` if contrast is poor), brackets `#A93A50`.

Rules: minimum 24px render size; clear space = height of one bar on all sides; never re-add the glasses; never stretch, recolor outside palette, or add effects. Favicon = mark only.

## 5. Signature elements

These make the site recognizably Full Clear. Use them; don't invent competing motifs.

1. **Focus brackets:** two corner brackets (top-left, bottom-right, 2.5px burgundy) framing the hero's featured card. Reusable as an image/testimonial frame elsewhere — max one framed element per screen.
2. **Resolve animation:** the hero card animates `filter: blur(7px) → blur(0)`, opacity 0.55 → 1, over 1.6s ease-out, once on load. Always wrap in `@media (prefers-reduced-motion: reduce)` to disable.
3. **Ledger cards:** content presented as close-checklist tables — Spectral title, hairline `--color-line` row rules, Plex Mono right-aligned figures, green "✓ Day N" statuses, mono caption bottom-right (e.g., "close cycle: 8 days → 3 days").

Motion elsewhere: minimal. Hover transitions 150ms ease on background/color only. No scroll-jacking, no parallax.

## 6. Components

- **Buttons:** radius 4px, 12px/22px padding, Public Sans 600. Primary: burgundy bg, white text, hover burgundy-deep. Secondary: 1px ink border, transparent bg, hover inverts to ink bg / paper text. Focus-visible: 2px slate outline, 3px offset.
- **Nav:** sticky, paper at 92% opacity + backdrop blur, 1px line border-bottom, 68px tall. Lockup left; Services / Approach / Results / primary CTA right.
- **Sections:** 80px vertical padding, max-width 1120px, 24px side padding. Separate with 1px `--color-line` rules, not background color changes — except one dark ink band per page (testimonial/CTA) with a burgundy-left-border pull quote.
- **Service rows:** ruled list rows (not cards): Spectral name column, body description, mono uppercase link with → arrow. Grid `220px 1fr auto`, collapsing to stacked on mobile.
- **Eyebrows:** every section may open with a mono uppercase burgundy eyebrow label.
- **Footer:** small lockup + mono legal line: `© 2026 FULL CLEAR SOLUTIONS · INDEPENDENT ONESTREAM CONSULTANCY`.

Quality floor: responsive to 360px, visible keyboard focus everywhere, reduced motion respected, WCAG AA contrast (burgundy on paper passes for text ≥ 14px bold / 18px regular — use ink for long text).

## 7. Voice & copy

- Plain verbs, sentence case, no filler. "Book an assessment," not "Get Started" or "Learn More."
- Candid-advisor tone: "no discovery theater, no 40-slide deck." Confidence through specificity (close days, cycle times), never through superlatives ("world-class," "leading," "cutting-edge" are banned).
- Finance vocabulary, used correctly: close, consolidation, intercompany eliminations, FX translation, cube views, workflows, planning, reporting.
- The three services are always named **Implement / Optimize / Rescue**, in that order.
- One CTA verb site-wide: "Book an assessment." Secondary: "See capabilities."
- Placeholder stats and quotes in mockups (e.g., "8 days → 3 days") must be replaced with real client numbers before launch — never ship invented results.

## 8. Stack recommendation

- Tailwind CSS v4 with the `@theme` block above as the single source of truth. No DaisyUI — its themed components fight this identity.
- shadcn/ui only if interactive components (forms, dialogs) are needed; restyle with these tokens.
- Fonts via Google Fonts with `display=swap`; preconnect to fonts.googleapis.com.
- Reference implementation: see `homepage-mockup.html` for exact spacing, hero layout, and the resolve animation.
