# Requirements: Camp Indigo Point Website Redesign

**Defined:** 2026-03-12
**Core Value:** Visitors should quickly understand why Camp Indigo Point matters, feel the camp's joyful and affirming spirit, and take the next right action to register, donate, or apply.

## v1.3 Requirements (Conversion UX & CMS)

### Frictionless Actions
- [ ] **CONV-01**: Implement a persistent, scroll-aware Sticky Action Bar that displays the relevant primary CTA (Register, Donate, or Apply) based on the user's current route.
- [ ] **CONV-02**: Build an interactive "Day in the Life" timeline component on the About page to increase engagement and emotional conversion for families.

### Content Operations
- [ ] **OPS-03**: Integrate a lightweight Headless CMS (e.g., Decap CMS) to allow non-technical team members to manage core site content and media without directly editing code.

## v1.2 Requirements (Story and Safety Expansion)

### Immersive Storytelling
- [ ] **STORY-01**: Implement "Bento Box" style grids on the Home and About pages to weave press quotes and testimonials directly into the visual layout.
- [ ] **STORY-02**: Rewrite the homepage "Choose your path" gateway copy to be more evocative and less utilitarian.

### Donor Impact & Resources
- [ ] **IMP-01**: Build a static, visually distinct "Impact Dashboard" on the Donate page highlighting key camp metrics.
- [ ] **HUB-01**: Upgrade the FAQ page into an interactive, filterable "Resource Hub" using Framer Motion for smooth category transitions.

### High-Impact Media & Language Integration
- [ ] **MEDIA-01**: Source and integrate a significantly higher volume of authentic camp photography across all pages, pulling from historical assets and social media.
- [ ] **MEDIA-02**: Implement a crossfading hero slideshow on the homepage to maximize initial visual impact.
- [ ] **MEDIA-03**: Ensure every major route features at least one integrated context photo (beyond the hero) to break up text density.
- [ ] **LANG-01**: Perform a site-wide language audit and rewrite, injecting inspiring, high-quality copy drawn from national press coverage and founder interviews to elevate the overall tone.

## v1.1 Requirements (UI and Layout Refactor)

### Technical Architecture
- [ ] **ARCH-01**: Migrate the core styling methodology to Tailwind CSS to eliminate cascading layout bugs.
- [ ] **ARCH-02**: Port all existing brand tokens (Teal, Orange, Sand colors; Montserrat, Quicksand fonts) into the central Tailwind configuration.

### Layout & Spacing
- [ ] **LAY-01**: Replace arbitrary pixel values with a predictable, scale-based spacing system across all pages.
- [ ] **LAY-02**: Refactor broken flexbox and grid implementations in shared components to ensure consistent structural behavior.

### Responsive Quality
- [ ] **RES-01**: Guarantee perfect responsive behavior down to a 320px viewport without horizontal scrolling or overlapping elements.
- [ ] **RES-02**: Implement fluid typography so headings scale proportionately between mobile and desktop sizes.

### Brand Preservation
- [ ] **BRND-01**: Preserve the "Soul & Story" visual aesthetic (organic wavy backgrounds, affirming accents) throughout the migration process.

## v1 Requirements

### Navigation

- [ ] **NAV-01**: Visitor can identify family, donor, and staff pathways from the homepage within the first viewport.
- [x] **NAV-02**: Visitor can reach About Camp, Community Care, Registration, Donate, Staff, FAQ, and Contact pages from persistent navigation on desktop and mobile.
- [x] **NAV-03**: Visitor can access clear Register and Donate calls to action from all high-intent pages without returning to the homepage.

### Family Journey

- [ ] **FAM-01**: Family can understand who camp is for, including grade/age range and residential summer-camp format, before leaving the site.
- [ ] **FAM-02**: Family can understand what camp life feels like, including activities, overnight structure, technology expectations, and camper experience.
- [ ] **FAM-03**: Family can understand Camp Indigo Point's community care approach, including affirming names/pronouns and accommodation-minded support.
- [ ] **FAM-04**: Family can understand scholarship availability, camp cost context, and the no-one-turned-away-for-lack-of-funds commitment before opening registration.
- [ ] **FAM-05**: Family can open the official external registration experience from a page that explains what happens next.

