---
phase: 10
slug: hero-slideshow-and-media-density
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-12
---

# Phase 10 — Validation Strategy

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
| 10-01-01 | 01 | 1 | MEDIA-02 | render smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 10-01-02 | 01 | 1 | MEDIA-02 | render smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 10-02-01 | 02 | 2 | MEDIA-03 | render smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 10-02-02 | 02 | 2 | MEDIA-03 | render smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 10-03-01 | 03 | 3 | MEDIA-02, MEDIA-03 | a11y/regression | `npm run build && npm run test` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] Add basic rendering tests for the new `HeroSlideshow` component.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Slideshow Animation | MEDIA-02 | Visual Polish | Observe the homepage hero section for at least 15 seconds to ensure the crossfade is smooth and images loop correctly. |
| Photo Layouts | MEDIA-03 | UI Quality | Scroll through all updated routes (Registration, Staff, FAQ, etc.) on desktop and mobile to verify photos fit the layout grids elegantly. |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending