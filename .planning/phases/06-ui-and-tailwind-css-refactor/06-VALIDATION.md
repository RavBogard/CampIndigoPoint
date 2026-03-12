---
phase: 06
slug: ui-and-tailwind-css-refactor
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-12
---

# Phase 06 — Validation Strategy

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
| 06-01-01 | 01 | 1 | ARCH-01 | config smoke | `npm run build` | ❌ W0 | ⬜ pending |
| 06-01-02 | 01 | 1 | ARCH-02, BRND-01 | config smoke | `npm run build` | ❌ W0 | ⬜ pending |
| 06-02-01 | 02 | 2 | LAY-01, LAY-02 | render smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 06-02-02 | 02 | 2 | LAY-01, LAY-02 | render smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 06-03-01 | 03 | 3 | LAY-01, LAY-02 | render smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 06-03-02 | 03 | 3 | RES-01, RES-02 | a11y/regression | `npm run build && npm run test` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] Ensure Vitest suite correctly renders Tailwind-processed classes (or at least doesn't fail when custom classes are removed).
- [ ] No specific new test files required, but existing component tests must remain green.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| No Horizontal Scroll | RES-01 | Viewport behavior | Open dev tools, set width to 320px, ensure no horizontal scrollbar exists on any route. |
| Fluid Typography | RES-02 | Visual design | Resize the window; ensure headings scale smoothly without breaking containers. |
| Brand "Soul" | BRND-01 | Subjective storytelling | Visually confirm the Teal/Orange palette and organic shapes remain intact. |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
