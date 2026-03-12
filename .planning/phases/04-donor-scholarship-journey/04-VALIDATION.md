---
phase: 04
slug: donor-scholarship-journey
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-12
---

# Phase 04 — Validation Strategy

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
| 04-01-01 | 01 | 1 | DON-01 | content smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 04-01-02 | 01 | 1 | DON-02, DON-03 | content smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 04-02-01 | 02 | 2 | DON-01, DON-02 | render smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 04-02-02 | 02 | 2 | DON-03 | render smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 04-03-01 | 03 | 3 | QUAL-01, QUAL-02 | a11y/regression | `npm run build && npm run test` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] Add assertions to `src/test/site-shell.test.jsx` or a new `donor-journey.test.jsx` to verify the Ashrei Foundation explanation and impact tiers render correctly.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Emotional Narrative Impact | DON-01 | Subjective storytelling quality | Read the Donate page to ensure the "saving lives" and "black and white to color" themes are evocative and central. |
| External Handoff Clarity | DON-02 | Trust and UX clarity | Verify the Ashrei Foundation explanation is clear and immediately precedes the donation CTA. |
| Photo Authenticity | DON-01 | Visual storytelling | Ensure the hero image feels authentic and highlights intergenerational connection (campers and staff). |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
