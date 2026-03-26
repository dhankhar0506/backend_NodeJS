# TRANSACTIONS

- A transaction is a group of operations performed as a single unit of work on a database.
- A group of logical Steps in a sequence called Transaction
- which either completes entirely or not at all.

## Acid Properties

- To insure integrity of Data 
- ACID properties are rules that ensure database transactions are reliable and safe.
1. Atomicity = Either all operations of transaction are reflected properly in the DB, or none are.
    - Either complete fully or not at all
    Bank transfer ₹100
    If one step fails → everything cancels
     ❌ No partial work
2. Consistency (Correct Data)
- Database remains correct before and after transaction
- Total money remains same after transfer
3. Isolation (No Interference)
    - Even though multiple transactions may execute concurrently,
    - Transactions do not affect each other
    - Two users using ATM → no conflict
4. Durability = Once committed, data is saved permanently
    - After payment success → data never lost

##  What are Transaction States?

- Transaction states represent the different stages a transaction goes through during execution.
- They show the life cycle of a transaction
1. Active State
- Transaction is currently running
2. Partially Committed State
- All operations are done, but not yet saved permanently
3. Committed State 
- Transaction is successfully completed
4. Failed State ❌
- Error occurs during transaction
5. Aborted State
- Transaction is rolled back (cancelled)

Active → Partially Committed → Committed
   ↓
 Failed → Aborted



## What is Recovery Mechanism?

- Recovery mechanism ensures the database remains correct even after failures (crash, power loss, etc.)
- Main Components
1. Log File
- Stores all changes (before & after values)
2. Undo
- Reverts incomplete transactions
3. Redo
- Re-applies committed transactions
4. Checkpoints
Saves DB state for faster recovery

## What is Shadow Copy Scheme?
- A recovery technique where DB keeps a copy (shadow) of original data before making changes
Make a backup → work on copy → if success replace original
- Create Shadow -> Copy Before transaction starts: Original DB → copied to Shadow Copy 
                -> Perform Changes on New Copy
                -> If Transaction Fails 
                    - Discard new copy
                    - Use original data   
                    - Atomicity achieved
                -> If Transaction Succeeds
                    - Replace original with new copy
                    - Durability achieved


## What is Log-Based Recovery?
- Log-based recovery uses a log file to store all database changes so the system can recover after a failure.
- DB keeps a history (log) → uses it to fix data after crash
- logs like = <T1, A, old_value, new_value>
[Types_of_Log-Based_Recovery]
- Undo (Backward Recovery)
    - Used when transaction is not committed
    - What happens: DB uses log to restore old values
    - Ensures Atomicity
- Redo (Forward Recovery)
    - Used when transaction is committed but not saved
    - Ensures Durability

## What is Stable Storage?

- Stable Storage means data is stored safely and is not lost even after failures (crash, power loss).
- Data remains safe permanently
- Data survives system crash
- Used for logs & database storage
- Supports Durability
-After transaction is committed
→ Data is saved in stable storage
→ Even if power goes off → data remains

## What is Deferred Storage (Deferred Update)?
- Deferred Storage means changes are not applied immediately to database
- First save changes in log → apply later after commit
- Transaction starts
- Changes are recorded in log
- Before Commit
- Database is not updated yet
- After Commit ✔
- Changes are applied to database

## Deferred vs Immediate Update
Feature	Deferred Update	Immediate Update
When DB updated	After commit	Before commit
Undo needed	❌ No	✔ Yes
Redo needed	✔ Yes	✔ Yes


## What is Concurrency?

- Concurrency means multiple transactions executing at the same time in a database.
- Many users accessing and updating data simultaneously

## Why Concurrency is Needed?
✔ Improves performance
✔ Faster execution
✔ Supports multiple users

## What are Concurrency Anomalies and types?

- Concurrency anomalies are errors that occur when multiple transactions run at the same time without proper control.
- Lost Update = Two transactions update the same data, and one update gets lost.
- Dirty Read - One transaction reads uncommitted data
- Unrepeatable Read = Same query gives different results

## How to Prevent Them?
- Locking (Shared/Exclusive)
- Isolation Levels
- Serializability

1. Locking
    - Locking means controlling access to data so transactions don’t interfere with each other
        - Shared Lock (Read Lock)
            - Many users can read at the same time
            - No one can write
            - 5 users reading same account balance ✔
            - No one can update it ❌
        - Exclusive Lock (Write Lock)
            - Only one user can write
            - No one else can read or write
            - One user updating balance
            - Others must wait
2. Isolation Levels
    - Read Committed ✔
        - Can read only committed data
3. Serializable = Serial (one-by-one)
    - Serializable is the highest isolation level in DBMS
    - Transactions run one-by-one (like a queue), not at the same time'
    - it solve all the Anamolies Problem 
    but Slow performance and Less concurrency (users must wait)
