---
title: "Product Requirements Document (PRD) — AgentX2.ai"
doc_id: "PRD"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "human:founder"
review_cadence: 30d
staleness_threshold: 60d
classification: Public
tags: ["prd", "requirements", "scope", "metrics"]
sources:
  - "PRD_AgentX2.md v3.0 (in-repo, accessed 2026-06-12)"
  - "README.md (in-repo, accessed 2026-06-12)"
  - "sysprompt_agentx2.md (in-repo, accessed 2026-06-12)"
related: ["OVERVIEW-VISION", "OVERVIEW-COMPANY-MODEL", "OVERVIEW-PERSONAS", "ACCEPTANCE-CRITERIA", "ARCHITECTURE-CANONICAL", "ROADMAP"]
---

# Product Requirements Document (PRD) — AgentX2.ai

> **Breadcrumb:** [Home](../README.md) › [Docs Index](INDEX.md) › **PRD**
> **Status:** `Active` · **Owner:** `human:founder` · **Last verified:** `2026-06-12`

## 1. Purpose

This is the **canonical, structured PRD** for AgentX2.ai. It consolidates the narrative vision in
[`PRD_AgentX2.md`](../PRD_AgentX2.md) and [`README.md`](../README.md) into numbered, **testable**
requirements an autonomous agent or engineering team can build against. Acceptance is defined in
[Acceptance Criteria](ACCEPTANCE_CRITERIA.md); the build order is in
[Autonomous Build Plan](AUTONOMOUS_BUILD_PLAN.md).

## 2. Product vision & scope

AgentX2.ai is an **AI-native company platform**: a public marketing/consulting presence and the
foundation of an agent operating system, where local-model swarms build, operate, and improve the
platform itself under human governance. Full vision: [Vision](00-overview/VISION.md).

**In scope (this documentation foundation + Phase 1 build):**

- Public, static website (marketing + lead generation + AI-everywhere experience).
- Local-Ollama self-build loop (spec → plan → build → eval → CI → deploy → observe → learn).
- Observability, governance, security, quality gates, and knowledge capture.

**Out of scope (now; later phases):**

- Authenticated client portal, CRM, billing, and proposal systems (Phase 2+, kept in the private repo).
- Any handling of client data or secrets in this public repository.

## 3. Business goals & success metrics

| # | Goal | Success metric | Source |
|---|------|----------------|--------|
| G1 | Generate qualified leads | conversion rate visitor→lead→consultation ([Analytics](05-observability/ANALYTICS.md)) | README |
| G2 | Establish authority via SEO | organic impressions + rankings on target clusters ([SEO](02-website/SEO_STRATEGY.md)) | sysprompt |
| G3 | Demonstrate AI-everywhere | AI interaction rate per page; assisted conversions | sysprompt |
| G4 | Build itself autonomously | % of changes shipped via the self-build loop with 0 regressions | sysprompt |
| G5 | Maintain frontier quality | all [Quality Gates](04-quality/QUALITY_GATES.md) green every release | sysprompt |
| G6 | Recurring revenue (later) | MRR / ARR ([Company Model](00-overview/COMPANY_MODEL.md)) | PRD |

Targets are set when baselines exist; undated targets are `TBD` (never invented) per the
[Freshness Policy](07-operations/FRESHNESS_POLICY.md).

## 4. Personas & use cases

Full set: [Personas](00-overview/PERSONAS.md). Primary:

| Persona | Top use case | Entry page | On-page AI |
|---------|--------------|-----------|------------|
| CXO / Founder | assess AI opportunity + book | Home | AI Consultation Agent |
| CFO | finance AI fit + ROI | Finance AI | AI CFO Agent |
| Head of Ops | automate knowledge work | Services | AI Solution Advisor |
| CISO / Risk | govern AI safely | Governance | Governance Q&A Agent |
| Eng leader | scope an agent build | Agentic AI | Agent Builder |
| SMB owner | right-size plan + ROI | Subscriptions | AI ROI Calculator |

## 5. Functional requirements

