# Home Page Rules

> Applies to `/` and `/en/`; all unmentioned rules inherit from `../MASTER.md`.

## Purpose

Present OSH Floor as a coherent, release-ready informational product. The page
must answer what the product solves, how reference-sensor control works, what is
included, how it is installed and what remains network-dependent.

## Required sequence

1. **Hero** — outcome-led `h1`, product media, `#benefits` primary CTA and
   `#setup` secondary CTA.
2. **Benefits** — six results in `BenefitList`, without heavy containers.
3. **Why OSH** — one dark hallway/bathroom chapter with multiple sensors and one
   reference sensor.
4. **Capabilities** — AMOLED, app, history and modes using `CapabilityCard`.
5. **Setup** — install, connect sensor, choose room, set mode.
6. **Starter Kit** — media, contents, formatted price/current/warranty from
   `ProductFacts`, plus preliminary-values note.
7. **Installation** — 55x55 frame, wall box, NTC and qualified mains work.
8. **Trust** — local/network comparison, testing, compliance statuses,
   warranty and Ukrainian support.
9. **FAQ and final CTA** — documentation and contact, then dark footer.

Do not add About, product comparison, Boiler or OpenTherm chapters.

## Component mapping

| Role | Component |
|---|---|
| Page frame | `SiteFrame.astro` |
| Benefits | `BenefitList.astro` |
| Capability rail/grid | `CapabilityCard.astro` |
| Setup | `SetupSteps.astro` |
| Product facts | `SpecificationGrid.astro` |
| Local/network and compliance | `TrustPanel.astro` |
| Questions | `FAQ.astro` |
| All image/video slots | `MediaSlot.astro` |

`FeatureGrid` and the old one-card-pattern section components are retired.

## Responsive rules

- Hero and major narrative sections become split layouts at 1024px.
- Capability cards form a native horizontal snap rail below desktop; expose the
  next card edge and keep the document itself overflow-free.
- Starter Kit and trust copy appear before their supporting media on mobile.
- CTAs may become full-width at 375px. Never use fixed content heights.

## Copy rules

- Lead with the room-comfort scenario, then explain the technology.
- Use consistent terms: OSH Floor, reference sensor, floor NTC, local schedule,
  supported Zigbee sensor, network-dependent feature.
- Price, 16 A, warranty, certifications and model statuses are publishable
  preliminary data. Do not hide them or duplicate them in localized copy.
- Avoid “concept”, “planned”, internal IDs, development labels, guaranteed
  savings and universal compatibility claims.
