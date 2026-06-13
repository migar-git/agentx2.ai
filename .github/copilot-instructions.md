---
title: "GitHub Copilot Repository Instructions"
doc_id: "GH-COPILOT-INSTRUCTIONS"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "production-ops-brain"
review_cadence: 30d
staleness_threshold: 60d
classification: Public
sources:
  - "GitHub Copilot repository custom instructions — https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot (accessed 2026-06-12)"
related: ["ROOT-AGENTS"]
---

# GitHub Copilot Repository Instructions

These instructions apply to all AI assistance in this repository. They are a concise pointer to the
authoritative contract in [`AGENTS.md`](../AGENTS.md). When the two ever differ, **`AGENTS.md` wins**.

## Operating rules

- **Anchor time first.** Read the current UTC date before generating timestamps or "latest" claims.
- **Local-first AI.** Assume local **Ollama** models for build/reason/eval; cloud is optional.
  See [Model Strategy](../docs/01-architecture/MODEL_STRATEGY.md).
- **Ground every claim** with an authoritative source + access date; mark unknowns `[UNVERIFIED]`.
- **Zero regression.** Never weaken or skip a gate to pass. See
  [Regression Policy](../docs/04-quality/REGRESSION_POLICY.md) and
  [Quality Gates](../docs/04-quality/QUALITY_GATES.md).
- **Observe + learn.** Emit OpenTelemetry GenAI traces and append a timestamped entry to the
  [Learning Log](../docs/08-knowledge/LEARNING_LOG.md).
- **Respect human gates** for irreversible/high-risk actions
  ([Human-in-the-Loop](../docs/06-governance/HUMAN_IN_THE_LOOP.md)).

## Documentation rules

- Every new doc starts from [`docs/_templates/DOC_TEMPLATE.md`](../docs/_templates/DOC_TEMPLATE.md)
  and carries full front matter (`created`, `updated`, `last_verified`, `owner`, `sources`, cadence).
- Keep navigation ≤3 clicks: link new docs from [`docs/INDEX.md`](../docs/INDEX.md); no orphans.
- Follow lint conventions in [`.markdownlint.jsonc`](../.markdownlint.jsonc) — blank lines around
  headings, lists, and code fences.

## Code rules (when implementation begins)

- Conventional Commits; PRs link spec + plan + eval run + trace.
- Security per [Security Architecture](../docs/06-governance/SECURITY_ARCHITECTURE.md); never commit secrets.
- Match the stack in [Tech Stack](../docs/01-architecture/TECH_STACK.md).

## Start here

- [`AGENTS.md`](../AGENTS.md) — full agent contract.
- [`docs/INDEX.md`](../docs/INDEX.md) — the documentation hub.
- [AI Build System](../docs/01-architecture/AI_BUILD_SYSTEM.md) — how the repo builds itself.

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 30d · **Next review:** 2026-07-12
- See [Freshness Policy](../docs/07-operations/FRESHNESS_POLICY.md).
