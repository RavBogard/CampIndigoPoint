# Research: Stack

## Core Question
What stack additions/changes are needed for standardizing UI and layout, specifically evaluating Tailwind CSS?

## Analysis
To fix "super messed up" layout and formatting across a React/Vite site without rebuilding from scratch, the current stack has two paths:
1.  **Refactor Vanilla CSS:** Continue using `index.css` and `App.css` but impose a strict methodology (BEM, CSS Modules, or CSS Variables for a design system).
2.  **Migrate to Tailwind CSS:** Add Tailwind as a PostCSS plugin to Vite. This provides utility classes that enforce consistent spacing, typography, and flexbox/grid behaviors directly in the JSX.

**Recommendation:** Migrate to **Tailwind CSS**. It directly solves the problem of "broken grids and flexbox behaviors" by co-locating styling with markup, removing the cascading side-effects that cause layout bugs in global CSS files.

## Stack Changes
- Add `tailwindcss`, `@tailwindcss/vite` (or `postcss`, `autoprefixer` depending on Vite version, Tailwind v4 uses Vite plugin directly).
- Minimal configuration in `vite.config.js`.
- Create `tailwind.css` to replace or supplement `index.css`.
- Keep `clsx` or `tailwind-merge` if conditional class names are heavily used.

## Integration Notes
- Tailwind can be introduced incrementally. Existing `.content-card--wavy` classes can remain while layout utility classes (`flex`, `grid`, `gap-4`) are used to fix the structure.
- We must configure the Tailwind theme to perfectly match the existing "Soul & Story" palette (Teal: `#1f5f7a`, Orange: `#e17a2d`, Sand: `#fffaf5`) and typography (Montserrat, Quicksand) established in Phase 3.