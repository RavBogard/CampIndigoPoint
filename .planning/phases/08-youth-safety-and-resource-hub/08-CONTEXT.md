# Phase 8: Youth Safety UX & Resource Hub - Context

**Gathered:** 2026-03-12
**Status:** Ready for planning

<domain>
## Phase Boundary

Implement a persistent "Quick Exit" panic button to protect vulnerable youth browsing the site in unsupportive environments. Upgrade the FAQ into an interactive, filterable Resource Hub using Framer Motion.

</domain>

<decisions>
## Implementation Decisions

### Safety First: Quick Exit
- **Functionality:** Clicking the button must immediately redirect the browser to a neutral site (e.g., `https://weather.com`).
- **Placement:** The button must be persistent, highly visible, and fixed to the viewport (e.g., bottom right corner or top utility bar), sitting above all other z-index layers (`z-50`).
- **Keyboard Shortcut:** Implement an 'Escape' key listener (pressing Escape 3 times quickly) as an alternative trigger for the Quick Exit.
- **Copy/Design:** The button should be labeled clearly but discreetly, perhaps "Quick Exit" with a simple 'X' or 'External Link' icon from `lucide-react`. It should contrast enough to be seen but not disrupt the main brand flow.

### Interactive Resource Hub (FAQ)
- **Data Structure:** Refactor `src/content/faq.js` from an object of grouped arrays into a single array of objects, each with a `category` or `tags` property.
- **Interactivity:** Build a new component in `FaqRoute.jsx` with category filter buttons.
- **Animation:** Use `framer-motion` (specifically `<AnimatePresence>`) to smoothly animate questions entering and exiting the DOM when filters are clicked.

</decisions>

<specifics>
## Specific Ideas

- The Quick Exit is a "panic button," not a history eraser. We must not over-promise its capability to users. It gets them off the screen immediately if someone walks in the room.
- The FAQ filter buttons should look like "chips" or "pills" that visually toggle their active state.

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/components/site/SiteLayout.jsx`: The ideal place to render the `<QuickExit />` component so it persists across all routes.
- `src/content/faq.js`: Needs structural refactoring.
- `src/routes/FaqRoute.jsx`: Needs a complete rewrite to handle state (`activeFilter`) and Framer Motion logic.

### Established Patterns
- Tailwind CSS is fully implemented. We will use utility classes for the fixed positioning of the Quick Exit button and the styling of the FAQ filter chips.
- `framer-motion` is already in the `package.json` dependencies.

</code_context>

<deferred>
## Deferred Ideas

- None.

</deferred>

---

*Phase: 08-youth-safety-and-resource-hub*
*Context gathered: 2026-03-12*