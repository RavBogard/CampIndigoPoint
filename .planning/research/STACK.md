# Stack Research

**Domain:** React-based nonprofit summer camp marketing site
**Researched:** 2026-03-12
**Confidence:** HIGH

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| React | 19.2.4 | UI layer for a highly branded, component-driven marketing site | Current stable React keeps the repo aligned with the existing front-end base, supports modern rendering patterns, and is the least disruptive path from the current Vite scaffold. |
| React Router (Framework Mode) | 7.13.1 | Routing, page-level data loading, metadata, and pre-rendering | Best fit for this repo because it stays in the React + Vite ecosystem while adding static rendering and route-level architecture that a donor/family-facing marketing site needs for SEO and fast first loads. |
| Vite | 8.0.0 | Build tool, dev server, and production bundling | Still the fastest path for local iteration in a content-heavy front-end repo, and it remains the natural foundation under React Router framework mode. |
| TypeScript | 5.9.3 | Type safety for content models, navigation, CTAs, and reusable page sections | Valuable here not because the site is complex, but because it prevents content-structure regressions as pages, staff content, and donor messaging evolve over time. |
| Tailwind CSS | 4.2.1 | Styling system for a custom branded design system | Tailwind v4 gives fast iteration, zero-runtime output, and easy tokenization of Camp Indigo Point's existing palette and playful visual identity without imposing a generic component library look. |

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| @react-router/dev | 7.13.1 | Enables React Router framework mode, route config, and static pre-render workflows | Use for the app shell and route architecture from day one. |
| @mdx-js/react + @mdx-js/rollup | 3.1.1 | Author long-form copy in version-controlled MDX with React component islands where helpful | Use for pages like About, History, Community Care, FAQ, and staff detail pages where content is mostly editorial and changes occasionally. |
| @headlessui/react | 2.2.9 | Accessible unstyled primitives for menus, disclosures, dialogs, and tabs | Use for mobile nav, FAQ accordions, modal media, and any interactive patterns that need accessibility without imposing design. |
| motion | 12.36.0 | Lightweight, expressive animation primitives | Use sparingly for hero reveals, section transitions, and CTA emphasis where animation supports storytelling instead of distracting from it. |

### Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| Vitest 4.1.0 | Fast unit and component-adjacent tests | Use for route helpers, content schema validation, and small rendering tests; keep the suite focused because this is a marketing site, not a line-of-business app. |
| Playwright 1.58.2 | Browser smoke tests for top-level journeys | Use for home page load, nav, external registration/donation/application links, and basic mobile regression checks before launch. |
| ESLint 10.0.3 + Prettier 3.8.1 | Linting and formatting | Keep rules practical; prioritize accessibility, dead-link prevention, and route/content consistency over heavy stylistic customization. |
| Cloudflare Pages | Static hosting, global CDN, preview deploys, and simple Git-based delivery | Best default deployment target for this project because the site can be shipped as static output, gets preview URLs automatically, and does not need a persistent app server for v1. |

## Installation

```bash
# Core
npm install react@19.2.4 react-dom@19.2.4 react-router@7.13.1

# Supporting
npm install @mdx-js/react@3.1.1 @headlessui/react@2.2.9 motion@12.36.0

# Dev dependencies
npm install -D vite@8.0.0 @vitejs/plugin-react@6.0.0 @react-router/dev@7.13.1 typescript@5.9.3 tailwindcss@4.2.1 @tailwindcss/vite@4.2.1 @mdx-js/rollup@3.1.1 vitest@4.1.0 @playwright/test@1.58.2 eslint@10.0.3 prettier@3.8.1
```

## CMS Decision

**Recommendation:** no traditional CMS for v1.

Camp Indigo Point's content changes occasionally, not daily, and its highest-value actions already live on external platforms. That makes a CMS more operational overhead than business value in the first rebuild. The best-fit 2026 setup is:

