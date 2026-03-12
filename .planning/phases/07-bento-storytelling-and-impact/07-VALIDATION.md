---
phase: 07
slug: bento-storytelling-and-impact
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-12
---

# Phase 07 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | `vitest` + Testing Library |
| **Config file** | `vite.config.js` |
| **Quick run command** | `npm run test` |
| **Full suite command** | `npm run build && npm run test` |
| **Estimated runtime** | ~10-30 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run test`
- **After every plan wave:** Run `npm run build`
- **Before `$gsd-verify-work`:** Full suite must be green
- **Max feedback latency:** 30 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 07-01-01 | 01 | 1 | STORY-01, STORY-02 | content smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 07-01-02 | 01 | 1 | STORY-01 | render smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 07-02-01 | 02 | 2 | IMP-01 | content smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 07-02-02 | 02 | 2 | IMP-01 | render smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 07-03-01 | 03 | 3 | STORY-01, IMP-01 | a11y/regression | `npm run build && npm run test` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] Add assertions to existing route tests (`site-shell.test.jsx`, `donor-journey.test.jsx`) to check for the presence of the new quotes and dashboard metrics.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Bento Grid Responsiveness | STORY-01 | Visual Layout | Verify the asymmetrical grids collapse neatly into a single column on mobile screens without looking repetitive. |
| Dashboard Impact | IMP-01 | Visual Weight | Verify the Donor Dashboard feels like a primary feature of the page, not an afterthought. |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending