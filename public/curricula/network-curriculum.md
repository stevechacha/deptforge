# Learn Networking

> From packets and subnets to resilient enterprise networks

A three-level curriculum for network engineers — designing addressing and routing, operating switching/Wi‑Fi/firewalls, and building observable, secure networks that scale with the business.

## Prerequisites

- Comfort with binary/hex at a basic level (or willingness to learn)
- Familiarity with how apps use TCP/IP (browsers, APIs)
- Access to a lab (physical gear, GNS3/EVE-NG, or cloud VPCs)

## Tools & Technologies

- Cisco / Juniper / Arista CLI
- Wireshark
- tcpdump
- GNS3 / EVE-NG / Packet Tracer
- iproute2 / net-tools
- Nmap
- BGP / OSPF labs
- Firewall platforms (pfSense / Palo Alto / cloud NGFW)
- DNS / DHCP servers
- NetBox / IPAM
- Grafana / SNMP / flow exporters

---

## Networking Foundations — Beginner

**Goal:** Understand the TCP/IP model, address networks, and troubleshoot Layer 2/3 connectivity
**Duration:** 4–6 wks

### Models & Addressing

#### TCP/IP essentials

- OSI vs. TCP/IP mental models
- Ethernet, MAC, ARP, and VLANs at a conceptual level
- TCP vs. UDP, ports, and three-way handshake

#### IPv4 addressing

- Subnetting and CIDR
- Private ranges and NAT overview
- Designing a small site addressing plan

### Switching & Routing Basics

#### L2 switching

- Access vs. trunk ports
- STP awareness (loops hurt)
- Basic switch config and show commands

#### Static routing

- Default routes and next hops
- Host routing tables (ip route / route print)
- Traceroute as a diagnostic story

### Hands-on Diagnostics

#### Packet thinking

- Wireshark filters for HTTP/DNS/TCP
- ping, traceroute, dig/nslookup
- Documenting a connectivity RCA

### Project Work

- Subnet plan for a small office (users, servers, guests, management)
- Lab: VLANs + inter-VLAN routing with verified ping paths
- Wireshark capture analysis of a failed DNS or TLS handshake
- Connectivity runbook for “can’t reach the app” tickets

---

## Enterprise Network Operations — Intermediate

**Goal:** Operate routed campuses, Wi‑Fi, firewalls, and DNS/DHCP with change discipline
**Duration:** 6–8 wks

### Dynamic Routing & WAN

#### IGP fundamentals

- OSPF areas and neighbor states at a working level
- Route redistribution pitfalls
- Redundant paths and failover testing

#### WAN & VPN

- Site-to-site VPN concepts
- SD-WAN awareness
- MTU and fragmentation issues

### Security & Access Networks

#### Firewalls & ACLs

- Stateful firewall rules and zones
- Least-privilege allow lists
- Change windows and rollback for rule pushes

#### Wireless & NAC

- SSID design (corp, guest, IoT)
- Controller vs. cloud-managed Wi‑Fi
- 802.1X / NAC concepts

### Core Services

#### DNS, DHCP, IPAM

- Authoritative vs. recursive DNS
- DHCP scopes, reservations, and relays
- IPAM (NetBox) as source of truth

### Project Work

- OSPF (or equivalent) lab with failover demonstration
- Firewall rule set for a three-tier app with documented intent
- Wi‑Fi design notes for a floor (channels, density, SSIDs)
- NetBox (or spreadsheet IPAM) model of a lab network

---

## Network Architecture & Reliability — Expert

**Goal:** Design scalable, observable, secure networks and lead complex changes
**Duration:** 6–8 wks

### Architecture

#### Campus & DC patterns

- Spine-leaf and hierarchical campus designs
- East-west vs. north-south traffic
- IPv6 dual-stack planning

#### BGP & internet edge

- eBGP multihoming concepts
- Prefix filtering and route hygiene
- DDoS awareness and scrubbing paths

### Operations Excellence

#### Observability

- SNMP, streaming telemetry, and flow (NetFlow/sFlow)
- SLO-style availability for paths and VPN hubs
- Correlating app latency with network path issues

#### Automation & change

- Config as code and peer-reviewed changes
- Canary device upgrades
- Major incident network war-room roles

### Leadership

#### Business partnership

- Capacity and circuit cost trade-offs
- Security architecture partnership
- Writing designs others can operate

### Project Work

- Network design doc for a new office or DC pod
- BGP lab with prefix filters and failover
- Telemetry dashboard + alert set for critical links
- Change automation PoC (template + review + push to lab)

---

_Generated from Deptforge curriculum data. Visit the site for the latest version._