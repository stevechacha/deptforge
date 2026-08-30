# Learn Performance Engineering

> From load scripts to production capacity you can defend

A three-level curriculum for performance engineers — modeling realistic load, finding bottlenecks in apps and infrastructure, and turning metrics into capacity and SLO decisions teams can trust.

## Prerequisites

- Comfort with HTTP APIs and basic Linux commands
- Programming basics in any language (for scripting load tests)
- Familiarity with how web apps are deployed (app + DB + cache)

## Tools & Technologies

- k6
- JMeter
- Gatling
- Locust
- Grafana
- Prometheus
- Datadog / New Relic
- Chrome Lighthouse
- Wireshark
- Docker
- AWS / GCP load generators

---

## Performance Foundations — Beginner

**Goal:** Run meaningful load tests and interpret latency, throughput, and error rate
**Duration:** 4–6 wks

### Core Concepts

#### What performance means

- Latency, throughput, concurrency, and saturation
- Percentiles (p50/p95/p99) vs. averages
- Load, stress, soak, and spike tests

#### User-centric metrics

- Apdex and error budgets at a practical level
- Frontend vitals (LCP, INP, CLS) overview
- When slow is a product bug vs. an infra limit

### First Load Scripts

#### k6 or JMeter basics

- HTTP scenarios and think time
- Virtual users and ramp patterns
- Thresholds that fail the test when SLOs break

#### Reading results

- Pass/fail from thresholds
- Spotting queueing and error cliffs
- Comparing two runs fairly

### Environment Hygiene

#### Valid tests

- Production-like data and config
- Isolating the system under test
- Documenting assumptions so results are repeatable

### Project Work

- k6 (or JMeter) script for an API with p95 and error thresholds
- Baseline report: ramp to failure and document the cliff
- Lighthouse audit of a web page with top 3 fix recommendations
- Compare two deploys with identical load profiles

---

## Finding Bottlenecks — Intermediate

**Goal:** Correlate load with system metrics and isolate root causes across the stack
**Duration:** 6–8 wks

### Realistic Workloads

#### Workload modeling

- Traffic mix from analytics or access logs
- Think times, sessions, and arrival rates
- Data uniqueness and cache-warming effects

#### Scenario design

- Critical user journeys under load
- Spike and soak scenarios
- Multi-region and geo considerations

### Observability During Tests

#### System signals

- CPU, memory, disk I/O, and network saturation
- DB slow queries, locks, and connection pools
- Cache hit rates and GC pauses

#### APM & dashboards

- Tracing a slow request end-to-end
- Grafana/Prometheus boards for a test run
- Linking load-generator metrics to app metrics

### Tuning Loop

#### Hypothesis-driven improvement

- Change one variable per experiment
- Config vs. code vs. schema bottlenecks
- Writing recommendations engineers can ship

### Project Work

- Workload model from sample access logs + matching k6 scenarios
- Bottleneck report with APM evidence for a slow endpoint
- Soak test (2–8 hrs) with resource trend analysis
- Before/after tuning study with controlled re-test

---

## Capacity & Performance Culture — Expert

**Goal:** Own SLOs, capacity planning, and performance gates in the delivery pipeline
**Duration:** 6–8 wks

### Capacity Planning

#### Sizing systems

- Headroom, growth forecasts, and seasonal peaks
- Horizontal vs. vertical scaling trade-offs
- Cost-aware performance (perf per dollar)

#### Resilience under load

- Degradation modes and circuit breakers
- Chaos + load combined experiments
- Failover and multi-AZ behavior under stress

### Engineering Integration

#### Perf in CI/CD

- Performance budgets and regression gates
- Smoke load on every release candidate
- Preventing silent latency creep

#### Frontend & edge

- CDN caching and TTFB under load
- Client-side perf budgets in the product process
- Synthetic monitoring vs. RUM

### Leadership

#### Stakeholder communication

- Executive-ready capacity narratives
- Risk of shipping without headroom
- Building a reusable performance playbook

### Project Work

- Capacity plan for a peak event (sale, enrollment, payday traffic)
- CI performance gate with budget thresholds and report artifact
- Chaos + load experiment with resilience findings
- Org playbook: when to run which test type and who signs off

---

_Generated from Deptforge curriculum data. Visit the site for the latest version._