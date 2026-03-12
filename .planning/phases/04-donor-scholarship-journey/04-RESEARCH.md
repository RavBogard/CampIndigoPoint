# Phase 4 Research: Donor Scholarship Journey

**Phase:** 4 - Donor Scholarship Journey
**Date:** 2026-03-12
**Status:** Ready for planning

## Objective

Build a donor path that explains the life-saving impact of Camp Indigo Point scholarships, frames the camp as an intergenerational queer community, and provides clear, trustworthy pathways for individual donors, faith communities, and major foundations before handing them off to the Ashrei Foundation donation platform.

Satisfies: `DON-01`, `DON-02`, `DON-03`

## Key Conclusion

The Donor page must shift from a generic "support our nonprofit" tone to an urgent, emotionally resonant "lifeline" narrative. We are not just funding a camp; we are funding a sanctuary where kids go from "living in black and white" to "living in color." The architecture will rely on the existing `DonateRoute.jsx` and `donate.js`, but the content and layout will be heavily overhauled to reflect this narrative, impact tiers, and specific calls to action for different donor types.

## Current Starting Point

- `src/content/donate.js` exists but uses generic language.
- `src/routes/DonateRoute.jsx` exists but uses a basic, unstyled layout.
- The global visual language ("Soul & Story") established in Phase 3 (Teal/Orange palette, Wavy/Affirming cards) is ready to be applied here.
- The `actionLinks.donate` is correctly configured to point to DonorPerfect.

## Architecture Patterns

### 1. Narrative-First Content Model
We will update `donate.js` to include specific narrative sections:
- **The Lifeline:** "Saving lives with marshmallows and campfires."
- **The Transformation:** "Black and white to color."
- **The Ancestors:** Intergenerational community and representation.
- **Impact Tiers:** Concrete examples of what money buys.
- **Partners in Joy:** Specific calls for Faith Communities ($1,800) and Major Donors/Foundations.
- **The Ashrei Handoff:** Clear explanation of fiscal sponsorship.

### 2. Layout & Visual Strategy
- Use `PageFrame` with the `media` prop for a powerful hero image showing staff and campers (The Ancestors).
- Use `content-panel--wavy` for the narrative sections to keep the "Adventure" vibe.
- Use `content-card--affirming` for the Impact Tiers and the Ashrei Foundation explanation to signal trust and care.

### 3. Media Needs
- Need authentic photos of staff and campers interacting. We will use existing high-quality assets or fetch new ones from social media/live site if needed during implementation.

## Validation Architecture

- **Automated:** Content assertions in Vitest to ensure the Ashrei Foundation and impact tiers render correctly.
- **Manual:** Verify the emotional tone, the flow from story to CTA, and the clarity of the external handoff.

## Recommended Plan Shape

1. **Content Narrative:** Rewrite `donate.js` with the life-saving narrative, impact tiers, and organizational callouts.
2. **Route Composition:** Update `DonateRoute.jsx` with the new narrative structure, authentic media, and campy styling.
3. **Validation:** Ensure the donor journey is compelling, trustworthy, and accessible.