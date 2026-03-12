# Research: Features

## Core Question
How do the target features (standardized spacing, fixed layouts, responsive behavior) typically work?

## Analysis
The core features of a UI refactor aren't new capabilities for the user, but structural guarantees for the site.

**Table Stakes (Must Haves):**
- **Consistent Spacing Scale:** Padding and margin must use a predictable scale (e.g., 4px, 8px, 16px, 24px) rather than arbitrary pixel values.
- **Robust Flex/Grid:** Sections that require side-by-side layouts (like the audience paths or impact tiers) must not collapse, overlap, or overflow their containers on smaller screens.
- **Mobile Responsiveness:** The site must scale gracefully down to 320px width without horizontal scrolling or illegible text.
- **Container Boundaries:** Content must respect a maximum width on large screens to prevent infinite stretching.

**Differentiators (High Polish):**
- **Fluid Typography:** Headings that scale smoothly between mobile and desktop sizes.
- **Organic Shapes Integration:** Preserving the "wavy" and "affirming" visual aesthetic (border-radii, drop shadows) while standardizing the underlying layout skeleton.

## Dependencies
- The content layer (`src/content/`) remains untouched. This is purely a presentation layer fix.
- Components in `src/components/site/` (like `PageFrame`, `SiteHeader`) will need heavy class refactoring.