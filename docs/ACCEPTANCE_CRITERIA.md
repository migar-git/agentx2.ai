---
title: "Acceptance Criteria & Definition of Done"
doc_id: "ACCEPTANCE-CRITERIA"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "quality-swarm"
review_cadence: 30d
staleness_threshold: 45d
classification: Public
tags: ["acceptance", "definition-of-done", "validation", "gates"]
sources:
  - "PRD (in-repo) — docs/PRD.md (accessed 2026-06-12)"
  - "Quality Gates (in-repo) — docs/04-quality/QUALITY_GATES.md (accessed 2026-06-12)"
  - "WCAG 2.2 — https://www.w3.org/TR/WCAG22/ (accessed 2026-06-12)"
  - "Core Web Vitals — https://web.dev/articles/vitals (accessed 2026-06-12)"
related: ["PRD", "QUALITY-QUALITY-GATES", "QUALITY-REGRESSION-POLICY", "AUTONOMOUS-BUILD-PLAN", "IMPLEMENTATION-PLAN"]
---

# Acceptance Criteria & Definition of Done

> **Breadcrumb:** [Home](../README.md) › [Docs Index](INDEX.md) › **Acceptance Criteria**
> **Status:** `Active` · **Owner:** `quality-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

The **testable acceptance criteria** that close the loop from [PRD](PRD.md) requirements to verified
outcomes, plus the **Definition of Done** an autonomous agent applies before declaring any unit of
work complete. Nothing is "done" until its criteria pass and the change ships with **zero regression**
([Regression Policy](04-quality/REGRESSION_POLICY.md)).

## 2. Global Definition of Done (every change)

- [ ] Meets its spec / acceptance criteria below.
- [ ] All [Quality Gates](04-quality/QUALITY_GATES.md) green (HTML, a11y, perf, mobile, security, SEO,
      analytics, docs-freshness, observability, governance).
- [ ] **Zero regression** vs the locked baseline.
- [ ] Multi-eval ≥ thresholds where AI behavior changed
      ([Eval Framework](04-quality/EVAL_FRAMEWORK.md)).
- [ ] Traces emitted + a [Learning Log](08-knowledge/LEARNING_LOG.md) entry recorded.
- [ ] HITL approval obtained for any risky/irreversible action
      ([HITL](06-governance/HUMAN_IN_THE_LOOP.md)).
- [ ] Docs updated, timestamped, and linked from [Docs Index](INDEX.md) (no orphans; ≤3 clicks).
- [ ] New factual claims cite a source with an access date; unknowns marked `[UNVERIFIED]`.

## 3. Requirement → acceptance mapping

| Req | Acceptance criterion (testable) | Verify |
|-----|---------------------------------|--------|
| FR-01 | Every sitemap page renders; automated crawl proves ≤3 clicks to each | crawl test |
| FR-02 | Each page mounts its designated AI widget; widget responds | E2E ([Testing](TESTING_STRATEGY.md)) |
| FR-03 | Nav + footer link every top-level destination on every page | DOM assertion |
| FR-04 | Each of the 5 assessments returns a structured result + ROI | eval + E2E |
| FR-05 | AI answers cite site/knowledge; adversarial set finds no fabrication | faithfulness eval |
| FR-06 | Each page emits valid title/meta/canonical/schema; sitemap lists it | schema validator |
| FR-07 | Funnel events fire visitor→lead→consultation | analytics check |
| FR-08 | Self-build loop completes a change on local models end to end | build run + trace |
| FR-09 | A sample agent action yields a complete OTel GenAI trace | trace inspection |
| FR-10 | A meaningful run appends a Learning Log entry | log assertion |
| FR-11 | A risky action pauses for approval; timeout default holds | HITL test |
| FR-12 | No lead/contact data or secrets appear in the public repo | secret/PII scan |
| NFR-01 | LCP ≤2.5s, INP ≤200ms, CLS ≤0.1; Lighthouse ≥95 | Lighthouse |
| NFR-02 | 0 axe violations; keyboard + screen-reader pass on key flows | axe + manual |
| NFR-03 | Headers+CSP set; 0 secret/dependency findings; OWASP-LLM checks pass | scanners |
| NFR-09 | A PR with a deliberate regression is blocked by CI | regression test |
| NFR-10 | markdownlint clean; one H1/doc; link check passes | docs CI |

(Full FR/NFR list: [PRD](PRD.md) §5–6.)

## 4. Per-domain acceptance

### Website

- [ ] All pages built; responsive at mobile/tablet/desktop; no console errors.
- [ ] Design tokens are the only style source; dark + light meet AA contrast.

### AI experience

- [ ] Widgets load after first paint; page usable without AI.
- [ ] Guardian screens input/output; refusal patterns verified.

### Quality & CI

- [ ] Eval golden sets exist per agent; baseline locked + timestamped.
- [ ] All gate workflows run on every PR; deploy only on green `main`.

### Observability

- [ ] Traces, metrics, and structured logs present and `trace_id`-correlated.
- [ ] Mission Control tiles populate from real data.

### Governance & security

- [ ] Autonomy tiers enforced; approvals logged with identity + timestamp.
- [ ] Risk register current; no open P0 risk at release.

## 5. Release gate (GO / NO-GO)

`GO` only when §2 holds for the release scope, all §3 mappings pass, every domain checklist in §4 is
satisfied, and the [Risk Register](RISK_REGISTER.md) shows no unmitigated release-blocking risk.
Otherwise `NO-GO` → remediate ([Autonomous Build Plan](AUTONOMOUS_BUILD_PLAN.md)).

## 6. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | Requirements | [PRD](PRD.md) | 2026-06-12 |
| 2 | Gate definitions | [Quality Gates](04-quality/QUALITY_GATES.md) | 2026-06-12 |
| 3 | a11y bar | <https://www.w3.org/TR/WCAG22/> | 2026-06-12 |
| 4 | perf bar | <https://web.dev/articles/vitals> | 2026-06-12 |

---

### Freshness

- **Created:** 2026-06-12 · **Updated:** 2026-06-12 · **Last verified:** 2026-06-12
- **Review cadence:** 30 days · **Staleness threshold:** 45 days · **Next review due:** 2026-07-12

### Navigation

- 🏠 [Home](../README.md) · ⬆️ [Docs Index](INDEX.md)
- ↔️ Related: [PRD](PRD.md) · [Quality Gates](04-quality/QUALITY_GATES.md) · [Autonomous Build Plan](AUTONOMOUS_BUILD_PLAN.md) · [Implementation Plan](IMPLEMENTATION_PLAN.md)
