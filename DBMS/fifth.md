# What is NoSQL Database?

- NoSQL data is stored in a non-relational format (not in tables)
- NoSQL = flexible data (not fixed rows & columns like SQL)

```json
{
    "name": "Rahul",
    "age": 20,
    "skills": ["JS", "React"]
}
```

### Collection
- Group of documents
- Like a table in SQL

### Document
- Single record in JSON format

### Schema-less
- No fixed structure required
- One document may have `age`, another may not

---

## SQL vs NoSQL

| Feature | SQL | NoSQL |
|---------|-----|-------|
| Structure | Tables | JSON / Key-Value |
| Schema | Fixed | Flexible |
| Data Type | Structured | Semi/Unstructured |
| Relationships | Supported (joins) | Not used (embedded data) |
| Scalability | Vertical | Horizontal |
| Speed | Complex queries | Large data & fast reads |
| Consistency | High (ACID) | Lower (BASE) |

### SQL Example (Table)
| ID | Name | Age |
|----|------|-----|
| 1 | Rahul | 20 |
| 2 | Aman | 21 |

### NoSQL Example
```json
{
    "name": "Rahul",
    "age": 20,
    "skills": ["JS", "React"]
}
```

---

## What is Scaling?

Scaling means increasing system capacity to handle more data/users.

### 1. Vertical Scaling (Scale-Up)
- Increase power of ONE server
- Upgrade RAM, CPU, or storage

**Disadvantages:**
- Limited capacity
- Expensive
- Single point of failure

### 2. Horizontal Scaling (Scale-Out)
- Use multiple machines
- Add more servers to system
- Implement load balancing

**Disadvantages:**
- Complex setup
- Requires distributed system knowledge

| Feature | Vertical Scaling | Horizontal Scaling |
|---------|------------------|-------------------|
| Meaning | Upgrade one server | Add multiple servers |
| Cost | High | Flexible |
| Limit | Limited | Unlimited |
| Failure | One point failure | Safer |

---

## What is Clustering?

- Clustering uses multiple servers (nodes) working together as one system
- Replicates the same dataset on different servers

### Why Use Clustering?
- High availability
- Backup (if one fails, others work)
- Faster reads

---

## Partitioning & Sharding in DBMS

When a database gets too large, we use Partitioning and Sharding to optimize.

### 1. Partitioning (Within One Server)
Data is split into parts but stored in the same database/server.

**Types:**
- **Horizontal Partitioning:** Split by rows
- **Vertical Partitioning:** Split by columns

**Disadvantage:** Still limited to one server; scaling is restricted

### 2. Sharding (Across Multiple Servers)
Data is divided across different servers.

```
Server 1 → Users 1–1000
Server 2 → Users 1001–2000
Server 3 → Users 2001–3000
```

| Feature | Partitioning | Sharding |
|---------|--------------|----------|
| Location | Same server | Multiple servers |
| Scaling | Limited | Unlimited |
| Complexity | Low | High |
| Performance | Improved | Highly improved |
