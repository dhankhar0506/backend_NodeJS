# CAP Theorem (Simple + Complete)

CAP Theorem states that a distributed system can only guarantee **2 out of 3** properties simultaneously:

| Property | Definition | Example |
|----------|-----------|---------|
| **Consistency (C)** | All users see the same data at the same time | Bank balance is identical everywhere |
| **Availability (A)** | System always responds to requests | Website always works |
| **Partition Tolerance (P)** | System works even if network fails | Servers lose connection but system runs independently |

> ⚠️ You can choose only 2, not all 3 at the same time

### Key Definitions
- **Distributed System**: Multiple servers working together
- **Network Partition**: Communication failure between servers
    - Servers cannot talk to each other ❌
    - But each server can still work independently ✔

---

# Master–Slave Database Architecture

Master–Slave is a database architecture where one server (Master) controls data, and other servers (Slaves) replicate that data.

| Role | Function | Operations |
|------|----------|-----------|
| **Master** | Main server | ✔ Insert, Update, Delete |
| **Slave** | Copy servers | ✔ Read operations |

### Data Flow
```
User → Write → Master → Copies data → Slaves → User reads
```

### Example: E-commerce Website
- Master updates orders
- Slaves display product data to users

---

# Replication

**Replication** = Copying data from one database server to other servers (same data on multiple servers)

### Types of Replication

| Type | Behavior |
|------|----------|
| **Synchronous** | Data copied immediately |
| **Asynchronous** | Data copied after delay |

---

# Important Terminologies

| Term | Definition |
|------|-----------|
| **Primary (Master)** | Main server handling write operations |
| **Replica (Slave)** | Copy server handling read operations |
| **Replication Lag** | Delay between master and slave data sync |
| **Failover** | Slave becomes new master if master fails |
| **Leader–Follower** | Alternative name for master–slave |
| **Multi-Master** | Multiple servers can write simultaneously |

