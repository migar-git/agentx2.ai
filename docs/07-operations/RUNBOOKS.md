---
title: "Runbooks"
doc_id: "OPS-RUNBOOKS"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "operations-swarm"
review_cadence: 60d
staleness_threshold: 90d
classification: Public
sources:
  - "Google SRE Workbook — https://sre.google/workbook/table-of-contents/ (accessed 2026-06-12)"
related: ["OPS-INCIDENT-RESPONSE", "OPS-DEPLOYMENT", "QUALITY-CI-CD"]
---

# Runbooks

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › [Operations](CONTINUOUS_IMPROVEMENT.md) › **Runbooks**
> **Status:** `Active` · **Owner:** `operations-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

Step-by-step operational procedures so any operator (human or agent) can act consistently. Each
runbook is testable and kept fresh.

## 2. Runbook index

| Runbook | When | Outcome |
|---------|------|---------|
| Local build bring-up | start the self-build loop locally | Ollama + pipeline running |
| Deploy site | promote to production | live, verified deploy ([Deployment](DEPLOYMENT.md)) |
| Rollback | bad deploy | last good build restored |
| Model refresh | 30-day model re-verify | pinned ids updated ([Model Strategy](../01-architecture/MODEL_STRATEGY.md)) |
| Freshness sweep | staleness scan triggers | docs re-verified/archived ([Freshness](FRESHNESS_POLICY.md)) |
| Incident response | something broke | resolved + postmortem ([Incident Response](INCIDENT_RESPONSE.md)) |

## 3. Runbook standard

Each runbook states: trigger, prerequisites, numbered steps, verification, rollback, and owner. Steps
are exercised periodically (game-day style) so they actually work
([SRE Workbook](https://sre.google/workbook/table-of-contents/)).

## 4. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | Runbook / on-call practice | <https://sre.google/workbook/table-of-contents/> | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 60d · **Next review:** 2026-08-11
- See [Freshness Policy](FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../../README.md) · ⬆️ [Docs Index](../INDEX.md)
- ↔️ Related: [Incident Response](INCIDENT_RESPONSE.md) · [Deployment](DEPLOYMENT.md) · [CI/CD](../04-quality/CI_CD.md)
