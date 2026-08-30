# Learn Site Reliability

> From uptime slogans to SLOs, incidents, and less toil

A three-level curriculum for Site Reliability Engineering — measuring what users feel, detecting and responding when it breaks, then engineering the system so the same failure cannot happen the same way twice. Software engineering is the job; ops is the feedback loop.

## Prerequisites

- Solid programming in Python or Go (you will automate, not only click consoles)
- Linux, HTTP, and basic distributed-systems intuition (retries, timeouts, partitions)
- Comfort debugging under time pressure without blaming people

## Tools & Technologies

- Prometheus
- Grafana
- OpenTelemetry
- PagerDuty or Opsgenie
- Kubernetes
- Terraform
- Go or Python
- k6 or vegeta
- Git/GitHub

---

## Reliability Foundations — Beginner

**Goal:** Explain SLIs/SLOs, instrument a service, and sit a shadow on-call without making things worse
**Duration:** 4–6 wks

### Systems & Failure

#### Linux and distributed basics

- Processes, networking, and what 'the box is fine' still hides
- Timeouts, retries, and retry storms
- Dependencies: your SLO is only as good as the database and DNS

#### What reliability means

- Availability, latency, and correctness as user-facing properties
- MTTR vs. avoiding the incident entirely
- Reliability as a product feature with a budget

### SLIs, SLOs & Error Budgets

#### Choosing signals

- SLIs that match user journeys, not CPU because it is easy
- SLO math: windows, burn rates, and good enough vs. 100%
- Error budgets as a release-vs-reliability conversation

#### Monitoring vs. observability

- Metrics, logs, and traces — what each is for
- Unknown-unknowns vs. known dashboards
- High-cardinality pitfalls

### On-Call Fundamentals

#### Being on-call

- Escalation, handoff, and writing down what you tried
- Customer communication vs. fixing the system
- Sleep, rotations, and why heroics do not scale

### Project Work

- Define SLIs/SLOs for a sample API (latency, availability, correctness)
- Instrument that API with metrics and a Grafana dashboard
- Shadow on-call notes: a fake incident timeline you could hand to a teammate

---

## Detection, Response & Learning — Intermediate

**Goal:** Build alerts people trust, run an incident, and write a postmortem that changes the system
**Duration:** 6–8 wks

### Dashboards & Alerts That Matter

#### Signal design

- Burn-rate alerts on SLOs, not 'CPU > 80% forever'
- Multi-window, multi-burn so you page on fast and slow burns
- Link every alert to a runbook and an owner

#### Alert fatigue

- Symptom-based vs. cause-based paging
- Flapping, hysteresis, and maintenance windows
- Measuring noise: pages per week that did not need a human

### Incident Command

#### During the incident

- Incident commander, comms, and ops roles
- Stabilize first: rollback, feature flag, traffic shed
- A single timeline in Slack/Docs, not five private chats

#### Customer and stakeholder comms

- Status updates on a clock, even when the answer is 'still investigating'
- What finance/SACCO ops needs vs. what engineers need
- Never guessing at money impact without data

### Blameless Postmortems

#### Learning from failure

- Timeline, contributing factors, and what the system allowed
- Action items with owners and due dates — not 'be more careful'
- Follow-through: tickets that actually ship

### Observability Engineering

#### Traces and logs in practice

- OpenTelemetry traces across API and workers
- Structured logs with trace IDs
- Exemplars: jump from a red graph to a trace

### Project Work

- SLO burn-rate alerts with runbooks for a sample service
- Simulated incident: you command, someone else is ops, then a postmortem
- Reduce a noisy alert set and report pages/week before vs. after

---

## Engineering for Reliability — Expert

**Goal:** Plan capacity, attack your own system, and automate toil until error budgets are a design input
**Duration:** 8–10 wks

### Capacity & Load

#### Capacity planning

- Load testing with k6/vegeta against realistic journeys
- Headroom, saturation, and when to scale vs. fix the query
- Peak-day planning for payroll, month-end, or mobile-money spikes

#### Graceful degradation

- Load shedding, timeouts, and bulkheads
- Read-only mode and cached reads when the writer is sick
- Queue backpressure instead of unbounded retries

### Chaos & Game Days

#### Controlled failure

- Chaos experiments with a hypothesis and abort criteria
- Game days on staging that production on-call attends
- Dependency failure: DB, cache, and third-party payment callbacks

### Toil Reduction

#### Automation as product work

- Measure toil: repetitive, interrupt-driven, no lasting value
- Operator tools in Go/Python: drain, replay, rewind
- Self-healing where it is safe; human gates where it is not

#### Error budgets as policy

- Freeze risky launches when the budget is burned
- Reliability work in the same backlog as features
- Reporting SLOs to product and finance without theater

### Reliability in Regulated Flows

#### Correctness under money movement

- Idempotency and reconciliation as reliability, not only backend
- Dual-running a ledger change with an SLO on mismatch rate
- Audit-friendly incident records for payment outages

### Project Work

- Capacity plan + load test report for a payments or member-portal API
- Game day: kill a dependency, meet the SLO (or document the miss), write the postmortem
- Automate a recurring toil task and show hours saved per month
- SACCO/fintech reliability pack: payment SLOs, reconciliation alert, incident comms template

---

_Generated from Deptforge curriculum data. Visit the site for the latest version._