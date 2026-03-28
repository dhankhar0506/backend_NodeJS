## What is Indexing?

- Indexing is a technique to quickly find data in a database without scanning the entire table.
- **Index** = Shortcut to find data faster

## Why Indexing is Used?

- ✅ Faster searching
- ✅ Improves query performance
- ✅ Reduces time complexity

## Types of Indexing

- **Primary Index**
    - Based on the primary key of a table.
    
- **Secondary Index**
    - Built on non-primary attributes (like name, department, etc.).
    
- **Clustering Index**
    - Used when records are grouped based on a non-key attribute.
    - *Example:* Employees grouped by department ID, so all employees of the same department are stored together.
    
- **Multilevel Index**
    - Indexes built on top of other indexes.
    - Helps when the index itself is too large.

## What is Dense Index?

- **Dense Index** = Index entry for EVERY record
    - `1 → record1`
    - `2 → record2`
    - `3 → record3`

## What is Sparse Index?

- **Sparse Index** = Index entry for SOME records only
- In simple words: Index is not for every row, only for selected ones