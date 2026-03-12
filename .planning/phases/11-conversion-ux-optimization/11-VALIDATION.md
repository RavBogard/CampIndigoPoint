---
phase: 11
slug: conversion-ux-optimization
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-12
---

# Phase 11 — Validation Strategy

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
| 11-01-01 | 01 | 1 | CONV-02 | content smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 11-01-02 | 01 | 1 | CONV-02 | render smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 11-02-01 | 02 | 2 | CONV-01 | render smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 11-03-01 | 03 | 3 | CONV-01, CONV-02 | a11y/regression | `npm run build && npm run test` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] Add basic rendering tests for `CampTimeline` and `StickyActionBar` components.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Timeline Animation | CONV-02 | Visual Polish | Scroll down the About page; verify timeline items fade in as they enter the viewport. |
| Sticky Bar Visibility | CONV-01 | UX Logic | Scroll past the hero section on a long page; verify the bar slides in. Scroll back to top; verify it hides. Ensure it doesn't obscure the footer on mobile. |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending