# Phase 2: Site Shell and Audience Routing - Context

**Gathered:** 2026-03-12
**Status:** Ready for planning

<domain>
## Phase Boundary

Replace the portfolio starter shell with a real Camp Indigo Point site framework that introduces the three primary audiences quickly, provides persistent desktop and mobile navigation, keeps key handoff actions visible, and establishes the responsive and accessible shell patterns later phases will reuse.

</domain>

<decisions>
## Implementation Decisions

### Navigation model
- Use a classic multi-page site structure rather than a mostly one-page or campaign-only shell.
- Make the homepage a gateway first: orient visitors fast, then send them into deeper audience and trust pages.
- Put Families, Donors, and Staff directly in the top-level navigation so visitors can self-select immediately.
- Pair the audience links with core trust and utility destinations such as About, FAQ, and Contact.
- Use a simple mobile drawer rather than a full-screen takeover or tab-style navigation.
- Make the logo return visitors to the homepage.
- Show a clear active-page state in the header so visitors always know where they are.

### Persistent calls to action
- Keep Register, Donate, and Apply visible in the shared shell rather than burying them only inside page content.
- Treat Register and Donate as the highest-priority persistent actions, with Apply also present in the header because staff is a first-class audience.
- Keep the persistent actions clear and intentional, not aggressive or overly sales-like.

### Brand direction
- Aim for a playful and trustworthy shell rather than a purely calm or highly edgy one.
- Treat the redesign as a recognizable evolution of the existing Camp Indigo Point identity, not a visual reinvention.
- Use bright brand accents on top of a calmer, readable base so the site feels lively without becoming noisy.
- Keep the shared header clean and easy to scan, but give it enough camp-specific character to avoid looking generic.

### Visual expression
- Use moderately expressive typography: distinct display moments for headings, with highly readable body and navigation text.
- Add selective decorative flourishes rather than making every shell element highly decorative.
- Use photography as light support for the shell at this stage rather than making the framework depend on a rich photo system.
- Keep motion gentle and purposeful, with reduced-motion support built into the shell patterns.

### Claude's Discretion
- Exact page hierarchy beyond the locked top-level audience and trust destinations.
- Exact visual system tokens, spacing scale, and component-level styling details.
- Exact placement and responsive behavior of the persistent action buttons, as long as they remain consistently visible and accessible.

</decisions>

<specifics>
## Specific Ideas

- The site should feel like Camp Indigo Point grew up, not like it was replaced by a generic nonprofit template.
- Trust should come from structure, readability, and clear wayfinding, while joy should come through color, typography, and a few playful moments.
- The shell should work even before later storytelling phases add richer testimonials, deeper imagery, and more route-specific page composition.

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/App.jsx`: current top-level composition point that can be replaced with the new route-aware shell.
- `src/index.css`: existing global token and shared-style entry point that can evolve into the shell's design-system foundation.
- `src/content/`: newly centralized content modules from Phase 1 that should feed navigation labels, metadata, site settings, and CTA destinations.
- `src/components/ThemeToggle.jsx`: a useful reference for existing interactive UI behavior, even if the final shell changes how theme controls appear.

### Established Patterns
- The current app is a single composed page with hard-coded section components, so Phase 2 needs to establish the first real routing and persistent navigation pattern.
- Styling currently mixes global CSS tokens with section-scoped styles, which gives Phase 2 flexibility to evolve the shell incrementally without needing a framework swap.
- `framer-motion` and `lucide-react` are already available, so subtle motion and navigational iconography can be used without adding new libraries.

### Integration Points
- The new shell should replace the current `src/App.jsx` composition and become the shared frame for all later audience-specific routes.
- Navigation, CTA visibility, metadata defaults, and the seasonal announcement model should consume the centralized files under `src/content/`.
- Accessibility and responsive shell choices made here will become the baseline constraints for Phases 3 through 5.

</code_context>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 02-site-shell-and-audience-routing*
*Context gathered: 2026-03-12*