- Route content in MDX for narrative pages
- Shared facts, links, deadlines, and CTA metadata in typed TypeScript content files
- Images and downloadable assets versioned in the repo

This keeps content deployable, reviewable in pull requests, and easy for a developer or technically comfortable collaborator to update. If the team later needs frequent non-technical editing, add a headless CMS in a later phase rather than paying that complexity tax now.

## Deployment Recommendation

**Deploy to Cloudflare Pages** with static output from React Router framework mode.

Recommended render strategy:

- Pre-render all primary marketing routes at build time
- Keep registration, donation, and staff application CTAs as external links
- Avoid runtime SSR in v1 unless a later phase introduces personalized or highly dynamic content

This gives the project CDN-fast delivery, good SEO, preview deployments for content review, and a simpler operational model than maintaining a Node server.

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| React Router framework mode on Vite | Astro | Use Astro if the team is willing to leave the React+Vite base and wants a more content-first architecture with islands by default. |
| No CMS in v1 | Sanity | Use Sanity only if non-developers must update pages, deadlines, or campaign content at least monthly without engineering support. |
| Cloudflare Pages | Netlify | Use Netlify if the team already standardizes there or prefers its editorial/deploy ergonomics; it is also a valid static-hosting choice for this project. |
| Tailwind CSS v4 | CSS Modules + handcrafted design tokens | Use this alternative if the team strongly prefers authored CSS and wants a smaller utility-class footprint at the cost of slower UI iteration. |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| Rebuilding on WordPress | It recreates the plugin/theme maintenance burden the project is explicitly trying to escape and is a poor fit for a mostly static site with external operational flows. | React Router + Vite + repo-managed content |
| A client-only SPA for core marketing pages | Pure client rendering weakens first-load performance, metadata control, and search discoverability for families and donors landing on deep pages. | React Router framework mode with pre-rendered routes |
| A headless CMS in v1 | The editorial cadence is too low to justify schema design, webhooks, preview plumbing, auth, and ongoing content-model maintenance. | MDX + typed content files in Git |
| Heavy visual component suites like MUI or Chakra for primary page design | They speed up dashboards, not distinctive camp marketing sites, and they will push the redesign toward a generic SaaS look. | Tailwind CSS + bespoke design system components |
| Runtime SSR and server infrastructure by default | The site's key interactions leave the site anyway, so a live server adds cost and moving parts without materially improving v1 outcomes. | Static pre-rendering on Cloudflare Pages |

## Stack Patterns by Variant

**If the team keeps developer-managed content only:**
- Use MDX + TypeScript content modules only
- Because it is the simplest, cheapest, and most maintainable option for occasional updates

**If non-technical staff must edit content regularly after launch:**
- Add Sanity as a later-phase content layer, but keep the front end in React Router + Vite
- Because the rendering, deployment, and component architecture can stay stable while the authoring workflow changes

**If the site later adds a news/blog stream or recurring campaigns:**
- Keep the same core stack, but introduce a content collection layer and richer preview workflow
- Because the current stack is flexible enough to grow without a rewrite

## Version Compatibility

| Package A | Compatible With | Notes |
|-----------|-----------------|-------|
| react@19.2.4 | react-dom@19.2.4 | Keep these on the same patch version. |
| react-router@7.13.1 | @react-router/dev@7.13.1 | Match versions exactly when using framework mode. |
| vite@8.0.0 | @vitejs/plugin-react@6.0.0 | Use the official React plugin that tracks Vite's major version. |
| tailwindcss@4.2.1 | @tailwindcss/vite@4.2.1 | Prefer the first-party Vite integration for Tailwind v4 projects. |
| @mdx-js/react@3.1.1 | @mdx-js/rollup@3.1.1 | Keep MDX runtime and bundler integration on the same major/minor line. |
| vitest@4.1.0 | vite@8.0.0 | Vitest follows Vite closely; upgrade together and rerun smoke tests. |

