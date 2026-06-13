---
title: "Deployment"
doc_id: "OPS-DEPLOYMENT"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "operations-swarm"
review_cadence: 60d
staleness_threshold: 90d
classification: Public
tags: ["deployment", "rollout", "rollback", "environments"]
sources:
  - "GitHub Pages — https://docs.github.com/en/pages (accessed 2026-06-12)"
  - "Cloudflare Pages — https://developers.cloudflare.com/pages/ (accessed 2026-06-12)"
  - "Azure Static Web Apps — https://learn.microsoft.com/en-us/azure/static-web-apps/ (accessed 2026-06-12)"
related: ["QUALITY-CI-CD", "QUALITY-RELEASE-ENGINEERING", "OPS-INCIDENT-RESPONSE", "ARCH-TECH-STACK"]
---

# Deployment

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › [Operations](CONTINUOUS_IMPROVEMENT.md) › **Deployment**
> **Status:** `Active` · **Owner:** `operations-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

Where and how the site deploys, and how we roll back. Static-first keeps deploys boring and safe.

## 2. Environments

| Env | Purpose | Source |
|-----|---------|--------|
| Preview | per-PR build | CI artifact |
| Production | live site | `main` (green only) |

## 3. Targets

- **Primary:** [GitHub Pages](https://docs.github.com/en/pages) (static; fits the public repo).
- **Alternates:** [Cloudflare Pages](https://developers.cloudflare.com/pages/),
  [Azure Static Web Apps](https://learn.microsoft.com/en-us/azure/static-web-apps/) — documented for
  portability ([Tech Stack](../01-architecture/TECH_STACK.md)).

## 4. Rollout & rollback

```mermaid
flowchart LR
    Green[Green CI on main] --> Build[Build static]
    Build --> Publish[Publish]
    Publish --> Verify[Smoke + Vitals check]
    Verify -->|ok| Done[Live]
    Verify -->|fail| Rollback[Revert to last good]
```

- Deploy only when all [gates](../04-quality/QUALITY_GATES.md) pass and there is no regression.
- **Rollback** = redeploy the last good build (static makes this instant); every deploy records its
  provenance ([CI/CD](../04-quality/CI_CD.md)).

## 5. DNS & domain

`agentx2.ai` maps to the chosen host; configuration is recorded in the private ops repo (no secrets in
public). Domain/DNS specifics `[UNVERIFIED]` until confirmed.

## 6. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | Pages hosting | <https://docs.github.com/en/pages> | 2026-06-12 |
| 2 | Cloudflare Pages | <https://developers.cloudflare.com/pages/> | 2026-06-12 |
| 3 | Azure Static Web Apps | <https://learn.microsoft.com/en-us/azure/static-web-apps/> | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 60d · **Next review:** 2026-08-11
- See [Freshness Policy](FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../../README.md) · ⬆️ [Docs Index](../INDEX.md)
- ↔️ Related: [CI/CD](../04-quality/CI_CD.md) · [Release Engineering](../04-quality/RELEASE_ENGINEERING.md) · [Incident Response](INCIDENT_RESPONSE.md)
