# Phase 6: UI and Tailwind CSS Refactor - Context

**Gathered:** 2026-03-12
**Status:** Ready for planning

<domain>
## Phase Boundary

Completely refactor the site's styling methodology by migrating from global cascading CSS to Tailwind CSS. The goal is to fix all layout bugs, standardize spacing, and guarantee mobile responsiveness down to 320px, while evolving the visual identity to be maintainable within the utility-first paradigm.

</domain>

<decisions>
## Implementation Decisions

### Migration Strategy
- **Full Rewrite:** We are pursuing a full rewrite of the CSS. We will replace almost all custom classes in the JSX with inline Tailwind utilities. This is more upfront work but creates a much cleaner, more maintainable long-term architecture than a hybrid approach.
- **Layout System:** We will use a Pragmatic (Mixed) approach. Use CSS Grid where 2-up or 3-up structural column layouts make sense (e.g., audience path cards), and use Flexbox for component-level alignment and one-directional stacks.

### Handling the "Soul" (Visual Identity)
- The user is not strictly committed to the exact implementation of the "wavy" borders or specific organic shapes if they make the Tailwind migration brittle. 
- **Recommendation:** We will port the core brand elements (Teal `#1f5f7a`, Orange `#e17a2d`, Sand `#fffaf5`, Montserrat, Quicksand) into the `tailwind.config.js`. 
- We will *attempt* to preserve the organic feel using Tailwind's extensive `rounded-*` utilities (e.g., asymmetrical rounded corners) and drop shadows, but we will prioritize layout stability and clean code over pixel-perfect replication of complex legacy CSS shapes. If a specific "blob" background causes overflow issues, it will be removed or simplified.

### Responsive Rules
- **Mobile First:** All styling must begin with the smallest viewport (320px) as the default class, using `md:` and `lg:` prefixes strictly for scaling up. 
- **No Overflow:** Horizontal scrolling is an automatic failure condition for any component.

</decisions>

<specifics>
## Specific Ideas

- Implement a consistent `container` class (via Tailwind config or utility wrapper) with a strict `max-w-7xl` and consistent `mx-auto px-4 sm:px-6 lg:px-8` padding to prevent edge-to-edge stretching on large monitors.
- Use Tailwind's typography plugin (`@tailwindcss/typography`) if needed for long-form content areas, though standard utility scaling might be sufficient given the component-heavy nature of the site.

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- The entire `src/components/` and `src/routes/` directories will need to be touched. Every `.className` string is a target for replacement.
- `src/index.css` is currently 300+ lines of global, cascading rules that are causing the layout bugs. This file will be systematically gutted as utility classes are applied.

### Established Patterns
- The site currently relies heavily on `content-stack--two-up` and `content-card` patterns. These need to be translated into predictable `grid grid-cols-1 md:grid-cols-2 gap-8` structures.
- The `PageFrame` component is the structural bottleneck. It must be refactored to be a clean layout wrapper, delegating internal alignment to its children.

### Integration Points
- Vite is already the build tool, so integrating Tailwind via PostCSS or the new Vite plugin will be straightforward.
- No content (`src/content/`) should be altered during this phase unless absolutely necessary for structural changes.

</code_context>

<deferred>
## Deferred Ideas

- None at this time. Focus is entirely on CSS architecture and layout stability.

</deferred>

---

*Phase: 06-ui-and-tailwind-css-refactor*
*Context gathered: 2026-03-12*