## Sources

- [PROJECT context](/Users/dsbog/danielbogard.com/.planning/PROJECT.md) - audience, constraints, existing repo base, and scope limits
- [STACK template](/Users/dsbog/.codex/get-shit-done/templates/research-project/STACK.md) - required output structure
- [React Versions](https://react.dev/versions) - verified current React doc line is 19.2
- [React 19.2 release post](https://react.dev/blog/2025/10/01/react-19-2) - verified React 19.2 as current release family
- [React blog security notice](https://react.dev/blog/2025/12/11/denial-of-service-and-source-code-exposure-in-react-server-components) - verified 19.2.4 as safe React patch line
- [React Router modes](https://reactrouter.com/start/modes) - verified framework mode positioning and rendering strategy support
- [React Router pre-rendering](https://reactrouter.com/how-to/pre-rendering) - verified static pre-render support and `ssr:false` deployment option
- [React Router deploying](https://reactrouter.com/start/framework/deploying) - verified static hosting support
- [Vite guide](https://vite.dev/guide/) - verified current official Vite docs and architecture fit
- [Vite blog](https://vite.dev/blog) - verified the current official release track beyond Vite 7
- [Tailwind CSS v4.0](https://tailwindcss.com/blog/tailwindcss-v4) - verified first-party Vite plugin and v4 architecture
- [Tailwind compatibility](https://tailwindcss.com/docs/compatibility) - verified Tailwind v4 modern-browser constraints
- [Cloudflare Pages Git integration](https://developers.cloudflare.com/pages/get-started/git-integration/) - verified preview/build workflow for Git-based deploys
- [Cloudflare Pages build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/) - verified standard Vite build command and output directory
- [Cloudflare Vite plugin docs](https://developers.cloudflare.com/workers/vite-plugin/) - confirmed broader Vite/React Router ecosystem support on Cloudflare
- [npm: react](https://www.npmjs.com/package/react) - verified exact latest package version 19.2.4
- [npm: react-dom](https://www.npmjs.com/package/react-dom) - verified exact latest package version 19.2.4
- [npm: react-router](https://www.npmjs.com/package/react-router) - verified exact latest package version 7.13.1
- [npm: @react-router/dev](https://www.npmjs.com/package/@react-router/dev) - verified exact latest package version 7.13.1
- [npm: vite](https://www.npmjs.com/package/vite) - verified exact latest package version 8.0.0
- [npm: @vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react) - verified exact latest package version 6.0.0
- [npm: typescript](https://www.npmjs.com/package/typescript) - verified exact latest package version 5.9.3
- [npm: tailwindcss](https://www.npmjs.com/package/tailwindcss) - verified exact latest package version 4.2.1
- [npm: @tailwindcss/vite](https://www.npmjs.com/package/@tailwindcss/vite) - verified exact latest package version 4.2.1
- [npm: @mdx-js/react](https://www.npmjs.com/package/@mdx-js/react) - verified exact latest package version 3.1.1
- [npm: @mdx-js/rollup](https://www.npmjs.com/package/@mdx-js/rollup) - verified exact latest package version 3.1.1
- [npm: @headlessui/react](https://www.npmjs.com/package/@headlessui/react) - verified exact latest package version 2.2.9
- [npm: motion](https://www.npmjs.com/package/motion) - verified exact latest package version 12.36.0
- [npm: vitest](https://www.npmjs.com/package/vitest) - verified exact latest package version 4.1.0
- [npm: @playwright/test](https://www.npmjs.com/package/@playwright/test) - verified exact latest package version 1.58.2
- [npm: eslint](https://www.npmjs.com/package/eslint) - verified exact latest package version 10.0.3
- [npm: prettier](https://www.npmjs.com/package/prettier) - verified exact latest package version 3.8.1

---
*Stack research for: Camp Indigo Point marketing site rebuild*
*Researched: 2026-03-12*
