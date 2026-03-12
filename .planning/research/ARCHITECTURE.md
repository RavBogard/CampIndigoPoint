# Research: Architecture

## Core Question
How do the new interactive features integrate with the existing React Router and Tailwind architecture?

## Analysis

**Content Architecture:**
- `src/content/site.js` will need a new array for `testimonials` or `pressQuotes` to feed the Bento boxes.
- `src/content/faq.js` will need to be refactored from an object of grouped arrays into a flat array of objects with a `tags` property to enable dynamic filtering.
- `src/content/donate.js` will need a `metrics` array added for the Impact Dashboard.

**Component Architecture:**
- **QuickExit.jsx:** A new global component. It must be added to `SiteLayout.jsx` so it persists across all routes.
- **BentoGrid.jsx:** A new shared layout component that accepts mixed content types (text, quote, image) and renders them in an asymmetrical grid.
- **ResourceHub.jsx:** A new interactive component that replaces the static mapping currently inside `FaqRoute.jsx`.

**Tailwind Integration:**
- The Bento grids will rely heavily on Tailwind's arbitrary values or complex grid classes (e.g., `md:col-span-2`, `lg:row-span-2`).
- We must ensure the Bento boxes remain fully responsive (collapsing to a single column on mobile).