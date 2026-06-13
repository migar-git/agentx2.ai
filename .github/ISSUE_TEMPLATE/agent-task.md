---
name: "Agent task"
about: "Dispatch a task to an agent / swarm in the self-build loop"
title: "task: <short description>"
labels: ["agent-task"]
---

## Intent

The outcome this task should achieve (outcome, not activity).

## Swarm / lane

Which [swarm lane](../../docs/01-architecture/AGENTIC_SWARM.md) owns this?

- [ ] architecture · [ ] website · [ ] agents · [ ] quality · [ ] observability · [ ] governance · [ ] knowledge · [ ] content

## Inputs / context

Links to specs, docs, data, or prior runs.

## Constraints

- Autonomy tier ([HITL](../../docs/06-governance/HUMAN_IN_THE_LOOP.md)): 0 / 1 / 2 / 3
- Budget ceiling (tokens / wall time):
- Human gate required? yes / no

## Definition of done

- [ ] Meets spec / acceptance criteria
- [ ] Passes multi-eval ≥ thresholds ([Eval Framework](../../docs/04-quality/EVAL_FRAMEWORK.md))
- [ ] Zero regression ([Regression Policy](../../docs/04-quality/REGRESSION_POLICY.md))
- [ ] Traced + learning entry recorded ([Learning Log](../../docs/08-knowledge/LEARNING_LOG.md))

## Grounding

All outputs cite sources with access dates; unknowns marked `[UNVERIFIED]`.
