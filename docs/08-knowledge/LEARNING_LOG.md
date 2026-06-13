---
title: "Learning Log"
doc_id: "KNOWLEDGE-LEARNING-LOG"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "knowledge-swarm"
review_cadence: 30d
staleness_threshold: 45d
classification: Public
tags: ["learning", "append-only", "timestamped"]
sources:
  - "Learning Entry Template (in-repo) — docs/_templates/LEARNING_ENTRY_TEMPLATE.md (accessed 2026-06-12)"
related: ["TMPL-LEARNING-ENTRY", "OPS-CONTINUOUS-IMPROVEMENT", "ARCH-MEMORY-ARCHITECTURE", "KNOWLEDGE-DECISION-LOG"]
---

# Learning Log

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › **Learning Log**
> **Status:** `Active` · **Owner:** `knowledge-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

The **append-only, timestamped** ledger of everything the system learns — from builds, evals, traces,
incidents, and reviews. It is how knowledge stays fresh end to end and how each cycle makes the next
one cheaper ([Continuous Improvement](../07-operations/CONTINUOUS_IMPROVEMENT.md)). Format:
[Learning Entry Template](../_templates/LEARNING_ENTRY_TEMPLATE.md).

## 2. Rules

1. **Append-only.** Never edit/delete a past entry; supersede with a newer one that links back.
2. **Timestamped (UTC)** at capture; never back-dated.
3. **Fact-grounded.** Every entry references an artifact (trace, metric, commit, eval result).
4. **Fresh.** Entries carry a decay horizon; the curator re-verifies or supersedes stale ones
   ([Memory Architecture](../01-architecture/MEMORY_ARCHITECTURE.md)).
5. **Linked.** Connect to the ADR/doc/skill the lesson changed (≤3 clicks).

## 3. Entries

<!-- newest first; append using the template block -->

### LRN-20260612-03 — Foundation complete; lint pitfalls captured

- **Timestamp (UTC):** 2026-06-12T00:00:00Z
- **Captured by:** production-ops-brain
- **Trigger:** build
- **trace_id / run_id:** founding-docs-build-2026-06-12
- **Context:** completed the full documentation + architecture foundation (82 markdown files).
- **Observation (fact):** two recurring lint pitfalls surfaced — (a) a wrapped line that began with a
  `+` marker was parsed as a phantom list item (cascading MD004/MD032), and (b) the pre-existing README
  used multiple `#` H1s, violating MD025 until section headers were demoted to `##`.
- **Root cause / insight:** Markdown is whitespace- and first-character-sensitive at line starts; a
  single H1 per document is required.
- **Action taken / rule added:** never begin a wrapped line with `+`/`-`/`*`; keep one H1 per file;
  recorded in build conventions and the [Build Report](../../BUILD_REPORT.md).
- **Generalization:** verify with the linter after each batch; fix blank-line and heading-level issues
  immediately rather than in bulk.
- **Confidence:** High · **Decay horizon:** 180d
- **Supersedes:** none · **Sources:** [Build Report](../../BUILD_REPORT.md) (accessed 2026-06-12)

### LRN-20260612-01 — Documentation foundation established

- **Timestamp (UTC):** 2026-06-12T00:00:00Z
- **Captured by:** architecture-swarm (founding build pass)
- **Trigger:** build
- **trace_id / run_id:** founding-docs-build-2026-06-12
- **Context:** repo had only PRD, README, sysprompt; no docs system, CI, evals, or observability.
- **Observation (fact):** a strict markdownlint config was active; angle-bracket placeholders and
  list/heading blank-line rules caused failures until a repo `.markdownlint.jsonc` and conventions
  were established.
- **Root cause / insight:** conventions must be set in P0 before mass doc generation.
- **Action taken / rule added:** created `.markdownlint.jsonc`, four templates, `AGENTS.md`,
  `docs/INDEX.md`, and the [Freshness Policy](../07-operations/FRESHNESS_POLICY.md); all docs inherit
  timestamp + grounding + ≤3-click nav.
- **Generalization:** establish lint + doc conventions and the hub first; every later doc is then
  cheap and consistent.
- **Confidence:** High · **Decay horizon:** 180d
- **Supersedes:** none · **Sources:** [CURRENT_STATE](../../CURRENT_STATE.md) (accessed 2026-06-12)

### LRN-20260612-02 — Pin local model ids on a short cadence

- **Timestamp (UTC):** 2026-06-12T00:00:00Z
- **Captured by:** architecture-swarm
- **Trigger:** research
- **trace_id / run_id:** model-survey-2026-06-12
- **Context:** selecting local models for each role from the live Ollama library.
- **Observation (fact):** the local-model landscape changes weekly; ids/tags drift.
- **Root cause / insight:** pinned model choices go stale fast.
- **Action taken / rule added:** set [Model Strategy](../01-architecture/MODEL_STRATEGY.md) to a 30-day
  review cadence and require re-verification before pinning.
- **Generalization:** fast-moving facts need short freshness cadences, not annual reviews.
- **Confidence:** High · **Decay horizon:** 30d
- **Supersedes:** none · **Sources:** <https://ollama.com/library> (accessed 2026-06-12)

## 4. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | Entry format | [Learning Entry Template](../_templates/LEARNING_ENTRY_TEMPLATE.md) | 2026-06-12 |

---

### Freshness

- **Created:** 2026-06-12 · **Updated:** 2026-06-12 · **Last verified:** 2026-06-12
- **Review cadence:** 30 days · **Staleness threshold:** 45 days · **Next review due:** 2026-07-12

### Navigation

- 🏠 [Home](../../README.md) · ⬆️ [Docs Index](../INDEX.md)
- ↔️ Related: [Continuous Improvement](../07-operations/CONTINUOUS_IMPROVEMENT.md) · [Decision Log](DECISION_LOG.md) · [Memory Architecture](../01-architecture/MEMORY_ARCHITECTURE.md)
