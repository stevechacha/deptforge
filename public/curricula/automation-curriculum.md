# Learn Test Automation

> From first UI script to reliable CI-gated suites

A three-level curriculum for automation engineers — writing maintainable UI and API tests, designing stable frameworks, and owning flaky-free pipelines that protect releases without slowing the team.

## Prerequisites

- Programming fundamentals (variables, functions, classes) in JavaScript/TypeScript or Python
- Basic QA understanding (test cases, bugs, regression)
- Comfort with a terminal and Git

## Tools & Technologies

- Playwright
- Cypress
- Selenium
- pytest
- Jest / Vitest
- Postman / Newman
- REST Assured
- GitHub Actions / GitLab CI
- Allure / ReportPortal
- Docker
- BrowserStack

---

## First Automated Tests — Beginner

**Goal:** Write and run reliable UI and API smoke tests for a single app
**Duration:** 4–6 wks

### Automation Foundations

#### When to automate

- ROI: smoke and regression vs. one-off exploratory
- Pyramid: unit, API, UI — and where automation fits
- Flakiness as the #1 enemy

#### Tooling setup

- Installing Playwright or Cypress
- Project structure and npm/pip scripts
- Running tests locally and reading failures

### UI Automation Basics

#### Selectors & waits

- Roles, labels, and test IDs over brittle CSS
- Auto-waiting vs. hard sleeps
- Assertions that describe user-visible outcomes

#### Page objects (light)

- Grouping actions by screen
- Reusable login helpers
- Keeping tests readable as stories

### API Automation Basics

#### HTTP tests

- Status, headers, and JSON body assertions
- Auth tokens in test setup
- Data cleanup after create/update tests

### Project Work

- Playwright (or Cypress) smoke suite for login and one happy-path feature
- API test suite covering CRUD with auth
- Page-object refactor of your UI smoke tests
- Failure report demo: screenshot + trace on a forced bug

---

## Frameworks & CI — Intermediate

**Goal:** Build a maintainable suite that runs on every PR and catches real regressions
**Duration:** 6–8 wks

### Framework Design

#### Architecture

- Fixtures, factories, and test data builders
- Environments and secrets handling
- Tagging: smoke, regression, nightly

#### Stability patterns

- Idempotent setup and teardown
- Network stubbing vs. real backends
- Retry policy that does not hide bugs

### CI Integration

#### Pipelines

- GitHub Actions / GitLab CI job for PR checks
- Artifacts: reports, videos, and traces
- Parallel shards and time budgets

#### Reporting

- HTML/Allure reports stakeholders can read
- Flake tracking and quarantine process
- Owning the red build

### Cross-Layer Coverage

#### API + UI combo

- Seeding state via API before UI flows
- Contract tests against OpenAPI
- Choosing the cheapest layer that catches the risk

### Project Work

- PR-gated CI pipeline with smoke + artifact upload
- Tagged suite: smoke on PR, full regression nightly
- API-seeded UI flow that avoids brittle UI setup
- Flake triage doc with quarantine rules and owners

---

## Automation at Scale — Expert

**Goal:** Own platform-level reliability, performance of the suite, and team-wide adoption
**Duration:** 6–8 wks

### Platform Thinking

#### Shared libraries

- Internal test SDK for auth, fixtures, and reporting
- Versioning and migration guides for other teams
- Code review standards for automation PRs

#### Scale & cost

- Grid/cloud browsers and device farms
- Suite runtime SLOs and pruning dead tests
- Cost awareness for parallel cloud minutes

### Advanced Techniques

#### Beyond happy paths

- Visual regression (baseline discipline)
- Accessibility checks in CI
- Chaos and negative-path automation

#### Observability of tests

- Tracing failures to product commits
- Dashboards for pass rate and flake rate
- Alerting when gates go red repeatedly

### Leadership

#### Adoption

- Teaching developers to write and own tests
- Automation strategy docs for product areas
- Balancing coverage goals with delivery speed

### Project Work

- Shared test library published for 2+ product teams
- Visual + a11y checks wired into nightly CI
- Suite health dashboard (pass/flake/runtime) with action plan
- Automation strategy for a new microservice or mobile app

---

_Generated from Deptforge curriculum data. Visit the site for the latest version._