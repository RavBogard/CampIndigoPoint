## Phase 3 Research: Family Trust and Registration Journey

**Phase:** 3 - Family Trust and Registration Journey  
**Date:** 2026-03-12  
**Status:** Updated for "Soul & Story" Pivot

## Objective

Deliver a family-facing experience that doesn't just "inform" but "sells the magic" of Camp Indigo Point. The site must feel **distinct, campy, and unapologetically queer** while building the trust necessary for an off-site registration handoff.

### The "Soul & Story" Mandate

1.  **Distinct Pages:** Every route must have its own visual character. Avoid "copy-paste" layouts.
2.  **Camp Energy:** Use organic shapes, warm "sunlight" tones, and high-energy activity photos.
3.  **Queer Identity:** Celebrate queer and trans joy as the default. Use affirming language and pride-inspired (but nature-integrated) accents.
4.  **Photo-First:** Layouts must be built *around* the photos of real campers and staff.

## Vibe Map

| Page | Emotional Goal | Visual Strategy |
| :--- | :--- | :--- |
| **Home** | **The Welcome** | High-energy collage, "First Impression" joy, immediate path-finding. |
| **About** | **The Adventure** | "A Day in the Life," activity lists, organic "wavy" sections, focus on nature and friendship. |
| **Registration** | **The Care** | Warm, supportive, focus on affordability and "No One Turned Away." Less "form," more "hand-holding." |
| **FAQ** | **The Clarity** | Direct, honest, removing blockers with a warm voice. |

## Key Conclusion

Phase 3 is the "Soul" phase. We are replacing the generic "modern editorial" shell with a vibrant, playful, and trustworthy identity that reflects the real Camp Indigo Point. 

