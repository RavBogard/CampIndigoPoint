# Research: Architecture

## Core Question
How does a UI/CSS refactor integrate with the existing architecture?

## Analysis
The current architecture uses a centralized content model feeding into React Router page components, styled by a global `index.css`.

**Current Pain Points:**
Global CSS often leads to "spooky action at a distance," where fixing a padding issue on the Home page breaks the alignment on the Staff page. The layout bugs mentioned are symptoms of this pattern.

**Proposed Architecture Shift:**
Move from **Semantic Global CSS** to **Utility-First CSS (Tailwind)**.

1.  **Theme Configuration:** The central source of truth for design tokens (colors, fonts, radii) moves from `:root` variables in `index.css` to `tailwind.config.js` (or `app.css` theme block in Tailwind v4).
2.  **Layout Components:** `PageFrame` and structural elements in `Route` components will swap custom class names for Tailwind utilities (`flex-col`, `gap-6`, `max-w-7xl`, `mx-auto`).
3.  **Component Encapsulation:** Complex, highly specific visual elements (like the organic wavy borders) can remain as custom classes mapped to Tailwind using `@apply` or kept in a scoped CSS file, but the *layout positioning* of those elements will be handled by Tailwind.

## Build Order
1. Install and configure Tailwind.
2. Port brand colors and fonts to Tailwind theme.
3. Refactor global layout wrappers (`SiteLayout`, `PageFrame`, `SiteHeader`).
4. Iteratively refactor individual Routes (Home, About, etc.) replacing layout CSS with utility classes.