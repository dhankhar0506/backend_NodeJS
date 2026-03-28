# What is Normalization?

- Simple Definition = Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity.
- Normalization = Remove duplicate data + organize tables properly

## Why Do We Use Normalization?

- Remove data duplication
- Improve data consistency
- Avoid data anomalies (errors)
- Make database efficient & structured

## What is Function Dependency ?

- it means  attribute determines another attribute
- If you know X, you can find Y
- X → Y (EmpID -> Emp_Name)
- {Key(EmpID)} -> help to determine / find name 
- If you know ID, you can find Name & Age

[Types_Function_Dependency]
- Trivial Functional Dependency
    - When Y is part of X
    - {ID, Name} → Name
- Non-Trivial Functional Dependency
    - When Y is NOT part of X 
    - ID → Name  
-Transitive Dependency
    - X → Y and Y → Z ⇒ X → Z
- Partial Dependency
    - Y depends on part of X


## What are Rules of FD?

- They help us find more relationships between attributes
- Reflexive(Same as Trivial Dependency)
    - If Y is part of X
    - If Y is part of X
- Augmentation
    - X → Y
    - XZ → YZ  
    - ID → Name
    - (ID, Age) → (Name, Age)  
- Transitivity Rule
    - X → Y and Y → Z
    - X → Z

## Why Functional Dependency is Important?

- Used in Normalization
- Helps remove redundancy (correct functional dependencies)
- Improves database design

## What is Redundant Data?
- Redundant data = Duplicate or repeated data in a database
- Same data stored again and again
[Problem]
- Wastes storage
- Causes inconsistency
- Hard to update

## What are Anomalies?
- Anomalies are problems/errors that occur due to redundant data
- Errors in database operations (Insert, Update, Delete)

1. Insertion Anomaly = Cannot insert data properly
2. Update Anomaly = This happens when you change data in one place but forget to change it everywhere else.
3. Deletion Anomaly = This happens when deleting one piece of info accidentally wipes out something else you wanted to keep.

- We use Normalization. We split that one "messy" table into two:
- A Students table.
- A Teachers table.

## Types of Normalization

- 1NF
    - Remove repeating groups & make data atomic
    - No multiple values in one column
    - Phone = 123,456
    - Separate rows
- 2NF
    - Must be in 1NF
    - Remove Partial Dependency
    - All non prime Attributes be Fully Dependent on PK
- 3NF
    - Must be in 2NF
    -  Remove Transitive Dependency
- BNF
    - Must be in 3NF
    - we must not Derive prime Attribute from any non prime attribute