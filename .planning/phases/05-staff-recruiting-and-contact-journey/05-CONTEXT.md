# Phase 5: Staff Recruiting and Contact Journey - Context

**Gathered:** 2026-03-12
**Status:** Ready for planning

<domain>
## Phase Boundary

Build the staff recruitment experience to attract dedicated, resilient queer leaders by balancing the profound emotional impact of the work with the gritty reality of camp life. Additionally, refine the Contact page to explicitly route inquiries to the correct team members.

</domain>

<decisions>
## Implementation Decisions

### The Recruiting Narrative (Balance of Magic and Reality)
- **The Emotional Pitch:** Lean into the "Ancestor" narrative from Phase 4. We are selling an incredible, affirming, life-giving experience that provides "a vision of the way that the world could and should be."
- **The Practical Reality:** Do not sugarcoat the work. Make sure applicants understand exactly what they are getting into: living in a yurt with 12 kids, sweating, getting dirty, and navigating unpredictable days.

### Defining Staff Culture
- Describe the staff community as a chosen family.
- Highlight resilience and joy: "We will sweat, and love, and laugh, and get dirty, and swim, and play in the mud, and turn a rainy day into an unforgettable bonding experience, and learn to turn on a dime, and create the world all over again."

### Visualizing the Culture
- **The Vibe:** Go for a "behind-the-scenes" aesthetic. It should feel less polished than the family "Adventure" pages and more raw, showing the actual work and camaraderie of the staff.
- **Imagery:** Focus on a single, powerful "Staff Community" hero image that captures this raw energy, rather than trying to find specific photos for every individual role (Specialist vs. Counselor). *Note: We can pull generic camp photos from the Camp Manitowa site if needed, but we MUST NOT mention the name Manitowa anywhere for security reasons.*

### The Contact/Follow-up Experience
- Move away from a generic directory.
- **Explicit Routing:** Explicitly direct specific types of questions to the right people to reduce friction:
  - e.g., "For Registration, Affordability, or Foundation support, contact Dan."
  - e.g., "For Nursing, Wellness roles, or specific camper accommodations, contact Shira."

</decisions>

<specifics>
## Specific Ideas

- The Staff page should feel like an invitation to join a movement, not just a job application. The tone should be highly energetic but grounded in reality.
- The Contact page needs to feel like a continuation of the "Community Care" promise—we are here to help, and here is exactly who to talk to.

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/content/staff.js`: Needs a heavy rewrite to capture the "Sweat, love, laugh, mud" culture and the reality of yurt life.
- `src/routes/StaffRoute.jsx`: Currently uses generic cards; should be updated to reflect the "behind-the-scenes" vibe, perhaps using a distinct layout pattern.
- `src/content/brand.js`: Contains the `contactDirectory`. This should be updated or a new structure created in `contact.js` to support explicit routing.
- `src/routes/ContactRoute.jsx`: Needs to be restructured from a simple `.map` of contacts to specific, guided sections based on visitor intent.

### Established Patterns
- We have the `content-panel--wavy` and `content-card--affirming` CSS patterns. We might want to introduce a slightly grittier or more energetic variant for the Staff page, or use the existing ones in a new way to signify "Behind the Scenes."

### Integration Points
- The `actionLinks.apply` remains the external handoff point for Staff.
- Security Constraint: NEVER mention Camp Manitowa.

</code_context>

<deferred>
## Deferred Ideas

- None at this time.

</deferred>

---

*Phase: 05-staff-recruiting-and-contact-journey*
*Context gathered: 2026-03-12*
