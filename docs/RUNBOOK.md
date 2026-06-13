---
title: "Runbook (Canonical Entry Point)"
doc_id: "RUNBOOK-CANONICAL"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "operations-swarm"
review_cadence: 45d
staleness_threshold: 60d
classification: Public
tags: ["runbook", "operations", "entry-point"]
sources:
  - "Runbooks (in-repo) — docs/07-operations/RUNBOOKS.md (accessed 2026-06-12)"
related: ["OPS-RUNBOOKS", "OPS-INCIDENT-RESPONSE", "OPS-DEPLOYMENT", "QUALITY-CI-CD"]
---

# Runbook (Canonical Entry Point)

> **Breadcrumb:** [Home](../README.md) › [Docs Index](INDEX.md) › **Runbook**
> **Status:** `Active` · **Owner:** `operations-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

The single front door for operational runbooks. The **authoritative deep doc** is
[Runbooks](07-operations/RUNBOOKS.md). This page summarizes and routes.

## 2. Runbook index

| Runbook | When | Outcome |
|---------|------|---------|
| Local build bring-up | start the self-build loop locally | Ollama + pipeline running |
| Deploy site | promote to production | live, verified deploy ([Deployment](DEPLOYMENT.md)) |
| Rollback | bad deploy | last good build restored |
| Model refresh | 30-day model re-verify | pinned ids updated ([Model Strategy](01-architecture/MODEL_STRATEGY.md)) |
| Freshness sweep | staleness scan triggers | docs re-verified/archived ([Freshness](07-operations/FRESHNESS_POLICY.md)) |
| Incident response | something broke | resolved + postmortem ([Incident Response](07-operations/INCIDENT_RESPONSE.md)) |

## 3. Standard

Each runbook states: trigger, prerequisites, numbered steps, verification, rollback, owner — and is
exercised periodically so it actually works. Full detail: [Runbooks](07-operations/RUNBOOKS.md).

## 4. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | Runbook set + standard | [Runbooks](07-operations/RUNBOOKS.md) | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 45d · **Next review:** 2026-07-27
- See [Freshness Policy](07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../README.md) · ⬆️ [Docs Index](INDEX.md)
- ↔️ Related: [Runbooks](07-operations/RUNBOOKS.md) · [Incident Response](07-operations/INCIDENT_RESPONSE.md) · [Deployment](DEPLOYMENT.md)
