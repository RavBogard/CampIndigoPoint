# Phase 1: Content Foundation - Context

**Gathered:** 2026-03-12
**Status:** Ready for planning

<domain>
## Phase Boundary

Preserve and structure Camp Indigo Point's core copy, facts, metadata, announcements, and outbound action links in a maintainable format so later design and implementation phases can build on trustworthy source material without losing important details.

</domain>

<decisions>
## Implementation Decisions

### Content fidelity
- Use a light-edit migration approach, not a wholesale rewrite.
- Preserve current facts and core messaging, but tighten wording and modernize clarity where helpful.
- Keep the editorial voice warm and affirming rather than purely logistical or overly inspirational.
- Treat trust-sensitive language as the closest source material, especially community care, belonging, scholarship, and reassurance copy.
- Make migration decisions page by page rather than rewriting from audience journeys first.

### Information depth
- Family-facing pages should use balanced detail: clear summary sections first, with fuller explanation below rather than either extreme brevity or wall-of-text density.
- FAQs should catch remaining practical questions rather than serving as the main place where essential information lives.
- Donor content should be fairly explicit before the external handoff, especially around scholarship impact and the Ashrei Foundation relationship.
- Staff pages should balance culture and mission with concrete role clarity and expectations before the application link.

### Seasonal updates
- Support a single reusable sitewide banner for temporary updates in v1.
- Use the banner for operational milestones such as registration opening, hiring season, important dates, and deadlines.
- Banner tone should stay playful and energetic while still communicating the practical action clearly.
- Banner visibility should be controlled with a simple manual on/off toggle rather than scheduled automation.

### Claude's Discretion
- Exact content file shape within the centralized content system.
- Exact metadata field structure and per-page implementation pattern.
- Exact wording refinements when tightening current copy, as long as trust-critical meaning is preserved.

</decisions>

<specifics>
## Specific Ideas

- The redesign should preserve the strongest trust-building language from the current site rather than replacing it with generic nonprofit copy.
- The site should feel cleaner and easier to scan than WordPress, but not at the expense of losing meaningful detail families and donors rely on.
- Temporary updates should feel like clear camp moments, not sterile system notices.

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/index.css`: already contains global tokens and basic shared styles that can be replaced or evolved into the new content/design system foundation.
- `src/App.jsx`: provides a simple top-level composition point that can be reworked into the new site shell during later phases.
- Existing section component pattern in `src/components/*.jsx`: useful only as a temporary reference for how the starter site is currently composed; not a content model to preserve.

### Established Patterns
- Content is currently embedded directly in JSX, which means Phase 1 needs to introduce a real centralized content structure from scratch.
- Styling is section-scoped CSS plus global tokens, so later planning can choose whether to evolve that pattern or replace it while keeping the migration incremental.
- There is no existing metadata, announcement, or centralized outbound-link pattern in the current starter.

### Integration Points
- Centralized content and action-link definitions created in this phase should become the source of truth for later route/page implementation.
- Metadata decisions made here will feed directly into the page shell and route work in Phase 2.
- Announcement/banner content defined here should plug into the global layout once the shared shell exists.

</code_context>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 01-content-foundation*
*Context gathered: 2026-03-12*
