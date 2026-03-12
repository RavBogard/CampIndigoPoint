---
phase: 08
slug: youth-safety-and-resource-hub
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-12
---

# Phase 08 — Validation Strategy

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
| 08-01-01 | 01 | 1 | SAFE-01, SAFE-02 | render smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 08-02-01 | 02 | 2 | HUB-01 | content smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 08-02-02 | 02 | 2 | HUB-01 | render smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 08-03-01 | 03 | 3 | SAFE-01, HUB-01 | a11y/regression | `npm run build && npm run test` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] Add assertions to `site-shell.test.jsx` to ensure the `<QuickExit />` component renders on all routes.
- [ ] Ensure Vitest does not fail when `framer-motion` is imported in the FAQ route.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Quick Exit Redirect | SAFE-01 | Browser API | Click the Quick Exit button and verify it immediately loads weather.com. |
| Quick Exit Esc Key | SAFE-01 | Keyboard Event | Hit the 'Escape' key three times rapidly and verify the redirect triggers. |
| FAQ Animation | HUB-01 | Visual Polish | Click different category filters on the FAQ page and ensure items fade in/out smoothly without jarring layout shifts. |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending