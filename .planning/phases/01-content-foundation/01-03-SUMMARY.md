---
phase: 01-content-foundation
plan: 03
subsystem: content
tags: [metadata, content-ops, announcement, react, vite]
requires:
  - phase: 01-01
    provides: centralized site settings and action registry
provides:
  - reusable page metadata map for primary site domains
  - constrained seasonal banner action model
  - maintainer-facing content operations documentation
affects: [phase-02-shell, seo, operations]
tech-stack:
  added: []
  patterns: [metadata-as-data, single-slot-announcement, content-ops-readme]
key-files:
  created:
    - src/content/meta.js
    - src/content/README.md
  modified:
    - src/content/actions.js
    - src/content/site.js
key-decisions:
  - "Modeled metadata as route data now so later shell work does not invent titles and descriptions inline."
  - "Limited announcement destinations to canonical action IDs to keep seasonal banners aligned with the shared CTA registry."
patterns-established:
  - "Metadata lives in src/content/meta.js with one pageMeta record per primary route."
  - "Maintainers update links, announcements, and metadata from documented source files instead of JSX."
requirements-completed: [OPS-02, QUAL-03]
duration: 5 min
completed: 2026-03-12
---

# Phase 1 Plan 03: Define Metadata and Announcement Patterns Summary

**Reusable page metadata, a constrained sitewide announcement model, and maintainer update guidance for content operations**

## Performance

- **Duration:** 5 min
- **Started:** 2026-03-12T17:09:00Z
- **Completed:** 2026-03-12T17:14:24Z
- **Tasks:** 3
- **Files modified:** 4

## Accomplishments
- Added a metadata source of truth for home, about, registration, donate, staff, FAQ, and contact domains.
- Finalized the single-slot seasonal banner model so it can only point at the canonical register, donate, or apply actions.
- Wrote maintainer guidance showing exactly where to update links, announcements, and metadata in the new content layer.

## Task Commits

Each task was committed atomically:

1. **Task 1: Create reusable page metadata definitions** - `69b938a` (feat)
2. **Task 2: Finalize the seasonal banner configuration model** - `44ea8e9` (feat)
3. **Task 3: Document how maintainers update content operations files** - `a05d5f1` (docs)

## Files Created/Modified
- `src/content/meta.js` - Metadata defaults and page-level SEO records for core routes.
- `src/content/site.js` - Sitewide announcement schema tied to canonical action IDs.
- `src/content/actions.js` - Allowed action IDs for seasonal banner destinations.
- `src/content/README.md` - Maintainer-facing update guide for content operations.

## Decisions Made
- Kept the announcement system intentionally lightweight: one banner, manual toggle, and only approved destination IDs.
- Documented the update path in-repo so future content changes do not require reverse-engineering the file layout.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

The content layer now includes metadata and announcement conventions that the rebuilt shell can consume immediately. Future phases can focus on rendering and UX instead of re-deciding operations patterns.

## Self-Check: PASSED

- Verified created files exist on disk: `src/content/meta.js`, `src/content/README.md`, `src/content/site.js`
- Verified task commits exist in git history: `69b938a`, `44ea8e9`, `a05d5f1`

---
*Phase: 01-content-foundation*
*Completed: 2026-03-12*
