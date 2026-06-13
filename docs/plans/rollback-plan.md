---
title: "Rollback Plan — Audit & Hardening Changeset"
doc_id: "PLAN-ROLLBACK"
status: Active
version: 1.0.0
created: 2026-06-13
updated: 2026-06-13
last_verified: 2026-06-13
owner: "production-ops-brain"
reviewers: []
review_cadence: 90d
staleness_threshold: 120d
classification: Public
tags: ["rollback", "release", "operations"]
sources:
  - "git revert documentation — https://git-scm.com/docs/git-revert (accessed 2026-06-13)"
supersedes: []
related: ["PLAN-MASTER-BUILD", "RELEASE-READINESS", "OPS-DEPLOYMENT"]
---

# Rollback Plan — Audit & Hardening Changeset

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › **Rollback Plan**
> **Status:** `Active` · **Owner:** `production-ops-brain` · **Last verified:** `2026-06-13`

## 1. Purpose

This plan describes how to reverse the audit-and-hardening changeset (the dependency/security upgrade
and the CI/security automation) safely and completely. The deployed product is a **static artifact**,
so rollback carries no data-migration or stateful risk.

## 2. Whole-changeset rollback

The fastest path is to revert the commit(s) and let CI rebuild:

```sh
git revert --no-edit <commit-sha>   # creates an inverse commit; preserves history
git push                            # CI + Pages rebuild from the reverted tree
```

Alternatively, before the changes are pushed, the working tree can be reset:

```sh
git reset --soft HEAD~1             # undo the local commit, keep changes staged
# or
git restore --staged --worktree .  # discard all working-tree changes (destructive)
```

GitHub Pages also retains the previous successful deployment, which can be re-published from the
Actions UI without a code change.

## 3. Per-change rollback

| Change | Files | Rollback action | Side effects |
|--------|-------|-----------------|--------------|
| Astro 6 / sitemap upgrade | [`package.json`](../../package.json), `package-lock.json` | Restore prior versions; `npm ci` | Reintroduces the resolved HIGH advisories |
| Node 22 in CI/CD | [`ci.yml`](../../.github/workflows/ci.yml), [`deploy.yml`](../../.github/workflows/deploy.yml) | Restore `node-version: 20` | Returns to an EOL runtime; Astro 6 needs ≥22.12 |
| Production audit CI gate | [`ci.yml`](../../.github/workflows/ci.yml) | Remove the `audit:prod` step | CI no longer fails on vulnerable runtime deps |
| Scheduled security workflow | [`security.yml`](../../.github/workflows/security.yml) | Delete the file | No scheduled CVE re-scan |
| Dependabot | [`dependabot.yml`](../../.github/dependabot.yml) | Delete the file | No automated dependency PRs |
| Pre-commit hook | [`.githooks/pre-commit`](../../.githooks/pre-commit), `scripts/setup-hooks.mjs`, `.gitattributes` | `git config --unset core.hooksPath`; delete files; remove `prepare` script | No local secret scan (CI still scans) |
| DX scripts | [`package.json`](../../package.json) | Revert the `scripts` block | Loses `security` / `release-check` / `lint:md:fix` aliases |
| Audit + plan docs | `docs/reviews/*`, `docs/plans/*`, `docs/releases/*` | Delete files; remove index links | None (documentation only) |

## 4. Verification after rollback

Run the full gate to confirm a clean reverted state:

```sh
npm ci
npm run ci          # check + build + test + validate + lint:md
```

Expect: 0 type errors, 18 pages built, 7/7 tests, 0 broken links, 0 lint errors. If the upgrade was
reverted, `npm audit` will again report the toolchain advisories documented in
[Security Review](../reviews/security-review.md).

## 5. Decisions & Rationale

| Decision | Why | Reversibility | Date | Owner |
|----------|-----|---------------|------|-------|
| Prefer `git revert` over history rewrite | Preserves auditable history; no force-push | High | 2026-06-13 | production-ops-brain |

## 6. Risks & Open Questions

| Risk / Question | Impact | Mitigation / Next step | Owner | Due |
|-----------------|--------|------------------------|-------|-----|
| Reverting the upgrade reopens advisories | Medium | Only revert if the upgrade regresses; re-apply promptly | production-ops-brain | On demand |

## 7. Grounding & Sources

| # | Claim it supports | Source (title + URL) | Publisher | Accessed |
|---|-------------------|----------------------|-----------|----------|
| 1 | `git revert` creates an inverse commit | <https://git-scm.com/docs/git-revert> | Git | 2026-06-13 |

## 8. Change Log (doc-local)

| Version | Date | Author | Summary |
|---------|------|--------|---------|
| 1.0.0 | 2026-06-13 | `production-ops-brain` | Initial rollback plan for the audit + hardening changeset. |

---

### Freshness

- **Created:** 2026-06-13 · **Updated:** 2026-06-13 · **Last verified:** 2026-06-13
- **Review cadence:** every 90 days · **Staleness threshold:** 120 days · **Next review due:** 2026-09-11
- Governed by the [Freshness Policy](../07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../../README.md) · ⬆️ [Docs Index](../INDEX.md)
- ↔️ Related: [Master Build Plan](master-build-plan.md) · [Release Readiness](../releases/release-readiness-report.md) · [Deployment](../07-operations/DEPLOYMENT.md)
