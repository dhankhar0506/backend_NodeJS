# SQL Guide

## What is SQL?
- **SQL** (Structured Query Language) is used to manage and interact with relational databases
- SQL = Language to talk to database
- SQL uses CRUD operations to communicate with DB
- SQL is not a DB, it is a query language

## Difference between SQL and MySQL
- **SQL**: Structured Query language used to perform CRUD operations in Relational Databases
- **MySQL**: RDBMS used to store, manage and administrate databases using SQL

## SQL Data Types

| Type | Example | Use |
|------|---------|-----|
| Numeric | INT, FLOAT | Numbers |
| String | VARCHAR, TEXT | Text |
| Date/Time | DATE, TIME | Date |
| Boolean | TRUE/FALSE | Logic |
| Binary | BLOB | Files |

## SQL Commands Overview

### DDL (Data Definition Language)
Used to create and modify database structure
- `CREATE`
- `ALTER`
- `DROP`
- `TRUNCATE`

### DML (Data Manipulation Language)
- `INSERT`
- `UPDATE`
- `DELETE`

### DQL (Data Query Language)
- `SELECT`

### TCL (Transaction Control Language)
Used to manage transactions
- `COMMIT`
- `ROLLBACK`
- `SAVEPOINT`

### DCL (Data Control Language)
Used to control access/permissions
- `GRANT`
- `REVOKE`

## Basic Commands

```sql
USE db-name;
CREATE DATABASE IF NOT EXISTS db-name;

-- Create Table
CREATE TABLE Student (
    id INT,
    name VARCHAR(50),
    age INT
);

-- Insert Data
INSERT INTO Student VALUES (1, 'Rahul', 20);

-- Read Data
SELECT * FROM Student;
SELECT * FROM Student WHERE age > 18;

-- Update Data
UPDATE Student SET age = 21 WHERE id = 1;

-- Delete Data
DELETE FROM Student WHERE id = 1;

-- Delete Table
DROP TABLE Student;

-- Modify Table
ALTER TABLE Student ADD email VARCHAR(100);

-- Clear Table (keeps structure)
TRUNCATE TABLE Student;
```

## Data Retrieval Language (DRL) & Commands

```sql
-- Get all records
SELECT * FROM Student;

-- Select specific columns
SELECT name, age FROM Student;

-- WHERE clause
SELECT * FROM Student WHERE age > 20;

-- BETWEEN
SELECT * FROM customer WHERE age BETWEEN 0 AND 100;

-- AND / OR / NOT
SELECT * FROM Customers WHERE Country = 'Spain' AND CustomerName LIKE 'G%';
SELECT * FROM Customers WHERE condition1 OR condition2 OR condition3;
SELECT * FROM Customers WHERE NOT condition;

-- IS NULL / IS NOT NULL
SELECT name, email FROM users WHERE email IS NULL;
SELECT name, phone_number FROM users WHERE phone_number IS NOT NULL;

-- LIKE pattern matching
SELECT * FROM products WHERE description LIKE '%apple%';
SELECT * FROM employees WHERE first_name LIKE '_a%';  -- Second letter is 'a'
SELECT * FROM employees WHERE code LIKE 'A___';       -- Starts with A, 4 chars

-- IN operator
SELECT * FROM customer WHERE NAME IN ('RAHUL','MOHIT');

-- ORDER BY (Sorting)
SELECT * FROM Student ORDER BY age DESC;

-- DISTINCT (Unique values)
SELECT DISTINCT name FROM Student;

-- LIMIT (Top records)
SELECT * FROM Student LIMIT 5;
```

## Aggregate Functions ⭐

```sql
SELECT COUNT(*) FROM Student;
SELECT SUM(salary) FROM Employee;
SELECT AVG(age) FROM Student;
SELECT MAX(salary) FROM Employee;
SELECT MIN(salary) FROM Employee;
```

## GROUP BY & HAVING

```sql
SELECT dept, COUNT(*) FROM Employee GROUP BY dept;

SELECT dept, COUNT(*) FROM Employee 
GROUP BY dept 
HAVING COUNT(*) > 2;
```

**HAVING vs GROUP BY**:
- `WHERE`: Before GROUP BY
- `HAVING`: After GROUP BY (works with aggregate functions)

## Primary Key and Foreign Key