### Visual Strategy:
*   **Palette:** Teal (#1f5f7a) and Orange (#e17a2d) as the primary energy. Warm Sand (#fffaf5) as the base.
*   **Typography:** Montserrat for bold, "active" headings; Quicksand for friendly, readable body text.
*   **Shapes:** Organic rounded corners (var(--radius-lg)), "wavy" dividers, and overlapping media blocks.

## Current Starting Point

## Existing strengths

- The routed shell, persistent CTAs, mobile nav, accessibility baseline, and metadata plumbing are already in place from Phases 1 and 2.
- Family-route destinations already exist:
  - `src/routes/HomeRoute.jsx`
  - `src/routes/AboutRoute.jsx`
  - `src/routes/RegistrationRoute.jsx`
  - `src/routes/FaqRoute.jsx`
- Core family copy already lives in centralized content modules:
  - `src/content/home.js`
  - `src/content/about.js`
  - `src/content/registration.js`
  - `src/content/faq.js`
- The current content already covers much of the factual ground for camp life, accommodations, scholarships, history, and community care.

## Current gaps

- The family routes are still mostly text cards and do not yet feel like a full trust-building journey.
- The shell still uses a placeholder text badge (`CIP`) instead of the real camp logo.
- Public brand assets remain generic placeholders:
  - `public/favicon.png`
  - `public/og-image.png`
- `src/content/meta.js` points to `/og-image-camp-indigo-point.png`, but that file does not currently exist in `public/`.
- There is no explicit content model yet for authentic photos, captions, alt text, or placement intent.
- The FAQ is still broad and compact rather than intentionally tuned to the Phase 3 family trust questions.

## Standard Stack

Use the existing stack. Do not add a CMS, gallery library, or head-management dependency for this phase.

- React 19
- React Router 7
- Vite
- Centralized plain-JS content modules in `src/content/`
- Existing CSS system in `src/index.css`
- Existing metadata helper in `src/lib/metadata.js`
- Existing Vitest + Testing Library setup for regression coverage

## Architecture Patterns

## 1. Content-first route composition

Keep trust-sensitive copy, media metadata, and CTA configuration in `src/content/`, not inline in JSX. Route files should remain mostly presentational composers of structured content.

Recommended pattern:

- add new content structures to `home.js`, `about.js`, `registration.js`, and `faq.js`
- keep route files responsible for layout only
- keep action URLs sourced from `src/content/actions.js`
- keep contact facts sourced from `src/content/brand.js` or `src/content/site.js`

## 2. Evolve `PageFrame` instead of inventing one-off layouts everywhere

`src/components/site/PageFrame.jsx` is already the shared page wrapper for hero, aside, and stacked sections. Phase 3 should either:

- add a lightweight `media` prop to support hero-side image/caption rendering, or
- add one reusable editorial media block component and use it across family routes

Avoid building totally separate page shells for family pages.

## 3. Treat media migration as content architecture, not just styling

Authentic photos and the live logo should be managed as first-class content assets with:

- local file storage
- explicit alt text
- page placement intent
- optional captions
- stable paths for metadata and social sharing

Do not hotlink the production WordPress assets from the redesign.

## 4. Separate brand asset migration from page-photo storytelling

These are related but should be planned as distinct workstreams:

- Brand asset migration:
  - header logo
  - favicon
  - OG image
- Family storytelling imagery:
  - home page trust/support visual
  - about page camp-life and belonging visuals
  - registration page reassurance/support visual

This prevents a single "images task" from becoming vague and hard to verify.

## Information Architecture Recommendations

Phase 3 should create a clear family journey across existing routes instead of introducing more navigation endpoints.

## Homepage (`/`)

Role in journey:

- reassure families in the first viewport
- confirm who camp is for
- connect trust signals to the next click

Recommended additions:

- tighten the hero so it explicitly names residential overnight camp format and grade range
- add a family-trust visual area using the curated real photo set
- strengthen the family gateway card so it promises camp-life details, community care, affordability, and registration expectations
- surface 2-3 trust facts above the fold:
  - residential overnight format
  - grades/age range
  - scholarship availability

Requirement coverage emphasis:

- `FAM-01`
- `FAM-02`
- `FAM-04`

## About Camp (`/about`)

Role in journey:

- provide the emotional and practical proof that camp is real, caring, and specific

Recommended structure:

- hero: belonging plus overnight trust
- section: what a day feels like
- section: activities and traditions
- section: residential life and low-tech expectations
- section: community care and names/pronouns affirmation
- section or aside: history, mission, and organizational context

Content guidance:

- keep low-tech framing intentional and healthy, not punitive
- use activity lists as evidence of camp texture, not just inventory
- keep the "not a therapeutic program" clarification visible but nested inside the larger message of care and support

Requirement coverage emphasis:

- `FAM-01`
- `FAM-02`
- `FAM-03`
- `TRST-01`

## Registration (`/registration`)

Role in journey:

- reassure families before the external handoff
- explain affordability and accommodations clearly
- tell families exactly what happens next

Recommended structure:

- hero: supportive registration framing
- section: bunking and residential logistics
- section: affordability, cost context, scholarships, and no-one-turned-away promise
- section: accommodations and support conversations
- section: external handoff expectations with bullet-proof clarity
- optional small contact fallback card for affordability or accommodation questions

Content guidance:

- keep the exact camp cost on this page rather than everywhere
- keep "register now + deposit + follow-up for support" explicit and gentle
- make direct contact visible without replacing the main CTA flow

Requirement coverage emphasis:

- `FAM-03`
- `FAM-04`
- `FAM-05`

## FAQ (`/faq`)

Role in journey:

- remove common blockers without forcing direct outreach

Family FAQ topics should explicitly cover:

- who camp is for
- overnight structure
- bunking approach
- names/pronouns affirmation
- accommodations/support conversations
- low-tech expectations
- affordability and scholarship process
- what the registration click opens

Keep donor/staff questions if helpful for whole-site continuity, but Phase 3 planning should prioritize a stronger family FAQ group.

Requirement coverage emphasis:

- `TRST-03`
- support for `FAM-01` through `FAM-05`

## Content Model Recommendations

Extend the existing content modules with structures like these:

```js
export const familyMedia = {
  homeHero: {
    src: "/images/families/home-belonging.jpg",
    alt: "Campers gathered together outdoors during a Camp Indigo Point activity.",
    caption: "Real moments from Camp Indigo Point.",
    intent: "Belonging and real camp energy",
  },
}
```

Recommended content fields:

- `src`
- `alt`
- `caption`
- `intent`
- optional `credit` or `source`
- optional `cropFocus` only if the layout truly needs it

Recommended principle:

Each image should exist because it reinforces a trust question, not because the page needs decoration.

## Media Migration Guidance

## Source assets called out in phase context

- Live logo source:
  - `https://www.campindigopoint.org/wp-content/uploads/2023/11/header-white.png`
- Live homepage collage source:
  - `https://www.campindigopoint.org/wp-content/uploads/2024/06/cropped-camp-web-header-1-scaled-1.jpg`

Observed planning implication:

- The current logo asset is recognizable and suitable as the initial source for the redesigned header mark unless implementation discovers a higher-quality source file.
- The homepage collage is valuable as a curation source, not as a single all-purpose hero image. The collage should guide selection of a smaller local set of authentic photos tied to specific story beats.

## Recommended asset workflow

1. Download the live logo and selected photo assets into the repo.
2. Store brand assets in a stable public path such as:
   - `public/brand/logo.png`
   - `public/brand/favicon.png`
   - `public/brand/og-image-camp-indigo-point.png`
3. Store curated family photos in a stable path such as:
   - `public/images/families/...`
4. Reference those assets from content modules rather than hardcoding them directly in route JSX.
5. Replace the header text badge in `src/components/site/SiteLayout.jsx` with the real logo asset.
6. Update `src/content/meta.js` so the default `ogImage` matches a real file path.
7. Tune `src/index.css` for logo sizing, image ratios, card overflow, and mobile scaling.

## Initial photo curation set

Start with a small set of 3-5 images, each attached to a specific trust story:

- belonging/community
- active camp life outdoors
- water or activity joy
- residential/restful texture
- supportive registration reassurance if a suitable image exists

Avoid launching with a large gallery in Phase 3. The goal is trust-building specificity, not volume.

## Accessibility and editorial requirements for imported media

- Every imported image needs meaningful alt text.
- Decorative images should be rare; most Phase 3 images are editorial and should carry content value.
- Captions should be used when they add trust or context, not automatically for every image.
- Image choices should avoid ambiguity around supervision, safety, or age appropriateness.
- Cropping must preserve faces, activity context, and camp setting without making images feel generic.

## Don’t Hand-Roll

- Do not build a custom image management system.
- Do not add a carousel for the family journey.
- Do not add CMS-like editing for media in v1.
- Do not invent a separate family-only shell or route tree.
- Do not spread trust-critical copy across ad hoc JSX constants.
- Do not hotlink live WordPress assets in production.

## Common Pitfalls

- Flattening the camp voice into generic summer-camp copy and losing the specific queer/trans family trust signals.
- Treating community care like a compliance paragraph instead of a major reassurance pillar.
- Mentioning scholarships without explaining the real next step families should take.
- Repeating cost information too broadly and overpowering the rest of the family story.
- Using authentic photos without a maintainable content structure for alt text, captions, and placement.
- Replacing the shell badge with a large unconstrained logo that breaks the sticky header on mobile.
- Adding images without ratio control, causing uneven cards and layout jumps.
- Leaving placeholder favicon/OG assets in place after switching the visible shell branding.
- Expanding FAQ breadth without tightening answers around the actual family blockers to registration.

## Validation Architecture

Phase 3 should be validated with a combination of content assertions, route rendering checks, and manual mobile/a11y review.

## Automated validation

Extend the existing test harness with route-level checks for:

- homepage includes audience pathing plus family trust facts
- about page renders camp-life, accommodations, community care, and history content
- registration page renders affordability promise, support path, and external handoff explanation
- FAQ page includes family answers for the practical questions Phase 3 owns
- imported editorial images render with non-empty alt text
- primary registration CTA remains available from high-intent family pages

Recommended test scope:

- content rendering tests for each family route
- a metadata regression check if OG image path or page descriptions change
- a shell-level assertion that the header logo renders with accessible name or supporting text

## Manual validation

Manual checks should explicitly answer:

1. Can a parent understand who camp is for before clicking off-site?
2. Can a parent picture what overnight life feels like?
3. Can a parent find names/pronouns and support language quickly?
4. Can a parent understand scholarships and what to do if affordability is a concern?
5. Does the registration page explain the external handoff clearly?
6. On a phone-sized viewport, does the logo, hero, and CTA stack remain readable and calm?

## Planning Risks

## Content and trust risks

- Trust language may become too sparse if the team over-optimizes for brevity.
- The distinction between supportive camp and therapeutic program must remain clear.
- The affordability section can unintentionally become either too vague or too dominant.

## Design and implementation risks

- Header/logo integration may require careful responsive tuning because the shell already has navigation and CTA density.
- New imagery can expose layout weaknesses in card heights, aspect ratios, and hero composition.
- If PageFrame is extended too narrowly, each family route may start reimplementing media layout differently.

## Operations risks

- If current year or cost details are updated later, the registration page becomes a likely drift point.
- If photo metadata is not centralized, future edits may orphan alt text or duplicate the same image with conflicting captions.

## Open Questions To Resolve During Planning

- Is there a higher-quality logo source than the current `header-white.png`, or should Phase 3 plan around that PNG as the production source?
- Which exact 3-5 authentic photos from the live site best map to the family trust story beats?
- Should the homepage family journey route point remain `/registration`, or should the About page become the stronger first stop for story before handoff?
- Does `PageFrame` gain a generalized media prop, or is a reusable editorial media component cleaner for Phase 3 and later phases?
- Should FAQ stay multi-audience in one page layout, or should family questions become visually dominant within the existing grouped structure?

## Suggested Plan Shape

Phase 3 planning will likely work best as 3 implementation streams:

1. Family content architecture and route composition
2. Brand and authentic media migration
3. Validation and refinement for trust, accessibility, and handoff clarity

That split matches the real work better than page-by-page implementation alone.

## Code Examples

## Example: reusable hero media support

```jsx
<PageFrame
  eyebrow="About camp"
  title={aboutPage.title}
  intro={aboutPage.intro}
  media={aboutPage.heroMedia}
  aside={<TrustCard {...aboutPage.history} />}
>
```

## Example: route-local editorial image block

```jsx
<figure className="editorial-media">
  <img
    src={aboutPage.heroMedia.src}
    alt={aboutPage.heroMedia.alt}
  />
  <figcaption>{aboutPage.heroMedia.caption}</figcaption>
</figure>
```

## Example: registration handoff content

```js
handoff: {
  heading: "What happens next",
  bullets: [
    "The registration button opens the official Active Camps form.",
    "Families can complete the external form and pay the deposit there.",
    "If a family needs scholarship or accommodation support, camp follows up directly."
  ]
}
```

## Recommendation For Planning

Plan Phase 3 as an editorial and trust-composition phase built on existing infrastructure, not as a design-system rebuild. The strongest plan will preserve the centralized content pattern, explicitly model imported media, and make the registration handoff feel like the natural next step after reassurance rather than a sudden exit.

## RESEARCH COMPLETE
