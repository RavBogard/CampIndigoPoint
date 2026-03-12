# Phase 8: Resource Hub - Context

**Gathered:** 2026-03-12
**Status:** Ready for planning

<domain>
## Phase Boundary

Upgrade the FAQ into an interactive, filterable Resource Hub using Framer Motion to better organize information for families, donors, and staff.

</domain>

<decisions>
## Implementation Decisions

### Interactive Resource Hub (FAQ)
- **Data Structure:** Refactor `src/content/faq.js` from an object of grouped arrays into a single array of objects, each with a `category` or `tags` property.
- **Visual Style of Filters:** Use modern "Chips/Pills" (rounded buttons that fill with a solid color when active).
- **Default State:** Default to showing "All" questions so users can immediately scroll, but provide the chips for quick filtering.
- **Animation Style:** Use a smooth "fade and slide" animation via Framer Motion when filtering categories so the layout shifts gracefully.

</decisions>

<specifics>
## Specific Ideas

- The FAQ filter buttons should look like "chips" or "pills" that visually toggle their active state, making the page feel like a premium concierge service rather than a static list.
- Animate the `<motion.article>` elements using `layout`, `initial={{ opacity: 0, y: 10 }}`, `animate={{ opacity: 1, y: 0 }}`, and `exit={{ opacity: 0, scale: 0.95 }}`.

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/content/faq.js`: Needs structural refactoring.
- `src/routes/FaqRoute.jsx`: Needs a complete rewrite to handle state (`activeFilter`) and Framer Motion logic.

### Established Patterns
- Tailwind CSS is fully implemented. We will use utility classes for the styling of the FAQ filter chips.
- `framer-motion` is already in the `package.json` dependencies.

</code_context>

<deferred>
## Deferred Ideas

- "Quick Exit" panic button feature was explicitly removed from scope per user request.

</deferred>

---

*Phase: 08-resource-hub*
*Context gathered: 2026-03-12*