# Learn Security Operations

> Detect, triage, and respond — calmly and by the book

A three-level curriculum for Security Analysts in a SOC. Learn monitoring, alert triage, investigation, and incident response with a defensive, privacy-aware mindset — operating only within authorized environments and documented playbooks.

## Prerequisites

- Basic networking (IP, DNS, HTTP) and OS familiarity (Windows and Linux)
- Comfort reading logs and using a command line
- Commitment to privacy, least privilege, and authorized access only

## Tools & Technologies

- SIEM (e.g. Splunk / Elastic / Microsoft Sentinel)
- EDR / XDR
- SOAR / playbooks
- Wireshark / packet capture basics
- Ticketing (Jira / ServiceNow)
- MITRE ATT&CK
- Threat intel platforms
- Python / Bash for light automation
- Git

---

## SOC Foundations & Triage — Beginner

**Goal:** Triage alerts correctly and escalate with clear, complete notes
**Duration:** 4–6 wks

### Mission, Ethics & Access

#### Authorized operations

- Only investigate systems and data you are cleared to access
- Handling PII and customer data with need-to-know
- Escalation paths and when not to act alone

#### SOC structure

- L1/L2/L3 responsibilities and handoffs
- Shift hygiene: tickets, runbooks, and status updates
- False positives vs. true positives vs. benign true positives

### Telemetry & ATT&CK Basics

#### Where signals come from

- Endpoint, identity, network, cloud, and app logs
- Time sync, retention, and log completeness gaps
- Reading a raw event and extracting who/what/when/where

#### MITRE ATT&CK intro

- Tactics vs. techniques vs. procedures
- Mapping a simple alert to an ATT&CK technique
- Using ATT&CK for questions, not buzzwords

### Alert Triage Practice

#### Triage workflow

- Validate the alert, check context, decide: close / monitor / escalate
- Writing investigation notes another analyst can continue
- Customer-safe language in tickets

#### Common starter alert types

- Failed logons and impossible travel (high-level)
- Malware / EDR detections and quarantine awareness
- Phishing reports: headers, links, and safe handling

### Project Work

- Build a personal triage checklist for five common alert types
- Map ten sample alerts to MITRE ATT&CK techniques
- Write a complete L1 ticket for a simulated phishing report
- Document a shift handoff note that another analyst can act on

---

## Investigation & Detection Engineering — Intermediate

**Goal:** Investigate multi-source incidents and improve detections responsibly
**Duration:** 4–6 wks

### Deep Investigation

#### Correlating evidence

- Joining identity, endpoint, and network timelines
- Process trees, parent/child anomalies, and living-off-the-land clues
- Preserving evidence and chain-of-custody basics

#### Case narrative

- Building a timeline stakeholders can trust
- Hypotheses, confirmation, and documenting uncertainty
- When to involve IR, legal, or engineering

### SIEM & Query Craft

#### Effective searching

- Scoped queries: time, host, user, and hash filters
- Avoiding noisy queries that overload the platform
- Saved searches and dashboards for shift work

#### Detection quality

- Tuning thresholds and allowlists with change control
- Measuring precision/recall tradeoffs in plain language
- Peer review for new correlation rules

### Threat Intel & Phishing Ops

#### Using intel defensively

- IOCs as hypotheses, not automatic blocks
- Enrichment: reputation, geo, and malware family context
- Sharing intel within policy (TLP / internal guidelines)

#### Email & identity abuse

- Mailbox rules, forwarding, and OAuth consent risks
- MFA fatigue and session theft indicators
- Containment steps that minimize user disruption

### Automation with Guardrails

#### SOAR & scripts

- Playbooks for enrichment and notification — not blind remediation
- Human approval gates for high-impact actions
- Light Python/Bash to speed repetitive, safe lookups

### Project Work

- Investigate a multi-log simulated intrusion and write a full case report
- Author and peer-review a SIEM detection with tuning notes
- Design a phishing response playbook with containment checkpoints
- Build a safe enrichment automation (lookup only) for a common IOC type

---

## Incident Response & SOC Leadership — Expert

**Goal:** Lead major incidents and raise the SOC’s detection and response maturity
**Duration:** 4–6 wks

### Incident Response Leadership

#### IR lifecycle

- Prepare, detect, contain, eradicate, recover, lessons learned
- War-room roles, communications, and executive updates
- Legal hold, privacy, and external notification awareness

#### Tabletops & readiness

- Running tabletop exercises with realistic constraints
- Measuring MTTD/MTTR without gaming the metrics
- After-action reports that drive concrete backlog work

### Advanced Detection Strategy

#### Coverage mapping

- ATT&CK coverage heatmaps tied to telemetry you actually have
- Closing blind spots with engineering partners
- Purple-team style validation of detections (authorized)

#### Cloud & identity focus

- Cloud audit logs and control-plane anomalies
- Privileged identity monitoring and just-in-time access signals
- Detecting ransomware precursors without relying on one tool

### Program & People

#### Operating a healthy SOC

- Runbook libraries, knowledge management, and onboarding
- Burnout, rotation, and quality over alert volume
- Vendor tool evaluation with detection outcomes, not slideware

#### Continuous improvement

- Feedback loops from IR back into detections and hardening
- SLA design for critical vs. informational queues
- Reporting risk to leadership in business terms

### Project Work

- Facilitate a ransomware tabletop and publish an after-action report
- Produce an ATT&CK coverage map with a 90-day closing plan
- Rewrite the major-incident communications template for execs and customers
- Design an L1→L2 career skills matrix and training plan for the SOC

---

_Generated from Deptforge curriculum data. Visit the site for the latest version._