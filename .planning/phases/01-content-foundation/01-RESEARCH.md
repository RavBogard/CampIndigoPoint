# Phase 1: Content Foundation - Research

**Researched:** 2026-03-12
**Domain:** content architecture and migration strategy for a React marketing site
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- Use a light-edit migration approach, not a wholesale rewrite.
- Preserve current facts and core messaging, but tighten wording and modernize clarity where helpful.
- Keep the editorial voice warm and affirming rather than purely logistical or overly inspirational.
- Treat trust-sensitive language as the closest source material, especially community care, belonging, scholarship, and reassurance copy.
- Make migration decisions page by page rather than rewriting from audience journeys first.
- Family-facing pages should use balanced detail: clear summary sections first, with fuller explanation below rather than either extreme brevity or wall-of-text density.
- FAQs should catch remaining practical questions rather than serving as the main place where essential information lives.
- Donor content should be fairly explicit before the external handoff, especially around scholarship impact and the Ashrei Foundation relationship.
- Staff pages should balance culture and mission with concrete role clarity and expectations before the application link.
- Support a single reusable sitewide banner for temporary updates in v1.
- Use the banner for operational milestones such as registration opening, hiring season, important dates, and deadlines.
- Banner tone should stay playful and energetic while still communicating the practical action clearly.
- Banner visibility should be controlled with a simple manual on/off toggle rather than scheduled automation.

### Claude's Discretion
- Exact content file shape within the centralized content system.
- Exact metadata field structure and per-page implementation pattern.
- Exact wording refinements when tightening current copy, as long as trust-critical meaning is preserved.

### Deferred Ideas (OUT OF SCOPE)
- None — discussion stayed within phase scope.
</user_constraints>

<research_summary>
## Summary

Phase 1 should establish a source-of-truth content layer inside the existing React/Vite repo before any route or design-system overhaul. The strongest implementation pattern for this phase is to keep the current runtime stable, introduce centralized content/config modules in plain JavaScript, and migrate the live WordPress copy into structured files grouped by page and shared concern.

For this phase, the standard expert move is to separate content modeling from layout implementation. That means creating reusable content/config files for page copy, external action links, site metadata, and seasonal notices now, then letting Phase 2 consume those structures when the shell and routing system are rebuilt. This reduces scope, preserves trust-critical facts, and avoids coupling the content migration to a larger stack migration.

**Primary recommendation:** Build Phase 1 around a centralized `src/content/` layer, a canonical outbound-link map, a reusable metadata shape, and a page-by-page migration inventory that preserves current trust language while preparing for later route work.
</research_summary>

<standard_stack>
## Standard Stack

The established tools for this phase are the existing project runtime plus lightweight content modeling, not new infrastructure.

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| React | 19.x | Existing UI runtime | No need to migrate frameworks just to establish content foundations. |
| Vite | 7.x current repo / 8.x target later | Existing build pipeline | Keeps the phase focused on content architecture instead of tool migration. |
| Plain JS content modules | n/a | Centralized source-of-truth content | Fastest low-risk way to move copy, metadata, and links out of JSX in an existing JS repo. |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `URL` / native string constants | Browser/Node built-in | Canonical external link definitions | Use for outbound action maps and destination labels without adding dependencies. |
| Existing CSS token layer | n/a | Stores banner/theme-adjacent values until broader styling work begins | Use to keep Phase 1 non-invasive while enabling later shell integration. |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Plain JS content modules | TypeScript content modules | TS gives stronger shape guarantees, but adds setup work that belongs with the broader Phase 2 architecture shift. |
| In-repo content files | MDX in Phase 1 | MDX is useful later for long-form narrative pages, but Phase 1 mostly needs trusted structured migration and config scaffolding. |
| Manual content config | Headless CMS | A CMS adds needless operational complexity before the content model is proven. |

**Installation:**
```bash
# No new packages required for Phase 1
npm install
```
</standard_stack>

<architecture_patterns>
## Architecture Patterns

