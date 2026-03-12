---
phase: 02
slug: site-shell-and-audience-routing
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-12
---

# Phase 02 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | `eslint` + Vite build today; recommend `vitest` + Testing Library in Wave 0 |
| **Config file** | `eslint.config.js`; test config none yet |
| **Quick run command** | `npm run lint` |
| **Full suite command** | `npm run build` |
| **Estimated runtime** | ~10-30 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run lint`
- **After every plan wave:** Run `npm run build`
- **Before `$gsd-verify-work`:** Full suite must be green
- **Max feedback latency:** 30 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 02-01-01 | 01 | 1 | NAV-02 | lint/build smoke | `npm run lint && npm run build` | ❌ W0 | ⬜ pending |
| 02-01-02 | 01 | 1 | NAV-02, QUAL-01 | render smoke | `npm run lint && npm run build` | ❌ W0 | ⬜ pending |
| 02-02-01 | 02 | 2 | NAV-01, NAV-03 | route/shell smoke | `npm run lint && npm run build` | ❌ W0 | ⬜ pending |
| 02-02-02 | 02 | 2 | NAV-03 | route/shell smoke | `npm run lint && npm run build` | ❌ W0 | ⬜ pending |
| 02-03-01 | 03 | 2 | QUAL-01, QUAL-02 | accessibility/manual mix | `npm run lint && npm run build` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `vitest` and Testing Library added if planner wants automated shell interaction coverage
- [ ] minimal shell render test file created for route registration and CTA presence
- [ ] test command added to `package.json`

*If none: Existing infrastructure covers only syntax/build safety, not interaction regressions.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Mobile drawer keyboard behavior | QUAL-02 | Requires interaction and focus review | Open the mobile menu, tab through all controls, confirm escape/close behavior and focus return |
| Contrast and readability in final shell palette | QUAL-02 | Visual design choice affects compliance | Review header, announcement, and CTA combinations against final chosen colors |
| Responsive reflow at small widths | QUAL-01 | Layout quality is best checked visually | Test homepage and core routes at narrow mobile widths and confirm no horizontal scrolling |
| Reduced-motion experience | QUAL-02 | Depends on final animation choices | Enable reduced motion, reload, and verify menu/shell transitions remain usable and calm |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
