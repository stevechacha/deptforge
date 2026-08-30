# Learn Technical Writing

> From confusing READMEs to docs people can actually follow

A three-level curriculum for Technical Writers. Learn plain language and docs-as-code, then document APIs and product workflows with engineers, then run a docs system — style, versioning, and measurement — so users and teammates can finish the job without a Slack thread.

## Prerequisites

- Strong writing in the language you will document in (usually English)
- Comfort reading technical material even if you do not write production code
- Willingness to ask 'dumb' questions until the steps are actually true

## Tools & Technologies

- Markdown
- Git / GitHub
- Docusaurus / MkDocs
- OpenAPI / Swagger
- VS Code
- Notion / Confluence
- Vale / Vale-compatible lint
- Postman

---

## Writing & Docs Foundations — Beginner

**Goal:** Write task-oriented docs in Markdown, with structure a reader can scan
**Duration:** 4–6 wks

### Technical Writing Craft

#### Plain language

- Active voice, short sentences, and one idea per paragraph
- Procedures vs. concepts vs. reference — do not mix them in one page
- Cutting jargon, or defining it the first time

#### Audience & jobs

- Who is this page for, and what are they trying to finish?
- Beginner vs. expert readers; onboarding vs. lookup
- Error messages, UI copy, and docs as one voice

### Information Architecture

#### Findability

- Table of contents, headings, and page titles that match search
- Task-oriented IA: getting started, how-to, reference, troubleshooting
- When a page should split; when it should stay one screen

#### Structure of a how-to

- Prerequisites, numbered steps, expected result, next step
- Screenshots and when they rot
- Warnings, notes, and troubleshooting that is not a dump

### Docs-as-Code Basics

#### Markdown & Git

- Headings, lists, links, code fences, and tables
- Branches, PRs, and review comments on docs
- Previewing locally so you do not ship broken links

#### Working in a docs repo

- File naming, folders, and front matter
- Linking between pages without circular mazes
- Style sheet: do/don't for the team

### Project Work

- Rewrite a confusing README into a task-oriented getting-started
- How-to with numbered steps, prerequisites, and an expected result
- IA map for a small product: getting started, how-tos, reference, troubleshooting
- One-page style sheet (voice, terms, formatting) a teammate could follow

---

## Documenting Products & APIs — Intermediate

**Goal:** Document APIs and user workflows accurately by working with subject-matter experts
**Duration:** 6–8 wks

### API Documentation

#### OpenAPI & reference

- Reading an OpenAPI spec: paths, params, and error codes
- Descriptions that say what and when, not only the type
- Auth, pagination, idempotency, and rate limits in human language

#### Code samples

- Minimal working examples (curl, then one language)
- Request/response that match the live API
- Common errors and how to recover

### User Guides & Onboarding

#### Getting started

- Time-to-first-success: one happy path before every option
- Accounts, keys, and sandbox vs. production
- Checklists vs. narrative — pick for the job

#### Product how-tos

- Documenting a UI flow without screenshot rot
- Permissions, roles, and 'you cannot see this because'
- Release notes that a human can scan

### Working With Engineers

#### SME interviews

- Prep: read the ticket, the PR, and the last doc
- Questions that extract steps, not architecture lectures
- Confirming facts: you write, they correct, you own the page

#### Accuracy & review

- Trying the steps yourself (Postman, CLI, or UI)
- Review checklists: correctness, completeness, and tone
- Tracking doc bugs the same way as product bugs

### Project Work

- Getting-started guide for a sample API (auth, one write, one read, one error)
- OpenAPI descriptions and examples for five endpoints
- User guide for a feature with roles, empty states, and a troubleshooting section
- Interview an engineer (or a recorded talk), then write a page they will sign off as accurate

---

## Docs Systems at Scale — Expert

**Goal:** Run documentation as a product: style, versioning, contribution, and whether people succeed
**Duration:** 8–10 wks

### Style, Voice & Contribution

#### Style guides that stick

- Terminology, product names, and inclusive language
- Linting (Vale) and PR templates for docs
- Who can merge; who must review for accuracy

#### Contribution models

- Engineers as authors vs. writers as editors
- Templates for how-tos, concepts, and API pages
- Internal runbooks vs. customer docs — same craft, different audience

### Versioning & Releases

#### Docs that match the product

- Versioning docs with API or app releases
- Deprecations, breaking changes, and migration guides
- Feature flags and 'this page is for the new flow'

#### Release communication

- Changelogs vs. release notes vs. migration guides
- Support macros and docs staying in sync
- Localization awareness: what does not translate

### Measuring Docs

#### Effectiveness

- Search queries, bounce, and time-to-first-success
- Support tickets that should have been a page
- Feedback widgets without drowning in noise

#### Docs as a product

- Backlog, prioritization, and saying no to a wiki dump
- On-call for docs: broken steps after a release
- Ethics: security-sensitive procedures and what not to publish

### Project Work

- Docs site (Docusaurus or MkDocs) with IA, getting started, and API reference
- Style guide plus contribution model and a PR template
- Migration guide for a breaking API or UI change, versioned next to the old docs
- Docs quality report: search/support evidence and three improvements you would ship first

---

_Generated from Deptforge curriculum data. Visit the site for the latest version._