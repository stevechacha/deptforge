# Learn Platform Engineering

> From cluster YAML to paved paths other engineers actually use

A three-level curriculum for Platform Engineers — Kubernetes and cloud-native building blocks, then self-service golden paths and an internal developer portal, then governance, DX metrics, and a platform that scales across teams. Your users are other engineers; product thinking is part of the job.

## Prerequisites

- Software engineering background (you will write APIs, CLIs, and glue — not only YAML)
- Working Kubernetes and Git; Terraform or Helm at a beginner level helps
- Empathy for app developers: you have shipped an app through someone else's 'platform'

## Tools & Technologies

- Kubernetes
- Helm or Kustomize
- Terraform
- Backstage (or similar IDP)
- Argo CD or Flux
- GitHub Actions
- Go or Python
- Crossplane or operators
- Git/GitHub

---

## Cloud-Native & Developer Workflows — Beginner

**Goal:** See the whole path from git push to a running service, and operate Kubernetes as the substrate
**Duration:** 4–6 wks

### Kubernetes Fundamentals

#### Workloads and networking

- Deployments, Services, Ingress/Gateway, and ConfigMaps/Secrets
- Namespaces, RBAC, and ResourceQuotas as tenancy primitives
- Health probes, rollouts, and why CrashLoopBackOff is a product bug

#### Packaging

- Helm charts or Kustomize overlays without a snowflake per app
- Values that app teams may change vs. ones the platform owns
- Chart testing and versioning like application libraries

### The Developer Path

#### Workflow mapping

- Interview five engineers: where time actually goes (tickets, tickets, YAML)
- Inner loop vs. CI vs. production — different failure modes
- What 'works on my laptop' still leaks into the cluster

#### GitOps at a working level

- Desired state in git; a reconciler in the cluster
- App-of-apps or application sets without boiling the ocean
- Promotion: same artifact, different env config

### Platform as a Product

#### Who you serve

- App teams as customers: support, docs, and a roadmap
- Golden path vs. escape hatches
- Saying no to a snowflake that would become your on-call

### Project Work

- Helm/Kustomize chart that deploys a sample API with probes and resources
- Documented path: local → CI image → cluster, with the pain points listed
- Namespace + RBAC layout for two fake teams sharing one cluster

---

## Golden Paths & Self-Service — Intermediate

**Goal:** Let a team create a service without opening a ticket to the platform group
**Duration:** 6–8 wks

### Templates & Scaffolding

#### Golden-path design

- Cookiecutter/Copier/Backstage software templates: repo + CI + chart
- Sensible defaults: health, metrics, PDB, and non-root
- Version the template; migrate old services on purpose

#### CI/CD as a platform API

- Reusable workflows app teams call, not copy
- OIDC to cloud; no shared deploy keys in every repo
- Required checks the platform owns (lint, test, image scan)

### Internal Developer Portal

#### Backstage (or similar)

- Software catalog: ownership, docs, and on-call
- Software templates that create a running skeleton
- TechDocs so the golden path is not a Confluence ghost town

#### Self-service infrastructure

- Request a database/bucket via catalog, CRD, or Terraform Cloud workspace
- Guardrails: sizes, regions, and encryption on by default
- Human approval only when policy cannot decide

### APIs & CLIs for Engineers

#### Internal tooling

- A CLI or API that wraps kubectl/Terraform for the 80% path
- Idempotent operations and clear error messages
- Authn/z: who can prod-apply, who can only staging

### Day-2 on the Path

#### Operate after create

- Logs, metrics, and traces wired in the template — not optional extras
- How an app team rolls back without a platform ticket
- Secret injection patterns that do not leak into git

### Project Work

- Service template: repo + CI + Kubernetes manifest + README
- Backstage (or a thin portal) catalog entry + create-a-service flow
- Self-service 'get me a Postgres' with size limits and encryption enforced

---

## Scaling the Platform — Expert

**Goal:** Govern many teams, measure adoption, and treat the platform as a product with SLOs
**Duration:** 8–10 wks

### Multi-Team Governance

#### Tenancy and policy

- Cluster vs. namespace vs. account isolation — pick for blast radius
- Policy as code (OPA/Kyverno or cloud SCPs) for the non-negotiables
- Progressive delivery: same platform, different risk for payments vs. blogs

#### Operators and control planes

- CRDs/operators or Crossplane compositions as the real API
- Upgrade strategy for the platform without stranding app teams
- Versioned contracts: you break templates on a schedule, with a migration

### Developer Experience Metrics

#### What to measure

- Time to first deploy, lead time, and change fail rate (DORA-adjacent)
- Template adoption vs. snowflake count
- Support volume: tickets per team per month as a product metric

#### Adoption, not vanity

- Why teams bypass the path — and whether to fix the path or the policy
- Internal roadmap and changelog like an external product
- Office hours and a champion in each product team

### Cost, Reliability & SLOs

#### Platform SLOs

- The platform has SLOs: template create success, deploy success, cluster availability
- Error budgets for the paved path vs. app team feature work
- Shared on-call: platform vs. app — clear boundaries

#### Cost at platform scale

- Showback/chargeback so teams see idle namespaces
- Default requests/limits and bin-packing without surprise throttling
- Fintech/SACCO: separate prod paths for payment services with extra gates

### Security of the Path

#### Supply chain and secrets

- Signed images, admission that rejects unsigned, and SBOMs
- Secret stores and short-lived credentials as the default template
- Audit: who deployed what, for regulators and for Tuesday's incident

### Project Work

- Golden-path v2: template + portal + policy that blocks public databases
- DX report: time-to-first-deploy before/after, adoption %, snowflake count
- Platform SLO dashboard and a game-day for 'template create is down'
- Paved path for a SACCO payments service: extra checks, audit catalog, isolated namespace/account

---

_Generated from Deptforge curriculum data. Visit the site for the latest version._