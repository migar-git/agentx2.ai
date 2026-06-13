---
title: "AI Governance"
doc_id: "GOV-AI-GOVERNANCE-FRONTDOOR"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "governance-swarm"
review_cadence: 60d
staleness_threshold: 90d
classification: Public
tags: ["front-door"]
sources:
  - "AgentX2.ai canonical doc (in-repo, accessed 2026-06-12)"
related: ["GOV-AI-GOVERNANCE"]
---

# AI Governance

> **Breadcrumb:** [Home](../README.md) › [Docs Index](INDEX.md) › **AI Governance**
> **Status:** `Active` · **Owner:** `governance-swarm` · **Last verified:** `2026-06-12`

## 1. Canonical source

> **Canonical source:** [AI Governance](06-governance/AI_GOVERNANCE.md) — the full policy layer and single source of truth. This page is a thin front door; it points to the deep doc and does not duplicate it.

## 2. Summary

- The policy layer that keeps autonomous swarms safe, accountable, and auditable across model, prompt, agent, and data governance with human oversight.
- Aligned to the NIST AI Risk Management Framework functions: Govern, Map, Measure, Manage.
- Governance domains: Model (approved registry, eval-gated promotion), Prompt (versioned, injection-hardened), Agent (specs, autonomy tiers, lifecycle), and Data (classification, minimization, retention).
- Cross-cutting controls: human oversight via approval gates, audit via traces + logs + provenance, and a live risk register.
- Controls are enforced in [CI/CD](04-quality/CI_CD.md) and surfaced on [Mission Control](05-observability/MISSION_CONTROL.md).
- Safety baseline: every agent is screened by a guardian model and bound by an autonomy tier.
- Injection and tool-abuse defenses follow the OWASP Top 10 for LLM Applications; the operating rhythm loops Govern → Map → Measure → Manage continuously.

## 3. Where to go next

| Go to | For |
|-------|-----|
| [AI Governance](06-governance/AI_GOVERNANCE.md) | The full policy layer (canonical) |
| [Responsible AI](06-governance/RESPONSIBLE_AI.md) | Principles + controls |
| [Human-in-the-Loop](06-governance/HUMAN_IN_THE_LOOP.md) | Autonomy tiers + approvals |
| [Security Architecture](06-governance/SECURITY_ARCHITECTURE.md) | Zero-trust + AppSec |
| [Risk Register](06-governance/RISK_REGISTER.md) | Live risks |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 60d · **Next review:** 2026-08-11
- See [Freshness Policy](07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../README.md) · ⬆️ [Docs Index](INDEX.md)
- ↔️ Related: [AI Governance](06-governance/AI_GOVERNANCE.md) · [Responsible AI](06-governance/RESPONSIBLE_AI.md) · [Human-in-the-Loop](06-governance/HUMAN_IN_THE_LOOP.md)
