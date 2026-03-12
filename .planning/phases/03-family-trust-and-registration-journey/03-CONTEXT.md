# Phase 3: Family Trust and Registration Journey - Context

**Gathered:** 2026-03-12
**Status:** Ready for planning

<domain>
## Phase Boundary

Build the family-facing pages and registration journey that help families understand what Camp Indigo Point is, what daily life feels like, how community care and accommodations work, how affordability is handled, and what to expect before leaving for the external registration flow.

</domain>

<decisions>
## Implementation Decisions

### Camp life story
- Lead the family journey with belonging and overnight trust rather than starting with schedule mechanics or organization history alone.
- Make the camp-life storytelling vivid and emotionally warm rather than purely practical, while still grounding it in concrete details.
- Structure camp-life content around both moments and systems: emotional feel plus specific realities like bunks, meals, activities, routines, and low-tech expectations.
- Frame the low-tech environment as healthy and intentional rather than as a harsh restriction.
- Keep the strongest emotional note as joyful reassurance.
- Speak directly, but gently, to parent anxiety about sending a child to an overnight camp.
- Use activities as proof of camp texture and personality, not just as a feature list.
- Keep independence and growth present, but lighter than belonging, care, and trust.

### Affordability and scholarships
- Keep affordability messaging emotionally warm and heartfelt, not merely procedural.
- Make scholarship reassurance strategically visible across the family journey, but do not let it overshadow the broader camp-life trust story.
- Keep the clearest exact cost information on the registration page rather than repeating the full number heavily across every page.
- Treat “No one will be turned away for lack of funds” as a strong supporting trust point rather than the single dominant headline.
- Explain the register-now-plus-deposit step clearly but gently.
- Make direct human contact a visible fallback for affordability questions without replacing the main registration path.
- Repeat affordability reassurance in a few strategic places across the family journey rather than only once or aggressively everywhere.

### Community care framing
- Treat community care as a core trust promise, not as a minor supporting detail.
- Speak very directly about names and pronouns so affirmation reads as intentional and active.
- Frame health, accommodations, and support as both competent and caring.
- Give community care a dedicated, substantial section in the family journey, then echo it in registration and FAQ content.
- Acknowledge family worry gently rather than ignoring it or centering fear too heavily.
- State clearly, but carefully, that camp is supportive without presenting itself as a therapeutic program.
- Keep the overall balance affirming and protective at the same time.
- Make direct outreach clearly available for accommodation and support questions without displacing the main registration flow.

### Claude's Discretion
- Exact distribution of content between the About Camp, Registration, FAQ, and homepage family sections.
- Exact visual treatment for family-trust sections, cards, and reassurance callouts within the Phase 2 shell.
- Exact microcopy refinements, as long as the approved tone and trust priorities remain intact.

### Visual asset migration
- Phase 3 should account for pulling over the real Camp Indigo Point logo and a selected set of authentic camp photos from the current WordPress site instead of relying on placeholder or starter imagery.
- Use the live logo asset at `https://www.campindigopoint.org/wp-content/uploads/2023/11/header-white.png` as the source for the recognizable Camp Indigo Point mark unless a better-quality source is discovered during implementation.
- Use the live homepage collage at `https://www.campindigopoint.org/wp-content/uploads/2024/06/cropped-camp-web-header-1-scaled-1.jpg` as an initial source for selecting family-facing photos and visual cues to migrate into the redesigned experience.
- Treat imported media as a local, optimized asset workflow with meaningful alt text and placement decisions that reinforce family trust, belonging, and lived camp texture.

</decisions>

<specifics>
## Specific Ideas

- The family journey should feel like a parent can imagine their child at camp, not just read a brochure about camp operations.
- The site should reassure families by naming what matters: overnight trust, affirmation, accommodations, scholarship access, and what happens next.
- Community care should feel like a lived part of camp culture and staffing, not a compliance paragraph.
- Registration should feel like a supported handoff, not a sudden jump from warm storytelling into a cold external form.
- The first family-facing visual pass should start replacing generic favicon, OG, and demo imagery with the real camp logo and a curated photo set from the live site.

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/routes/HomeRoute.jsx`: already provides a gateway-style homepage that can continue routing families into deeper trust pages.
- `src/routes/AboutRoute.jsx`, `src/routes/RegistrationRoute.jsx`, and `src/routes/FaqRoute.jsx`: existing routed family destinations that can be deepened rather than replaced wholesale.
- `src/components/site/PageFrame.jsx`: established route composition wrapper for hero, aside, and stacked content sections.
- `src/components/site/SiteHeader.jsx` and the shared shell: existing family-path entry and persistent CTA visibility that Phase 3 should preserve.
- `src/content/about.js`, `src/content/registration.js`, and `src/content/faq.js`: centralized family content modules already holding the key source material for this phase.

### Established Patterns
- The site now uses a routed shell with persistent actions, so the family journey should deepen page content inside that shell rather than creating special one-off layouts.
- Content is already centralized in `src/content/`, so Phase 3 should continue refining and rendering real content modules rather than embedding new trust copy directly in JSX.
- Accessibility, reduced-motion, and responsive behavior are already encoded at the shell layer, which lowers risk for richer family-page composition.

### Integration Points
- Family-trust storytelling should extend the existing homepage gateway and deepen the current About, Registration, and FAQ routes.
- Registration messaging should keep using the canonical action registry and shell CTA behavior created in earlier phases.
- Community care, scholarship, and practical family reassurance should flow consistently across the homepage, core family pages, and FAQ content instead of becoming isolated one-page explanations.

</code_context>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 03-family-trust-and-registration-journey*
*Context gathered: 2026-03-12*
