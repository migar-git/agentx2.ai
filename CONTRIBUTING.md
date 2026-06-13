# Contributing to AgentX2.ai

Thanks for contributing. This repository is an **AI-native, self-building platform**: humans and
agent swarms both contribute under the same contract. Read [`AGENTS.md`](AGENTS.md) first — it is the
authoritative operating contract.

## Ground rules

1. **Anchor time (UTC) and ground every claim.** Cite authoritative sources with access dates; mark
   unknowns `[UNVERIFIED]`. See the [Freshness Policy](docs/07-operations/FRESHNESS_POLICY.md).
2. **Zero regression.** Never weaken or skip a quality gate to pass. See the
   [Zero-Regression Policy](docs/04-quality/REGRESSION_POLICY.md) and
   [Quality Gates](docs/04-quality/QUALITY_GATES.md).
3. **Local-first AI.** Default to local Ollama models
   ([Model Strategy](docs/01-architecture/MODEL_STRATEGY.md)).
4. **No secrets in this repo.** See [Security](SECURITY.md) and the
   [Public/Private Model](docs/00-overview/PUBLIC_PRIVATE_MODEL.md).

## Documentation changes

- Start from [`docs/_templates/DOC_TEMPLATE.md`](docs/_templates/DOC_TEMPLATE.md); include full front
  matter (`created`, `updated`, `last_verified`, `owner`, `review_cadence`, `staleness_threshold`,
  `sources`).
- Link every new doc from [`docs/INDEX.md`](docs/INDEX.md) (no orphans; ≤3 clicks).
- Follow [`.markdownlint.jsonc`](.markdownlint.jsonc): blank lines around headings, lists, and code
  fences; one H1 per file.

## Commits & pull requests

- Use [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/):
  `feat|fix|docs|refactor|test|chore|ci|perf(scope): summary`.
- Every PR links its spec, plan, eval run, and trace where applicable, and uses the
  [pull request template](.github/PULL_REQUEST_TEMPLATE.md).
- CI must be green (all gates). Never force-push `main`; never use `--no-verify`.

## Local checks (when code exists)

The application toolchain is specified in [Tech Stack](docs/01-architecture/TECH_STACK.md) and
[CI/CD](docs/04-quality/CI_CD.md). Until then, contributions are documentation; run markdownlint and
verify links before opening a PR.

## Reporting issues

Use an [issue template](.github/ISSUE_TEMPLATE/). For security, follow [Security](SECURITY.md) — do
not open a public issue for vulnerabilities.
