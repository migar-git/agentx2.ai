---
title: "<DOC TITLE>"
doc_id: "<DOMAIN>-<SHORTNAME>"        # e.g. ARCH-AI-BUILD-SYSTEM
status: Draft                          # Draft | Reviewed | Approved | Active | Deprecated | Archived
version: 0.1.0                         # semver; bump on material change
created: 2026-06-12                    # ISO-8601 (UTC) — never edit after creation
updated: 2026-06-12                    # ISO-8601 (UTC) — bump on every edit
last_verified: 2026-06-12              # ISO-8601 (UTC) — last time facts/sources were re-checked
owner: "<agent-or-swarm>"              # e.g. architecture-swarm / human:founder
reviewers: []                          # who signed off
review_cadence: 90d                    # how often this doc must be re-verified
staleness_threshold: 120d              # after this, doc is auto-flagged STALE in CI
classification: Public                 # Public | Internal | Confidential | Secret
tags: []
sources: []                            # authoritative refs (see "Grounding & Sources")
supersedes: []                         # doc_ids replaced by this doc
related: []                            # doc_ids / paths linked below
---

# {{DOC_TITLE}}

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › **{{DOC_TITLE}}**
> **Status:** `Draft` · **Owner:** `{{agent-or-swarm}}` · **Last verified:** `2026-06-12`

## 1. Purpose

One paragraph: what this document decides or describes, and who consumes it.
State the single question this doc answers.

## 2. Context & Scope

- **In scope:** …
- **Out of scope:** …
- **Assumptions:** … (each assumption gets a date and a verification owner)

## 3. Content

The substance of the document. Use:

- `mermaid` diagrams for any structural relationship.
- Tables for matrices (models, gates, metrics, owners).
- Explicit, testable statements over prose where possible.

## 4. Decisions & Rationale

| Decision | Why | Reversibility | Date | Owner |
|----------|-----|---------------|------|-------|
| … | … | Low/Med/High | 2026-06-12 | … |

## 5. Risks & Open Questions

| Risk / Question | Impact | Mitigation / Next step | Owner | Due |
|-----------------|--------|------------------------|-------|-----|
| … | … | … | … | … |

## 6. Grounding & Sources

Every factual or "best-practice" claim cites an authoritative source with an **access date**.
Unsourced claims must be marked `[UNVERIFIED]` and added to the Open Questions table.

| # | Claim it supports | Source (title + URL) | Publisher | Accessed |
|---|-------------------|----------------------|-----------|----------|
| 1 | … | … | … | 2026-06-12 |

## 7. Change Log (doc-local)

| Version | Date | Author | Summary |
|---------|------|--------|---------|
| 0.1.0 | 2026-06-12 | `<agent-or-swarm>` | Initial draft. |

---

### Freshness

- **Created:** 2026-06-12 · **Updated:** 2026-06-12 · **Last verified:** 2026-06-12
- **Review cadence:** every 90 days · **Staleness threshold:** 120 days
- **Next review due:** 2026-09-10
- This document is fact-checked and re-grounded on the cadence above. If `today − last_verified > staleness_threshold`, CI flags it `STALE` and the owning swarm must re-verify or archive it. See [Freshness Policy](../07-operations/FRESHNESS_POLICY.md).

### Navigation

- ⬆️ [Docs Index](../INDEX.md) · 🏠 [Home](../../README.md)
- ↔️ Related: _(link related doc_ids here so every page is ≤3 clicks from any other)_
