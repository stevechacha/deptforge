# Learn Cloud Security

> Secure cloud estates — identity, data, and infrastructure by design

A three-level curriculum for Cloud Security Engineers. Learn to harden AWS/Azure/GCP-style environments, automate guardrails, and respond to cloud incidents — always within authorized accounts and with least-privilege, privacy-aware practices.

## Prerequisites

- Familiarity with one major cloud (AWS, Azure, or GCP) at a basic builder level
- Comfort with IaC concepts (Terraform or CloudFormation/Bicep) or willingness to learn
- Understanding that cloud actions can be irreversible — use sandbox accounts for practice

## Tools & Technologies

- AWS / Azure / GCP consoles & CLIs
- Terraform
- IAM Access Analyzer / equivalent
- CSPM / CNAPP concepts
- CloudTrail / Activity Logs / Audit Logs
- OPA / policy-as-code
- Docker & Kubernetes basics
- GitHub Actions / CI
- Git

---

## Cloud Security Foundations — Beginner

**Goal:** Harden accounts with strong identity, logging, and network baselines
**Duration:** 4–6 wks

### Shared Responsibility & Ethics

#### Authorized cloud work

- Only use accounts and orgs you own or are granted access to
- Sandbox vs. production: never experiment in prod
- Data residency, privacy, and customer trust basics

#### Shared responsibility model

- What the provider secures vs. what you must secure
- Common misconceptions ("the cloud is secure by default")
- Mapping risks to identity, data, network, and workload layers

### Identity & Access Management

#### IAM essentials

- Users, roles, policies, and groups — least privilege
- Avoiding long-lived access keys; preferring roles/federation
- MFA, break-glass accounts, and password policies

#### Resource policies

- Bucket/blob and key policies that accidentally go public
- Service principals / managed identities for apps
- Reviewing who can assume powerful roles

### Logging, Network & Storage Baselines

#### Visibility first

- Turning on org/account audit trails and retaining them safely
- Centralizing logs without exposing sensitive payloads
- Alerts for root/admin use and policy changes

#### Network & data basics

- VPC/VNet segmentation and security groups / NSGs
- Public vs. private endpoints
- Encryption at rest/in transit and key ownership basics

### Project Work

- Document the shared responsibility model for your chosen cloud
- Harden a sandbox account: MFA, logging, and block public storage defaults
- Write least-privilege IAM roles for a simple app (read vs. deploy)
- Create a baseline checklist for new cloud accounts in your org

---

## Guardrails, Workloads & Automation — Intermediate

**Goal:** Encode security as code and protect compute, data, and pipelines
**Duration:** 4–6 wks

### Policy-as-Code & CSPM

#### Preventive controls

- Service control policies / org policies / Azure Policy concepts
- OPA/Conftest or cloud-native policy for IaC reviews
- CSPM findings: triage noise vs. real exposure

#### Secure IaC

- Terraform plan review for security regressions
- Secrets in state and how to avoid them
- Module standards for encryption, logging, and private networking

### Workload Security

#### Compute & containers

- Hardening VMs/images and patch channels
- Container image scanning and non-root runtimes
- Kubernetes RBAC, network policies, and secrets (lab)

#### Data protection

- KMS/Key Vault patterns and separation of duties
- Backup, immutability, and ransomware resilience
- Classification and access reviews for sensitive datasets

### CI/CD & Supply Chain in Cloud

#### Pipeline security

- OIDC federation from CI to cloud (no static keys)
- Environment protection rules and approval gates
- Artifact signing and provenance awareness

#### Threat modeling cloud apps

- Trust boundaries across accounts, VPCs, and SaaS
- Metadata service and SSRF-to-cloud credential risks
- Documenting abuse cases for new architectures

### Detection in the Cloud

#### Cloud-native detections

- Suspicious IAM changes, data exfil patterns, and crypto mining signals
- Wiring cloud findings into SIEM/SOC workflows
- Authorized hunting queries against your own audit logs

### Project Work

- Add policy-as-code checks that block public storage and open admin ports
- Secure a Terraform module set for a three-tier app (network, IAM, KMS)
- Design OIDC-based deploy roles for CI with least privilege
- Build a detection pack for five high-value cloud audit events

---

## Multi-Account Strategy & Incident Response — Expert

**Goal:** Design secure landing zones and lead cloud incident response
**Duration:** 4–6 wks

### Enterprise Cloud Security Architecture

#### Landing zones & org design

- Account/subscription/project vending and isolation
- Central security tooling vs. workload autonomy
- Network hub-spoke / shared services security patterns

#### Zero trust in cloud

- Identity-first access to admin planes
- Just-in-time elevation and session recording
- Workload identity and service-to-service auth

### Advanced Threats & IR

#### Cloud incident response

- Containment: isolate principals, revoke keys, snapshot evidence
- Forensics on ephemeral workloads and control-plane logs
- Cross-account blast radius analysis

#### Sophisticated attack patterns

- Privilege escalation via mislinked roles and trust policies
- Data exfiltration via storage and logging channels
- Defensive validations with authorized red/purple team exercises

### Governance, Risk & Continuous Assurance

#### Operating the program

- Control frameworks mapped to cloud controls (CIS, NIST CSF)
- Exception management and time-bounded risk acceptance
- Metrics: exposure age, policy coverage, and IR readiness

#### Multi-cloud & SaaS

- Consistent identity and logging patterns across providers
- SaaS security posture (SSO, SCIM, admin audit)
- Vendor access and third-party risk in cloud estates

### Project Work

- Design a secure multi-account landing zone with guardrails and logging
- Run a cloud IR tabletop (compromised deploy role) and publish a playbook
- Produce a CIS/NIST control mapping for your primary cloud with gaps
- Architect JIT admin access with monitoring and break-glass procedures

---

_Generated from Deptforge curriculum data. Visit the site for the latest version._