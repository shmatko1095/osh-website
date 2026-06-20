# Reference Analysis: tado Smart Thermostats

**Source:** [tado Smart Thermostats](https://www.tado.com/en/products/smart-thermostats)  
**Reviewed:** 2026-06-20  
**Purpose:** Extract reusable UI/UX principles for OSH without reproducing tado's
brand or trade dress.

## Observed structure

1. Compact announcement and product navigation.
2. Split hero: direct energy-saving claim, explanatory copy, one orange pill
   CTA, and a clean multi-device composition.
3. Centered benefit introduction followed by a 3x2 icon grid.
4. Large rounded dark panel explaining why the product is different.
5. Image-led AI Assist feature carousel with a partial next card.
6. Dark “getting started” chapter with four numbered steps.
7. Individual-room-control feature story.
8. “Worth the upgrade” explanation.
9. Heating-system/use-case cards for boilers, underfloor heating, radiators, and
   heat pumps.
10. Energy-saving explanation with feature-specific claims.
11. FAQ and a dense dark footer.

## Visual language

- Mostly white and very light grey surfaces with near-black text.
- Warm orange is concentrated in CTAs and small device-state accents.
- Near-black `#12111D` creates high-contrast editorial chapters.
- Figtree is used for both headings and body copy; OSH retains its existing
  Rubik/Nunito Sans pairing rather than copying the typeface.
- Desktop content is capped near 1284px.
- Major panels use 24-32px radii; buttons are pill-shaped.
- Product and lifestyle media carries more visual weight than decorative UI.
- Icons are simple, monochrome, and secondary to benefit titles.

## What works

### Clear first-viewport hierarchy

The hero answers what the product is, why it matters, and what to do next without
forcing the user into technical detail.

### Benefits are scannable

The six-item grid translates product capabilities into user outcomes. It creates
a fast summary before the page enters deeper feature explanations.

### Strong editorial pacing

Light overview sections alternate with dark, image-heavy chapters. The shift in
surface color signals a new level of detail and prevents a long product page from
feeling like one undifferentiated grid.

### Product taxonomy follows user context

Compatibility is framed by heating system rather than internal model numbers.
This helps visitors self-select before they understand the catalogue.

### Repeated CTA is contextual

Calls to action appear after the visitor understands the related value: product
overview, AI features, setup, and compatibility. The CTA label changes with the
destination instead of repeating “Buy now” everywhere.

## What OSH should not copy

### Scroll-jacked horizontal chapters

The reference uses long pinned/horizontal scroll treatments. They create large
scroll tracks, weak keyboard behaviour, and difficult reduced-motion fallbacks.
OSH should use normal document flow and native overflow rails.

### Claim density

tado can support strong savings percentages and mature feature claims with an
established product. OSH is in development and must not borrow the tone or
numbers without its own evidence.

### Commerce-first navigation

The prominent Shop action is appropriate for an available catalogue. OSH should
not add a shop CTA until a real marketplace destination and fulfilment path
exist.

### Subscription feature framing

AI Assist introduces a free/paid capability boundary that requires careful
explanation. OSH should avoid similar premium framing unless product scope,
pricing, and terms are finalized.

### Heading semantics

The captured page contains more than one `h1` and some process steps represented
as `h2` while neighbouring steps use other levels. OSH must preserve semantic
heading order independently of visual styling.

## Adaptation decisions for OSH

| tado pattern | OSH adaptation |
|---|---|
| Energy-saving hero claim | Correct-room comfort claim with visible development status |
| Six-benefit icon grid | 3-6 verified OSH outcomes |
| Dark “why tado” panel | Local-first and reference-sensor differentiation panel |
| AI feature carousel | App/history/wall UI grid or native mobile rail |
| Four-step setup chapter | Check, install, pair, choose mode; no time promise |
| Heating-system taxonomy | Installation/frame plus tested sensor compatibility |
| Savings proof | Local/offline, electrical, and test evidence |
| Shop CTA | In-page learn-more CTA until marketplace availability |
| Dense global footer | Compact bilingual product/support footer |

## Resulting direction

The transferable idea is product editorial storytelling: show a tangible device,
state a human outcome, summarize benefits, then progressively answer setup,
compatibility, and trust objections. OSH should combine that rhythm with its own
light blue trust palette, orange heating accent, local-first architecture, and
evidence-led launch status.

