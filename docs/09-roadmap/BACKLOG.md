---
title: "Backlog"
doc_id: "BACKLOG"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "production-ops-brain"
review_cadence: 14d
staleness_threshold: 30d
classification: Public
sources:
  - "CURRENT_STATE gap analysis (in-repo, accessed 2026-06-12)"
related: ["ROADMAP", "MILESTONES", "DISCOVERY-CURRENT-STATE"]
---

# Backlog

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › [Roadmap](ROADMAP.md) › **Backlog**
> **Status:** `Active` · **Owner:** `production-ops-brain` · **Last verified:** `2026-06-12`

## 1. Purpose

Prioritized, near-term work derived from the [Current State gap analysis](../../CURRENT_STATE.md) and
the [Roadmap](ROADMAP.md). This is a living list (14-day cadence).

## 2. Prioritized items

| ID | Item | Phase | Priority | Notes |
|----|------|-------|----------|-------|
| B-001 | Scaffold Astro + Tailwind project | 1 | P0 | per [Tech Stack](../01-architecture/TECH_STACK.md) |
| B-002 | GitHub Actions CI with all gates | 1 | P0 | [CI/CD](../04-quality/CI_CD.md) |
| B-003 | Local Ollama orchestration + eval harness | 1 | P0 | [AI Build System](../01-architecture/AI_BUILD_SYSTEM.md) |
| B-004 | Build Phase-1 pages (home + core) | 1 | P1 | [Website Architecture](../02-website/WEBSITE_ARCHITECTURE.md) |
| B-005 | Design tokens + component library | 1 | P1 | [Design System](../02-website/DESIGN_SYSTEM.md) |
| B-006 | AI-everywhere widgets (per page) | 1 | P1 | [AI Experience](../02-website/AI_EXPERIENCE.md) |
| B-007 | SEO: schema + sitemap + clusters | 1 | P1 | [SEO Strategy](../02-website/SEO_STRATEGY.md) |
| B-008 | OTel GenAI tracing wiring | 1 | P1 | [Tracing](../05-observability/TRACING.md) |
| B-009 | Obsidian vault + Canvas maps generator | 1 | P2 | [Obsidian Vault](../08-knowledge/OBSIDIAN_VAULT.md) |
| B-010 | Verify `logo.jpg` license (R-007) | 0 | P1 | [Risk Register](../06-governance/RISK_REGISTER.md) |

## 3. Intake

New items enter from topic-chaos intake, eval failures, incidents, and learnings
([AI Build System](../01-architecture/AI_BUILD_SYSTEM.md)); each is timestamped and linked to its
source.

## 4. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | Gaps driving backlog | [`CURRENT_STATE.md`](../../CURRENT_STATE.md) | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 14d · **Next review:** 2026-06-26
- See [Freshness Policy](../07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../../README.md) · ⬆️ [Docs Index](../INDEX.md)
- ↔️ Related: [Roadmap](ROADMAP.md) · [Milestones](MILESTONES.md) · [Current State](../../CURRENT_STATE.md)
