# Learn QA

> From exploratory checks to disciplined quality ownership

A three-level curriculum for QA engineers — learning to find defects early, design solid test cases, run regression with confidence, and partner with engineering on risk-based quality for web and API products.

## Prerequisites

- Comfort using browsers and common desktop apps
- Basic understanding of how websites and APIs work
- Willingness to write clear bug reports and follow checklists

## Tools & Technologies

- Chrome DevTools
- Postman
- Jira / Linear
- TestRail / Zephyr
- Charles / Proxyman
- BrowserStack / Sauce Labs
- Git
- SQL (read queries)
- Swagger / OpenAPI
- Confluence / Notion

---

## QA Foundations — Beginner

**Goal:** Comfortable exploring products, writing clear bugs, and executing basic test cases
**Duration:** 4–6 wks

### Quality Mindset

#### What QA owns

- Verification vs. validation
- Severity vs. priority
- Shift-left and when to stop testing

#### Bug reporting

- Repro steps, expected vs. actual, and environment
- Screenshots, logs, and network captures
- Triaging duplicates and incomplete reports

### Manual Testing Basics

#### Test case design

- Happy path, edge cases, and negative tests
- Equivalence partitioning and boundary values
- Traceability from requirements to cases

#### Exploratory testing

- Charters and time-boxed sessions
- Note-taking that turns into actionable bugs
- Heuristics (CRUD, auth, permissions, empty states)

### Web & API Smoke Checks

#### Browser testing

- Forms, navigation, and responsive layouts
- DevTools console and network tab basics
- Cross-browser smoke on Chrome, Safari, and Firefox

#### API smoke with Postman

- GET/POST requests and status codes
- Reading OpenAPI/Swagger docs
- Saving a small collection for a feature

### Project Work

- Write and execute a test suite for a login + signup flow
- File 10 well-structured bugs against a sample web app
- Exploratory charter report for a checkout or booking flow
- Postman collection covering CRUD on a public sample API

---

## Structured Quality Engineering — Intermediate

**Goal:** Plan releases, own regression, and test integrations with measurable coverage
**Duration:** 6–8 wks

### Test Strategy

#### Planning & risk

- Test plans vs. test cases
- Risk-based prioritization
- Entry/exit criteria and go/no-go signals

#### Regression & release support

- Smoke, sanity, and full regression suites
- Release checklists and known-issue tracking
- Partnering with product on accept/reject

### API & Data Testing

#### API depth

- Auth headers, tokens, and role-based access
- Contract checks against OpenAPI schemas
- Idempotency, pagination, and error payloads

#### Data & environments

- Test data setup and teardown
- SQL reads to verify persistence
- Staging vs. production-like environments

### Non-Functional Awareness

#### Usability, a11y, and compatibility

- Keyboard navigation and basic WCAG checks
- Mobile web and device-lab smoke
- Localization and timezone edge cases

### Project Work

- End-to-end test plan for a multi-step feature release
- API regression suite (Postman) with auth and negative cases
- Cross-browser matrix report with risk-ranked findings
- Release readiness checklist used on a mock sprint release

---

## Quality Leadership — Expert

**Goal:** Define quality strategy, coach teams, and reduce escaped defects systematically
**Duration:** 6–8 wks

### Quality Systems

#### Metrics that matter

- Escape rate, reopen rate, and cycle time
- Coverage as risk reduction, not vanity counts
- Dashboards for engineering and product

#### Process design

- Definition of Done that includes test evidence
- Bug SLAs and severity rubrics
- Root-cause analysis after production incidents

### Advanced Techniques

#### Specialized testing

- Security-minded checks (authZ, injection surfaces) at a QA level
- Chaos and failure-mode exploratory sessions
- Production monitoring signals that feed back into test design

#### Automation partnership

- What to automate vs. keep manual
- Reviewing automation PRs for coverage gaps
- Flake triage and CI gate ownership

### Influence

#### Working across teams

- Quality coaching for developers
- Stakeholder communication under release pressure
- Building a reusable QA playbook

### Project Work

- Quality strategy doc for a product area with metrics and gates
- Post-incident RCA with preventive test additions
- QA playbook (severity rubric, DoD, release checklist)
- Automation ROI review: propose what to automate next quarter

---

_Generated from Deptforge curriculum data. Visit the site for the latest version._