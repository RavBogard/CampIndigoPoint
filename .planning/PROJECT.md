# Camp Indigo Point Website Redesign

## Current Milestone: v1.2 Story and Safety Expansion

**Goal:** Elevate the site from a functional brochure to a world-class digital experience by implementing immersive storytelling, advanced safety UX, and data-driven donor impact, using only existing assets and front-end engineering.

**Target features:**
- **"Bento Box" Storytelling:** Redesign key layouts (and fix weird homepage copy) using modern, scannable grids that weave extracted media quotes and camper testimonials directly into the narrative flow.
- **Youth Safety UX ("Quick Exit"):** Implement a persistent, keyboard-accessible "Quick Exit" button for vulnerable youth browsing in unsupportive environments.
- **Donor Impact Dashboard:** Build a visual, data-driven section on the Donate page to highlight camp metrics (states represented, staff count, etc.).
- **Interactive Resource Hub:** Upgrade the static FAQ into a filterable, tag-based resource center.

## What This Is

This project replaces Camp Indigo Point's dated WordPress website with a modern, playful, donor-aware marketing site that better reflects the camp's energy and mission. The site needs to speak clearly to three core audiences: prospective campers and their families, prospective donors supporting scholarships, and prospective staff members looking to apply.

The redesign will preserve and refine the camp's existing messaging, brand colors, and logos while moving the experience to a faster, easier-to-maintain front-end codebase. The new site will continue to send registrations, donations, and staff applications to existing external systems rather than rebuilding those workflows from scratch.

## Core Value

Visitors should quickly understand why Camp Indigo Point matters, feel the camp's joyful and affirming spirit, and take the next right action to register, donate, or apply.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Present Camp Indigo Point as a vibrant, affirming residential summer camp for LGBTQ+ youth in a way that builds trust with families.
- [ ] Make donation pathways more prominent and persuasive, especially around scholarship support and the relationship to the Ashrei Foundation.
- [ ] Give prospective staff a clear picture of the camp experience and an easy path to apply.
- [ ] Preserve and modernize the most important copy, facts, and external action links from the current website.
- [ ] Use the camp's existing visual identity as the basis for a more playful, colorful, memorable experience.

### Out of Scope

- Rebuilding camper registration in-app — registration already runs through Active and should stay external for v1.
- Rebuilding donation processing in-app — donations already route through DonorPerfect via the Ashrei Foundation and should stay external for v1.
- Rebuilding staff applications in-app — staff intake already runs through Google Forms and should stay external for v1.
- Launching a frequently updated CMS-heavy editorial workflow — content changes are occasional, so v1 should favor simple maintainability over a complex publishing stack.

## Context

Camp Indigo Point is a residential summer camp for queer and trans youth entering grades 2-11, with a staff-in-training program for rising 12th graders. The current live site is a WordPress install at `campindigopoint.org` with key pages for About Camp, Camp's History, Community Care, Registration, Counselors/Staff, and Contact.

Important live messaging gathered from the current site includes:
- The camp positions itself as a safe, magical, joyful place where LGBTQ+ youth can be kids, build friendships, take risks, and thrive in community with LGBTQ+ adults.
- The camp emphasizes outdoor play, a residential overnight experience, community care, affirming use of names and pronouns, and a technology-light environment.
- Scholarships are a core part of the mission. The current registration page states that no camper will be turned away for lack of funds and that scholarship dollars are actively raised to meet family need.
- The camp is fiscally sponsored by the Ashrei Foundation, which matters for donor trust and donation routing.
- Staff recruiting focuses on the emotional value of staff community as well as role clarity for specialists, counselors, and junior counselors.

Known external destinations:
- Registration: Active Camps
- Donations: DonorPerfect form for Ashrei Foundation / Camp Indigo Point donations
- Staff applications: Google Form

The local repo currently contains a React + Vite portfolio starter with a codebase map already generated under `.planning/codebase/`. That starter is effectively a scaffold to replace, not an existing Camp Indigo Point product with reusable information architecture.

## Constraints

- **Brand**: Reuse current logos, visual motifs, and recognizable brand colors — the redesign should feel like Camp Indigo Point, not a generic camp template.
- **Content migration**: Pull as much useful copy and factual material as possible from the current website — the existing WordPress content is the starting point for v1 messaging.
- **Integrations**: Registration, donations, and staff applications must continue to route to the existing third-party systems in v1 — those flows are operational and reduce implementation risk.
- **Maintainability**: Content changes are occasional, not daily — the implementation should keep updates straightforward without introducing unnecessary CMS complexity.
- **Audience balance**: Donors are a priority audience, not a secondary footnote — donation storytelling and calls to action must be first-class in the information architecture.
- **Trust and safety**: The site must build credibility with families through clear, affirming, concrete explanations of camp life, community care, accommodations, and leadership.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Use the existing React/Vite repo as the new front-end base | The repo already exists locally and is easier to reshape than continuing on WordPress | — Pending |
| Keep registration, donation, and staff application flows external in v1 | Existing third-party workflows reduce scope and preserve operational continuity | — Pending |
| Design specifically for campers/families, donors, and staff from day one | These are the camp's three revenue/recruiting/conversion audiences and should shape the IA | — Pending |
| Treat scholarship fundraising as a primary conversion path | The user explicitly highlighted donors as important and the current site ties scholarships directly to mission impact | — Pending |
| Preserve current site copy as source material, then modernize selectively | Existing messaging contains important trust-building details and mission language | — Pending |

---
*Last updated: 2026-03-12 after project initialization*
