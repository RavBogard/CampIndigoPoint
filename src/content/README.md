# Content Operations

This directory is the source of truth for Camp Indigo Point content before the rebuilt site shell starts consuming these modules.

## How to update

- Update outbound handoff URLs in `actions.js`. Registration, donation, and staff application links should never live only inside JSX.
- Update the sitewide seasonal banner, dates, or primary contact details in `site.js`.
- Update page titles, descriptions, and canonical paths in `meta.js`.
- Update shared organization facts or contact roles in `brand.js`.
- Use `contentInventory.js` as the editorial checklist when migrating or revising page copy from the legacy WordPress site.

## File guide

- `home.js`, `about.js`, `registration.js`, `donate.js`, `staff.js`, and `faq.js` hold page/domain content in a consistent route-oriented shape.
- `site.js` holds the single-slot announcement model and shared site settings.
- `actions.js` centralizes external destinations for register, donate, and apply.
- `meta.js` gives later routes a reusable metadata source of truth.

## Working rules

- Keep the tone warm, affirming, and practical.
- Prefer light edits for clarity over full rewrites unless a fact is outdated.
- Preserve scholarship, community care, and donor handoff language when revising.
- Run `npm run lint` and `npm run build` after meaningful content-model changes.
