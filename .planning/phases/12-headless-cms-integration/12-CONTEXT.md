# Phase 12: Headless CMS Integration - Context

**Gathered:** 2026-03-12
**Status:** Ready for planning

<domain>
## Phase Boundary

Integrate Decap CMS to empower non-technical team members to manage site content independently, while preserving the complex Bento Grid layouts and "Soul & Story" aesthetics built in previous phases.

</domain>

<decisions>
## Implementation Decisions

### Migration Strategy (Full Control with Preserved Aesthetics)
- **The Choice:** The user opted for Option A (Full Migration) but with the strict caveat that the site must remain as beautiful as it is now.
- **The Architecture:** To achieve this, we will use structured JSON files instead of generic Markdown files.
  - *Why not Markdown?* Markdown forces content into a single block of text. It would destroy our intricate Bento Box grids and asymmetrical layouts.
  - *Why JSON?* By mapping the Decap CMS output to JSON objects (e.g., `{"heroHeading": "...", "pressQuote1": "..."}`), we can inject the CMS data exactly into the complex Tailwind Grid React components we already built. The CMS controls the *words* and *images*, but React still controls the *layout*.

### Configuration
- Use Decap CMS (formerly Netlify CMS) configured for GitHub backend.
- Place the CMS admin page at `/admin/index.html`.

</decisions>

<specifics>
## Specific Ideas

- The `config.yml` for Decap CMS will be incredibly detailed. Instead of a single "Body" field for the homepage, it will have specific fields for `heroHeading`, `heroSummary`, `quote1`, `quote2`, etc., mapping 1:1 with our current `home.js` structure.
- We must configure a media library within the CMS so Dan and Shira can upload new photos to `/public/images/gallery/` directly from the dashboard.

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- The current data structures in `src/content/*.js` (like `aboutPage.belonging.details` arrays) will serve as the exact blueprint for the Decap `config.yml` collections.

### Established Patterns
- The site uses Vite. We will need to set up a small Vite plugin or build script to parse the JSON files output by the CMS and feed them into the React components, replacing the hardcoded `.js` imports.

</code_context>

<deferred>
## Deferred Ideas

- None.

</deferred>

---

*Phase: 12-headless-cms-integration*
*Context gathered: 2026-03-12*