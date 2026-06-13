---
title: "Responsible AI"
doc_id: "GOV-RESPONSIBLE-AI"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "governance-swarm"
review_cadence: 60d
staleness_threshold: 90d
classification: Public
tags: ["responsible-ai", "safety", "fairness", "transparency"]
sources:
  - "NIST AI RMF — https://www.nist.gov/itl/ai-risk-management-framework (accessed 2026-06-12)"
  - "OWASP Top 10 for LLM Applications — https://genai.owasp.org/llm-top-10/ (accessed 2026-06-12)"
related: ["GOV-AI-GOVERNANCE", "GOV-HUMAN-IN-THE-LOOP", "AGENT-PROMPT-LIBRARY", "QUALITY-EVAL-FRAMEWORK"]
---

# Responsible AI

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › [Governance](AI_GOVERNANCE.md) › **Responsible AI**
> **Status:** `Active` · **Owner:** `governance-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

The principles every agent and output upholds, and how they are enforced and measured.

## 2. Principles

| Principle | In practice |
|-----------|-------------|
| Grounded / truthful | cite sources; no fabrication; mark `[UNVERIFIED]` |
| Safe | guardian screening; refuse unsafe; resist injection ([OWASP LLM](https://genai.owasp.org/llm-top-10/)) |
| Fair | avoid biased outputs; review high-impact content |
| Transparent | disclose AI; show provenance |
| Private | minimize data; honor [public/private](../00-overview/PUBLIC_PRIVATE_MODEL.md) |
| Accountable | human oversight ([HITL](HUMAN_IN_THE_LOOP.md)); full audit trail |

## 3. Enforcement

Safety + faithfulness are scored in the [Eval Framework](../04-quality/EVAL_FRAMEWORK.md); failures
block ([Regression Policy](../04-quality/REGRESSION_POLICY.md)). Guardian models screen inputs/outputs
at runtime.

## 4. Measurement

Safety flags, refusal correctness, grounding/faithfulness scores, and incident counts trend on
[Mission Control](../05-observability/MISSION_CONTROL.md).

## 5. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | Trustworthy-AI characteristics | <https://www.nist.gov/itl/ai-risk-management-framework> | 2026-06-12 |
| 2 | LLM-specific risks | <https://genai.owasp.org/llm-top-10/> | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 60d · **Next review:** 2026-08-11
- See [Freshness Policy](../07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../../README.md) · ⬆️ [Docs Index](../INDEX.md)
- ↔️ Related: [AI Governance](AI_GOVERNANCE.md) · [HITL](HUMAN_IN_THE_LOOP.md) · [Eval Framework](../04-quality/EVAL_FRAMEWORK.md)
