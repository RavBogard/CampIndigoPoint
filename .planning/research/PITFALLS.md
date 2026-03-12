# Research: Pitfalls

## Core Question
What are the risks associated with these new UX and safety features?

## Analysis

**1. The "Quick Exit" False Promise**
- **Risk:** Assuming `window.location.replace()` completely hides the visit. It does not erase the browser history entirely, it only prevents the immediate "Back" button from returning to the site.
- **Mitigation:** The Quick Exit is a panic button, not an invisibility cloak. We must not over-promise its capability. It gets the user off the screen immediately if someone walks in the room.

**2. Bento Grid Mobile Collapse**
- **Risk:** Complex asymmetrical grids look amazing on desktop but can become an endless, repetitive scroll of identical boxes on mobile.
- **Mitigation:** Carefully curate the mobile reading order. We may need to hide certain decorative "Bento" elements on mobile (using `hidden md:block`) to keep the core content scannable.

**3. Framer Motion Bloat**
- **Risk:** Over-animating the site, causing performance issues or triggering motion sickness.
- **Mitigation:** Respect the `prefers-reduced-motion` media query. Keep animations extremely subtle (e.g., a fast `opacity` fade or a slight `y` transform). Do not animate every element on scroll.

**4. Over-Engineering the Dashboard**
- **Risk:** Trying to make the Donor Dashboard connect to a real database (like DonorPerfect API) for live updates.
- **Mitigation:** Strictly adhere to the constraint: use static data defined in `src/content/`. The metrics (140+ campers, 30 states) change yearly, not daily. Manual updates are the correct architectural choice for v1.2.