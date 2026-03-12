# Phase 6 Research: UI and Tailwind CSS Refactor

**Phase:** 6 - UI and Tailwind CSS Refactor
**Date:** 2026-03-12
**Status:** Ready for planning

## Objective

Completely refactor the site's styling methodology by migrating from global cascading CSS to Tailwind CSS. The goal is to fix all layout bugs, standardize spacing, and guarantee mobile responsiveness down to 320px, while evolving the visual identity to be maintainable within the utility-first paradigm.

Satisfies: `ARCH-01`, `ARCH-02`, `LAY-01`, `LAY-02`, `RES-01`, `RES-02`, `BRND-01`

## Key Conclusion

A full rewrite of the CSS using Tailwind is the most sustainable path forward. It eliminates the "spooky action at a distance" caused by the current `index.css` and enforces a predictable spacing and responsive scale. The core challenge will be preserving the "Soul & Story" aesthetic (Teal/Orange colors, organic shapes) within Tailwind's utility constraints.

## Current Starting Point

- The site currently relies on a 300+ line `src/index.css` file filled with custom class names (`.content-panel--wavy`, `.home-hero__copy`, etc.).
- Layout is a mix of global flex/grid rules and media queries that often conflict, causing overflow and alignment bugs.
- Vite is the build tool, making Tailwind integration simple.

## Architecture Patterns

### 1. Tailwind Integration
- Install `tailwindcss`, `@tailwindcss/vite` (Tailwind v4 is preferred for modern Vite setups, otherwise standard PostCSS setup).
- Create a configuration file to inject the custom Camp Indigo Point palette (Teal, Orange, Sand) and typography (Montserrat, Quicksand) into the Tailwind theme.

### 2. Layout Strategy (Pragmatic Approach)
- **Grid:** Use Tailwind's grid utilities (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) for structural, multi-column layouts (like the audience path cards on the homepage).
- **Flexbox:** Use flexbox (`flex flex-col md:flex-row`) for component-level alignment and one-directional stacks.
- **Container:** Rely heavily on a standardized max-width container (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`) to prevent edge-to-edge stretching.

### 3. Preserving the "Soul"
- The "wavy" and "affirming" visual touches will be recreated using Tailwind's extensive `rounded-*` utilities (e.g., `rounded-[3rem_1.5rem_4rem_2rem]`) and custom box shadows.
- Complex background blobs might need to be converted to inline SVG or handled carefully with absolute positioning utility classes to ensure they don't cause overflow.

## Validation Architecture

- **Automated:** Rely on existing component and route rendering tests (Vitest) to ensure the DOM structure hasn't fundamentally broken.
- **Manual:** Exhaustive browser-based auditing across desktop, tablet, and mobile viewports. Horizontal scrolling is an automatic failure.

## Recommended Plan Shape

1. **Architecture Initialization:** Install Tailwind, configure the theme with brand tokens, and inject into `index.css`.
2. **Global Shell Refactor:** Refactor `SiteLayout`, `SiteHeader`, `SiteFooter`, and `PageFrame` to use Tailwind utilities.
3. **Route Refactor:** Iteratively replace custom classes with Tailwind utilities across all individual route components (Home, About, Donate, etc.), stripping legacy CSS along the way.