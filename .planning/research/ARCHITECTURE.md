# Architecture Research

**Domain:** React/Vite marketing website for a residential summer camp
**Researched:** 2026-03-12
**Confidence:** HIGH

## Standard Architecture

### System Overview

```text
┌──────────────────────────────────────────────────────────────────────┐
│                         Presentation Layer                          │
├──────────────────────────────────────────────────────────────────────┤
│  Home  About Camp  Community Care  Donate  Staff  FAQ  Contact      │
│  History  Registration  Leadership  Scholarships                    │
└──────────────┬───────────────┬───────────────┬───────────────────────┘
               │               │               │
┌──────────────┴───────────────┴───────────────┴───────────────────────┐
│                           Route Shell Layer                         │
├──────────────────────────────────────────────────────────────────────┤
│  AppShell  RouteLayout  SEOHead  ScrollRestoration  CTAResolver      │
└──────────────┬───────────────┬───────────────┬───────────────────────┘
               │               │               │
┌──────────────┴───────────────┴───────────────┴───────────────────────┐
│                        Content and Domain Layer                     │
├──────────────────────────────────────────────────────────────────────┤
│  page content  audience journeys  FAQs  testimonials  leadership     │
│  action links  media assets  announcement/config data                │
└──────────────┬───────────────┬───────────────┬───────────────────────┘
               │               │               │
┌──────────────┴───────────────┴───────────────┴───────────────────────┐
│                       Shared UI and Utility Layer                   │
├──────────────────────────────────────────────────────────────────────┤
│  sections  cards  callouts  stats  accordions  galleries  forms      │
│  analytics hooks  link helpers  schema builders  design tokens       │
└──────────────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Typical Implementation |
|-----------|----------------|------------------------|
| `AppShell` | Owns router, global navigation, footer, and persistent CTAs | React root with route config and shared layout |
| `routes/*Page` | Assembles page-specific sections from shared content and UI blocks | Thin page components with no business logic |
| `content/*` | Stores editable copy, structured facts, external URLs, and page metadata | Plain JS/TS objects and arrays imported by routes |
| `components/sections/*` | Renders reusable marketing sections such as hero, timeline, FAQ, impact, and CTA bands | Presentational React components with typed props |
| `lib/links` | Centralizes registration, donation, and staff application links for safe reuse | Constants plus helper functions for external action metadata |
| `lib/analytics` | Emits CTA and journey tracking without coupling pages to vendor details | Small wrapper around analytics provider or no-op fallback |

## Recommended Project Structure

```text
src/
├── app/                     # App bootstrap, route config, shell, providers
│   ├── App.jsx              # Top-level router and layout wiring
│   ├── routes.jsx           # Route definitions and page imports
│   └── seo.js               # Metadata and structured-data helpers
├── routes/                  # Page-level route components
│   ├── HomePage.jsx         # Audience-balanced landing page
│   ├── AboutCampPage.jsx    # Camp overview and core experience
│   ├── HistoryPage.jsx      # Camp story and mission continuity
│   ├── CommunityCarePage.jsx# Trust/safety, accommodations, values
│   ├── RegistrationPage.jsx # Family path to external registration
│   ├── DonatePage.jsx       # Scholarship and donor conversion page
│   ├── StaffPage.jsx        # Staff recruiting and application path
│   ├── FAQPage.jsx          # Cross-audience practical questions
│   └── ContactPage.jsx      # Contact details and leadership touchpoints
├── components/
│   ├── layout/              # Header, footer, page container, breadcrumbs
│   ├── navigation/          # Main nav, mobile nav, sticky CTA rail
│   ├── sections/            # Hero, story band, cards, CTA strips, FAQ lists
│   ├── content/             # Rich text blocks, media figures, quote rendering
│   └── ui/                  # Buttons, badges, pills, accordions, cards
├── content/                 # Structured source-of-truth content
│   ├── site.js              # Nav labels, footer copy, social/contact info
│   ├── actions.js           # External URLs and CTA definitions
│   ├── home.js              # Home page content model
│   ├── about.js             # About/history/community care content
│   ├── donate.js            # Scholarship, Ashrei, impact, donor FAQs
│   ├── staff.js             # Roles, benefits, expectations, application info
│   ├── registration.js      # Eligibility, dates, pricing, scholarships, FAQs
│   └── faq.js               # Shared FAQs segmented by audience
├── assets/                  # Imported images and illustrations
├── styles/                  # Tokens, typography, page-level CSS layers
├── lib/                     # Link helpers, analytics, content utilities
└── main.jsx                 # React entry point
```

### Structure Rationale

- **`routes/`:** Keeps route boundaries explicit so each page can be designed around a distinct visitor goal rather than one long homepage.
- **`content/`:** Gives non-frequent editors one obvious place to update copy, links, and facts without introducing a CMS.
- **`components/sections/`:** Encourages consistent storytelling blocks across family, donor, and staff journeys.
- **`lib/`:** Prevents external action links and analytics behavior from being duplicated across pages.
- **`styles/`:** Separates global brand tokens from component markup so the visual system can evolve cleanly.

## Architectural Patterns

### Pattern 1: Route-First Marketing IA

**What:** Build a small set of explicit pages around major user intents instead of a single scrolling landing page.
**When to use:** Best for marketing sites with multiple primary audiences and distinct trust/conversion questions.
**Trade-offs:** More routes require clearer navigation and more internal linking, but make donor and staff journeys much easier to optimize.

**Example:**
```jsx
export const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/about-camp', element: <AboutCampPage /> },
  { path: '/community-care', element: <CommunityCarePage /> },
  { path: '/register', element: <RegistrationPage /> },
  { path: '/donate', element: <DonatePage /> },
  { path: '/staff', element: <StaffPage /> },
]
```

### Pattern 2: Structured Content Modules

**What:** Store each page's copy and repeatable facts in plain objects instead of embedding long text directly in JSX.
**When to use:** Best when content updates are occasional, contributors are technical enough to edit source, and a CMS would be overkill.
**Trade-offs:** Requires some discipline in shaping content models, but dramatically simplifies content migration and future edits.

**Example:**
```jsx
export const donatePage = {
  hero: {
    eyebrow: 'Support Camp Indigo Point',
    title: 'Help more LGBTQ+ youth get to camp',
    body: 'Scholarships ensure no camper is turned away for lack of funds.',
  },
  ctas: [
    { label: 'Donate Through Ashrei Foundation', action: 'donate' },
  ],
}
```

### Pattern 3: External Conversion Gateway

**What:** Treat registration, donations, and staff applications as well-framed handoffs to trusted third-party platforms.
**When to use:** Best when external systems are already operational and rebuilding them would add risk with little user benefit.
**Trade-offs:** The site cannot control downstream UX, so pages must do more pre-click expectation setting and reassurance.

**Example:**
```jsx
import { actionLinks } from '../content/actions'

export function PrimaryActionButton({ action }) {
  const link = actionLinks[action]

  return (
    <a href={link.href} target="_blank" rel="noreferrer" data-action={action}>
      {link.label}
    </a>
  )
}
```

## Data Flow

### Request Flow

```text
[Visitor lands on route]
    ↓
[Router matches page]
    ↓
[Page imports structured content]
    ↓
[Sections render reusable UI blocks]
    ↓
[Visitor clicks CTA]
    ↓
[Analytics helper logs event]
    ↓
[External platform opens or same-tab handoff occurs]
```

### State Management

```text
[Static content modules]
    ↓
[Route component props]
    ↓
[Presentational sections]
    ↓
[Local UI state only]
```

### Key Data Flows

1. **Content publishing flow:** Camp copy, facts, and URLs live in `src/content/*`, are imported into route components, and render directly with no runtime fetching for v1.
2. **Conversion flow:** CTA components resolve a canonical action key like `register`, `donate`, or `apply`, optionally emit analytics, then send visitors to the correct external destination.
3. **Trust-building flow:** Shared factual content such as age ranges, scholarship policy, pronoun support, and community care principles is defined once and reused on home, registration, FAQ, and donor pages.
4. **Media flow:** Logos and evergreen brand assets live in `public/` or `src/assets/`, with image metadata referenced from content modules so designers can swap visuals without rewriting sections.

## Route and Content Architecture

### Recommended Routes

| Route | Primary Audience | Purpose | Core Content | Primary CTA |
|-------|------------------|---------|--------------|-------------|
| `/` | All audiences | Fast orientation and audience routing | Mission, camp snapshot, scholarships, audience entry points | Register, Donate, Work at Camp |
| `/about-camp` | Families, campers | Explain what camp is and why it matters | Daily experience, age ranges, activities, residential model | Explore registration |
| `/history` | Families, donors, alumni | Preserve origin story and mission continuity | Camp history, values, organizational story | Donate or contact |
| `/community-care` | Families, staff | Build trust around safety and belonging | Names/pronouns, accommodations, communication norms, tech-light expectations | Read FAQs or register |
| `/register` | Families | Prepare users for external registration | Eligibility, dates, scholarships, what to expect, external handoff explanation | Go to registration platform |
| `/donate` | Donors | Make scholarship support concrete and trustworthy | Impact framing, Ashrei Foundation relationship, scholarship promise, donor FAQs | Donate through DonorPerfect |
| `/staff` | Prospective staff | Recruit and qualify candidates | Why staff join, role types, expectations, support, timeline | Apply via Google Form |
| `/faq` | Families, donors, staff | Reduce friction across journeys | Segmented FAQs by audience | Jump to relevant action |
| `/contact` | Families, donors, partners | Provide human follow-up path | Contact methods, leadership/contact info, next-step prompts | Email camp |

### Optional Secondary Routes

| Route | Why it may exist in v1 | When to skip |
|-------|------------------------|--------------|
| `/leadership` | Useful if bios and trust signals become substantial | Skip if leadership content is brief enough for `/contact` or `/about-camp` |
| `/scholarships` | Useful if scholarship storytelling needs a dedicated SEO/share page | Skip if `/donate` can carry the full donor case clearly |

### Navigation Model

- Primary nav: About Camp, Community Care, Registration, Donate, Staff, FAQ, Contact.
- Persistent high-visibility CTAs: Register and Donate in the header on desktop and mobile.
- Homepage audience jump links: For Families, For Donors, For Staff.
- Footer repeats all key routes plus Ashrei Foundation mention and external policy/contact links.

## Shared Systems

### Shared UX Systems

| System | Responsibility | Recommendation |
|--------|----------------|----------------|
| Global navigation | Cross-site orientation and CTA access | Sticky header with route links and dual primary CTAs |
| CTA system | Consistent action wording and destination safety | Canonical action map with labels, URLs, tracking ids, and external-link behavior |
| SEO/metadata | Search previews and route-specific clarity | Per-route title, description, social image, canonical path, and optional schema |
| FAQ system | Reusable question rendering across pages | One accordion component fed by segmented content arrays |
| Testimonial/quote system | Social proof for families, donors, and staff | Shared quote card component with attribution metadata |
| Announcement system | Low-frequency temporary notices | Single optional site-wide banner configured in `content/site.js` |

### Shared Design Systems

| System | Responsibility | Recommendation |
|--------|----------------|----------------|
| Tokens | Color, spacing, type scale, motion, elevation | Central CSS variables reflecting existing brand palette |
| Layout primitives | Constrained width and section rhythm | Shared `PageSection`, `ContentGrid`, and `Stack` patterns |
| Media treatment | Image crops, badges, decorative motifs | Reusable figure component with alt text and art direction hooks |

## Content Boundaries

### What Belongs in the React Site

- Evergreen marketing copy and factual information about camp life.
- Scholarship promise, donor positioning, and Ashrei Foundation explanation.
- Staff recruiting copy, role summaries, and application expectations.
- Frequently asked questions that help visitors decide whether to click out.
- Contact details, seasonal notices, and lightweight updates.

### What Stays Outside the React Site

- Camper registration workflow and account management.
- Donation processing, receipts, and nonprofit transaction records.
- Staff application form submission and file collection.
- Any high-frequency editorial workflow that would justify a CMS.

### Content Ownership Model

| Content Area | Source of Truth | Update Frequency | Storage Recommendation |
|--------------|-----------------|------------------|------------------------|
| Core mission and page copy | Project team migrated from WordPress | Low | `src/content/*.js` |
| External platform URLs | Operations/admin owners | Low but sensitive | `src/content/actions.js` with one exported map |
| Dates, fees, scholarship notes | Camp operations | Seasonal | `src/content/registration.js` |
| Staff roles and application notes | Camp leadership | Seasonal | `src/content/staff.js` |
| Temporary notice banner | Camp leadership | Occasional | `src/content/site.js` |

## Build Order

### Recommended Implementation Sequence

1. **Foundation:** Replace portfolio starter shell with router, layout primitives, design tokens, and canonical action link config.
2. **Content migration pass:** Pull existing WordPress copy into structured content files before heavy visual refinement so information loss is avoided.
3. **Primary conversion pages:** Build `Home`, `Register`, `Donate`, and `Staff` first because they carry the highest audience and conversion value.
4. **Trust pages:** Build `About Camp`, `Community Care`, and `FAQ` next to support family confidence and staff qualification.
5. **Continuity pages:** Build `History` and `Contact`, then wire footer, SEO metadata, and any optional leadership content.
6. **Polish and instrumentation:** Add analytics hooks, accessibility review, responsive QA, and outbound conversion tracking.

### Dependency Notes

- Do the CTA map before page buildout so outbound links are not hardcoded in multiple files.
- Do content modeling before visual polish so migrated copy can be shaped into reusable section patterns.
- Do FAQ and trust content after the registration/donate/staff routes reveal the most common unanswered questions.

## Scaling Considerations

| Scale | Architecture Adjustments |
|-------|--------------------------|
| 0-1k monthly visitors | Static React site with local content modules is more than enough |
| 1k-100k monthly visitors | Add prerender/SSR or static pre-generation for SEO and performance if analytics show landing-page growth |
| 100k+ monthly visitors | Move to a stronger content backend or headless CMS only if update volume and team size justify it |

### Scaling Priorities

1. **First bottleneck:** Content maintainability breaks before traffic volume does; fix it by keeping page copy modular and link definitions centralized.
2. **Second bottleneck:** SEO discoverability and first-load performance will matter next; fix with route-level metadata, optimized media, and optional pre-rendering.

## Anti-Patterns

### Anti-Pattern 1: One Giant Homepage

**What people do:** Put every audience, every FAQ, and every story on `/` because it feels simpler.
**Why it's wrong:** Families, donors, and staff all have different trust questions, so a single page becomes long, unfocused, and hard to maintain.
**Do this instead:** Use the homepage as a high-energy orientation page with strong branching into focused routes.

### Anti-Pattern 2: Hardcoding External Links in JSX

**What people do:** Paste registration, donation, and application URLs directly into buttons across multiple components.
**Why it's wrong:** Seasonal link changes become risky, and it is easy for one page to point to an outdated platform or campaign.
**Do this instead:** Centralize all external destinations in one action-link config and consume them by action key.

### Anti-Pattern 3: Rebuilding a CMS for Occasional Edits

**What people do:** Add a headless CMS before launch because marketing sites are assumed to need one.
**Why it's wrong:** It adds operational complexity without solving the real v1 problem, which is preserving and organizing existing copy.
**Do this instead:** Keep content in structured source files until update frequency or editor count proves a CMS is necessary.

## Integration Points

### External Services

| Service | Integration Pattern | Notes |
|---------|---------------------|-------|
| Active Camps registration | Outbound CTA link with explanatory pre-click copy | Include scholarship reassurance and who the form is for before handoff |
| DonorPerfect via Ashrei Foundation | Outbound CTA link from donation-focused routes and repeated scholarship CTAs | Explain fiscal sponsorship clearly for donor trust |
| Google Forms staff application | Outbound CTA link from staff page | Set expectations on roles, qualifications, and timeline before click |
| Analytics provider (TBD) | Small wrapper for outbound CTA and route tracking | Keep vendor-specific code isolated in `lib/analytics` |

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| `content/` ↔ `routes/` | Direct imports | Content files should stay framework-light and serializable |
| `routes/` ↔ `components/sections/` | Props | Pages compose sections; sections should not own route concerns |
| `components/*` ↔ `lib/analytics` | Helper calls | UI triggers events without embedding vendor specifics |
| `app/seo` ↔ `routes/` | Metadata objects | Each route exports metadata alongside section content |

## Sources

- [C:\Users\dsbog\danielbogard.com\.planning\PROJECT.md](/C:/Users/dsbog/danielbogard.com/.planning/PROJECT.md)
- [C:\Users\dsbog\danielbogard.com\.planning\codebase\STRUCTURE.md](/C:/Users/dsbog/danielbogard.com/.planning/codebase/STRUCTURE.md)
- [C:\Users\dsbog\danielbogard.com\.planning\codebase\STACK.md](/C:/Users/dsbog/danielbogard.com/.planning/codebase/STACK.md)
- Existing Camp Indigo Point WordPress information architecture and copy, as summarized in project context

---
*Architecture research for: Camp Indigo Point React website*
*Researched: 2026-03-12*
