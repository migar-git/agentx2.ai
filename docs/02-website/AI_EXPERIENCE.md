---
title: "AI Experience — AI Everywhere"
doc_id: "WEBSITE-AI-EXPERIENCE"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "website-swarm"
review_cadence: 45d
staleness_threshold: 60d
classification: Public
tags: ["ai-everywhere", "conversion", "widgets"]
sources:
  - "sysprompt_agentx2.md AI-everywhere requirement (in-repo, accessed 2026-06-12)"
  - "WAI-ARIA Authoring Practices — https://www.w3.org/WAI/ARIA/apg/ (accessed 2026-06-12)"
related: ["WEBSITE-ARCHITECTURE", "AGENT-CATALOG", "OBS-ANALYTICS", "GOV-RESPONSIBLE-AI"]
---

# AI Experience — AI Everywhere

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › [Website](WEBSITE_ARCHITECTURE.md) › **AI Experience**
> **Status:** `Active` · **Owner:** `website-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

Every page exposes an AI capability. This doc maps page → agent → conversion, and sets the rules for
how on-page AI behaves (grounded, safe, observable, accessible).

## 2. Page → AI mapping

Per [`sysprompt_agentx2.md`](../../sysprompt_agentx2.md); agents are specified in the
[Agent Catalog](../03-agents/AGENT_CATALOG.md).

| Page | On-page AI | Outcome it drives |
|------|-----------|-------------------|
| Home | AI Consultation Agent | qualify + book |
| Services | AI Solution Advisor | recommend offering |
| Finance AI | AI CFO Agent | finance use-case fit |
| Agentic AI | Agent Builder | scope an agent |
| Subscriptions | AI ROI Calculator | quantify value |
| Contact | AI Discovery Agent | structured discovery |
| FAQ | Knowledge Agent | self-serve answers |
| Industries | Industry Advisor | vertical recommendation |
| Case studies | Case Q&A | proof on demand |

## 3. Behavior rules

1. **Grounded:** answers cite site content/knowledge; no fabrication
   ([Knowledge Architecture](../01-architecture/KNOWLEDGE_ARCHITECTURE.md)).
2. **Safe:** guardian model screens input/output; refusal patterns defined
   ([Responsible AI](../06-governance/RESPONSIBLE_AI.md)).
3. **Observable:** every interaction emits traces + conversion events
   ([Tracing](../05-observability/TRACING.md), [Analytics](../05-observability/ANALYTICS.md)).
4. **Accessible:** widgets follow [ARIA APG](https://www.w3.org/WAI/ARIA/apg/) (keyboard, focus,
   announcements) — see [Accessibility](ACCESSIBILITY.md).
5. **Fast & optional:** AI loads without blocking the critical render path
   ([Performance](PERFORMANCE.md)); the page is fully usable without it.

## 4. Conversion instrumentation

Each agent interaction maps to funnel events (visitor → lead → consultation → proposal) tracked in
[Analytics](../05-observability/ANALYTICS.md), so AI's contribution to conversion is measurable.

## 5. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | AI-everywhere requirement | [`sysprompt_agentx2.md`](../../sysprompt_agentx2.md) | 2026-06-12 |
| 2 | Accessible widget patterns | <https://www.w3.org/WAI/ARIA/apg/> | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 45d · **Next review:** 2026-07-27
- See [Freshness Policy](../07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../../README.md) · ⬆️ [Docs Index](../INDEX.md)
- ↔️ Related: [Agent Catalog](../03-agents/AGENT_CATALOG.md) · [Analytics](../05-observability/ANALYTICS.md) · [Responsible AI](../06-governance/RESPONSIBLE_AI.md)
