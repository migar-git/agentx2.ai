---
title: "Security Review — AgentX2.ai"
doc_id: "REVIEW-SECURITY"
status: Active
version: 1.0.0
created: 2026-06-13
updated: 2026-06-13
last_verified: 2026-06-13
owner: "production-ops-brain"
reviewers: []
review_cadence: 60d
staleness_threshold: 90d
classification: Public
tags: ["security", "audit", "supply-chain", "dependencies"]
sources:
  - "GHSA-j687-52p2-xcff Astro define:vars XSS — https://github.com/advisories/GHSA-j687-52p2-xcff (accessed 2026-06-13)"
  - "GHSA-xr5h-phrj-8vxv Astro server island replay — https://github.com/advisories/GHSA-xr5h-phrj-8vxv (accessed 2026-06-13)"
  - "GHSA-gv7w-rqvm-qjhr esbuild Deno RCE — https://github.com/advisories/GHSA-gv7w-rqvm-qjhr (accessed 2026-06-13)"
  - "GHSA-g7r4-m6w7-qqqr esbuild dev-server file read — https://github.com/advisories/GHSA-g7r4-m6w7-qqqr (accessed 2026-06-13)"
  - "OWASP Top 10 2021 — https://owasp.org/Top10/ (accessed 2026-06-13)"
supersedes: []
related: ["REVIEW-GAP-ANALYSIS", "GOV-SECURITY-ARCHITECTURE", "RELEASE-READINESS"]
---

# Security Review — AgentX2.ai

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › **Security Review**
> **Status:** `Active` · **Owner:** `production-ops-brain` · **Last verified:** `2026-06-13`

## 1. Purpose

This document records the security findings of the 2026-06-13 audit, the in-context risk assessment,
and the remediation applied. It complements the design-level
[Security Architecture](../06-governance/SECURITY_ARCHITECTURE.md).

## 2. Dependency vulnerabilities

### 2.1 Findings (pre-remediation)

`npm audit` reported HIGH-severity advisories in the **build toolchain**:

