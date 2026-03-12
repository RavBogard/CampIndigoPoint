# Research: Features

## Core Question
How will the four core features of v1.2 be implemented purely on the front-end?

## Analysis

### 1. "Bento Box" Storytelling (Home & About)
- **Concept:** Replace uniform card stacks with an asymmetrical grid that mixes text, large quotes, and imagery.
- **Implementation:** Use Tailwind's CSS Grid (`grid-cols-4` or `grid-cols-6`) with `col-span` and `row-span` classes to create varied, interlocking shapes.
- **Content:** Extract 3-4 powerful quotes from the Washington Post/JTA articles (e.g., "A space to not feel like an outsider") and display them prominently in colored grid cells. Fix the weird "Find the next right page" copy on the homepage.

### 2. Youth Safety UX: "Quick Exit"
- **Concept:** A persistent, highly visible button (and keyboard shortcut like `Escape` x 3) that instantly leaves the site.
- **Implementation:** A fixed React component in the corner. On click, it executes `window.location.replace('https://weather.com')` to prevent the camp site from showing up immediately if someone hits the browser 'Back' button.

### 3. Donor Impact Dashboard
- **Concept:** A visual representation of the camp's success.
- **Implementation:** A Bento-style grid on the Donate page showing "Metrics": "140+ Campers," "30 States," "4 Summers," "1 Promise: No One Turned Away."
- **Visual:** Large numbers, icons (Lucide), and short descriptive text, styled with the Teal/Orange brand colors.

### 4. Interactive Resource Hub (FAQ)
- **Concept:** Upgrade the static FAQ to be filterable.
- **Implementation:** Store FAQ items in an array with `tags` (e.g., 'families', 'donors', 'medical'). Build a React component with tag buttons that filter the displayed list using simple React state, animating the transitions with Framer Motion.