Each requirement is testable; acceptance in [Acceptance Criteria](ACCEPTANCE_CRITERIA.md).

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-01 | Public site with all pages in the [sitemap](02-website/WEBSITE_ARCHITECTURE.md); ≤3 clicks to any page | P0 |
| FR-02 | Every page exposes an AI capability ([AI Experience](02-website/AI_EXPERIENCE.md)) | P0 |
| FR-03 | Global nav + footer expose every top-level destination from every page | P0 |
| FR-04 | Consultation engine runs the 5 assessments + ROI ([Consultation Engine](03-agents/CONSULTATION_ENGINE.md)) | P1 |
| FR-05 | On-page AI answers are grounded in site/knowledge; no fabrication ([Responsible AI](06-governance/RESPONSIBLE_AI.md)) | P0 |
| FR-06 | Every page emits SEO metadata + schema.org + sitemap entry ([SEO](02-website/SEO_STRATEGY.md)) | P0 |
| FR-07 | Conversion events instrumented across the funnel ([Analytics](05-observability/ANALYTICS.md)) | P1 |
| FR-08 | Self-build loop executes end to end on local Ollama models ([Autonomous Build Plan](AUTONOMOUS_BUILD_PLAN.md)) | P0 |
| FR-09 | Every agent action emits OTel GenAI traces ([Tracing](05-observability/TRACING.md)) | P0 |
| FR-10 | Every meaningful run appends a [Learning Log](08-knowledge/LEARNING_LOG.md) entry | P1 |
| FR-11 | Risky/irreversible actions stop for HITL approval ([HITL](06-governance/HUMAN_IN_THE_LOOP.md)) | P0 |
| FR-12 | Lead/contact data routes to the private repo, never the public repo | P0 |

## 6. Non-functional requirements

| ID | Requirement | Target | Verify |
|----|-------------|--------|--------|
| NFR-01 | Performance | Core Web Vitals "Good"; Lighthouse ≥95 | [Performance](02-website/PERFORMANCE.md) |
| NFR-02 | Accessibility | WCAG 2.2 AA; 0 axe violations | [Accessibility](02-website/ACCESSIBILITY.md) |
| NFR-03 | Security | no secrets; headers+CSP; OWASP + OWASP-LLM clean | [Security](SECURITY.md) |
| NFR-04 | Reliability | reproducible builds; instant static rollback | [Deployment](DEPLOYMENT.md) |
| NFR-05 | Observability | traces+metrics+logs on every action | [Observability](OBSERVABILITY.md) |
| NFR-06 | Local-first | full loop runs with no hosted-model dependency | [Model Strategy](01-architecture/MODEL_STRATEGY.md) |
| NFR-07 | Cost | bounded $/task; per-run ceilings | [Metrics](05-observability/METRICS_CATALOG.md) |
| NFR-08 | Freshness | every doc timestamped + sourced + within staleness | [Freshness](07-operations/FRESHNESS_POLICY.md) |
| NFR-09 | Zero regression | no tracked dimension worsens vs baseline | [Regression Policy](04-quality/REGRESSION_POLICY.md) |
| NFR-10 | Maintainability | lint-clean; one H1/doc; ≤3-click nav; no orphans | [Documentation Audit](DOCUMENTATION_AUDIT.md) |

## 7. Dependencies

- **Runtime:** local [Ollama](01-architecture/MODEL_STRATEGY.md); Node toolchain for Astro
  ([Tech Stack](01-architecture/TECH_STACK.md)).
- **Hosting/CI:** GitHub Pages + GitHub Actions ([CI/CD](CI_CD.md), [Deployment](DEPLOYMENT.md)).
- **Standards:** OTel GenAI semconv, WCAG 2.2, Core Web Vitals, schema.org (cited in each doc).

## 8. Open decisions

Tracked in [Risk Register](RISK_REGISTER.md) and [Decision Log](08-knowledge/DECISION_LOG.md):

- Confirm static-first GitHub Pages host (vs Cloudflare/Azure) — assumed, founder to confirm.
- Confirm local hardware tier for the build host (workstation assumed).
- Verify `logo.jpg` brand asset licensing (R-007).

## 9. Traceability

PRD → architecture ([Architecture](ARCHITECTURE.md)) → build plan
([Autonomous Build Plan](AUTONOMOUS_BUILD_PLAN.md)) → implementation
([Implementation Plan](IMPLEMENTATION_PLAN.md)) → acceptance
([Acceptance Criteria](ACCEPTANCE_CRITERIA.md)). Every FR/NFR maps forward to an acceptance check.

## 10. Grounding & Sources

| # | Claim it supports | Source | Accessed |
|---|-------------------|--------|----------|
| 1 | Vision, services, roadmap | [`PRD_AgentX2.md`](../PRD_AgentX2.md) | 2026-06-12 |
| 2 | Offerings, industries | [`README.md`](../README.md) | 2026-06-12 |
| 3 | Build phases, quality gates, AI-everywhere | [`sysprompt_agentx2.md`](../sysprompt_agentx2.md) | 2026-06-12 |

---

### Freshness

- **Created:** 2026-06-12 · **Updated:** 2026-06-12 · **Last verified:** 2026-06-12
- **Review cadence:** 30 days · **Staleness threshold:** 60 days · **Next review due:** 2026-07-12
- Governed by the [Freshness Policy](07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../README.md) · ⬆️ [Docs Index](INDEX.md)
- ↔️ Related: [Vision](00-overview/VISION.md) · [Architecture](ARCHITECTURE.md) · [Autonomous Build Plan](AUTONOMOUS_BUILD_PLAN.md) · [Acceptance Criteria](ACCEPTANCE_CRITERIA.md)
