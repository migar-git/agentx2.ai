---
title: "Deployment (Canonical Entry Point)"
doc_id: "DEPLOYMENT-CANONICAL"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "operations-swarm"
review_cadence: 45d
staleness_threshold: 60d
classification: Public
tags: ["deployment", "entry-point"]
sources:
  - "Deployment (in-repo) — docs/07-operations/DEPLOYMENT.md (accessed 2026-06-12)"
  - "GitHub Pages — https://docs.github.com/en/pages (accessed 2026-06-12)"
related: ["OPS-DEPLOYMENT", "QUALITY-CI-CD", "OPS-RUNBOOKS", "OPS-INCIDENT-RESPONSE"]
---

# Deployment (Canonical Entry Point)

> **Breadcrumb:** [Home](../README.md) › [Docs Index](INDEX.md) › **Deployment**
> **Status:** `Active` · **Owner:** `operations-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

The single front door for deployment. The **authoritative deep doc** is
[Deployment](07-operations/DEPLOYMENT.md). This page summarizes and routes.

## 2. Key facts

- **Static-first** to [GitHub Pages](https://docs.github.com/en/pages); alternates documented
  (Cloudflare Pages, Azure Static Web Apps).
- Environments: per-PR **preview** + **production** (`main`, green only).
- Deploy only when all [gates](04-quality/QUALITY_GATES.md) pass and there is **no regression**.
- **Rollback** = redeploy the last good static build (instant); every deploy records its provenance.

## 3. Read next

- Deep: [Deployment](07-operations/DEPLOYMENT.md)
- [CI/CD](CI_CD.md) · [Runbook](RUNBOOK.md) · [Incident Response](07-operations/INCIDENT_RESPONSE.md)

## 4. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | Targets + rollback | [Deployment](07-operations/DEPLOYMENT.md) | 2026-06-12 |
| 2 | Pages hosting | <https://docs.github.com/en/pages> | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 45d · **Next review:** 2026-07-27
- See [Freshness Policy](07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../README.md) · ⬆️ [Docs Index](INDEX.md)
- ↔️ Related: [Deployment](07-operations/DEPLOYMENT.md) · [CI/CD](CI_CD.md) · [Runbook](RUNBOOK.md)
