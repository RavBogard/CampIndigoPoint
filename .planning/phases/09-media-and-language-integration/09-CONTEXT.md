# Phase 9: High-Impact Media & Language Integration - Context

**Gathered:** 2026-03-12
**Status:** Ready for planning

<domain>
## Phase Boundary

Perform a comprehensive site-wide language audit to inject inspiring copy drawn from diverse national press coverage. Source and integrate a significantly higher volume of authentic, joyful camp photography to elevate the overall visual impact.

</domain>

<decisions>
## Implementation Decisions

### The Language Audit
- **Broad Inspiration:** Do not rely solely on the *Washington Post*. Actively borrow inspiring language, tone, and framing from a wide array of press, specifically including Jewish press (e.g., *JTA*, *Kveller*, *St. Louis Jewish Light*).
- **Tone:** The language should feel profound, life-giving, and urgently important while maintaining the joyful spirit of summer camp.

### Media Strategy & "The Hero" Photos
- **Vibe:** Prioritize pure, unadulterated joy (laughing, jumping in the lake, messy games) and a sheer volume of kids having fun. The imagery must explicitly prove the "World in Color" narrative.
- **Physical Space:** Include some visuals of the physical space/facilities to ground the experience, ensuring we never mention "Camp Manitowa" by name.

### Sourcing Constraints
- **Primary Sources:** The official Camp Indigo Point Instagram/Facebook.
- **Technical Limitation:** The AI agent cannot directly authenticate and scrape Instagram. The layout will be built using the highest quality assets available from the live WP site and press article URLs. The codebase will be structured so the user can easily swap in downloaded Instagram photos into the `/public/images/` directory later.

</decisions>

<specifics>
## Specific Ideas

- The "Bento Boxes" built in Phase 7 should be populated with new, distinct photos rather than repeating the same collage.
- Consider a new "Facilities" or "Camp Life" photo grid on the About page to satisfy the request for physical space visuals.

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- The `media` prop in `PageFrame.jsx` is the primary mechanism for injecting hero photos.
- `src/content/*.js` files hold all the text. This is where the language audit will occur.

### Established Patterns
- We are using Tailwind CSS v4.
- Images should be referenced from the `/images/families/` or `/brand/` directories.

</code_context>

<deferred>
## Deferred Ideas

- Direct API integration with Instagram for a live feed is out of scope for this static content phase.

</deferred>

---

*Phase: 09-media-and-language-integration*
*Context gathered: 2026-03-12*