# What is Normalization?

- **Simple Definition:** Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity.
- **Normalization =** Remove duplicate data + organize tables properly

## Why Do We Use Normalization?

- Remove data duplication
- Improve data consistency
- Avoid data anomalies (errors)
- Make database efficient & structured

## What is Functional Dependency?

- Means one attribute determines another attribute
- If you know X, you can find Y
- **Notation:** X → Y (EmpID → Emp_Name)
- **Example:** {Key(EmpID)} → helps determine/find name
- If you know ID, you can find Name & Age

### Types of Functional Dependency

- **Trivial Functional Dependency:** When Y is part of X
    - Example: {ID, Name} → Name
- **Non-Trivial Functional Dependency:** When Y is NOT part of X
    - Example: ID → Name
- **Transitive Dependency:** X → Y and Y → Z ⇒ X → Z
- **Partial Dependency:** Y depends on part of X

## What are Rules of Functional Dependency?

These rules help us find more relationships between attributes.

- **Reflexive (Same as Trivial Dependency):** If Y is part of X
- **Augmentation:** X → Y ⇒ XZ → YZ
    - Example: ID → Name; (ID, Age) → (Name, Age)
- **Transitivity Rule:** X → Y and Y → Z ⇒ X → Z

## Why Functional Dependency is Important?

- Used in Normalization
- Helps remove redundancy
- Improves database design

## What is Redundant Data?

**Redundant data** = Duplicate or repeated data stored multiple times in a database

### Problems with Redundant Data

- Wastes storage space
- Causes data inconsistency
- Makes updates difficult

## What are Anomalies?

Anomalies are problems/errors that occur due to redundant data in database operations.

1. **Insertion Anomaly:** Cannot insert data properly
2. **Update Anomaly:** Changing data in one place but forgetting to update it everywhere else
3. **Deletion Anomaly:** Deleting one piece of information accidentally wipes out something else you wanted to keep

**Solution:** Use Normalization to split tables (e.g., Students table + Teachers table)

## Types of Normalization

- **1NF (First Normal Form)**
    - Remove repeating groups & make data atomic
    - No multiple values in a single column
    - Example: Separate "123,456" into separate rows

- **2NF (Second Normal Form)**
    - Must be in 1NF
    - Remove Partial Dependency
    - All non-prime attributes must be fully dependent on Primary Key

- **3NF (Third Normal Form)**
    - Must be in 2NF
    - Remove Transitive Dependency

- **BCNF (Boyce-Codd Normal Form)**
    - Must be in 3NF
    - Prime attributes must not be derived from non-prime attributes
