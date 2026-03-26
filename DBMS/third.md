# Transactions

A transaction is a group of operations performed as a single unit of work on a database. It's a sequence of logical steps that either completes entirely or not at all.

## ACID Properties

ACID properties are rules that ensure database transactions are reliable and safe, maintaining data integrity.

### 1. Atomicity
Either all operations of a transaction are reflected in the database, or none are.
- **Concept:** Complete fully or not at all
- **Example:** Bank transfer ₹100 → If one step fails, everything cancels (no partial work)

### 2. Consistency
Database remains correct before and after a transaction.
- **Example:** Total money remains the same after transfer

### 3. Isolation
Multiple transactions may execute concurrently without affecting each other.
- **Example:** Two users using ATM → no conflict

### 4. Durability
Once committed, data is saved permanently.
- **Example:** After payment success → data never lost

## Transaction States

Transaction states represent the different stages a transaction goes through during execution.

1. **Active State:** Transaction is currently running
2. **Partially Committed State:** All operations are done, but not yet saved permanently
3. **Committed State:** Transaction is successfully completed
4. **Failed State:** Error occurs during transaction
5. **Aborted State:** Transaction is rolled back (cancelled)

**Lifecycle:** Active → Partially Committed → Committed → Failed → Aborted

## Recovery Mechanism

Recovery mechanism ensures the database remains correct even after failures (crash, power loss, etc.).

**Main Components:**
- **Log File:** Stores all changes (before & after values)
- **Undo:** Reverts incomplete transactions
- **Redo:** Re-applies committed transactions
- **Checkpoints:** Saves database state for faster recovery

## Shadow Copy Scheme

A recovery technique where the database keeps a copy (shadow) of original data before making changes.

**Process:**
1. Create shadow copy of original database
2. Perform changes on new copy
3. If transaction fails → Discard new copy, use original data (Atomicity achieved)
4. If transaction succeeds → Replace original with new copy (Durability achieved)

## Log-Based Recovery

Log-based recovery uses a log file to store all database changes for system recovery after failure.

**Log Format:** `<T1, A, old_value, new_value>`

### Types of Log-Based Recovery

- **Undo (Backward Recovery):** Used when transaction is not committed. Restores old values, ensures Atomicity
- **Redo (Forward Recovery):** Used when transaction is committed but not saved, ensures Durability

## Stable Storage

Stable storage means data is stored safely and is not lost even after failures.
- Data remains safe permanently
- Data survives system crash
- Used for logs and database storage
- Ensures Durability: After commit → Data saved in stable storage → Survives power loss

## Deferred Update

Deferred update means changes are not applied immediately to the database. Changes are recorded in log first, then applied after commit.

| Feature | Deferred Update | Immediate Update |
|---------|-----------------|------------------|
| When DB updated | After commit | Before commit |
| Undo needed | ❌ No | ✔ Yes |
| Redo needed | ✔ Yes | ✔ Yes |

## Concurrency

Concurrency means multiple transactions executing simultaneously in a database with many users accessing and updating data simultaneously.

### Why Concurrency is Needed
- Improves performance
- Faster execution
- Supports multiple users

## Concurrency Anomalies

Concurrency anomalies are errors that occur when multiple transactions run simultaneously without proper control.

- **Lost Update:** Two transactions update the same data, one update gets lost
- **Dirty Read:** One transaction reads uncommitted data
- **Unrepeatable Read:** Same query gives different results

### Prevention Methods

#### 1. Locking

**Shared Lock (Read Lock):**
- Many users can read simultaneously
- No one can write
- **Example:** 5 users reading same account balance ✔, no one can update ❌

**Exclusive Lock (Write Lock):**
- Only one user can write
- No one else can read or write
- **Example:** One user updating balance, others must wait

#### 2. Isolation Levels

- **Read Committed:** Can read only committed data
- **Serializable:** Highest isolation level. Transactions run one-by-one (like a queue), not simultaneously. Solves all anomalies but has slow performance and less concurrency

