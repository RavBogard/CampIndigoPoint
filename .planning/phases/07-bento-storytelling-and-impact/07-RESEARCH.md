# Phase 7 Research: Bento Storytelling & Impact

**Phase:** 7 - Bento Storytelling & Impact
**Date:** 2026-03-12
**Status:** Ready for planning

## Objective

Elevate the visual storytelling of the site by redesigning core pages with Bento Box grids, weaving media quotes directly into the layout, and creating a data-driven Donor Impact Dashboard.

Satisfies: `STORY-01`, `STORY-02`, `IMP-01`

## Key Conclusion

The shift from standard flex/grid stacks to "Bento" grids requires a careful balance of Tailwind's CSS Grid capabilities. The goal is an asymmetrical, "puzzle-piece" aesthetic on desktop that collapses logically on mobile. The Donor Dashboard must look data-driven but remain technically static, relying on hardcoded arrays in the content files.

## Architecture Patterns

### 1. Bento Grid Implementation
- Use a 12-column or 4-column base grid in Tailwind (`grid-cols-4 lg:grid-cols-12`).
- Content blocks (text, quotes, images) will be assigned varying span widths and heights (`col-span-2`, `lg:col-span-8`, `row-span-2`).
- We will extract 4-5 powerful quotes (Washington Post, JTA, campers) and place them in the `src/content/` files as structured data.

### 2. Homepage Gateway Rewrite
- The current copy ("Find the next right page for your journey") is too utilitarian.
- We will replace it with a more emotional prompt, aligning with the "World in Color" or "Sanctuary" theme.

### 3. Impact Dashboard
- Create a `metrics` array in `src/content/donate.js` containing `{ label, value, icon }`.
- Render these as a prominent row of distinct, highly visual cards (large numbers, accent colors) on `DonateRoute.jsx`.
- Use `lucide-react` for iconography.

## Validation Architecture

- **Automated:** Vitest to ensure all data arrays (`quotes`, `metrics`) render the correct number of DOM elements.
- **Manual:** Check the Bento grids across mobile, tablet, and desktop breakpoints. The grids must not break or leave gaping white spaces at unexpected viewport widths.

## Recommended Plan Shape

1. **Content & Quotes:** Extract quotes, define `metrics`, and rewrite the homepage gateway in the `src/content/` layer.
2. **Bento Layouts:** Refactor `HomeRoute.jsx` and `AboutRoute.jsx` into complex, responsive Tailwind grids.
3. **Impact Dashboard:** Build and integrate the metrics dashboard into `DonateRoute.jsx`.