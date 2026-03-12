# Research: Stack

## Core Question
What stack additions are needed to support the Story and Safety Expansion (Bento Box UI, Interactive FAQ, Donor Dashboard, Quick Exit) using only existing front-end capabilities?

## Analysis
The current stack is React, Vite, React Router, and Tailwind CSS v4. This is highly capable. We do not need a backend CMS or database.

**Stack Additions:**
1.  **Framer Motion (`framer-motion`):** Already in `package.json`. We will use this to power the interactive testimonial carousels, the FAQ filtering animations, and the Bento Box entry animations.
2.  **Lucide React (`lucide-react`):** Already in `package.json`. We will use this for icons in the Donor Dashboard and the Quick Exit button.

## Architecture
- **No Backend:** The Donor Dashboard will use static data (updated manually in `src/content/`) rather than an API feed.
- **Safety First:** The "Quick Exit" feature must use browser APIs (`window.location.replace()`, `history.pushState()`) to navigate away without leaving a prominent trace in the immediate back button history.

## Conclusion
The current stack is perfectly suited for this milestone. No new heavy dependencies are required. We will rely on React state and Framer Motion for interactivity.