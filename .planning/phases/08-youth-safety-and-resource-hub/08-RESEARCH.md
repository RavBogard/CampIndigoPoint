# Phase 8 Research: Youth Safety UX & Resource Hub

**Phase:** 8 - Youth Safety UX & Resource Hub
**Date:** 2026-03-12
**Status:** Ready for planning

## Objective

Implement critical safety features ("Quick Exit") inspired by leading LGBTQ+ organizations, and upgrade the FAQ into an interactive, filterable resource center using Framer Motion.

Satisfies: `SAFE-01`, `SAFE-02`, `HUB-01`

## Key Conclusion

The Quick Exit feature is a pure front-end implementation that relies on browser APIs (`window.location.replace`) to navigate away without adding to the immediate back-button history stack. The Resource Hub requires a slight data refactor of the FAQ content to support client-side filtering via React state and Framer Motion.

## Architecture Patterns

### 1. Quick Exit Component
- **React Component:** A globally rendered component (`<QuickExit />`) placed inside `SiteLayout.jsx`.
- **CSS (Tailwind):** Fixed positioning (`fixed bottom-4 right-4 z-[100]`), distinct styling (e.g., a pill-shaped button with a red or neutral gray accent to stand out from the Teal/Orange).
- **Logic:**
  - `onClick` handler executes `window.location.replace('https://weather.com')`.
  - `useEffect` hook listens for the 'Escape' key. A ref tracks consecutive presses within a small time window (e.g., 3 presses within 1000ms) to trigger the exit.

### 2. Interactive Resource Hub (FAQ)
- **Data Refactor:** Change `faqPage.groups` in `src/content/faq.js` to a flat array of `items`, each with a `category` string.
- **State Management:** `FaqRoute.jsx` will hold `const [activeCategory, setActiveCategory] = useState('All')`.
- **Framer Motion Integration:**
  - Import `motion` and `AnimatePresence`.
  - Wrap the mapped list of FAQ items in `<AnimatePresence mode="popLayout">`.
  - Apply `initial`, `animate`, and `exit` props to the `<motion.article>` tags to handle fade/slide transitions when the filter changes.

## Validation Architecture

- **Automated:** Vitest to ensure the Quick Exit button renders globally and the FAQ component renders the filter buttons.
- **Manual:**
  - Click the Quick Exit button and verify the redirect.
  - Press 'Escape' three times quickly and verify the redirect.
  - Click FAQ filters and ensure smooth animation without layout jumping.

## Recommended Plan Shape

1. **Quick Exit Implementation:** Build the `QuickExit.jsx` component, add keyboard logic, and integrate it globally.
2. **FAQ Data Refactor:** Update `src/content/faq.js` to a flat, tagged structure.
3. **Resource Hub Build:** Rewrite `FaqRoute.jsx` with React state and Framer Motion.