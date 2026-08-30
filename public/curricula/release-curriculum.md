# Learn Release Management

> Ship on schedule — with risk controlled and rollback ready

A three-level curriculum for release managers — coordinating versioned deliveries, change control, environments, and communication so teams ship predictably without surprise downtime.

## Prerequisites

- Familiarity with how software is built and deployed (CI/CD at a high level)
- Comfort coordinating across engineering, QA, and product
- Willingness to write clear runbooks and status updates

## Tools & Technologies

- Jira / Linear
- Git / GitHub / GitLab
- GitHub Actions / Jenkins / CircleCI
- Feature flags (LaunchDarkly / Unleash)
- Spinnaker / Argo CD
- PagerDuty / Opsgenie
- Slack / Statuspage
- Confluence / Notion
- Semantic Versioning
- Change calendar tools

---

## Release Basics — Beginner

**Goal:** Coordinate a simple release with a checklist, owners, and clear status
**Duration:** 4–6 wks

### Release Fundamentals

#### What a release is

- Versions, builds, artifacts, and environments
- Semantic versioning and changelogs
- Hotfix vs. scheduled vs. continuous release

#### Roles & RACI

- Release manager vs. eng lead vs. QA vs. product
- Approvers and on-call during a window
- Single source of truth for go/no-go

### Planning a Release

#### Scope control

- Cut lines and feature freeze
- Dependency and migration awareness
- Risk list and mitigation owners

#### Checklists

- Pre-release, deploy, verify, and post-release steps
- Communication templates (start, progress, done)
- Rollback criteria written before you ship

### Tools of the Trade

#### Tracking & CI

- Release tickets and fix-version hygiene
- Reading CI green/red as a gate
- Tagging releases in Git

### Project Work

- Release checklist + comms templates for a web app deploy
- Mock release train: cut scope, assign owners, run a dry tabletop
- Changelog and semver for 5 sample merged PRs
- Rollback decision tree for a failed deploy

---

## Controlled Delivery — Intermediate

**Goal:** Run multi-service releases with change control, flags, and environment promotion
**Duration:** 6–8 wks

### Change Management

#### CAB & change records

- Change types: standard, normal, emergency
- Impact assessment and maintenance windows
- Audit trail that satisfies ops and compliance

#### Environment promotion

- Dev → staging → prod discipline
- Config and secret differences across envs
- Data migrations sequenced with deploys

### Safer Shipping

#### Progressive delivery

- Feature flags and dark launches
- Canary and blue/green concepts
- Kill switches and fast disable paths

#### Incident-ready releases

- On-call pairing during windows
- War-room norms and status updates
- Known-issue lists for support

### Release Cadence

#### Trains & calendars

- Release trains and blackout dates
- Coordinating dependent teams
- Metrics: lead time, change fail rate, MTTR

### Project Work

- Multi-service release plan with ordered migrations and flags
- Canary runbook with success metrics and abort criteria
- Change record pack for a CAB-style review
- Release calendar for a quarter with freeze windows

---

## Release at Scale — Expert

**Goal:** Design org-wide release policy, improve DORA metrics, and lead high-risk launches
**Duration:** 6–8 wks

### Platform & Policy

#### Release governance

- Org standards for tags, artifacts, and approvals
- Self-service release paths vs. gated paths
- Compliance (SOC2/ISO) evidence from the pipeline

#### Platform partnership

- CI/CD and CD tooling ownership boundaries
- Environment strategy for many teams
- Reducing release toil with automation

### High-Stakes Launches

#### Major events

- Launch war rooms and executive briefings
- Cross-company dependency management
- Post-launch hypercare and sunset plans

#### Continuous improvement

- Release retros and defect escape analysis
- Improving DORA without gaming the metrics
- Playbooks that survive team turnover

### Leadership

#### Influence under pressure

- Saying no to unsafe scope late in the freeze
- Aligning product urgency with operational risk
- Coaching squads on release hygiene

### Project Work

- Org release policy + RACI adopted by 2+ teams
- DORA baseline and 90-day improvement plan
- Major launch runbook (war room, flags, hypercare)
- Automation proposal that removes a manual release step

---

_Generated from Deptforge curriculum data. Visit the site for the latest version._