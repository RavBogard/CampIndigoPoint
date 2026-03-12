---
phase: 03
slug: family-trust-and-registration-journey
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-12
---

# Phase 03 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | `vitest` + Testing Library |
| **Config file** | `vitest.config.js` (or `vite.config.js`) |
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
| 03-01-01 | 01 | 1 | FAM-01, FAM-02 | content/route smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 03-01-02 | 01 | 1 | FAM-03, FAM-04 | content/route smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 03-01-03 | 01 | 1 | FAM-05, TRST-03 | content/route smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 03-02-01 | 02 | 2 | TRST-01, BRAND-01 | asset/shell smoke | `npm run build` | ❌ W0 | ⬜ pending |
| 03-02-02 | 02 | 2 | TRST-01, BRAND-02 | asset/render smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 03-03-01 | 03 | 3 | QUAL-01, QUAL-02 | a11y/regression | `npm run test` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] Ensure `vitest` is correctly configured to handle route-level rendering tests.
- [ ] Create a dedicated test file for Phase 3 route content assertions (e.g., `src/test/family-journey.test.jsx`).
- [ ] Add assertions for logo presence and alt text in `SiteHeader`.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Family trust story flow | TRST-01 | Subjective storytelling quality | Read through Home -> About -> Registration as a parent; ensure tone is warm and specific. |
| Logo and media responsive scaling | QUAL-01 | Visual layout quality | Verify the new logo doesn't crowd the header on mobile; check image aspect ratios. |
| Registration handoff clarity | FAM-05 | User experience clarity | Confirm the "External Handoff" explanation is easy to find and understand before clicking. |
| Community care framing | FAM-02 | Sensitive trust signaling | Review the names/pronouns and accommodation language for tone and placement. |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
