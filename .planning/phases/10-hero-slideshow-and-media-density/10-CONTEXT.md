# Phase 10: Hero Slideshow & Media Density - Context

**Gathered:** 2026-03-12
**Status:** Ready for planning

<domain>
## Phase Boundary

Implement a crossfade hero image slideshow on the homepage to showcase the depth of camp joy. Systematically increase media density across all major routes (Home, Registration, Donate, Staff, FAQ, Contact) so every page features 1-3 highly contextual photos, utilizing best-practice UI/UX grid and layout integration.

</domain>

<decisions>
## Implementation Decisions

### Homepage Hero Slideshow
- **Functionality:** The hero section will automatically cycle through a curated array of 3-5 high-quality images.
- **Animation:** Use a classic, emotional "crossfade" (dissolve) transition between images. The fade should be smooth and slow (e.g., 1-second transition every 5 seconds) to avoid frantic or distracting movement.
- **Implementation:** Build a custom React component (`HeroSlideshow.jsx`) using `framer-motion` for the opacity transitions.

### Site-Wide Media Density
- **Goal:** Ensure no page feels like a "wall of text." Every route must integrate at least one additional photo beyond the hero image.
- **Layout Integration:** Do not just "drop" images between paragraphs. Use UI/UX best practices:
  - Integrate photos into the existing Bento Box grids (e.g., as `col-span-1` visual blocks).
  - Use photos as supportive media alongside or within `content-card` elements.
  - Maintain the "organic" feel by using the established Tailwind border-radius classes (`rounded-2xl`, `rounded-[1.4rem]`).

</decisions>

<specifics>
## Specific Ideas

- **Homepage Addition:** Add at least one more photo block into the Bento grid below the gateway.
- **Contact/FAQ Pages:** These are currently very text-heavy. Injecting photos of smiling staff or supportive camper moments will soften the administrative feel of these pages.
- **Image Sourcing:** Utilize the existing batch of photos in `public/images/gallery/camp-photo-[1-12].jpg`.

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- The `PageFrame` component currently accepts a single `media` object. We will need to either update `PageFrame` to accept an array (for the slideshow) or handle the slideshow logic within the route component and pass the rendered node to `PageFrame` (or bypass the `media` prop entirely for the homepage).
- We have 12 high-quality photos available in `public/images/gallery/`.

### Established Patterns
- Tailwind CSS v4 is used for all layout positioning.
- `framer-motion` is already installed and used for the FAQ Resource Hub, making it perfect for the crossfade slideshow.

</code_context>

<deferred>
## Deferred Ideas

- None.

</deferred>

---

*Phase: 10-hero-slideshow-and-media-density*
*Context gathered: 2026-03-12*