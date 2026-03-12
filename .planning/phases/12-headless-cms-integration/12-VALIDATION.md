---
phase: 12
slug: headless-cms-integration
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-12
---

# Phase 12 — Validation Strategy

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
| 12-01-01 | 01 | 1 | OPS-03 | data structure | `npm run build` | ❌ W0 | ⬜ pending |
| 12-01-02 | 01 | 1 | OPS-03 | render smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 12-02-01 | 02 | 2 | OPS-03 | config smoke | `npm run build` | ❌ W0 | ⬜ pending |
| 12-03-01 | 03 | 3 | OPS-03 | a11y/regression | `npm run test` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] Ensure Vitest can cleanly import and mock `.json` files replacing the old `.js` content files.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| CMS Dashboard Access | OPS-03 | Auth/Tooling | Navigate to `/admin/index.html` and verify the Decap CMS UI loads. |
| Visual Fidelity | OPS-03 | UI Quality | Verify that moving from JS to JSON data sources did not break any Tailwind grid layouts or typography. |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending