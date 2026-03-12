# Roadmap: Camp Indigo Point Website Redesign

**Created:** 2026-03-12
**Requirements mapped:** 22 of 22
**Granularity:** Standard

## Overview

This roadmap rebuilds Camp Indigo Point's site in a sequence that protects trust-critical content first, then builds the shared shell and audience pathways needed for families, donors, and staff. External registration, donation, and application systems remain in place, so the roadmap prioritizes persuasive, trustworthy handoffs rather than replacing backend workflows.

## Phase Summary

| Phase | Name | Goal | Requirements |
|-------|------|------|--------------|
| 1 | Content Foundation | Preserve and structure the camp's core copy, facts, and outbound actions in a maintainable format | OPS-01, OPS-02, QUAL-03 |
| 2 | Site Shell and Audience Routing | Replace the portfolio shell with a responsive, accessible site framework and strong audience pathing | NAV-01, NAV-02, NAV-03, QUAL-01, QUAL-02 |
| 3 | Family Trust and Registration Journey | Deliver the family-facing experience that explains camp life, community care, scholarships, and registration | FAM-01, FAM-02, FAM-03, FAM-04, FAM-05, TRST-01, TRST-03 |
| 4 | Donor Scholarship Journey | Build a donor path that explains scholarship impact and the Ashrei Foundation handoff clearly | DON-01, DON-02, DON-03 |
| 5 | Staff Recruiting and Contact Journey | Build the staff recruitment path and clear human follow-up options | STAF-01, STAF-02, STAF-03, TRST-02 |
| 6 | UI and Tailwind CSS Refactor | Completely refactor the site's styling methodology to Tailwind CSS to fix layout bugs and ensure long-term responsive stability. | ARCH-01, ARCH-02, LAY-01, LAY-02, RES-01, RES-02, BRND-01 |
| 7 | Bento Storytelling & Impact | Redesign core pages using Bento Box grids and add a data-driven Donor Impact Dashboard. | STORY-01, STORY-02, IMP-01 |
| 8 | Resource Hub | Upgrade the FAQ into an interactive, filterable Resource Hub. | HUB-01 |
| 9 | High-Impact Media & Language Integration | Perform a site-wide language audit and inject a significant volume of authentic photography to elevate the overall tone and visual impact. | MEDIA-01, LANG-01 |
| 10 | Hero Slideshow & Media Density | Implement a crossfading hero slideshow on the homepage and systematically increase photo density across all pages. | MEDIA-02, MEDIA-03 |
| 11 | Conversion UX Optimization | Implement a persistent Sticky Action Bar to keep primary conversion actions accessible on long scroll pages. | CONV-01, CONV-02 |
| 12 | Headless CMS Integration | Integrate Decap CMS to empower non-technical team members to manage site content independently. | OPS-03 |

## Phase Details

### Phase 1: Content Foundation

**Goal:** Create the structured content and metadata foundation so the redesign can preserve critical legacy facts while staying easy to update.

**Requirements:** OPS-01, OPS-02, QUAL-03

**Execution status:** Complete - 3 of 3 plans complete (`01-01-SUMMARY.md`, `01-02-SUMMARY.md`, `01-03-SUMMARY.md`)

**Why first:**
- The biggest project risk is losing trust-critical details during migration from WordPress.
- Centralized content and action-link definitions prevent broken handoffs later.
- Metadata and content structure need to exist before route/page production can scale cleanly.

**Success criteria:**
1. Legacy WordPress copy is inventoried and migrated into centralized content modules with trust-critical facts preserved intentionally.
2. Registration, donation, and staff application URLs are defined once in a shared source of truth with descriptive labels and destination context.
3. A lightweight announcement/content pattern exists for seasonal updates such as registration open or hiring season.
4. Core page metadata patterns are defined so routes can ship with consistent titles, descriptions, and social previews.

### Phase 2: Site Shell and Audience Routing

**Goal:** Build the shared site framework, responsive navigation, and accessible audience-routing patterns that the rest of the site will use.

**Requirements:** NAV-01, NAV-02, NAV-03, QUAL-01, QUAL-02

**Execution status:** Complete - 3 of 3 plans complete (`02-01-SUMMARY.md`, `02-02-SUMMARY.md`, `02-03-SUMMARY.md`)

**Why now:**
- Families, donors, and staff need a clear way to self-select early.
- Accessibility and mobile behavior should be established at the system level, not patched later.
- Shared shell work reduces duplication when building the route-specific journeys.

**Success criteria:**
1. The site uses a route-based shell with persistent desktop/mobile navigation for all primary pages.
2. The homepage clearly presents family, donor, and staff pathways above the fold.
3. Register and Donate calls to action remain visible and consistent across high-intent routes.
4. The shared component system supports responsive layouts, keyboard navigation, readable contrast, alt text, and reduced-motion behavior.

### Phase 3: Family Trust and Registration Journey

**Goal:** Publish the core camp pages that help families understand camp, trust the experience, and confidently click through to register.

**Requirements:** FAM-01, FAM-02, FAM-03, FAM-04, FAM-05, TRST-01, TRST-03

**Why this phase matters most:**
- Family confidence is the primary prerequisite for camper conversion.
- The current WordPress site already contains strong copy about camp life, community care, and scholarship access that should be modernized without losing specificity.
- This phase creates the heart of the public story and most of the trust scaffolding for the full site.

**Success criteria:**
1. Families can understand who camp is for, what daily life is like, and how the residential experience works from the homepage and core camp pages.
2. Community care, affirming practices, and accommodation-minded support are explained concretely enough to reduce uncertainty for families.
3. Scholarship and affordability messaging clearly states cost context and the camp's commitment to financial accessibility.
4. FAQ and history content answer common practical and mission questions without forcing direct outreach.
5. The registration handoff page explains what happens next and links reliably to the official external registration flow.

### Phase 4: Donor Scholarship Journey

**Goal:** Build a donor experience that treats scholarship giving as a first-class path and makes the fiscal sponsorship handoff trustworthy.

**Requirements:** DON-01, DON-02, DON-03

**Why it deserves its own phase:**
- Donors are a priority audience and should not be treated as a footer afterthought.
- External donation tooling means the real conversion work happens before the click.
- This phase can share content and layout patterns from the family journey while sharpening the donor-specific message.

**Success criteria:**
1. Donors can understand how gifts support scholarships and camper access before leaving the site.
2. The Ashrei Foundation relationship is explained in plain language so the DonorPerfect handoff feels official and trustworthy.
3. Donation calls to action appear on the homepage and donor-focused sections with consistent wording and visual prominence.

### Phase 5: Staff Recruiting and Contact Journey

**Goal:** Build the staff recruiting experience and human follow-up path that support seasonal hiring and stakeholder outreach.

**Requirements:** STAF-01, STAF-02, STAF-03, TRST-02

**Why last:**
- It depends on the shared shell, trust patterns, and content system from earlier phases.
- Staff recruiting has distinct messaging needs, but the core design and handoff patterns will already be proven by earlier audience journeys.

**Success criteria:**
1. Staff applicants can understand available roles, values, expectations, and reasons to join before opening the application.
2. The external staff application handoff is clear, intentional, and tested.
3. Contact pathways are easy to find for families, donors, staff applicants, and partners who need follow-up.
4. Staff and contact content feels aligned with the camp's overall tone without losing operational clarity.

### Phase 6: UI and Tailwind CSS Refactor

**Goal:** Completely refactor the site's styling methodology to Tailwind CSS to fix layout bugs and ensure long-term responsive stability without losing the "Soul & Story" aesthetic.

**Requirements:** ARCH-01, ARCH-02, LAY-01, LAY-02, RES-01, RES-02, BRND-01

**Why next:**
- The functional and content aspects of the v1 site are complete.
- Global cascading CSS is causing visual bugs and alignment issues.
- Establishing a strict utility-first methodology now prevents future tech debt.

**Success criteria:**
1. Tailwind CSS is integrated into the Vite build pipeline.
2. All current brand colors and typography are successfully ported to the Tailwind configuration.
3. Brittle grid and flexbox implementations in the `PageFrame` and `HomeRoute` are replaced with Tailwind utility classes.
4. The site renders perfectly on mobile viewports (320px) without overflow issues.

### Phase 7: Bento Storytelling & Impact

**Goal:** Redesign core pages using Bento Box grids to weave media quotes and testimonials directly into the visual layout, and add a data-driven Donor Impact Dashboard.

**Requirements:** STORY-01, STORY-02, IMP-01

**Why next:**
- With the UI refactored into Tailwind, complex responsive grids are now safe to build.
- Extracts maximum emotional value from existing assets without needing a CMS.

**Success criteria:**
1. Home and About pages utilize asymmetrical, responsive "Bento" grids.
2. Homepage copy is rewritten to be evocative rather than purely utilitarian.
3. Donate page features a visual "Impact Dashboard" built with static metrics.

### Phase 8: Youth Safety UX & Resource Hub

**Goal:** Implement critical safety features ("Quick Exit") and upgrade the FAQ into an interactive, filterable resource center using Framer Motion.

**Requirements:** SAFE-01, SAFE-02, HUB-01

**Why next:**
- Follows best practices from leading LGBTQ+ organizations (like The Trevor Project).
- Enhances family trust through better organization of complex information.

**Success criteria:**
1. A persistent "Quick Exit" button is available globally and z-indexed above all content.
2. Clicking Quick Exit immediately redirects the browser to a neutral site.
3. FAQ page is filterable by tags with smooth transitions.

### Phase 10: Hero Slideshow & Media Density

**Goal:** Implement a crossfading hero slideshow on the homepage and systematically increase photo density across all pages.

**Requirements:** MEDIA-02, MEDIA-03

**Why next:**
- Addresses direct user feedback to cycle through the new, high-quality images on the homepage.
- Fixes the "wall of text" issue on secondary pages by utilizing the newly sourced media assets.

**Success criteria:**
1. Homepage hero automatically crossfades through 3-5 images.
2. Registration, Donate, Staff, FAQ, and Contact pages each feature at least one supporting photo integrated into the grid layout.

### Phase 11: Conversion UX Optimization

**Goal:** Implement a persistent Sticky Action Bar and an interactive "Day in the Life" Timeline to increase conversion rates across all three primary audiences.

**Requirements:** CONV-01, CONV-02

**Why next:**
- With the site's structural UI and storytelling complete, the focus must shift to reducing friction for the primary actions (Register, Donate, Apply).
- Long-form, emotionally resonant pages (like About and Donate) currently force users to scroll significantly to find the CTA again. A sticky bar solves this.

**Success criteria:**
1. A subtle, persistent action bar appears when the user scrolls past the primary hero CTA on key routes.
2. The action bar intelligently displays the most relevant CTA for the current route (e.g., "Donate" on the Donate page, "Register" on the About page).
3. The "Camp Life" section on the About page is refactored into a visually engaging interactive timeline.

### Phase 12: Headless CMS Integration

**Goal:** Integrate Decap CMS to empower non-technical team members to manage site content independently.

**Requirements:** OPS-03

**Why next:**
- With the site's layout and content solidified, adding a CMS allows the camp team to make updates without needing developer intervention.

**Success criteria:**
1. Decap CMS is integrated into the Vite build.
2. A user-friendly dashboard is available for editing content.
3. Content changes are automatically deployed.

## Coverage Validation

| Requirement | Phase |
|-------------|-------|
| OPS-01 | Phase 1 |
| OPS-02 | Phase 1 |
| QUAL-03 | Phase 1 |
| NAV-01 | Phase 2 |
| NAV-02 | Phase 2 |
| NAV-03 | Phase 2 |
| QUAL-01 | Phase 2 |
| QUAL-02 | Phase 2 |
| FAM-01 | Phase 3 |
| FAM-02 | Phase 3 |
| FAM-03 | Phase 3 |
| FAM-04 | Phase 3 |
| FAM-05 | Phase 3 |
| TRST-01 | Phase 3 |
| TRST-03 | Phase 3 |
| DON-01 | Phase 4 |
| DON-02 | Phase 4 |
| DON-03 | Phase 4 |
| STAF-01 | Phase 5 |
| STAF-02 | Phase 5 |
| STAF-03 | Phase 5 |
| TRST-02 | Phase 5 |
| ARCH-01 | Phase 6 |
| ARCH-02 | Phase 6 |
| LAY-01 | Phase 6 |
| LAY-02 | Phase 6 |
| RES-01 | Phase 6 |
| RES-02 | Phase 6 |
| BRND-01 | Phase 6 |
| STORY-01 | Phase 7 |
| STORY-02 | Phase 7 |
| IMP-01 | Phase 7 |
| SAFE-01 | Phase 8 |
| SAFE-02 | Phase 8 |
| HUB-01 | Phase 8 |
| MEDIA-01 | Phase 9 |
| LANG-01 | Phase 9 |
| MEDIA-02 | Phase 10 |
| MEDIA-03 | Phase 10 |
| CONV-01 | Phase 11 |
| CONV-02 | Phase 11 |
| OPS-03 | Phase 12 |

**Coverage:**
- v1 requirements: 22
- v1.1 requirements: 7
- v1.2 requirements: 10
- v1.3 requirements: 3
- Total mapped to phases: 42
- Unmapped: 0

## Recommended Next Step

`/gsd:plan-phase 11`

Move into Phase 11 to implement the Sticky Action Bar and interactive timeline.

---
*Last updated: 2026-03-12 after phase 2 completion*
