# Research: Pitfalls

## Core Question
What are the common mistakes when refactoring UI layouts and migrating to Tailwind in an existing project?

## Analysis

**1. The "Half-Migrated" Frankenstein**
- **Warning Sign:** Mixing global CSS layout rules with Tailwind utility classes on the same elements, leading to specificity conflicts where utility classes don't apply as expected.
- **Prevention:** Strip existing layout CSS (margins, padding, display, widths) from `index.css` as you add Tailwind classes to the JSX. Do not try to maintain both simultaneously for the same layout concerns.

**2. Losing the Brand "Soul"**
- **Warning Sign:** The site becomes a generic "Tailwind template" because standard Tailwind grays and blues replace the custom Teal/Orange/Sand palette.
- **Prevention:** The very first step of the migration MUST be defining the exact brand colors, fonts, and custom border-radii in the Tailwind configuration. Disable default colors if necessary to enforce brand compliance.

**3. Responsive Breakage During Transition**
- **Warning Sign:** Fixing desktop breaks mobile, or vice versa, because media queries in legacy CSS clash with Tailwind's `md:`, `lg:` prefixes.
- **Prevention:** Adopt a mobile-first approach. Write the base utility classes for the smallest screen first, then add breakpoints (`md:flex-row`). Test every route on mobile simulation continuously.

**4. The `PageFrame` Bottleneck**
- **Warning Sign:** `PageFrame.jsx` becomes bloated with layout logic that doesn't fit every page.
- **Prevention:** Ensure `PageFrame` only handles the outermost container limits and the Hero section. Let the children routes handle their own internal `grid` or `flex` stacks.