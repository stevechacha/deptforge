# Learn DevOps

> From scripts on a laptop to pipelines that ship safely

A three-level curriculum for getting code from a developer's machine to production — Linux and cloud basics, then containers and CI/CD, then infrastructure as code, environments, and the monitoring that makes frequent deploys survivable.

## Prerequisites

- Comfort with a terminal and Git
- Programming fundamentals in any language (Bash or Python help immediately)
- Willingness to use a cloud account (AWS, GCP, or Azure) with billing alerts on

## Tools & Technologies

- Linux
- Bash
- Git/GitHub
- Docker
- Kubernetes
- Terraform
- GitHub Actions or Jenkins
- AWS or Azure
- Prometheus
- Grafana

---

## Linux, Networks & Cloud Fundamentals — Beginner

**Goal:** Operate a Linux box, explain a request path, and use one cloud provider without guessing
**Duration:** 4–6 wks

### Linux & Shell

#### Linux administration

- Users, permissions, processes, and systemd at a working level
- Filesystems, logs under /var/log, and journalctl
- Packages, SSH, and not SSHing as root for daily work

#### Shell scripting

- Bash: variables, pipes, exit codes, and set -euo pipefail
- Idempotent scripts vs. one-off copy-paste
- Python for glue when Bash gets brittle

### Networking & Git for Teams

#### Networking basics

- DNS, DNS records, and TLS certificates at a conceptual level
- HTTP vs. HTTPS, ports, and reverse proxies
- Load balancers vs. a single VM

#### Git workflows

- Trunk, feature branches, and protected main
- What belongs in git vs. secrets managers
- Reviewing a Dockerfile or workflow file like application code

### Cloud Provider Fundamentals

#### One cloud, end to end

- Compute, object storage, and a managed database
- IAM users vs. roles; never commit long-lived keys
- Billing alarms before the first experiment

### Project Work

- Provision a VM, SSH in, and serve a static site behind HTTPS
- Bash or Python script that bootstraps a repeatable server setup
- Architecture sketch: DNS → load balancer → app → database

---

## CI/CD, Containers & Environments — Intermediate

**Goal:** Containerize an app and ship it through a pipeline to more than one environment
**Duration:** 6–8 wks

### Containers

#### Docker fundamentals

- Images, layers, and multi-stage builds
- Non-root users, .dockerignore, and pin versions
- Compose for local dependencies (app + Postgres + Redis)

#### Registries and promotion

- Tagging by git SHA, not only latest
- Pushing to GHCR, ECR, or equivalent
- Scanning images for known CVEs at a working level

### CI/CD Pipelines

#### Pipeline design

- GitHub Actions or Jenkins: lint, test, build, deploy
- OIDC to cloud instead of static access keys
- Required checks on pull requests

#### Environment management

- Dev, staging, prod as separate accounts or namespaces
- Config and secrets per environment
- Manual approval for production when the risk is real

### Kubernetes Basics

#### Workloads you will actually use

- Pods, Deployments, Services, and ConfigMaps/Secrets
- Rollouts, rollbacks, and readiness/liveness probes
- kubectl debugging: logs, describe, and exec

### Release Hygiene

#### Safe deploys

- Blue/green or rolling updates conceptually
- Database migrations ordered before or after the app
- A rollback you can run without the original author

### Project Work

- Containerize an existing API and run it with Compose
- GitHub Actions pipeline: test → image → deploy to staging
- Kubernetes Deployment + Service for that image with a rollback documented

---

## Infrastructure, Reliability & Hardening — Expert

**Goal:** Manage infra as code, watch it, and respond when a deploy is the incident
**Duration:** 8–10 wks

### Infrastructure as Code

#### Terraform in practice

- Modules, state backends, and locking
- Plan in CI; apply with a recorded change
- Secrets: never in state you treat as public

#### Networks and identity

- VPC/VNet, subnets, and security groups as code
- Least-privilege IAM for pipelines and workloads
- Private databases; public only what must be public

### Monitoring & Alerting

#### Prometheus and Grafana

- Metrics that map to user pain (latency, errors, saturation)
- Dashboards per service and per pipeline
- Alerts with runbooks, not pages for every blip

### Incidents & Hardening

#### On-call basics

- Severity, communication, and who owns the rollback
- Post-deploy checks that catch bad releases fast
- Change windows vs. continuous delivery trade-offs

#### Security hardening

- Image and base OS patching cadence
- Network policies and secrets rotation
- Supply chain: lockfiles, signed images, and least-privilege runners

### Delivery at Org Scale

#### Many services, one path

- Reusable workflow templates for app teams
- Environment promotion that finance and audit can follow
- Cost tags on every resource the pipeline creates

### Project Work

- Terraform a VPC, database, and app runtime; apply via CI
- Production-like pipeline with staging gates and a rollback runbook
- Prometheus/Grafana dashboards and alerts for a sample API
- SACCO/fintech-style env split: isolated prod account, tagged costs, signed images

---

_Generated from Deptforge curriculum data. Visit the site for the latest version._