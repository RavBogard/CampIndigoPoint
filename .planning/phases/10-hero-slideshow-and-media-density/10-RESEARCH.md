# Phase 10 Research: Hero Slideshow & Media Density

**Phase:** 10 - Hero Slideshow & Media Density
**Date:** 2026-03-12
**Status:** Ready for planning

## Objective

Elevate the site's emotional impact and visual engagement by implementing an automated crossfade hero slideshow on the homepage and systematically increasing photo density across all pages using modern UI grids.

Satisfies: `MEDIA-02`, `MEDIA-03` (New Requirements)

## Key Conclusion

The requested features require a balance of new component logic (the slideshow) and thoughtful CSS grid adjustments to weave photos into text-heavy pages without breaking the established "Soul & Story" design system. The existing `framer-motion` package is the correct tool for the slideshow, avoiding the need for heavy carousel libraries.

## Architecture Patterns

### 1. Homepage Hero Slideshow
- **Component:** Create `HeroSlideshow.jsx`. It will accept an array of image paths and `alt` strings.
- **State Management:** Use `useState` and `useEffect` (with `setInterval`) to track the `currentIndex`.
- **Animation:** Use `framer-motion`'s `<AnimatePresence>` and `<motion.img>` to handle the crossfade.
  - `initial={{ opacity: 0 }}`
  - `animate={{ opacity: 1 }}`
  - `exit={{ opacity: 0 }}`
  - `transition={{ duration: 1 }}`
- **Integration:** Update `HomeRoute.jsx` to pass the slideshow component into the `PageFrame` (this will require updating `PageFrame` to accept a React Node for `media`, not just an object, or bypassing it).

### 2. Media Density Integration
- **Strategy:** Review `RegistrationRoute`, `DonateRoute`, `StaffRoute`, `FaqRoute`, and `ContactRoute`.
- **Implementation:** 
  - Add image blocks as new grid children or place them inside existing `<section>` or `<article>` tags.
  - Use Tailwind's `aspect-video` or `aspect-[4/3]` utilities combined with `object-cover` and the established border radii (`rounded-2xl` or `rounded-[1.4rem]`) to ensure the photos fit the brand style perfectly.

## Validation Architecture

- **Automated:** Vitest rendering checks for the new `HeroSlideshow` component and the updated routes.
- **Manual:** Verify the crossfade animation is smooth and doesn't cause layout shifting. Check all routes on mobile to ensure the new photos stack cleanly and don't create awkward gaps.

## Recommended Plan Shape

1. **Build the Slideshow:** Create the `HeroSlideshow` component and update `PageFrame` to support it. Integrate into `HomeRoute`.
2. **Increase Media Density:** Systematically add photos to Registration, Donate, Staff, FAQ, and Contact pages using best-practice UI layouts.
3. **Validation:** Final UI and responsiveness audit.