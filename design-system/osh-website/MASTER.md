# OSH Website Design System

> Source of truth for all OSH marketing pages. Page-specific files in `pages/`
> override this document only where they explicitly differ.

**Stack:** Astro 6, Tailwind CSS 3, TypeScript
**Product:** OSH Floor smart thermostat
**Direction:** light, precise consumer-product editorial
**Structural reference:** [tado Smart Thermostats](https://www.tado.com/en/products/smart-thermostats), reviewed 2026-06-20

## 1. Product narrative

The site explains a finished informational product in this order:

1. outcome: correct temperature in the room that matters;
2. benefits: reference sensor, local schedules, NTC, wall/app control and history;
3. differentiation: hallway/bathroom scenario without a separate gateway;
4. interfaces and operating modes;
5. four-step setup;
6. Starter Kit, price and specifications;
7. installation and compatibility;
8. local/network boundaries, certification status and warranty;
9. FAQ and a clear path to documentation or contact.

Use tado for chapter rhythm, generous product media and progressive disclosure.
Do not reproduce its assets, yellow palette, wording, exact geometry or scroll
effects.

## 2. Design principles

- Lead with user outcomes; introduce Zigbee, NTC and cloud boundaries afterward.
- Prefer real product photos, app captures, installation diagrams and test
  evidence over decorative smart-home imagery.
- Keep the page mostly light and use one dark chapter for differentiation or
  trust.
- Publish centralized preliminary facts as product data, accompanied by the
  localized note that they may be updated.
- Separate functions that work locally from those that require network access.
- Describe sensor compatibility per model; never claim universal Zigbee support.
- Do not use urgency, fake inventory, unverifiable savings, testimonials or
  disabled purchase controls.

## 3. Tokens

| Token | Value | Use |
|---|---:|---|
| `dark` | `#12111D` | dark chapter, primary text on orange |
| `ink` | `#2C2E2E` | headings and body text |
| `muted` | `#5F6268` | secondary copy |
| `page` | `#F7F7F5` | page background |
| `surface` | `#FFFFFF` | content surfaces |
| `line` | `#E4E4DF` | borders and dividers |
| `heat` | `#F97316` | primary CTA and heating signal |
| `heat-hover` | `#EA580C` | CTA hover |
| `trust` | `#0369A1` | links and focus treatment |

Rules:

- Orange buttons use dark text. Orange is not body-copy color.
- Functional links and focus use `trust`; color is never the only status cue.
- Dark chapters use light text with at least WCAG AA contrast.
- Avoid rainbow feature colors, gradients, glows and heavy card shadows.

## 4. Typography

- One self-hosted variable family: Manrope with Latin and Cyrillic subsets.
- Sentence case for headings; uppercase only for short eyebrow labels.
- Hero: `clamp(2.75rem, 6vw, 5.75rem)`, weight 650-750, line-height 0.98-1.05.
- H2: `clamp(2rem, 4vw, 4rem)`, weight 650-750, line-height 1.05-1.12.
- H3: 1.125-1.5rem; body: 1rem; lead: 1.125-1.25rem.
- Body lines stay near 55-72 characters. One `h1` per page and sequential
  heading levels.
- UA and EN layouts must tolerate text expansion without fixed content heights.

## 5. Layout

- Content max-width: 1280px.
- Gutters: 16px mobile, 24px tablet, 32px desktop.
- Section spacing: 64px mobile, 80px tablet, 96px desktop.
- Common desktop split: 5/7 or 6/6; collapse below 1024px.
- Major media/panels: 24-32px radius. Buttons: pill. Small controls: 10-12px.
- Information is separated with whitespace and dividers before introducing a
  card. Cards are reserved for capabilities, specifications and discrete trust
  facts.

## 6. Components

### Header

- Brand plus no more than five directions, language switcher and mobile menu.
- Mobile menu exposes `aria-expanded`, closes on link and Escape, and returns
  focus to the trigger.
- Sticky header must not hide anchor destinations.

### Actions

- Primary: orange fill, dark text, at least 44px tall.
- Secondary: transparent/white with a dark border.
- Hover changes color or border without shifting layout; `:focus-visible` is
  always visible.

### Benefits and capabilities

- `BenefitList` is a quiet six-item editorial list, not six heavy cards.
- `CapabilityCard` is image-led. Desktop uses a grid; mobile uses native
  horizontal scrolling and CSS scroll snap.
- No autoplay or scroll-jacking.

### Setup, specifications and trust

- `SetupSteps` contains 3-5 numbered, independently understandable steps.
- `SpecificationGrid` renders values from `ProductFacts`; components never own
  prices, warranty duration, current limits or model statuses.
- `TrustPanel` presents local/network boundaries and compliance status with text
  labels, not color alone.

### FAQ

- Use native `details`/`summary`. The whole summary row is clickable and the
  answer remains available without JavaScript.

### Media

- All media resolves through the typed, exhaustive registry in
  `src/content/media.ts`.
- Local images use Astro `Picture`/`Image`, responsive widths and stable aspect
  ratios. Hero media is eager; below-fold media is lazy.
- Approved assets belong in `src/assets/site/`; source drafts in
  `design-sources/` are never imported directly.
- Informative media has localized alt text. Video never autoplays with sound.
- Placeholder media is acceptable in development but blocks deployment.

## 7. Responsive and accessibility

- Verify 375, 768, 1024 and 1440px in both locales.
- At 375px use one column, 16px gutters, 44px targets and no page overflow.
- At 768px editorial media may remain full-width; at 1024px enable split layouts.
- Keep DOM and visual narrative order consistent.
- Include a skip link, one main landmark, semantic lists/tables and visible
  keyboard focus.
- Respect `prefers-reduced-motion`; essential information cannot depend on
  hover, drag or animation.

## 8. Content, SEO and release

- UA is the default locale; EN is a complete equivalent.
- Never expose internal slot IDs, development badges or source filenames.
- Every page provides localized title/description, canonical and reciprocal
  hreflang. The site also includes Open Graph, Twitter, sitemap, robots and
  Organization/WebSite/Product JSON-LD.
- `ProductFacts` is the sole source for price, maximum current, warranty,
  certifications and supported sensor models.
- `release:check` fails while any registry entry has `kind: 'placeholder'`.
  Normal CI checks continue to run; GitHub Pages deploys only when this release
  gate passes.

## 9. Anti-patterns

- Generic SaaS hero, repeated card grids and every section inside a container.
- Long pinned horizontal tracks, scroll-jacking and autoplay carousels.
- Claims copied from competitors or unsupported certification/savings language.
- Duplicate facts in components or localized copy.
- Direct imports from `design-sources/` or arbitrary media paths.
