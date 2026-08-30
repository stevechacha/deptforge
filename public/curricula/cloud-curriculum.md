# Learn Cloud

> From console clicks to architecture you can provision, cost, and defend

A three-level curriculum for Cloud Engineers — core services and IAM, then networks and infrastructure as code, then scale, cost, and disaster recovery. AWS is the working provider; the same shapes exist on Azure and GCP.

## Prerequisites

- Linux and networking basics (IPs, DNS, HTTP)
- Comfort with a terminal, Git, and reading JSON/YAML
- A cloud account with billing alarms; associate-level cert study is useful but not required

## Tools & Technologies

- AWS (or Azure / GCP)
- Terraform
- IAM
- VPC / networking
- S3 / object storage
- RDS or Cloud SQL
- CloudWatch or Azure Monitor
- CLI (aws/az/gcloud)
- Git/GitHub

---

## Cloud Foundations — Beginner

**Goal:** Map compute, storage, and networking to a simple app and lock it down with IAM
**Duration:** 4–6 wks

### Core Services

#### Compute, storage, databases

- VMs vs. containers vs. managed app platforms — when each fits
- Object storage vs. block vs. file; buckets and lifecycle
- Managed Postgres (RDS/Cloud SQL) vs. a database on a VM

#### The CLI and the console

- CLI profiles, regions, and never using the root user for daily work
- Resource naming and tags from the first resource
- CloudTrail/audit logs: who changed what

### IAM & Access

#### Identity fundamentals

- Users, roles, policies, and least privilege
- Assume-role vs. long-lived access keys
- Service identities for apps (instance roles, workload identity)

#### Human access

- SSO/SSO-backed groups instead of shared passwords
- Break-glass admin and why it is logged
- Scoping by account/project, not one god account

### Certification-Aligned Mental Models

#### Shared responsibility

- What the provider patches vs. what you patch
- Regions, AZs, and why 'us-east-1 only' is a risk
- Well-Architected lenses: reliability, security, cost — at a glance

### Project Work

- Three-tier sketch: public HTTP, private app, private database
- IAM role for an app that can read one bucket and nothing else
- CLI walkthrough: create, tag, and destroy a sandbox resource

---

## Networks & Infrastructure as Code — Intermediate

**Goal:** Design a VPC and provision it with Terraform so it is repeatable
**Duration:** 6–8 wks

### VPC & Topology

#### Network design

- Public vs. private subnets, NAT, and internet gateways
- Security groups and NACLs: allow what you mean
- Load balancers, target groups, and health checks

#### Private connectivity

- Databases and caches with no public IPs
- Endpoints/PrivateLink-style access to cloud APIs
- DNS inside the VPC (private hosted zones)

### Terraform Fundamentals

#### IaC mechanics

- Providers, resources, variables, and outputs
- Remote state, locking, and why local state does not scale
- Plan in CI; human-reviewed apply for production

#### Modules and environments

- Reusable modules vs. copy-paste stacks
- Workspaces or separate state per env/account
- Importing a console-created resource once, then never clicking it again

### High Availability Basics

#### Multi-AZ design

- Spread compute across AZs; multi-AZ databases
- Stateless app nodes behind a load balancer
- What still fails in one region even with multi-AZ

### Observability of Infra

#### CloudWatch / Azure Monitor / Cloud Monitoring

- Metrics and alarms on the load balancer and database
- Log groups with retention and access control
- Budget alerts tied to the same tags as the stack

### Project Work

- Terraform a VPC, ALB/NLB, app ASG or equivalent, and private database
- No public IP on data stores; documented network diagram
- Apply the same module to a second environment with different sizing

---

## Scale, Cost & Recovery — Expert

**Goal:** Run production-shaped cloud: autoscaling, cost control, and a DR plan you could execute
**Duration:** 8–10 wks

### Scale & Traffic

#### Autoscaling and load

- Scale on meaningful metrics (queue depth, latency), not vanity CPU
- Connection pooling and database limits as the real ceiling
- CDN and object storage for static and large downloads

#### Multi-region thinking

- Active-passive vs. active-active and data gravity
- Global DNS failover and health checks
- What you cannot fail over if the database is the bottleneck

### Cost Engineering

#### Cost visibility

- Tags/labels as a contract: team, env, service, cost-center
- Budgets, anomaly detection, and rightsizing reports
- Savings plans/committed use only after the usage is stable

#### Waste you can kill

- Idle NAT, unattached volumes, leftover load balancers
- Log and snapshot retention that quietly dominates the bill
- Fintech/SACCO: isolate prod accounts so a sandbox cannot surprise finance

### Disaster Recovery

#### RPO/RTO in practice

- Backup, PITR, and restore drills — not only backup jobs
- Runbooks: who declares DR, DNS cutover, and data-loss communication
- Game-day restore of a database into an isolated account

### Cloud Security Baseline

#### Guardrails

- SCP/org policies or equivalent: deny public buckets, require encryption
- Encryption at rest and in transit as default
- Secrets in a manager; rotation for app and human credentials

### Project Work

- Autoscaling app stack with budget alerts and a cost dashboard
- DR runbook + successful restore drill with measured RPO/RTO
- Multi-AZ production VPC module used by two environments
- SACCO-style account layout: sandbox vs. prod, mandatory tags, no public data stores

---

_Generated from Deptforge curriculum data. Visit the site for the latest version._