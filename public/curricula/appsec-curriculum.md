# Learn Application Security

> Secure software by design — find flaws early, fix them responsibly

A three-level curriculum for Application Security Engineers. Learn how modern apps fail, how to review and test them with authorization, and how to embed defenses into design, CI/CD, and incident response — always within legal and ethical boundaries.

## Prerequisites

- Comfort with at least one programming language (e.g. Python, JavaScript, Java, or Go)
- Basic web concepts: HTTP, cookies, sessions, and APIs
- Willingness to work only on systems you own or have written permission to test

## Tools & Technologies

- OWASP ZAP
- Burp Suite Community
- Semgrep
- CodeQL / SAST
- Dependency-Check / SCA
- Postman
- Docker
- Git
- GitHub Actions / CI
- Threat modeling (STRIDE / DFDs)

---

## Secure Development Foundations — Beginner

**Goal:** Explain common web risks and apply basic secure-coding and review habits
**Duration:** 4–6 wks

### Ethics, Scope & Mindset

#### Authorized testing only

- Written permission, scopes, and rules of engagement
- What is out of scope and how to stop immediately
- Responsible disclosure and coordinated vulnerability reporting

#### AppSec roles & outcomes

- How AppSec partners with engineering and product
- Shift-left vs. runtime defenses
- Risk language: likelihood, impact, and business context

### Web & API Attack Surface

#### HTTP & trust boundaries

- Requests, responses, headers, and cookies
- Client vs. server trust — never trust input
- Sessions, tokens, and authentication basics

#### OWASP Top 10 overview

- Injection, XSS, and broken access control at a conceptual level
- Misconfiguration and vulnerable components
- Mapping findings to remediation owners

### Secure Coding Essentials

#### Input handling

- Validation, encoding, and parameterized queries
- File uploads and path traversal defenses
- Secrets: never commit keys; use env/secret stores

#### First security reviews

- Reading a PR with a security checklist
- Spotting hardcoded credentials and debug endpoints
- Documenting issues without blame

### Project Work

- Write a one-page rules-of-engagement template for an internal lab app
- Map the attack surface of a simple web app (routes, auth, data stores)
- Fix three intentional insecure patterns in a training codebase (with tests)
- Produce a beginner AppSec checklist for pull-request review

---

## Assessment & Pipeline Security — Intermediate

**Goal:** Run authorized assessments and wire security checks into the delivery pipeline
**Duration:** 4–6 wks

### Threat Modeling

#### Diagrams & STRIDE

- Data-flow diagrams for a feature or service
- STRIDE categories applied to real components
- Prioritizing threats that matter to the business

#### Abuse cases

- Turning user stories into abuse cases
- AuthZ matrix: who can do what on which resource
- Feeding model outputs into backlog items

### SAST, SCA & DAST

#### Static & dependency analysis

- Running Semgrep or similar SAST on a repo
- SCA for known vulnerable libraries and licenses
- Triage: false positives vs. real risk

#### Dynamic testing (authorized)

- Baseline scans with ZAP or Burp against a lab target
- Manual verification of automated findings
- Safe handling of credentials and scan data

### APIs & Auth Hardening

#### API security

- Broken object-level authorization (BOLA/IDOR) patterns
- Rate limiting, pagination, and mass assignment
- OpenAPI reviews for over-exposed fields

#### AuthN / AuthZ deep dive

- OAuth/OIDC pitfalls (redirects, scopes, token storage)
- Session fixation, CSRF, and cookie flags
- Multi-tenant isolation checks

### CI/CD Security Gates

#### Pipeline controls

- Failing builds on high-severity SAST/SCA findings
- Secret scanning in CI
- Signed commits and protected branches as security controls

### Project Work

- Threat model a feature end-to-end and file prioritized backlog tickets
- Add SAST + SCA to CI with a documented triage process
- Authorized API assessment report for a lab service (findings + remediations)
- Design an authZ test matrix and automate a few critical cases

---

## Program Design & Resilience — Expert

**Goal:** Lead AppSec programs that prevent, detect, and respond at scale
**Duration:** 4–6 wks

### Secure SDLC at Scale

#### Program building blocks

- Security champions, training, and office hours
- Risk acceptance and exception workflows
- Metrics that drive behavior (not vanity scan counts)

#### Architecture reviews

- Reviewing new services before build
- Trust zones, zero-trust assumptions, and shared libraries
- Supply-chain: SBOM, provenance, and signed artifacts

### Advanced Testing & Bug Bounty Ops

#### Deep assessments

- Combining automated coverage with focused manual testing
- Business-logic flaws that scanners miss
- Coordinating with pen-test partners under clear scope

#### Vulnerability management

- Severity, SLA, and retest cycles
- Responsible disclosure intake and researcher communication
- Public CVE process awareness (when you are a vendor)

### Detection & Incident Collaboration

#### From finding to fix in production

- WAF/RASP as compensating controls — not substitutes for fixes
- Working with SOC on app-layer signals
- Post-incident: root cause, secure redesign, and lessons learned

#### Compliance as engineering

- Mapping controls to OWASP ASVS / NIST CSF language
- Evidence collection without theater
- Privacy and security overlap (data minimization, logging hygiene)

### Project Work

- Draft an AppSec program charter with metrics, SLAs, and exception policy
- Run a tabletop for a critical web vuln disclosure and document the playbook
- Design a secure reference architecture for a multi-tenant SaaS API
- Build an ASVS-inspired control checklist mapped to your stack

---

_Generated from Deptforge curriculum data. Visit the site for the latest version._