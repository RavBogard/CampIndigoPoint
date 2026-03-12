---
phase: 05
slug: staff-recruiting-and-contact-journey
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-12
---

# Phase 05 — Validation Strategy

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
| 05-01-01 | 01 | 1 | STAF-01, STAF-02 | content smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 05-01-02 | 01 | 1 | STAF-03 | render smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 05-02-01 | 02 | 2 | TRST-02 | content smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 05-02-02 | 02 | 2 | TRST-01 | render smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 05-03-01 | 03 | 3 | QUAL-01, QUAL-02 | a11y/regression | `npm run build && npm run test` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] Add assertions to `src/test/site-shell.test.jsx` or a new `staff-contact.test.jsx` to verify the "Magic and Mud" narrative and the new explicit contact routing.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| "Magic and Mud" Balance | STAF-02 | Subjective storytelling quality | Read the Staff page to ensure it sells the vision while being honest about the hard work. |
| Press Section Authority | TRST-01 | Visual design | Verify the "In the Press" section looks credible and uses real article titles/links. |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
