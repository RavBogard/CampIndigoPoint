# Research Summary

**Project:** Camp Indigo Point Website Redesign
**Summarized:** 2026-03-12

## Key Findings

### Stack

- The best-fit v1 architecture is a pre-rendered React site built on the existing repo direction rather than another CMS-heavy system.
- A lightweight content model is more appropriate than a traditional CMS because content changes occasionally and the highest-value actions already live on external platforms.
- External registration, donation, and staff-application destinations should remain external, but the site should treat them as intentional conversion handoffs rather than generic outbound links.

### Table Stakes

- Audience-based navigation that quickly routes families, donors, and staff candidates.
- Strong trust content about camp life, community care, accommodations, scholarship access, and practical next steps.
- Clear, repeated CTAs for registration, donations, and staff applications.
- Mobile-first accessibility and reliable content structure for a content-rich marketing site.

### Differentiators

- Scholarship-forward donation storytelling that explains impact before the DonorPerfect handoff.
- Family trust-building through concrete preview content about camp life and care practices.
- Staff recruiting language that sells the adult community and mission, not just the open roles.
- Seasonal notice/campaign modules without requiring a full CMS.

### Watch Outs

- Playful design can weaken family trust if safety, structure, and leadership details get buried.
- External handoffs can feel suspicious unless the site explains what Ashrei Foundation, Active Camps, and Google Forms are before the click.
- Content migration is a major risk area because WordPress copy contains many trust-critical facts that should not be lost during modernization.
- A bespoke one-off implementation will become hard to maintain unless copy, links, and shared sections are centralized early.

## Recommended Product Shape

### Core Routes

- `/`
- `/about-camp`
- `/history`
- `/community-care`
- `/register`
- `/donate`
- `/staff`
- `/faq`
- `/contact`

### Content Strategy

- Preserve and modernize the strongest existing WordPress copy.
- Keep facts, CTAs, dates, and recurring content in centralized content modules.
- Build one shared site for all three audiences instead of separate microsites.

### Technical Strategy

- Replace the portfolio starter shell with a route-first marketing architecture.
- Create a shared CTA/link system so external action URLs are defined once and reused safely.
- Bake accessibility, reduced motion, contrast, and mobile behavior into the design system before visual polish.

## Implications For Roadmap

1. Start with content inventory, information architecture, and trust strategy before visual execution.
2. Build the highest-value conversion routes early: home, donate, register, and staff.
3. Add supporting trust pages, FAQs, and continuity pages next.
4. Finish with accessibility hardening, external-flow QA, and maintainability cleanup.

## Source Files

- `.planning/research/STACK.md`
- `.planning/research/FEATURES.md`
- `.planning/research/ARCHITECTURE.md`
- `.planning/research/PITFALLS.md`

---
*Last updated: 2026-03-12 after initial research synthesis*
