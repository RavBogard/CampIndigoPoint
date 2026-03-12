# Phase 4: Donor Scholarship Journey - Context

**Gathered:** 2026-03-12
**Status:** Ready for planning

<domain>
## Phase Boundary

Build a donor path that explains the life-saving impact of Camp Indigo Point scholarships, frames the camp as an intergenerational queer community, and provides clear, trustworthy pathways for individual donors, faith communities, and major foundations before handing them off to the Ashrei Foundation donation platform.

</domain>

<decisions>
## Implementation Decisions

### The "Life-Saving" Narrative
- Lead with the emotional reality: "We are literally saving lives with marshmallows, campfires, and intergenerational queer community."
- Use the powerful "Black and White to Color" metaphor: "Parents send us kids who live in black and white, whose only friends are strangers on the internet. And we send them back kids who live in color, who are confident, and who make lifelong relationships."
- Frame the camp as giving kids hope and an image of what the future could and should be.
- Explicitly contrast the supportive camp environment with the hostility they face elsewhere (e.g., "where all too often their assistant principal is their biggest bully").
- Bury the specific statistical data (e.g., the impact of a single affirming adult on trans youth survival rates) in a secondary "Why It Matters" or FAQ section rather than leading with it. The primary focus must remain on the emotional story.

### Intergenerational Community ("Ancestors")
- Emphasize that campers are surrounded by adults who share their identities: "Not just every camper is like them, but their heroes/counselors are like them, and the administrators are like them, and the nurses... We're giving them ancestors."
- Prioritize authentic photos (from the old site or socials) that show campers and staff interacting together to visually prove this "ancestor" and mentorship connection.

### The "Give Now" Experience and Impact Tiers
- Provide a clear, urgent "Give Now" path.
- Show donors exactly what their money buys using specific impact tiers before they click the final donate button (e.g., "$100 for a bunk's campfires," "$2,700 for a full two-week scholarship").
- Clearly explain the Ashrei Foundation relationship as a trusted fiscal sponsor to ensure there are no surprises during the handoff.

### Major Gifts and Organizational Support
- Include a specific callout for **Faith Communities** to become "Faith Sponsors" (typically a $1,800 donation).
- Explicitly welcome and express deep gratitude for support from organizations, family foundations, and major donors (aiming for 5-figure annual gifts).
- Ensure there is a clear contact path (e.g., emailing Dan directly) for these larger organizational or foundation conversations.

</decisions>

<specifics>
## Specific Ideas

- The page should feel less like a traditional "charity" appeal and more like an invitation to fund a vital "sanctuary" and lifeline.
- Use visual motifs that support the "Black and White to Color" narrative, perhaps starting the page with calmer tones and building to vibrant camp colors.
- The tone should balance profound gravity (saving lives) with the intense joy of the actual camp experience (marshmallows and campfires).

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/content/donate.js`: Existing content module that needs to be rewritten to incorporate the new narrative, impact tiers, and foundation/faith community callouts.
- `src/routes/DonateRoute.jsx`: Existing route component that will need structural updates to support the new tiered and narrative-driven layout.
- `src/components/site/PageFrame.jsx`: Already supports a `media` prop for hero images, which should be used to feature intergenerational staff/camper photos.

### Established Patterns
- The site currently uses `content-card--affirming` and `content-panel--wavy` CSS classes (established in Phase 3) to create a warm, campy vibe. These should be utilized on the Donate page to maintain consistency with the family journey.
- The `actionLinks` configuration in `src/content/actions.js` already handles the external routing to DonorPerfect via Ashrei.

### Integration Points
- The Donate route must remain accessible from the primary shell navigation and high-intent CTAs established in Phase 2.
- The Ashrei Foundation explanation must be clearly visible before the user clicks the external link, building on the trust established in the family journey.

</code_context>

<deferred>
## Deferred Ideas

- None at this time.

</deferred>

---

*Phase: 04-donor-scholarship-journey*
*Context gathered: 2026-03-12*
