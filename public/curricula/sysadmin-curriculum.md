# Learn Systems Administration

> From first servers to reliable, automated infrastructure

A three-level curriculum for systems administrators — provisioning and hardening Linux/Windows servers, managing identity and storage, and automating operations so systems stay patchable, observable, and recoverable.

## Prerequisites

- Comfortable with a terminal or PowerShell
- Basic networking concepts (IP, DNS, ports)
- Willingness to follow change control and document runbooks

## Tools & Technologies

- Linux (Ubuntu/RHEL)
- Windows Server
- Bash / PowerShell
- Ansible
- Terraform
- Docker
- systemd
- Prometheus / Grafana
- Active Directory / FreeIPA
- NFS / SMB
- Backup tools (Borg / Veeam)
- Git

---

## Server Foundations — Beginner

**Goal:** Administer a Linux (and basic Windows) server: users, packages, services, and backups
**Duration:** 4–6 wks

### Operating Systems

#### Linux essentials

- Filesystem layout, permissions, and ownership
- Users, groups, and sudo safely
- Packages, updates, and service management with systemd

#### Windows Server basics

- Roles/features and Remote Desktop admin
- Local users vs. domain-joined
- Event Viewer for first-pass diagnostics

### Core Services

#### Networking on the host

- Interfaces, routes, and DNS resolution
- Firewalld/ufw/Windows Firewall basics
- SSH hardening (keys, disable password where possible)

#### Storage & backups

- Disks, mounts, and LVM at a working level
- Scheduled backups and restore drills
- Retention and offsite copies

### Ops Hygiene

#### Documentation & change

- Runbooks for reboot, patch, and restore
- Change tickets for production hosts
- Inventory of what you own

### Project Work

- Provision a Linux VM: users, SSH keys, firewall, and a web service
- Automated nightly backup + documented restore test
- Patch cycle runbook executed on a non-prod host
- Host inventory sheet with owners and criticality

---

## Fleet & Identity — Intermediate

**Goal:** Manage multiple hosts with config management, directory services, and monitoring
**Duration:** 6–8 wks

### Automation

#### Ansible (or equivalent)

- Inventories, playbooks, and idempotence
- Roles for baseline hardening
- Secrets handling without committing credentials

#### Containers for admins

- Running services in Docker safely
- Volumes, networks, and restart policies
- When VMs still win

### Identity & Access

#### Directory services

- AD/FreeIPA concepts: users, groups, GPOs/policies
- Centralized sudo and SSH access patterns
- Service accounts and key rotation

### Observability & HA

#### Monitoring

- Host metrics: CPU, memory, disk, and process health
- Alerting that pages the right person
- Log shipping and retention basics

#### Availability patterns

- Load balancing frontends
- Failover and maintenance modes
- Patching without long downtime

### Project Work

- Ansible baseline role applied to 3+ VMs
- Central auth for SSH/sudo via directory or SSO pattern
- Prometheus/Grafana (or equivalent) host dashboard + alerts
- Zero/low-downtime patch window for a small HA pair

---

## Platform Administration — Expert

**Goal:** Design resilient, automated infrastructure with IaC, DR, and security baselines
**Duration:** 6–8 wks

### Infrastructure as Code

#### Terraform & lifecycle

- Provisioning compute, network, and storage as code
- State, workspaces, and reviewable changes
- Drift detection and remediation

#### Golden images & scale

- Image pipelines (Packer or cloud images)
- Immutable vs. mutable host strategies
- Autoscaling groups and cattle not pets

### Resilience & Security

#### Disaster recovery

- RTO/RPO definitions that match business need
- DR drills with measured restore times
- Backup encryption and access control

#### Hardening at scale

- CIS-style baselines and compliance evidence
- Vulnerability scanning and patch SLAs
- Privileged access management patterns

### Leadership

#### Operating a platform

- On-call, runbooks, and blameless postmortems
- Capacity and cost conversations with leadership
- Handing self-service safely to application teams

### Project Work

- Terraform module set for a small environment (net + compute + DNS)
- DR tabletop + timed restore of a critical service
- Hardening baseline with automated compliance checks
- On-call runbook pack and postmortem template for the team

---

_Generated from Deptforge curriculum data. Visit the site for the latest version._