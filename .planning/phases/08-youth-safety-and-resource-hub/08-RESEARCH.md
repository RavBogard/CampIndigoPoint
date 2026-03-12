# Phase 8 Research: Resource Hub

**Phase:** 8 - Resource Hub
**Date:** 2026-03-12
**Status:** Ready for planning

## Objective

Upgrade the FAQ into an interactive, filterable resource center using Framer Motion to better organize information and reduce cognitive load.

Satisfies: `HUB-01`

## Key Conclusion

The Resource Hub requires a slight data refactor of the FAQ content to support client-side filtering via React state and Framer Motion. 

## Architecture Patterns

### Interactive Resource Hub (FAQ)
- **Data Refactor:** Change `faqPage.groups` in `src/content/faq.js` to a flat array of `items`, each with a `category` string (e.g., 'Families', 'Donors', 'Staff').
- **State Management:** `FaqRoute.jsx` will hold `const [activeCategory, setActiveCategory] = useState('All')`.
- **Framer Motion Integration:**
  - Import `motion` and `AnimatePresence`.
  - Wrap the mapped list of FAQ items in `<AnimatePresence mode="popLayout">`.
  - Apply `initial`, `animate`, and `exit` props to the `<motion.article>` tags to handle fade/slide transitions when the filter changes.

## Validation Architecture

- **Automated:** Vitest to ensure the FAQ component renders the filter buttons and content.
- **Manual:** Click FAQ filters and ensure smooth animation without layout jumping.

## Recommended Plan Shape

1. **FAQ Data Refactor:** Update `src/content/faq.js` to a flat, tagged structure.
2. **Resource Hub Build:** Rewrite `FaqRoute.jsx` with React state and Framer Motion.
3. **Validation:** Ensure filtering works correctly and accessibly.