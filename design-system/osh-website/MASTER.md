# OSH Website Design System

> Global source of truth for OSH marketing pages. Before building a page, read
> `pages/<page-name>.md`; page rules override this file where they differ.

**Project:** OSH Website  
**Stack:** Astro 6, Tailwind CSS 3, TypeScript  
**Product:** OSH Floor smart thermostat and its local-first ecosystem  
**Direction:** warm, precise, trustworthy product editorial  
**Reference:** [tado Smart Thermostats](https://www.tado.com/en/products/smart-thermostats), analysed 2026-06-20

## 1. Design intent

OSH should look like a credible consumer climate product, not a generic SaaS
dashboard and not a speculative crowdfunding page.

The interface must communicate, in this order:

1. the comfort problem OSH solves;
2. the physical product and the room-sensor relationship;
3. how simple the core workflow is;
4. what works locally and what needs the network;
5. compatibility, electrical safety, and product status;
6. a truthful next action.

Use tado as a reference for editorial rhythm, generous media, outcome-led copy,
and alternating light/dark sections. Do not copy its assets, wording, exact
layouts, brand orange, product renders, or interaction choreography.

## 2. Core principles

### Outcome before mechanism

- Start sections with the user outcome: comfort in the correct room, local
  schedules, floor protection, or understandable energy use.
- Explain Zigbee, NTC, relays, firmware, and cloud boundaries only after the
  benefit is clear.
- Use one claim per section. Supporting details belong in cards, captions, or
  FAQ answers.

### Product before abstraction

- Prefer real device photography, app captures, installation diagrams, and
  test evidence over decorative gradients or generic smart-home imagery.
- Every major product claim should have a nearby visual that demonstrates it.
- Treat placeholders as temporary production notes, never as final decoration.

### Trust before urgency

- Keep development status visible and specific.
- Never invent availability, certifications, compatibility, energy savings,
  customer counts, testimonials, ratings, or test results.
- Distinguish implemented, planned, tested, and marketplace-available features.
- Do not use scarcity, countdowns, fake stock, or unsupported superlatives.

### Local-first clarity

- Explicitly separate local heating behaviour from cloud-dependent behaviour.
- Never imply that the mobile app, remote access, online history, or OTA works
  without a network.
- Describe supported Zigbee sensors rather than promising universal Zigbee
  compatibility.

## 3. Visual foundation

### Color tokens

| Token | Value | Use |
|---|---:|---|
| `--osh-ink` | `#0F172A` | Primary text and light-surface icons |
| `--osh-muted` | `#475569` | Body text and secondary metadata |
| `--osh-paper` | `#F8FBFF` | Cool page background |
| `--osh-surface` | `#FFFFFF` | Cards and content surfaces |
| `--osh-line` | `#E2E8F0` | Neutral borders and dividers |
| `--osh-trust` | `#0369A1` | Accessible links, labels, focus-adjacent UI |
| `--osh-trust-bright` | `#0EA5E9` | Large decorative accents only |
| `--osh-trust-soft` | `#E0F2FE` | Blue-tinted panels and icon fields |
| `--osh-heat` | `#F97316` | Primary CTA fill and heating accent |
| `--osh-heat-hover` | `#EA580C` | CTA hover fill |
| `--osh-dark` | `#12111D` | Signature proof/differentiation sections |
| `--osh-dark-muted` | `#CBD5E1` | Secondary text on dark surfaces |
| `--osh-success` | `#15803D` | Verified positive status only |
| `--osh-warning` | `#B45309` | Development or limitation status |

Rules:

- The default page is light. Dark is a deliberate chapter, not the global mode.
- Use orange for one primary action or heating signal in a viewport, not for
  large backgrounds or body text.
- Orange buttons use `--osh-ink` text. Do not use white text on `#F97316`.
- Blue text on light backgrounds uses `--osh-trust`, not the brighter blue.
- Body text must meet WCAG AA contrast; controls and focus indicators must be
  perceivable without relying on color alone.
- Do not introduce feature-specific rainbow colors. Use imagery for variety and
  preserve OSH brand colors for navigation and meaning.

### Typography

- Headings: `Rubik`, system-ui, sans-serif.
- Body and controls: `Nunito Sans`, system-ui, sans-serif.
- Use sentence case. Avoid all-caps headings; reserve uppercase for short
  eyebrow labels of at most three words.
- Avoid mixing weights inside a sentence unless it communicates data hierarchy.

| Role | Desktop | Mobile | Weight | Line height |
|---|---:|---:|---:|---:|
| Hero | `clamp(2.75rem, 5vw, 4.5rem)` | fluid | 700 | 1.02-1.08 |
| H2 | `clamp(2rem, 3.4vw, 3rem)` | fluid | 700 | 1.10-1.18 |
| H3 | `1.25-1.5rem` | `1.125-1.25rem` | 700 | 1.25 |
| Lead | `1.125-1.25rem` | `1.0625rem` | 400-500 | 1.55 |
| Body | `1rem` | `1rem` | 400-500 | 1.6 |
| Fine print | `0.875rem` | `0.875rem` | 500 | 1.5 |

- Keep body copy to 55-72 characters per line.
- Keep hero copy to roughly 14 words and no more than three lines on desktop.
- Use one `h1` per page and sequential heading levels after it.
- Ukrainian and English layouts must tolerate 30% text expansion without
  clipping, fixed heights, or smaller type.

### Layout and spacing

- Canonical content width: `max-w-7xl` / 1280px.
- Reading width: 640-760px; use `max-w-3xl` for section introductions.
- Gutters: 16px at 375px, 24px from 640px, 32px from 1024px.
- Section spacing: 64px mobile, 80px tablet, 96px desktop.
- Use a 12-column desktop grid conceptually; common content splits are 5/7 or
  6/6. Collapse to one column below 1024px.
- Alternate text/media alignment only when it improves the narrative. Do not
  zig-zag every section mechanically.
- Preserve a stable vertical rhythm: eyebrow → 12px → heading → 16-24px → lead
  → 32-48px → content.

### Shape, borders, and depth

- Buttons: pill radius (`999px`) for primary marketing actions.
- Small controls, chips, and inputs: 10-12px radius.
- Standard cards: 16px radius.
- Feature media and signature panels: 24-32px radius.
- Use 1px neutral borders for white cards on light backgrounds.
- Shadows are subtle and reserved for floating controls, hero product media,
  menus, and modal layers. Section cards should rely on spacing and borders.
- Never combine a strong shadow, thick border, gradient, and glow on one object.

## 4. Components

### Header

- Sticky, compact, and visually quieter than the hero.
- Show OSH brand, 4-6 top-level anchors, language control, and at most one CTA.
- On mobile, use an explicit menu button with an accessible name and state.
- Account for sticky-header height on anchor navigation with `scroll-margin-top`.
- Do not add a promotional announcement bar unless the message is real,
  temporary, and more important than the product status in the hero.

### Buttons and links

- Primary CTA: orange fill, dark text, 44px minimum height, 16-24px horizontal
  padding, pill shape.
- Secondary CTA: transparent or white surface, 1px dark border, dark text.
- Text link: accessible blue or inherited dark text with a directional icon.
- Use verb-led labels that describe the destination: “See how it works”,
  “Check compatibility”, “View test details”.
- Hover changes color, border, or shadow without moving surrounding layout.
- Transitions last 150-250ms. Keep visible `:focus-visible` treatment.
- External links and unavailable actions must be clearly identified.

### Cards

- A card is interactive only when the entire card has a destination or action.
- Non-interactive information cards do not get pointer cursors or hover lift.
- Feature cards contain one concept: icon/media, short title, and 1-3 lines of
  explanation.
- Use Lucide icons with consistent 24px viewboxes and 2-2.25px strokes.
- Never use emoji as interface icons.

### Media

- Hero media must show the actual product or an honest approved render.
- Use Astro `Image`/`Picture` for local images and provide width/height or a
  stable aspect-ratio container to avoid layout shift.
- Hero media loads eagerly; below-fold media loads lazily.
- Use `object-cover` for lifestyle scenes and `object-contain` for product or
  kit compositions where cropping would hide hardware.
- Videos are muted and `playsinline`; controls remain available unless the clip
  is purely decorative. Never autoplay audio.
- Every informative image has meaningful localized alt text. Decorative images
  use empty alt text.

### Benefit grid

- Use three columns on desktop and one or two columns below 768px.
- Limit the first benefits overview to 3-6 outcomes.
- Keep icons visually secondary to headings. The grid should scan in under ten
  seconds.
- Avoid repeating the same claim in the hero, benefit grid, and feature copy.

### Signature dark panel

- Use one dark panel near the first third of the page to explain why OSH differs.
- Pair concise copy with a strong product close-up, local/cloud diagram, or room
  sensor relationship.
- Dark panels must retain 24px minimum mobile padding and `#CBD5E1` or lighter
  body text. Orange remains a small action/status accent.
- Do not turn the remainder of the page dark; return to a light chapter after it.

### Feature rail

- Desktop may show 3 cards plus a partial next card to signal horizontal content.
- Mobile uses native horizontal scrolling with `scroll-snap-type`; do not hijack
  vertical scrolling.
- Provide visible previous/next buttons when overflow is not obvious.
- Controls need accessible names and disabled states. No autoplay.
- If there are three or fewer items, use a normal grid instead of a carousel.

### Process steps

- Use 3-5 numbered steps with short verbs and realistic effort.
- Never claim installation time unless validated for the stated installation
  type and market.
- Each step must remain understandable without animation.

### FAQ

- Use native `details/summary` or equally semantic disclosure behaviour.
- Keep the question visible, the entire summary row clickable, and state clear.
- Answers should resolve purchase, compatibility, installation, offline, safety,
  and product-status objections before repeating marketing copy.

## 5. Interaction and motion

- Motion supports hierarchy; it is not the page identity.
- Use opacity/translate reveals only for 1-2 high-value elements per viewport.
- Do not copy tado's long pinned horizontal-scroll chapters or 400vh scroll
  tracks. They hide content, complicate keyboard use, and create poor reduced-
  motion fallbacks.
- Respect `prefers-reduced-motion` for smooth scrolling, transitions, carousels,
  and media.
- Never make essential information dependent on hover, drag, or animation.
- Preserve browser back behaviour and normal anchor URLs.

## 6. Responsive behaviour

- Test at 375, 768, 1024, and 1440px.
- At 375px: one content column, 16px gutters, full-width CTAs where useful, no
  horizontal page overflow, and at least 44x44px interactive targets.
- At 768px: benefit cards may become two columns; editorial media remains full
  width when a split would make it too small.
- At 1024px: enable split hero and 5/7 editorial layouts.
- At 1440px: keep the 1280px content cap; do not stretch text lines or product
  images indefinitely.
- Never reorder content in a way that changes meaning between visual and DOM
  order.

## 7. Accessibility and performance

- Include a skip link and a unique `main` landmark.
- Use one `h1`, sequential headings, semantic lists, and real buttons/links.
- Keyboard focus must remain visible on every interactive element.
- Color cannot be the only status indicator; pair it with text or an icon.
- Use localized labels for navigation, controls, video, and language switching.
- Target WCAG 2.2 AA contrast and interaction requirements.
- Keep marketing pages server-rendered and JavaScript-light. Hydrate only actual
  interaction; do not add a client framework for static sections.
- Optimize local images through `astro:assets`, use responsive sources, and
  prevent cumulative layout shift.
- The first viewport must not wait for carousel, analytics, or below-fold media
  JavaScript.

## 8. Forbidden patterns

- Generic dark-tech/OLED site theme.
- Glassmorphism, neon glow, or dashboard chrome on the marketing page.
- Unsupported numerical claims or certification badges.
- Fake social proof, testimonials, reviews, or partner logos.
- A `Shop`/`Buy` action before a real destination exists.
- Universal Zigbee compatibility language.
- Autoplaying carousels, scroll-jacking, or essential parallax.
- Decorative emoji, mixed icon sets, or randomly colored feature icons.
- Low-contrast muted text, white text on OSH orange, or focus removal.
- Fixed-height copy cards that break in Ukrainian.
- Hover scale that clips cards or causes layout movement.

## 9. Delivery checklist

- [ ] Page-specific rules were checked before implementation.
- [ ] One clear user outcome is visible above the fold.
- [ ] Product status and CTA destination are truthful.
- [ ] Every quantitative, safety, and compatibility claim has evidence.
- [ ] Local and network-dependent functions are separated.
- [ ] Heading order, landmarks, alt text, focus, and keyboard flow were tested.
- [ ] Contrast meets WCAG AA, including buttons and muted text.
- [ ] Reduced-motion mode preserves all content and controls.
- [ ] Responsive layouts work at 375, 768, 1024, and 1440px.
- [ ] No horizontal page overflow or sticky-header anchor overlap exists.
- [ ] Hero media is optimized and below-fold media is lazy-loaded.
- [ ] `npm run build` succeeds.