### Recommended Project Structure
```text
src/
├── content/
│   ├── site.js
│   ├── actions.js
│   ├── meta.js
│   ├── home.js
│   ├── about.js
│   ├── registration.js
│   ├── donate.js
│   ├── staff.js
│   └── faq.js
└── lib/
    └── content/
```

### Pattern 1: Page-oriented content modules
**What:** Give each high-intent page or content domain its own source file instead of one massive content blob.
**When to use:** Best when migrating from a page-based WordPress site and preserving page-level trust language matters.
**Example:**
```javascript
export const registrationPage = {
  season: { year: 2026, dates: "June 6 - 19, 2026" },
  pricing: {
    fullTuition: "$2700",
    scholarshipPromise: "No one will be turned away for lack of funds.",
  },
}
```

### Pattern 2: Shared action-link registry
**What:** Define outbound destinations once, with labels, descriptions, and platform context.
**When to use:** Best whenever multiple pages will link to the same external registration, donation, or application flow.
**Example:**
```javascript
export const actionLinks = {
  register: { href: "https://campscui.active.com/...", label: "Register through Active Camps" },
  donate: { href: "https://form-renderer-app.donorperfect.io/...", label: "Donate through Ashrei Foundation" },
}
```

### Pattern 3: Metadata as data, not inline strings
**What:** Define page titles, descriptions, and social-preview text in one metadata module.
**When to use:** Best when the current app has no metadata system and later route work will need a stable source of truth.
**Example:**
```javascript
export const pageMeta = {
  home: {
    title: "Camp Indigo Point | A summer camp for LGBTQ+ youth",
    description: "Learn about camp, support scholarships, or apply to join the staff.",
  },
}
```

### Anti-Patterns to Avoid
- **Migrating content directly into new route components now:** It couples Phase 1 to a later architecture phase and makes trust-content review harder.
- **Keeping third-party URLs embedded in JSX:** This recreates the exact maintenance risk the phase is meant to remove.
- **Treating metadata as an afterthought:** Phase 1 explicitly owns metadata patterns, so inline placeholder titles should not survive planning.
</architecture_patterns>

<dont_hand_roll>
## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Page copy source of truth | Ad hoc inline JSX strings across components | Centralized content modules in `src/content/` | Inline copy makes review, migration, and future edits error-prone. |
| External CTA management | Scattered hard-coded links | Shared action-link registry | Sensitive URLs should change in one place only. |
| Seasonal updates | A mini scheduling or CMS system | Simple banner object with manual toggle | The editorial cadence is too low to justify automation. |

**Key insight:** The main complexity in this phase is editorial integrity, not engineering novelty. Simple, explicit source files beat abstract systems here.
</dont_hand_roll>

<common_pitfalls>
## Common Pitfalls

### Pitfall 1: Content migration becomes a rewrite exercise
**What goes wrong:** The team starts "cleaning up" copy and drops important trust details from the current site.
**Why it happens:** There is no explicit source-of-truth migration pass before implementation.
**How to avoid:** Create a page-by-page migration inventory and move facts into structured content files before any major design rewrite.
**Warning signs:** Important current-site details only exist in notes, screenshots, or memory rather than checked-in content files.

### Pitfall 2: The content layer mirrors today’s starter components instead of the future site
**What goes wrong:** Content gets organized around old portfolio sections like `Hero` and `About` instead of around real site pages and shared domains.
**Why it happens:** Teams optimize for the current scaffold rather than the roadmap.
**How to avoid:** Organize content by target route/domain now, even before those routes are built.
**Warning signs:** New content file names match temporary portfolio component names instead of camp-specific pages or shared concepts.

### Pitfall 3: Metadata and banner models stay too vague to implement later
**What goes wrong:** The phase ends with “we’ll figure that out later” notes instead of concrete structures that Phase 2 can consume.
**Why it happens:** Teams think content modeling means only page copy.
**How to avoid:** Include concrete metadata objects and a banner schema in the first content foundation pass.
**Warning signs:** There is page copy in `src/content/`, but no obvious place to update titles, descriptions, or announcement state.
</common_pitfalls>