### Primary Key
- Uniquely identifies each row in a table
- Cannot be NULL
- Must be unique
- Only one per table

```sql
CREATE TABLE Student (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);
```

### Foreign Key
- Links one table to another
- Can have duplicate values
- Can be NULL
- Must refer to Primary Key of another table

```sql
CREATE TABLE Course (
    course_id INT,
    student_id INT,
    FOREIGN KEY (student_id) REFERENCES Student(id)
);
```

## Constraints

### UNIQUE Constraint
Ensures all values in a column are unique
```sql
CREATE TABLE Student (
    id INT,
    email VARCHAR(100) UNIQUE
);
```

### CHECK Constraint
Ensures values satisfy a condition
```sql
CREATE TABLE Student (
    age INT CHECK (age >= 18)
);
```

### DEFAULT Constraint
Assigns a default value if no value is provided
```sql
CREATE TABLE Student (
    name VARCHAR(50),
    country VARCHAR(50) DEFAULT 'India'
);
```

## ALTER Operations

```sql
-- Add Column
ALTER TABLE Student ADD age INT;

-- Drop Column
ALTER TABLE Student DROP COLUMN age;

-- Modify Column
ALTER TABLE Student MODIFY name VARCHAR(100);

-- Rename Column
ALTER TABLE Student RENAME COLUMN name TO full_name;

-- Rename Table
ALTER TABLE Student RENAME TO Students;
```

## JOIN Operations ⭐

JOIN is used to combine data from two or more tables based on a common column.

### INNER JOIN
Returns matching data only
```sql
SELECT e.name, d.dept
FROM Employee e
INNER JOIN Department d ON e.id = d.emp_id;
```

### LEFT JOIN
All data from left table + matching data from right
```sql
SELECT e.name, d.dept
FROM Employee e
LEFT JOIN Department d ON e.id = d.emp_id;
```

### RIGHT JOIN
All data from right table + matching data from left
```sql
SELECT e.name, d.dept
FROM Employee e
RIGHT JOIN Department d ON e.id = d.emp_id;
```

### FULL JOIN
Returns all data from both tables
```sql
SELECT e.name, d.dept
FROM Employee e
FULL JOIN Department d ON e.id = d.emp_id;
```

### CROSS JOIN
Combines all rows
```sql
SELECT e.name, d.dept
FROM Employee e
CROSS JOIN Department d;
```

### SELF JOIN
Joining a table with itself
```sql
SELECT a.name, b.name
FROM Employee a
JOIN Employee b ON a.manager_id = b.id;
```

## Set Operations

Set operations combine results of two or more SELECT queries.

**Rules**:
- Number of columns must be the same
- Data types must be the same
- Order of columns must match

### UNION
Combines results and removes duplicates
```sql
SELECT name FROM Student
UNION
SELECT name FROM Teacher;
```

### UNION ALL
Combines results but keeps duplicates
```sql
SELECT name FROM Student
UNION ALL
SELECT name FROM Teacher;
```

### INTERSECT
Returns common data
```sql
SELECT name FROM Student
INTERSECT
SELECT name FROM Teacher;
```

### EXCEPT (MINUS)
Returns data from first query not in second
```sql
SELECT name FROM Student
EXCEPT
SELECT name FROM Teacher;
```

## Set Operations vs Joins

| Aspect | Set Operations | Joins |
|--------|---|---|
| Purpose | Compare and combine rows from two queries | Merge columns from two tables |
| Types | UNION, INTERSECT, EXCEPT | INNER, LEFT, RIGHT, FULL |
| Requirements | Same number of columns, compatible data types | Common column (foreign key) |
| Result | Single list of rows (no duplicate columns) | Wider table with combined columns |

## Views

A View is a virtual table based on a SQL query.

**Benefits**:
- Simplify complex queries
- Improve security by restricting access
- Provide data abstraction and reusability
- Does not hold data physically

```sql
CREATE VIEW emp_view AS
SELECT name, salary FROM Employee;
```

## Procedures vs Functions

| Feature | Procedure | Function |
|---------|-----------|----------|
| Purpose | Perform tasks | Return a single value |
| Returns | 0 or many values | Only one value |
| Use in SELECT | ❌ No | ✔ Yes |
| Complexity | High | Simple |
| Example | Insert/Update/Delete | Count, Sum |
