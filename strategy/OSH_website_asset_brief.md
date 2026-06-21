# OSH Website Release Media Brief

The public UI never exposes these registry IDs. They are stable engineering
keys used to replace media without changing page components or localized copy.

| ID | Site use | Required final asset |
|---|---|---|
| PH-01 | Hero | Clean OSH Floor product-on-wall scene. Current draft is registered as a real image and should still be reviewed before release. |
| PH-03 | AMOLED | Device close-up with current temperature, target and reference-sensor state. |
| PH-04 | App | Phone mockup with the production dashboard. |
| PH-05 | History | Production temperature/history graph. |
| PH-06 | Wall controls | Product UI photo or short user-controlled video. |
| PH-07 | Setup | Four-step installation, sensor, room and mode visual. |
| PH-08 | Starter Kit | Thermostat, floor NTC, wireless sensor and documentation. |
| PH-09 | Local/network | Diagram of local heating logic and network-dependent services. |
| PH-11 | Installation | 55x55 frame, wall box depth, terminals and NTC connection. |

## Source material

- Device drafts: `design-sources/device/`
- App screenshot drafts: `design-sources/oshmobile_screenshots/`
- Icon experiments: `design-sources/icon.png`, `design-sources/fire.png`

## Registration rules

- Final images belong in `src/assets/site/`; videos and downloadable documents
  belong in `public/media/`.
- Register every final asset in `src/content/media.ts` as `image` or `video`.
- Keep stable aspect ratios and localized alt text supplied by page content.
- Do not overwrite source material; create versioned final filenames.
- `npm run release:check` must pass before GitHub Pages can deploy. It verifies
  that no registry entry remains `kind: 'placeholder'`.