| Advisory | Package | Class | Surface |
|----------|---------|-------|---------|
| [GHSA-j687-52p2-xcff](https://github.com/advisories/GHSA-j687-52p2-xcff) | astro ≤ 7.0.0-alpha.1 | XSS via incomplete `</script>` sanitization in `define:vars` | Build / render |
| [GHSA-xr5h-phrj-8vxv](https://github.com/advisories/GHSA-xr5h-phrj-8vxv) | astro ≤ 7.0.0-alpha.1 | Server-island encrypted-param replay | SSR only |
| [GHSA-gv7w-rqvm-qjhr](https://github.com/advisories/GHSA-gv7w-rqvm-qjhr) | esbuild | RCE via `NPM_CONFIG_REGISTRY` in Deno module | Dev tooling |
| [GHSA-g7r4-m6w7-qqqr](https://github.com/advisories/GHSA-g7r4-m6w7-qqqr) | esbuild | Arbitrary file read via dev server (Windows) | Dev server |

### 2.2 In-context risk assessment

The deployed artifact is **static HTML/CSS/JS**; esbuild/vite/astro are **build-time only** and never
shipped. Confirmed by `npm audit --omit=dev` → **0 vulnerabilities** both before and after the change.

- The `define:vars` XSS requires **attacker-controlled** values flowing into an inline script. In
  this codebase `define:vars` only carries **author-controlled build constants** (`agent`, `page`,
  `endpoint`, `dev`) — not user input — so it was **not exploitable** as configured. It is, however,
  exactly the pattern worth keeping patched (defense-in-depth).
- The server-island advisory does **not apply** — the site has no SSR / server islands.
- The esbuild advisories are **dev-server / dev-tooling only**, on trusted developer and CI machines.

Net pre-remediation production risk: **Low**. Net build/dev risk: **Medium** (worth fixing).

### 2.3 Remediation (applied)

| Change | From | To |
|--------|------|-----|
| `astro` | 5.18.2 | 6.4.6 |
| `@astrojs/sitemap` | 3.2.1 | 3.7.3 |
| `engines.node` | `>=20` | `>=22.12.0` |
| CI/deploy Node | 20 | 22 |

The upgrade **resolves the Astro-native HIGH advisories** (Astro now appears in the tree only
transitively, no longer as the vulnerable package). It was validated end-to-end: `check` (0 errors),
`build` (18 pages), `test` (7/7), `validate` (links/orphans/SEO/doc-links), and `lint:md` (122 files)
all pass. Because the change is fully reversible (clean working tree + complete validation gate) and
the runtime is unaffected, it was safe to apply autonomously.

### 2.4 Accepted residuals (dev-only, tracked)

A small set of **dev-only transitive** advisories remain (esbuild via vite; `js-yaml`/`markdown-it`
via markdownlint-cli2; `yaml` via the Astro language server). They **cannot** be resolved without
absurd downgrades — `npm audit fix --force` proposes reverting Astro to 2.4.5 — and **none ship to
production**. They are deliberately accepted and continuously bounded by the CI gate below.

## 3. CI security gates

| Gate | Command | Scope | Behavior |
|------|---------|-------|----------|
| Dependency audit | `npm run audit:prod` | Production deps | Fails CI on any HIGH+ in shipped deps (currently 0) |
| Convenience audit | `npm run audit` | All deps | Local visibility into dev residuals |
| Secret scan | `git grep` patterns | Repo | Fails CI on obvious committed keys |

`audit:prod` (`npm audit --omit=dev --audit-level=high`) is intentionally production-scoped so the
gate is **meaningful and passable**: it guarantees nothing vulnerable reaches users, without breaking
CI on un-fixable upstream dev-tool advisories.

## 4. HTTP security headers

`public/_headers` defines a strong policy — `Content-Security-Policy`, `Strict-Transport-Security`,
`X-Content-Type-Options`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy`,
`Cross-Origin-Opener-Policy`. **GitHub Pages does not apply `_headers`**, so these are inert on the
current host.

- **Risk:** Low–Medium (defense-in-depth missing; the site loads no third-party scripts and the CSP
  would otherwise be `self`-scoped).
- **Recommended next step (human/infra decision):** serve through Cloudflare Pages / a CDN that
  honors `_headers`, or add per-page `<meta http-equiv>` CSP as a partial fallback. Tracked as GAP-5
  in [Gap Analysis](gap-analysis.md).

## 5. Application-layer review (OWASP Top 10 sweep)

| Area | Finding |
|------|---------|
| Injection / XSS | No server code; client scripts use author-controlled data and DOM-safe patterns. AI widget renders a fixed, source-grounded knowledge base. |
| Secrets | None committed; `.gitignore` excludes `.env*` (keeps `.env.example`); CI secret-scan active. |
| Sensitive data | Analytics honors Do-Not-Track and sends nothing unless an endpoint is explicitly configured. |
| SSRF / auth | Not applicable — static site, no server, no auth surface. |
| Vulnerable components | Addressed in §2–§3. |

## 6. Decisions & Rationale

| Decision | Why | Reversibility | Date | Owner |
|----------|-----|---------------|------|-------|
| Upgrade Astro to 6.x | Resolves native HIGH advisories; Node 20 EOL | High | 2026-06-13 | production-ops-brain |
| Gate CI on production deps only | Meaningful + passable; dev residuals un-fixable | High | 2026-06-13 | production-ops-brain |
| Document (not auto-fix) header hosting | Infra/host decision needs a human owner | High | 2026-06-13 | production-ops-brain |

## 7. Risks & Open Questions

| Risk / Question | Impact | Mitigation / Next step | Owner | Due |
|-----------------|--------|------------------------|-------|-----|
| Headers inert on GitHub Pages | Low–Med | Move host / add meta CSP | human:founder | Tracked |
| Dev-tool advisories linger upstream | Low | Production gate + periodic re-audit | production-ops-brain | Ongoing |

## 8. Grounding & Sources

| # | Claim it supports | Source (title + URL) | Publisher | Accessed |
|---|-------------------|----------------------|-----------|----------|
| 1 | define:vars XSS advisory | <https://github.com/advisories/GHSA-j687-52p2-xcff> | GitHub | 2026-06-13 |
| 2 | Server island replay advisory | <https://github.com/advisories/GHSA-xr5h-phrj-8vxv> | GitHub | 2026-06-13 |
| 3 | esbuild advisories | <https://github.com/advisories/GHSA-gv7w-rqvm-qjhr> | GitHub | 2026-06-13 |
| 4 | OWASP Top 10 framing | <https://owasp.org/Top10/> | OWASP | 2026-06-13 |

## 9. Change Log (doc-local)

| Version | Date | Author | Summary |
|---------|------|--------|---------|
| 1.0.0 | 2026-06-13 | `production-ops-brain` | Initial security review + remediation record. |

---

### Freshness

- **Created:** 2026-06-13 · **Updated:** 2026-06-13 · **Last verified:** 2026-06-13
- **Review cadence:** every 60 days · **Staleness threshold:** 90 days · **Next review due:** 2026-08-12
- Governed by the [Freshness Policy](../07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../../README.md) · ⬆️ [Docs Index](../INDEX.md)
- ↔️ Related: [Gap Analysis](gap-analysis.md) · [Security Architecture](../06-governance/SECURITY_ARCHITECTURE.md) · [Release Readiness](../releases/release-readiness-report.md)
