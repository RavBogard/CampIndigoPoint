# Phase 11 Research: Conversion UX Optimization

**Phase:** 11 - Conversion UX Optimization
**Date:** 2026-03-12
**Status:** Ready for planning

## Objective

Reduce friction to primary actions by keeping CTAs accessible during long scrolls, and increase engagement by visualizing the camp schedule as an interactive timeline.

Satisfies: `CONV-01`, `CONV-02`

## Key Conclusion

The addition of scroll-aware UI elements requires leveraging `framer-motion`'s scroll hooks to ensure performance. The Sticky Action Bar should be a global component injected into `SiteLayout` or `PageFrame`, while the Timeline is a specific content component replacing a static section in `AboutRoute`.

## Architecture Patterns

### 1. Sticky Action Bar
- **Component:** `<StickyActionBar />`
- **Logic:**
  - Use `framer-motion`'s `useScroll()` to track the `scrollY` value.
  - Use `useMotionValueEvent` to detect when the user scrolls past a certain threshold (e.g., 500px) and set an `isVisible` state to true.
  - Animate the bar sliding up from the bottom of the screen (`initial={{ y: 100 }} animate={{ y: 0 }}`).
- **Context:** Use the `useLocation()` hook from React Router to determine which CTA to show (e.g., if `pathname.includes('donate')`, show the Donate link).

### 2. "Day in the Life" Timeline
- **Data Refactor:** In `src/content/about.js`, change `campLife.bullets` to `campLife.schedule`, an array of objects: `{ title: 'Morning', description: 'Polar bear plunge...' }`.
- **Component:** `<CampTimeline items={schedule} />`
- **Layout:** Use a relative container with an absolute vertical line (border-l) on the left side (or center on desktop).
- **Animation:** Use `framer-motion`'s `whileInView` prop on the individual timeline items so they fade/slide in slightly as the user scrolls down the list, drawing the eye.

## Validation Architecture

- **Automated:** Vitest to ensure both new components render without throwing errors.
- **Manual:**
  - Scroll down a long page (like About) and verify the Sticky Action Bar appears and disappears at the correct thresholds without covering the footer.
  - Ensure the Timeline looks aligned on both mobile and desktop.

## Recommended Plan Shape

1. **Timeline Implementation:** Refactor data and build the `CampTimeline` component for the About page.
2. **Sticky Action Bar Implementation:** Build the scroll-aware bar and integrate it into the global layout.
3. **Validation:** Final UI and responsiveness audit.