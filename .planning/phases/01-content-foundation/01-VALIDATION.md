---
phase: 01
slug: content-foundation
status: ready
nyquist_compliant: true
wave_0_complete: true
created: 2026-03-12
---

# Phase 01 - Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | other - eslint + vite build |
| **Config file** | `eslint.config.js`, `vite.config.js` |
| **Quick run command** | `npm run lint` |
| **Full suite command** | `npm run build` |
| **Estimated runtime** | ~20 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run lint`
- **After every plan wave:** Run `npm run build`
- **Before `$gsd-verify-work`:** Full suite must be green
- **Max feedback latency:** 20 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 01-01-01 | 01 | 1 | OPS-01 | static validation | `npm run lint` | ❌ W0 | ⬜ pending |
| 01-01-02 | 01 | 1 | OPS-01 | integration build | `npm run build` | ❌ W0 | ⬜ pending |
| 01-02-01 | 02 | 2 | OPS-01 | static validation | `npm run lint` | ❌ W0 | ⬜ pending |
| 01-02-02 | 02 | 2 | OPS-01 | manual content audit | `npm run build` | ❌ W0 | ⬜ pending |
| 01-03-01 | 03 | 2 | OPS-02 | static validation | `npm run lint` | ❌ W0 | ⬜ pending |
| 01-03-02 | 03 | 2 | QUAL-03 | integration build | `npm run build` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] Existing infrastructure covers automated validation for this phase; no new framework install required.
- [ ] Execution should add any minimal fixtures/scripts only if Phase 1 work introduces a custom verification need that lint/build cannot cover.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Trust-critical facts preserved from legacy site | OPS-01 | Accuracy depends on editorial comparison with the live site | Compare migrated content files against current WordPress pages and confirm must-keep facts remain present. |
| Seasonal banner model matches agreed constraints | OPS-02 | Configuration intent is editorial rather than runtime-complex | Verify a single manual-toggle banner object exists and is scoped to operational milestone updates. |
| Metadata coverage exists for each planned page/domain | QUAL-03 | Build success alone does not prove page-model completeness | Confirm metadata objects exist for all primary page domains and include title/description defaults. |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 20s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** approved 2026-03-12
