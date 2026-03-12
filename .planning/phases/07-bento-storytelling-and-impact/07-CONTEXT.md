# Phase 7: Bento Storytelling & Impact - Context

**Gathered:** 2026-03-12
**Status:** Ready for planning

<domain>
## Phase Boundary

Redesign core pages (Home, About) using asymmetrical Bento Box grids to weave extracted media quotes and testimonials directly into the visual layout. Build a visual, data-driven "Impact Dashboard" on the Donate page using static metrics.

</domain>

<decisions>
## Implementation Decisions

### Bento Box Storytelling
- Use Tailwind CSS Grid utilities (`grid-cols-*`, `col-span-*`, `row-span-*`) to create visually engaging, asymmetrical layouts.
- Integrate the powerful quotes extracted during milestone research (e.g., "A space to not feel like an outsider", "Wholeheartedly yourself") directly into the grid as prominent visual blocks.
- **Homepage Copy:** Rewrite the "Find the next right page for your journey" gateway copy, as requested by the user, making it more evocative and aligned with the "World in Color" narrative.
- Ensure the Bento grids gracefully degrade to single columns on mobile viewports to prevent "endless scroll fatigue."

### Donor Impact Dashboard
- Build a visually striking section on the Donate page to highlight camp metrics.
- The metrics to highlight: "140+ Campers," "Youth from 30 States," "50+ Queer Staff," "4 Summers of Operation," and "1 Promise: No One Turned Away."
- Use large typography and icons (`lucide-react`) styled with the camp's Teal and Orange palette.
- **Constraint:** Use static data defined in `src/content/donate.js`. Do not over-engineer a backend or API connection for this.

</decisions>

<specifics>
## Specific Ideas

- The Bento layout should mix different media types: a photo block next to a solid color block containing a large text quote, next to a standard text block.
- We will pull existing assets from the `.planning/research` findings, current project copy, and the `hero-collage.jpg` to build these grids.

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/content/site.js` and `src/content/home.js` will need arrays added for `pressQuotes` or `testimonials`.
- `src/content/donate.js` needs a `metrics` array added.
- `src/routes/HomeRoute.jsx` and `src/routes/AboutRoute.jsx` will be heavily refactored to implement the grid layout.
- `src/routes/DonateRoute.jsx` will receive the new Impact Dashboard component.

### Established Patterns
- We will rely completely on the Tailwind CSS setup from Phase 6. Custom CSS classes should be avoided.
- Components will continue to use the `PageFrame` pattern.

</code_context>

<deferred>
## Deferred Ideas

- None.

</deferred>

---

*Phase: 07-bento-storytelling-and-impact*
*Context gathered: 2026-03-12*