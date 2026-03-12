# Phase 9 Research: High-Impact Media & Language Integration

**Phase:** 9 - High-Impact Media & Language Integration
**Date:** 2026-03-12
**Status:** Ready for planning

## Objective

Perform a site-wide language audit and inject a significant volume of authentic photography to elevate the overall tone and visual impact, drawing inspiration from diverse national press coverage.

Satisfies: `MEDIA-01`, `LANG-01`

## Key Conclusion

The site's current copy is good, but it can be more inspiring by borrowing directly from the way journalists and campers talk about it. The photography needs to move beyond a single hero collage to show "pure unadulterated joy" across all pages, including physical space shots to ground the experience.

## Architecture Patterns

### 1. Language Audit Strategy
- Review `src/content/home.js`, `about.js`, `donate.js`, and `registration.js`.
- Cross-reference with phrasing from *JTA*, *Kveller*, and *Washington Post*.
- **Goal:** Replace utilitarian phrasing ("Here are the activities") with profound framing ("A daily rhythm of trading screens for sunsets").

### 2. Media Integration Strategy
- Create a new array in `src/content/about.js` called `campLifePhotos` to hold 4-6 new images showing specific activities and joy.
- Update `AboutRoute.jsx` to render an image grid or carousel.
- **Constraints:** Ensure the `alt` text for all new images is highly descriptive for accessibility. Never mention the host camp facility by name.

## Validation Architecture

- **Automated:** Content structure checks in Vitest to ensure new photo arrays exist.
- **Manual:** Read the site end-to-end to ensure the tone is consistently inspiring without sounding inauthentic. Verify all images load.

## Recommended Plan Shape

1. **Language Audit:** Rewrite the core content modules.
2. **Media Expansion:** Integrate new photo grids/assets into the routes.
3. **Validation:** Review for accessibility and tone.