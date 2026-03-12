# Phase 11: Conversion UX Optimization - Context

**Gathered:** 2026-03-12
**Status:** Ready for planning

<domain>
## Phase Boundary

Implement targeted User Experience (UX) improvements designed to increase conversion rates. This includes a persistent Sticky Action Bar for long-scroll pages and an interactive "Day in the Life" timeline component on the About page.

</domain>

<decisions>
## Implementation Decisions

### Sticky Action Bar (CONV-01)
- **Functionality:** A subtle bar that appears fixed to the bottom (or top) of the viewport *only after* the user has scrolled past the primary hero section/CTA.
- **Context-Aware:** The button displayed in the bar should adapt to the route. If they are on the Families/About journey, it should show "Register". If on the Donor journey, it should show "Donate".
- **Implementation:** Build a new React component (`StickyActionBar.jsx`) using `framer-motion` for smooth slide-in/slide-out animations based on scroll position (`useScroll`, `useMotionValueEvent`).

### "Day in the Life" Timeline (CONV-02)
- **Functionality:** Replace the static bulleted list in the "Camp Life" section with a visual timeline that users can click or scroll through to see the progression of a day.
- **Content:** Break the day into logical segments (e.g., Morning Polar Bear, Breakfast, Activity Block 1, Rest Hour, Evening Program) with brief descriptions.
- **Implementation:** Build a `Timeline.jsx` component. Use Tailwind for the structural line/nodes and `framer-motion` to animate elements into view as they enter the viewport.

</decisions>

<specifics>
## Specific Ideas

- The Sticky Action Bar must not obscure the mobile navigation menu or the footer links. Careful z-index management (`z-40`) is required.
- The Timeline should use the brand colors (Teal and Orange dots) to guide the user's eye down the page.

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- The `actionLinks` configuration in `src/content/actions.js` will provide the URLs and labels for the Sticky Action Bar.
- `src/content/about.js` will need its `campLife.bullets` refactored into a structured array of `{ time, title, description }` objects for the timeline.

### Established Patterns
- `framer-motion` is already in use and is the preferred method for scroll-based animations.

</code_context>

<deferred>
## Deferred Ideas

- None.

</deferred>

---

*Phase: 11-conversion-ux-optimization*
*Context gathered: 2026-03-12*