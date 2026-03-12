# Research Summary: UI and Layout Refactor

## Domain Overview
To resolve the "super messed up" layout and formatting issues, the project needs to migrate away from global, cascading CSS layouts towards a highly predictable, utility-first styling architecture.

## Key Findings

**Stack Additions:**
- **Tailwind CSS:** The recommended path forward. It eliminates cascading side-effects and forces consistent spacing and layout behaviors by co-locating styling with markup.

**Feature Table Stakes:**
- **Consistent Spacing:** Eliminate arbitrary pixel values.
- **Robust Layout Skeletons:** Fix broken grids and flexbox overlaps.
- **Mobile First:** Ensure absolute stability on small viewports.
- **Brand Preservation:** The new structural stability cannot sacrifice the "Soul & Story" aesthetic (Teal/Orange, wavy shapes, organic feel).

**Architecture Integration:**
- Design tokens (colors, fonts) will move to the Tailwind configuration.
- Global layout CSS will be systematically stripped out and replaced with utility classes in the React components (`flex`, `grid`, `gap`, `p-*`, `m-*`).
- Highly specific visual flourishes (like the organic wavy backgrounds) can be retained via `@apply` or targeted custom classes, but their positioning on the page will be governed by Tailwind.

**Watch Out For:**
- **Frankenstein Styling:** Mixing legacy global layouts with utility classes causes specificity wars. Remove old CSS as you apply new classes.
- **Losing the Soul:** Failing to configure the brand palette in Tailwind immediately will make the site look like a generic tech template.
- **Mobile Breakage:** Always style mobile first.

## Next Steps
Proceed to defining the requirements, ensuring that the migration to Tailwind (or strict CSS methodology) is the central technical requirement, explicitly bounded by the need to preserve the established brand identity.