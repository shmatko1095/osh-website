# Home Page Rules

> Overrides `../MASTER.md` for `/` and `/en/`. Unmentioned rules inherit from
> the master design system.

## Purpose

The home page introduces OSH Floor before broad market availability. Its primary
job is comprehension and trust, not immediate checkout conversion.

Primary audience questions:

1. Why is a normal wall/floor sensor insufficient for my room?
2. How does the wireless reference sensor change control?
3. What is included and what already works?
4. What happens without internet or if a sensor is unavailable?
5. Is my installation and sensor supported?
6. Can I trust a 230 V product that is still in development?

## Primary action

- Current primary CTA: “See how it works” / “Дізнатися, як це працює”.
- Destination: the first solution explanation, not an external shop.
- Optional secondary CTA: “Check compatibility” only when the compatibility
  list contains real tested devices.
- Keep “first batch in development” visible in the hero. Do not style it as an
  urgent promotional badge.
- Replace the CTA with a marketplace action only after a real public listing is
  available; never render a disabled “Buy” button.

## Recommended narrative

### 1. Header

- Brand, concise anchors, language switcher.
- Prefer five anchors: How it works, Product, App, Trust, FAQ.
- Keep the development status in the hero rather than adding a promo bar.

### 2. Hero: outcome plus product

- Left: OSH Floor label, development status, outcome-led `h1`, one short lead,
  and one CTA.
- Right: approved thermostat-on-wall scene or clean product composition.
- Use the current cool paper background with a restrained warm light behind the
  device; no decorative dashboard widgets floating around it.
- Hero facts are limited to three: room reference sensor, local schedules, and
  floor NTC limit. Treat them as supporting proof, not separate cards competing
  with the CTA.

### 3. Benefits at a glance

- Add a centered introduction followed by 3-6 outcomes in a quiet icon grid.
- Preferred outcomes: correct-room temperature, local schedules, floor limit,
  wall and app control, explainable history, supported sensors.
- This is the scan-friendly equivalent of tado's six-benefit section.

### 4. Problem scenario

- Show the hallway thermostat and bathroom sensor as a spatial story.
- Lead with the mismatch between where the wall unit is installed and where
  comfort is expected.
- Keep floor sensing and smart-home complexity as supporting points.

### 5. Three-step solution

- Pair a supported sensor → choose the reference room → set mode or schedule.
- Use a simple diagram or product/app sequence. Do not require animation to
  understand the workflow.

### 6. Signature differentiation panel

- Use a rounded `--osh-dark` panel with a product close-up or local-control
  diagram.
- Suggested heading: “Heating stays local. Measurement moves to the right room.”
- Explain the two differentiators: direct supported sensor pairing and local
  heating logic. State network-dependent features separately.
- Keep this panel concise; move implementation detail into the offline section
  and FAQ.

### 7. Product capabilities

- Show app dashboard, temperature history, and wall UI as an image-led grid or
  rail.
- At three items, use a grid on desktop and native horizontal scroll on mobile.
- Captions explain the outcome, not the screenshot contents pixel by pixel.
- Label planned screens/features honestly until production behaviour is final.

### 8. Setup and installation

- Present four practical steps: check wiring/frame → install safely → pair room
  sensor → choose control mode.
- Do not copy tado's “under an hour” claim. OSH installation guidance must defer
  to an electrician where required and reflect Ukrainian electrical practice.
- Place compatibility and documentation links close to this section once real.

### 9. Starter Kit

- Use one strong kit composition and a short included-items list.
- Separate included hardware from supported optional hardware.
- Avoid price, stock, shipping, and warranty detail until those values are real.

### 10. Offline and network boundaries

- Use a direct two-column comparison: works locally / needs network.
- On mobile, show local behaviour first.
- Make this a trust section, not a generic cloud illustration.

### 11. Compatibility

- Explain that support is model-specific.
- Show the compatibility-level taxonomy only if each level has a definition.
- Future rows require model, firmware, reporting interval, battery reporting,
  test date, and known limitations.

### 12. Safety and evidence

- Use real bench, load, terminal, enclosure-temperature, and installation media.
- Pair each visual with what was tested, under what conditions, and what remains
  unverified.
- No certification or load claim appears before supporting documentation exists.

### 13. FAQ, final status, footer

- FAQ resolves compatibility, installation, offline behaviour, sensor loss,
  product status, and app/cloud boundaries.
- End with a calm status/update action, not urgency. If no subscription or
  contact workflow exists, repeat “Learn more” anchors rather than inventing one.
- Footer includes documentation/support destinations only when public.

## Current component mapping

| Narrative role | Existing component | Direction |
|---|---|---|
| Hero | `HeroSection.astro` | Keep split layout; simplify fact-card treatment |
| Problem | `ScenarioSection.astro` | Keep and strengthen spatial media |
| Workflow | `SolutionSection.astro` | Keep three numbered steps |
| Starter Kit | `ProductSection.astro` | Move after capability/setup story |
| Capabilities | `AppSection.astro` | Use image-led grid/rail rules |
| Local/cloud | `OfflineSection.astro` | Keep explicit comparison |
| Sensor support | `CompatibilitySection.astro` | Add evidence-rich list later |
| Safety proof | `TrustSection.astro` | Replace placeholders with test evidence |
| Objections | `FaqSection.astro` | Keep semantic disclosure |

New design roles that are not yet separate components: benefits overview,
signature differentiation panel, and setup/installation sequence. They may reuse
existing typed content patterns, but should not be faked by duplicating claims.

## Responsive rules

- Mobile DOM order follows the narrative above; media follows its related copy.
- Hero CTA may become full width at 375px, but status and facts must wrap rather
  than shrink.
- Benefit grid: 1 column at 375px, 2 at 768px, 3 at 1024px.
- Signature panel: copy first, product/diagram second on mobile; 5/7 split on
  desktop.
- Never use fixed card heights for localized copy.
- Mobile feature rails expose the next card edge and retain keyboard-accessible
  controls; the page itself must not overflow horizontally.

## Copy rules

- Default market language is Ukrainian; English is a complete equivalent, not a
  source of untranslated UI labels.
- Prefer concrete phrases: “temperature in the bathroom”, “stored on the
  thermostat”, “supported sensor model”.
- Avoid vague phrases: “AI-powered”, “revolutionary”, “works with everything”,
  “complete offline control”, and “save up to X%” without evidence.
- Keep hardware terms consistent across hero, diagrams, FAQ, and documentation:
  OSH Floor, room reference sensor, floor NTC, supported Zigbee sensor, local
  schedule, network-dependent feature.

