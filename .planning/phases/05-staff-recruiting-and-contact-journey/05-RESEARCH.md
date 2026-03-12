# Phase 5 Research: Staff Recruiting and Contact Journey

**Phase:** 5 - Staff Recruiting and Contact Journey
**Date:** 2026-03-12
**Status:** Ready for planning

## Objective

Build the staff recruitment experience to attract dedicated, resilient queer leaders by balancing the profound emotional impact of the work ("Ancestors") with the gritty reality of camp life. Refine the Contact page to explicitly route inquiries and add a new "In the Press" section to highlight national media coverage.

Satisfies: `STAF-01`, `STAF-02`, `STAF-03`, `TRST-02`, and new requirement for Press Coverage.

## Key Conclusion

The Staff page must move beyond a simple job listing and become a call to join a movement and a chosen family. It needs to sell the "Magic" (building the future) while being completely transparent about the "Mud" (yurt life, hard work). The Contact page must evolve from a generic directory into a guided routing experience, and we must integrate the significant national press coverage the camp has received to build further trust.

## Architecture Patterns

### 1. Staff Content Model (Magic & Mud)
- Update `src/content/staff.js` to include the "Ancestor" pitch and the reality of the work (sweat, love, mud).
- Simplify the roles section to focus on the collective "Staff Community" rather than siloed job descriptions.
- Emphasize the "Chosen Family" aspect of the staff culture.

### 2. Contact Routing Model
- Update `src/content/brand.js` (or create a dedicated `contact.js`) to support explicit routing based on intent.
- Example: "Registration/Affordability -> Dan", "Nursing/Accommodations -> Shira".

### 3. "In the Press" Integration
- Create a new data structure in `src/content/site.js` (or `brand.js`) for press links (Washington Post, NYT, GMA, JTA, TikToks).
- Build a new `PressSection` component to display these logos/links.
- Add this section to the `ContactRoute.jsx` (and potentially `HomeRoute.jsx` later) to leverage the credibility of national coverage.

### 4. Layout & Visual Strategy
- Use a "Behind the Scenes" visual vibe for the Staff page—slightly grittier, highly energetic.
- Use a single, powerful "Staff Community" hero image.

## Validation Architecture

- **Automated:** Content assertions in Vitest to ensure the new routing logic and press sections render.
- **Manual:** Verify the tone of the staff page strikes the right balance of inspiring and realistic.

## Recommended Plan Shape

1. **Staff Narrative:** Rewrite `staff.js` and update `StaffRoute.jsx` with the "Magic and Mud" narrative.
2. **Contact & Press:** Implement explicit contact routing and build the "In the Press" credibility section.
3. **Validation:** Final a11y, routing, and narrative checks.