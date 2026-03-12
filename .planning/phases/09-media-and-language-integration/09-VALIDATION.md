---
phase: 09
slug: media-and-language-integration
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-12
---

# Phase 09 — Validation Strategy

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
| 09-01-01 | 01 | 1 | LANG-01 | content smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 09-02-01 | 02 | 2 | MEDIA-01 | content smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 09-02-02 | 02 | 2 | MEDIA-01 | render smoke | `npm run test` | ❌ W0 | ⬜ pending |
| 09-03-01 | 03 | 3 | MEDIA-01, LANG-01 | a11y/regression | `npm run build && npm run test` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] Ensure Vitest tests still pass after content structure updates.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Tone Consistency | LANG-01 | Subjective storytelling | Read the site from the homepage through registration to ensure the language feels profound and joyful. |
| Media Loading | MEDIA-01 | Visual QA | Ensure all newly integrated photos load correctly and don't break the layout grids. |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending