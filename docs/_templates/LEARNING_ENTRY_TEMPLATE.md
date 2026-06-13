---
title: "Learning Entry Template"
doc_id: "TMPL-LEARNING-ENTRY"
status: Active
version: 0.1.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "knowledge-swarm"
classification: Internal
sources: []
related: ["KNOWLEDGE-LEARNING-LOG", "OPS-CONTINUOUS-IMPROVEMENT"]
---

# Learning Entry Template

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › [Learning Log](../08-knowledge/LEARNING_LOG.md) › **Template**

Append one block per learning to [`LEARNING_LOG.md`](../08-knowledge/LEARNING_LOG.md).
Entries are **append-only** and **timestamped (UTC)**. Never delete; supersede with a newer entry
that links back. Every entry must be grounded in an observable event (a build, an eval run, a trace,
an incident, a deploy), not opinion.

## Copy-paste block

```markdown
### LRN-YYYYMMDD-NN — {{one-line title}}

- **Timestamp (UTC):** 2026-06-12T00:00:00Z
- **Captured by:** {{agent-or-swarm or human}}
- **Trigger:** build | eval | trace | incident | deploy | review | research
- **trace_id / run_id:** {{id linking to observability}}
- **Context:** what was happening (1–3 lines).
- **Observation (fact):** what actually happened, with metric/log/trace evidence.
- **Root cause / insight:** why it happened.
- **Action taken / rule added:** what changed (link PR, ADR, doc, or skill).
- **Generalization:** the reusable lesson (this is what future swarms read).
- **Confidence:** Low | Medium | High · **Decay horizon:** when to re-verify (e.g. 90d).
- **Supersedes:** {{LRN-id or none}} · **Sources:** {{links + accessed date}}
```

## Rules

1. **Fact-grounded:** every entry references an artifact (trace, metric, commit, eval result).
2. **Timestamped:** ISO-8601 UTC on capture; never back-date.
3. **Fresh:** entries past their decay horizon are re-verified by the knowledge-swarm or marked `STALE`.
4. **Linked:** connect to the ADR, doc, or skill it changed so knowledge is navigable in ≤3 clicks.

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · This template itself is reviewed every 90 days.
- See [Freshness Policy](../07-operations/FRESHNESS_POLICY.md).

### Navigation

- ⬆️ [Learning Log](../08-knowledge/LEARNING_LOG.md) · [Docs Index](../INDEX.md) · 🏠 [Home](../../README.md)
