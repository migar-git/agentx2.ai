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

### LRN-20260612-04 — Documentation completion audit; required flat set added

- **Timestamp (UTC):** 2026-06-12T00:00:00Z
- **Captured by:** production-ops-brain
- **Trigger:** review
- **trace_id / run_id:** docs-completion-audit-2026-06-12
- **Context:** an audit checked every Markdown file against a required flat `docs/` set for
  autonomous build-out (PRD, ARCHITECTURE, AUTONOMOUS_BUILD_PLAN, IMPLEMENTATION_PLAN, API_CONTRACTS,
  DATA_MODEL, ACCEPTANCE_CRITERIA, etc.).
- **Observation (fact):** the rich numbered docs existed but the predictably-named flat entry points
  and the build-execution specifics (ordered build sequence, task WBS, interface contracts, concrete
  data entities, acceptance criteria) were missing.
- **Root cause / insight:** conceptual architecture is necessary but not sufficient for autonomous
  execution; builders need flat, predictable entry points plus concrete, testable specs.
- **Action taken / rule added:** added 18 canonical entry-point docs (front-doors defer to the deep
  doc; gap docs are full) + [Documentation Audit](DOCUMENTATION_AUDIT.md); preserved all existing
  links (no restructure).
- **Generalization:** keep one authoritative deep doc per topic and a thin, predictably-named front
  door; never duplicate — front doors summarize + route.
- **Confidence:** High · **Decay horizon:** 180d
- **Supersedes:** none · **Sources:** [Documentation Audit](DOCUMENTATION_AUDIT.md) (accessed 2026-06-12)

### LRN-20260612-05 — Editor replace cannot match some invalid-byte (mojibake) chars

- **Timestamp (UTC):** 2026-06-12T00:00:00Z
- **Captured by:** production-ops-brain
- **Trigger:** review
- **trace_id / run_id:** docs-completion-audit-2026-06-12
- **Context:** two README emoji headers were corrupted at an earlier edit seam; both displayed as `�`.
- **Observation (fact):** one corrupted char was a proper `U+FFFD` and matched via `\ufffd`; the other
  was a lone invalid byte that the in-editor replace tool decodes differently and could not match,
  even as a literal — multi-line matches also failed due to CRLF vs `\n`.
- **Root cause / insight:** different decoders substitute invalid bytes differently; an in-editor
  string replace cannot reliably target a byte it can't represent.
- **Action taken / rule added:** fixed the matchable header; deferred the unmatchable one to an
  encoding-level fix; never edit files via terminal unprompted.
- **Generalization:** for mojibake, prefer single-line matches with the exact `U+FFFD`; if a lone
  invalid byte won't match, escalate to an encoding-level rewrite rather than thrashing the editor.
- **Confidence:** High · **Decay horizon:** 365d
- **Supersedes:** none · **Sources:** this session (accessed 2026-06-12)

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
