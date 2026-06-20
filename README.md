# OSH Website

Release-oriented bilingual product site for OSH Floor, built with Astro,
Tailwind CSS and typed content.

## Routes

| Ukrainian | English |
|---|---|
| `/` | `/en/` |
| `/compatibility/` | `/en/compatibility/` |
| `/docs/` | `/en/docs/` |
| `/support/` | `/en/support/` |
| `/contact/` | `/en/contact/` |

## Commands

```bash
npm install
npm run dev
npm run check
npm run build
npm run check:links
npm run test:e2e
npm run release:status
npm run verify
```

`npm run release:check` is intentionally strict: it exits with an error while
any required media slot is still a placeholder.

## Content and assets

- Product facts: `src/content/product-facts.ts`
- URL, contacts and locale routing: `src/content/site-config.ts`
- UA/EN copy: `src/content/uk.ts` and `src/content/en.ts`
- Exhaustive media registry: `src/content/media.ts`
- Approved production media: `src/assets/site/`
- Source-only drafts: `design-sources/` (never import these directly)

Changing price, current, warranty, certification status or sensor compatibility
must only require updating `product-facts.ts`.

## Deployment

The production site is `https://oshhome.com`. GitHub Actions checks types,
production build, internal links and Playwright E2E on every push. GitHub Pages
deployment runs only when `release:status` reports that every required media
slot has a final image or video. `public/CNAME` preserves the custom domain.