### Donor Journey

- [ ] **DON-01**: Donor can understand how giving supports camper scholarships and camp access before opening the donation form.
- [ ] **DON-02**: Donor can understand the Ashrei Foundation fiscal sponsorship relationship and why the donation flow opens on that platform.
- [ ] **DON-03**: Donor can reach the official donation form from the homepage and donor-focused pages through clear, consistently labeled calls to action.

### Staff Journey

- [ ] **STAF-01**: Prospective staff member can understand what roles exist, including counselor, junior counselor, and specialist pathways.
- [ ] **STAF-02**: Prospective staff member can understand the camp's staff culture, expectations, and reasons to join before applying.
- [ ] **STAF-03**: Prospective staff member can open the official external staff application from a page that explains the application handoff.

### Trust Content

- [ ] **TRST-01**: Visitor can read a current explanation of camp history, mission, and organizational context.
- [ ] **TRST-02**: Visitor can find contact information and a clear path to ask follow-up questions.
- [ ] **TRST-03**: Visitor can access audience-appropriate FAQs that answer common practical questions without requiring direct outreach.

### Experience Quality

- [x] **QUAL-01**: Visitor can use every primary page and CTA path effectively on mobile screens.
- [x] **QUAL-02**: Visitor can use the site with keyboard navigation, readable contrast, meaningful alt text, and reduced-motion support.
- [x] **QUAL-03**: Visitor sees consistent page titles, descriptions, and shareable metadata that reflect the camp brand and content.

### Content Operations

- [x] **OPS-01**: Maintainer can update core copy, seasonal dates, and third-party action links from centralized content files without redesigning components.
- [x] **OPS-02**: Maintainer can publish recurring announcement-style updates, such as registration open or hiring season, through a lightweight site-wide content pattern.

## v2 Requirements

### Storytelling

- **STOR-01**: Visitor can browse audience-specific testimonials and stories from campers, families, donors, and staff.
- **STOR-02**: Visitor can explore richer photo or video storytelling about the camp experience.

### Measurement

- **MEAS-01**: Team can review outbound click analytics for register, donate, and apply calls to action.
- **MEAS-02**: Team can compare campaign or seasonal messaging performance across major audience journeys.

### Editing Workflow

- **EDIT-01**: Non-technical editors can update selected content through a lightweight CMS or admin workflow.

## Out of Scope

| Feature | Reason |
|---------|--------|
| In-site registration flow | Active Camps already handles registration and account workflow |
| In-site donation processing | DonorPerfect plus Ashrei Foundation already handles secure giving |
| In-site staff application workflow | Google Forms already handles application submission for v1 |
| Full editorial CMS before launch | Update frequency is too low to justify the added complexity now |
| Separate microsites for donors, families, or staff | Would duplicate content and weaken the shared mission story |
| Live chat or always-on support tooling | High trust requirement and staffing burden without clear need |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| NAV-01 | Phase 2 | Pending |
| NAV-02 | Phase 2 | Complete |
| NAV-03 | Phase 2 | Complete |
| FAM-01 | Phase 3 | Pending |
| FAM-02 | Phase 3 | Pending |
| FAM-03 | Phase 3 | Pending |
| FAM-04 | Phase 3 | Pending |
| FAM-05 | Phase 3 | Pending |
| DON-01 | Phase 4 | Pending |
| DON-02 | Phase 4 | Pending |
| DON-03 | Phase 4 | Pending |
| STAF-01 | Phase 5 | Pending |
| STAF-02 | Phase 5 | Pending |
| STAF-03 | Phase 5 | Pending |
| TRST-01 | Phase 3 | Pending |
| TRST-02 | Phase 5 | Pending |
| TRST-03 | Phase 3 | Pending |
| QUAL-01 | Phase 2 | Complete |
| QUAL-02 | Phase 2 | Complete |
| QUAL-03 | Phase 1 | Complete |
| OPS-01 | Phase 1 | Complete |
| OPS-02 | Phase 1 | Complete |

**Coverage:**
- v1 requirements: 22 total
- Mapped to phases: 22
- Unmapped: 0

---
*Requirements defined: 2026-03-12*
*Last updated: 2026-03-12 after initial definition*
