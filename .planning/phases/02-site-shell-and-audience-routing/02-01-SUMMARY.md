---
phase: 02-site-shell-and-audience-routing
plan: 01
subsystem: shell
tags: [routing, shell, metadata, react, vite]
requires: []
provides:
  - route-based application shell for primary Camp Indigo Point destinations
  - content-backed route modules for home, about, registration, donate, staff, faq, and contact
  - metadata helper wired to centralized page meta definitions
affects: [phase-02-navigation, phase-02-accessibility, phase-03-family, phase-04-donor, phase-05-staff]
tech-stack:
  added: [react-router-dom]
  patterns: [shared-site-layout, route-components-from-content, metadata-as-data]
key-files:
  created:
    - src/components/site/SiteLayout.jsx
    - src/components/site/PageFrame.jsx
    - src/components/site/SiteFooter.jsx
    - src/routes/HomeRoute.jsx
    - src/routes/AboutRoute.jsx
    - src/routes/RegistrationRoute.jsx
    - src/routes/DonateRoute.jsx
    - src/routes/StaffRoute.jsx
    - src/routes/FaqRoute.jsx
    - src/routes/ContactRoute.jsx
    - src/lib/metadata.js
  modified:
    - package.json
    - src/main.jsx
    - src/App.jsx
    - src/index.css
key-decisions:
  - "Introduced React Router as the route foundation instead of trying to evolve the one-page portfolio composition."
  - "Built route modules directly from the Phase 1 content layer so later phases can deepen pages without re-migrating copy."
  - "Kept metadata as a lightweight hook-backed helper sourced from src/content/meta.js rather than hard-coding per-route titles."
patterns-established:
  - "All primary destinations render through a shared SiteLayout shell."
  - "Route pages use a common PageFrame pattern for hero, aside, and section composition."
  - "Page metadata is declared by route key and resolved from centralized content operations files."
requirements-completed: [NAV-02, QUAL-01]
duration: 20 min
completed: 2026-03-12
---

# Phase 2 Plan 01: Establish Routing and Shared Shell Foundation Summary

**Route-based Camp Indigo Point shell with shared layout, content-backed page modules, and centralized metadata wiring**

## Performance

- **Duration:** 20 min
- **Started:** 2026-03-12T17:25:00Z
- **Completed:** 2026-03-12T17:45:02Z
- **Tasks:** 3
- **Files modified:** 15

## Accomplishments
- Added `react-router-dom` and replaced the stacked single-page starter with a `RouterProvider`-driven shell.
- Created route-level page modules for home, about, registration, donate, staff, FAQ, and contact using the centralized Phase 1 content files.
- Added a shared `PageFrame`, `SiteLayout`, `SiteFooter`, and a metadata helper so route structure and content operations stay aligned.

## Task Commits

Each task was committed atomically:

1. **Task 1: Introduce the route layer and shared layout entry point** - `db4552f` (feat)
2. **Task 2: Create primary route components wired to centralized content** - `273e09d` (feat)
3. **Task 3: Wire route metadata and shell defaults from content operations files** - `f6e7179` (refactor)

## Files Created/Modified
- `package.json` - Added `react-router-dom` for the new shell and route layer.
- `src/main.jsx` - Kept app bootstrap aligned with the new routed `App` entry point.
- `src/App.jsx` - Replaced the one-page composition with routed primary destinations through `SiteLayout`.
- `src/index.css` - Added shared shell, page-frame, and footer presentation styles.
- `src/components/site/SiteLayout.jsx` - Introduced the shared application shell with skip link, brand header, and outlet.
- `src/components/site/PageFrame.jsx` - Added a reusable route composition wrapper for page hero and section layout.
- `src/components/site/SiteFooter.jsx` - Added shared footer navigation, actions, and contact details from centralized content.
- `src/routes/HomeRoute.jsx` - Rendered the homepage from `homePage` content, including audience path cards.
- `src/routes/AboutRoute.jsx` - Rendered the camp overview route from `aboutPage`.
- `src/routes/RegistrationRoute.jsx` - Rendered the registration route from `registrationPage`.
- `src/routes/DonateRoute.jsx` - Rendered the donor route from `donatePage`.
- `src/routes/StaffRoute.jsx` - Rendered the staff route from `staffPage`.
- `src/routes/FaqRoute.jsx` - Rendered the FAQ route from `faqPage`.
- `src/routes/ContactRoute.jsx` - Added a contact route backed by brand/contact content.
- `src/lib/metadata.js` - Added a helper hook that resolves metadata from `pageMeta` and updates document head tags.

## Decisions Made
- React Router is now the baseline shell/routing solution for the site.
- Route components read from `src/content/` immediately rather than creating temporary inline page copy.
- Metadata stays centralized by route key so future shell and page work does not drift away from Phase 1 content operations.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

The app now has a real route shell and content-backed primary pages. Phase 2 plan 02 can layer in the actual desktop/mobile navigation, announcement bar, homepage pathing, and persistent CTA behavior on top of this foundation.

## Self-Check: PASSED

- Verified created files exist on disk: `src/components/site/SiteLayout.jsx`, `src/routes/HomeRoute.jsx`, `src/lib/metadata.js`
- Verified task commits exist in git history: `db4552f`, `273e09d`, `f6e7179`

---
*Phase: 02-site-shell-and-audience-routing*
*Completed: 2026-03-12*