<code_examples>
## Code Examples

### Source-of-truth site settings
```javascript
export const siteSettings = {
  brandName: "Camp Indigo Point",
  primaryEmail: "info@campindigopoint.org",
  announcement: { enabled: false, label: "", href: "" },
}
```

### Shared FAQ grouping
```javascript
export const faqGroups = {
  families: [{ question: "Who is camp for?", answer: "Queer and trans youth entering grades 2-11." }],
  donors: [],
  staff: [],
}
```

### Page metadata defaults
```javascript
export const metaDefaults = {
  siteName: "Camp Indigo Point",
  image: "/og-image.png",
}
```
</code_examples>

<sota_updates>
## State of the Art (2024-2026)

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Content embedded directly in React components | Content/config modules kept separate from render components | Ongoing standard practice | Makes marketing-site maintenance significantly cleaner. |
| Metadata bolted on page-by-page after layouts exist | Metadata modeled alongside content | Current best practice for route-based marketing sites | Prevents SEO/social-preview drift. |
| CMS by default for any marketing site | Lightweight in-repo content for low-change sites | Common 2024-2026 lean-site pattern | Reduces overhead for sites with occasional updates. |

**New tools/patterns to consider:**
- Route-first site architectures expect metadata and content to exist as data before final page composition.
- Reusable notice/banner configuration is a common lightweight alternative to a full editorial system.

**Deprecated/outdated:**
- Treating content migration as a later cleanup task after visual implementation begins.
- Letting third-party destination URLs live only in button JSX.
</sota_updates>

<open_questions>
## Open Questions

1. **How many separate content files should exist in Phase 1 versus combined modules?**
   - What we know: The site should be page-oriented and easy to update.
   - What's unclear: Whether execution should start with fewer combined modules and split later.
   - Recommendation: Favor a small but page-oriented set now, then split only if files become unwieldy.

2. **Should Phase 1 introduce TypeScript content typing immediately?**
   - What we know: The broader project research prefers TypeScript later.
   - What's unclear: Whether that migration belongs in this foundational content phase or the shell/routing phase.
   - Recommendation: Keep Phase 1 in JavaScript to reduce moving parts, unless execution finds the current repo already drifting into TS work.
</open_questions>

## Validation Architecture

- Use `npm run lint` as the quick feedback loop for syntax/style regressions.
- Use `npm run build` as the full validation loop for content/module integration correctness.
- Add targeted manual review checks for source accuracy: outbound link accuracy, metadata presence, banner toggle behavior, and preservation of trust-critical facts.
- Keep feedback latency low by validating after each meaningful content-structure change, not only at the end of the phase.

<sources>
## Sources

### Primary (HIGH confidence)
- `.planning/phases/01-content-foundation/01-CONTEXT.md`
- `.planning/ROADMAP.md`
- `.planning/REQUIREMENTS.md`
- `.planning/research/SUMMARY.md`
- `.planning/research/ARCHITECTURE.md`
- `.planning/codebase/STRUCTURE.md`
- `.planning/codebase/CONVENTIONS.md`

### Secondary (MEDIUM confidence)
- Current repo files in `src/` and `public/`

### Tertiary (LOW confidence - needs validation)
- None
</sources>

<metadata>
## Metadata

**Research scope:**
- Core technology: React/Vite content architecture in current repo
- Ecosystem: in-repo content modules, metadata configuration, action-link registry
- Patterns: page-oriented migration, shared action maps, sitewide notice configuration
- Pitfalls: content loss, scaffold-coupled modeling, metadata drift

**Confidence breakdown:**
- Standard stack: HIGH - no new complex infrastructure required in this phase
- Architecture: HIGH - aligned with project research and current repo constraints
- Pitfalls: HIGH - directly grounded in current-site migration risks
- Code examples: MEDIUM - project-tailored patterns rather than copied library snippets

**Research date:** 2026-03-12
**Valid until:** 2026-04-11
</metadata>

---

*Phase: 01-content-foundation*
*Research completed: 2026-03-12*
*Ready for planning: yes*
