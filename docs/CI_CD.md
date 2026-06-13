---
title: "CI/CD (Canonical Entry Point)"
doc_id: "CI-CD-CANONICAL"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "quality-swarm"
review_cadence: 45d
staleness_threshold: 60d
classification: Public
tags: ["ci-cd", "entry-point"]
sources:
  - "CI/CD (in-repo) — docs/04-quality/CI_CD.md (accessed 2026-06-12)"
  - "GitHub Actions — https://docs.github.com/en/actions (accessed 2026-06-12)"
related: ["QUALITY-CI-CD", "QUALITY-QUALITY-GATES", "QUALITY-REGRESSION-POLICY", "DEPLOYMENT-CANONICAL"]
---

# CI/CD (Canonical Entry Point)

> **Breadcrumb:** [Home](../README.md) › [Docs Index](INDEX.md) › **CI/CD**
> **Status:** `Active` · **Owner:** `quality-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

The single front door for CI/CD. The **authoritative deep doc** is [CI/CD](04-quality/CI_CD.md). This
page summarizes and routes.

## 2. Key facts

- Runs on [GitHub Actions](https://docs.github.com/en/actions): `ci`, `deploy`, `security`,
  `freshness`, `eval-trend` workflows.
- Enforces every [Quality Gate](04-quality/QUALITY_GATES.md) + the
  [Zero-Regression Policy](04-quality/REGRESSION_POLICY.md) on every change.
- Secure by default: secret + dependency scanning; pinned action versions; no `--no-verify`; no
  force-push to `main`.
- Deploy only on green `main` ([Deployment](DEPLOYMENT.md)); full provenance recorded per deploy.

## 3. Read next

- Deep: [CI/CD](04-quality/CI_CD.md)
- [Quality Gates](04-quality/QUALITY_GATES.md) · [Regression Policy](04-quality/REGRESSION_POLICY.md) ·
  [Deployment](DEPLOYMENT.md) · [Release Engineering](04-quality/RELEASE_ENGINEERING.md)

## 4. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | Pipelines + gates | [CI/CD](04-quality/CI_CD.md) | 2026-06-12 |
| 2 | CI engine | <https://docs.github.com/en/actions> | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 45d · **Next review:** 2026-07-27
- See [Freshness Policy](07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../README.md) · ⬆️ [Docs Index](INDEX.md)
- ↔️ Related: [CI/CD](04-quality/CI_CD.md) · [Deployment](DEPLOYMENT.md)
