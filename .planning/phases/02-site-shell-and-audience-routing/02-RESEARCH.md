---
phase: 02
name: site-shell-and-audience-routing
status: complete
researched: 2026-03-12
requirements:
  - NAV-01
  - NAV-02
  - NAV-03
  - QUAL-01
  - QUAL-02
sources:
  - local-codebase
  - react-router official docs
  - motion.dev official docs
  - W3C WCAG understanding docs
---

# Phase 2 Research: Site Shell and Audience Routing

## Research Goal

Determine the best planning approach for replacing the current single-page portfolio scaffold with a route-aware Camp Indigo Point shell that:
- introduces Families, Donors, and Staff within the first viewport
- provides persistent desktop and mobile navigation
- keeps Register and Donate consistently visible on high-intent routes
- establishes the accessibility and responsive baseline for later phases

## Current Repo Reality

### What already exists
- React 19 + Vite client-rendered app
- `framer-motion` and `lucide-react` are already installed
- `src/content/` now provides centralized content modules, metadata, site settings, announcement data, and canonical action links
- `src/App.jsx` is the current top-level composition point
- `src/index.css` is the current global token and shared-style entry point

### What does not exist yet
- No routing library or route structure
- No persistent header, drawer, or shared shell
- No reusable layout primitives beyond `.container` and section CSS
- No automated test framework beyond ESLint
- No documented accessibility verification workflow

### Implication
- Phase 2 is the correct place to introduce route architecture, shared navigation, shell-level CTA behavior, and accessibility conventions
- Planning should assume some Wave 0 work to establish routing and minimal verification infrastructure

## Recommended Technical Direction

### Route structure

Use a true multi-page client-side route structure instead of continuing with a stacked single-page composition.

Recommended first-class routes:
- `/` — homepage / gateway
- `/about`
- `/registration`
- `/donate`
- `/staff`
- `/faq`
- `/contact`

Recommended shell pattern:
- one top-level app shell that renders the announcement, header, main content container, and footer
- one route definition layer that maps page routes to page components
- route-aware metadata updates tied to `src/content/meta.js`

Recommended library choice:
- add `react-router-dom` and use its data/declarative route APIs

Why:
- the repo has no existing routing pattern, so introducing a standard library is lower risk than inventing one
- React Router gives route composition, nested layout patterns, and active-link support that fit this phase directly
- `NavLink` is especially useful here because it automatically exposes active-state semantics for current-page navigation

### Navigation model

The context decisions point to a traditional website navigation model, not a campaign landing page.

Recommended information architecture in the shell:
- top-level brand/home link
- direct audience links: Families, Donors, Staff
- supporting trust/utility links: About, FAQ, Contact
- persistent high-intent actions in the header: Register, Donate, Apply

Recommended implementation pattern:
- desktop: visible primary nav plus visible CTA cluster
- mobile: a simple drawer or disclosure-style navigation, not a custom tab bar

Why:
- this supports NAV-01 and NAV-02 directly
- it matches the context decision to let visitors self-sort quickly
- it keeps later phases additive rather than forcing a second navigation rewrite

### Homepage role

The homepage should function as a gateway, not as a compressed version of the entire site.

Recommended above-the-fold composition:
- hero with mission/value signal
- immediate audience path cards or panels for Families, Donors, Staff
- visible Register and Donate actions
- optional Apply action kept visible but visually secondary to Register and Donate

Why:
- Phase 2 only needs to establish the routing and shell baseline; deeper audience storytelling belongs in later phases
- `src/content/home.js` already contains `audiencePaths`, hero data, and CTA groupings that can power this without duplicating copy

### CTA persistence

Persistent CTA behavior should be handled at the shell layer, not reimplemented independently on every page.

Recommended CTA pattern:
- header-level Register and Donate CTAs remain visible on desktop and mobile
- Apply remains present in the main navigation/action cluster because staff is a first-class audience, but it can be visually tertiary
- route pages can add stronger in-page CTA moments without replacing the shell-level actions

Recommended content source:
- use `siteSettings.defaultCtas` and `actionLinks` from `src/content/site.js` and `src/content/actions.js`

Why:
- this satisfies NAV-03 and keeps later audience phases consistent
- it prevents link drift because all handoff URLs already live in one source of truth

## Responsive Shell Recommendations

### Layout strategy
- establish a single shell container system in `src/index.css` or a small shell-specific stylesheet layer
- define clear breakpoints for mobile-first layout behavior before building route pages
- keep header, drawer, and footer styles in shared shell components rather than burying them in route files

### Header behavior
- sticky or semi-sticky header is appropriate if it does not consume too much vertical space on mobile
- announcement bar should sit above the header when enabled and collapse naturally on small screens
- mobile menu trigger should be large enough for touch targets and keyboard reachable

### Footer behavior
- footer should become the stable home for contact details, social links, and lower-priority navigation reinforcement
- footer content should read from centralized brand/contact content rather than inline JSX

### Performance and complexity guidance
- avoid overengineering route transitions in this phase
- use motion sparingly at the shell level so navigation stays quick and orientation-focused
- defer photo-heavy or story-heavy shell dependencies until later phases where asset strategy is clearer

## Accessibility Baseline

Phase 2 should explicitly establish the accessibility baseline for every later route. This is one of the phase's main responsibilities, not a secondary cleanup.

### Recommended baseline requirements
- semantic landmark structure: announcement, header/nav, main, footer
- visible keyboard focus states across all interactive controls
- active-page indication in nav that works visually and semantically
- mobile nav that is keyboard reachable and screen-reader understandable
- sufficient color contrast for header, CTA, and announcement combinations
- reduced-motion-aware shell animations and menu transitions
- meaningful alt text for logo and shell imagery
- heading hierarchy that stays stable across routes

### Specific implementation guidance
- prefer plain navigation lists plus disclosure/drawer behavior over a full ARIA `menu` widget
- keep the nav as site navigation, not as an application menu
- use `NavLink` current-page behavior instead of hand-rolled active-state logic
- use `framer-motion` only where reduced-motion preferences can be respected cleanly
- ensure the mobile drawer can be opened, navigated, and closed without pointer-only interactions

### Practical verification targets
- tab through the full header, mobile trigger, CTA cluster, and footer links
- verify active-page cues on all primary routes
- verify small-screen reflow without horizontal scrolling at common mobile widths
- verify reduced-motion behavior for shell transitions

## Integration With `src/content/`

The Phase 1 content layer is the main reason this shell phase can stay focused.

### Recommended data ownership
- `src/content/actions.js`
  - shell CTAs
  - route handoff buttons
  - drawer CTA labels
- `src/content/site.js`
  - announcement rendering
  - brand-level shell copy
  - default CTAs and season context
- `src/content/meta.js`
  - route metadata wiring
- `src/content/home.js`
  - audience path cards on the homepage
- `src/content/about.js`, `registration.js`, `donate.js`, `staff.js`, `faq.js`
  - early route composition inputs even if later phases deepen the pages

### Important planning consequence
- Phase 2 does not need to invent placeholder copy structures; it should wire the shell around the real content modules that already exist

## Repo-Specific Risks And Constraints

### Existing dirty workspace
- multiple `src/components/*.jsx` files already have uncommitted user changes
- planning and execution should assume the shell may replace or heavily edit those files, but must not discard unrelated user work

### Styling transition risk
- the repo currently uses section-scoped CSS and a few global tokens
- Phase 2 should not try to introduce a brand-new styling framework unless the planner can justify the migration cost
- evolving the existing CSS architecture is likely safer than a full styling reset during this phase

### Metadata and announcement integration
- the shell must not treat metadata and announcements as afterthoughts; those models already exist and are specifically part of the Phase 1 foundation

### Theme toggle ambiguity
- the current starter includes a theme toggle, but the Phase 2 context did not establish dark mode as a requirement
- planning should decide whether theme toggle survives, is deferred, or is removed from the shell

## Recommended Plan Shape

A strong plan set likely breaks down into three execution slices:

1. **Routing and shell foundation**
   - add routing
   - replace the single-page app composition
   - create shared shell components and route scaffolding

2. **Navigation, CTA, and announcement behavior**
   - desktop/mobile nav
   - persistent CTA cluster
   - active-route styling
   - announcement wiring from content

3. **Responsive and accessibility hardening**
   - keyboard and focus behavior
   - reduced-motion support
   - color/contrast validation
   - mobile layout tuning across routes

This shape keeps architectural work early, visible behavior in the middle, and baseline hardening explicit rather than assumed.

## Validation Architecture

Nyquist validation is appropriate here because this phase is establishing shared system behavior for all later routes.

### Recommended validation stack
- keep `npm run lint` as the fast feedback loop
- continue using `npm run build` after every meaningful slice to catch route/config issues
- add a minimal test runner in Wave 0 if the planner needs automated interaction coverage

Recommended Wave 0 addition:
- `vitest`
- `@testing-library/react`
- `@testing-library/jest-dom`
- a minimal render test for shell routing and CTA visibility

Why:
- the repo currently has no automated behavior tests
- this phase introduces interaction-heavy shell behavior that is easy to regress later
- even a small set of smoke tests would pay off immediately for routing, nav visibility, and accessibility states

### Highest-value automated checks
- shell renders with all primary routes registered
- homepage exposes Families, Donors, and Staff pathways within the initial DOM/rendered hero region
- Register and Donate actions are present on high-intent route shells
- announcement renders only when enabled in `siteSettings`
- route metadata wiring does not break the app build

### Manual-only checks likely still needed
- keyboard traversal of the mobile drawer
- visual contrast review for final chosen palette
- reduced-motion experience review
- responsive QA at small mobile widths and laptop widths

## Planning Guidance For The Next Step

The planner should bias toward:
- incremental replacement of `src/App.jsx` instead of a big-bang rewrite without checkpoints
- reusing the centralized `src/content/` layer immediately
- introducing only the minimum new libraries required for stable routing and testability
- making accessibility and responsive work explicit tasks, not verification footnotes

The planner should avoid:
- overloading Phase 2 with deep storytelling or fully polished audience pages
- introducing a new CMS, analytics system, or form backend
- treating the shell as purely visual work without route and keyboard semantics

## Sources Consulted

- Local repo structure and codebase maps
- React Router official documentation for route layouts and active link behavior
- Motion official documentation for reduced-motion handling
- W3C WCAG understanding docs for focus visibility and reflow expectations

---

*Research completed: 2026-03-12*
*Phase: 02-site-shell-and-audience-routing*
