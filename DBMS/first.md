# Start

## What is Data?

- A collection Raw facts and figures stored in a database
- unprocessed information stored in tables

## Types of Data?

- **Quantitative**: Numerical data (numbers)
  - Discrete Data (Countable) // Number of students = 50
  - Continuous Data (Measurable) // Weight = 65.8 kg
- **Qualitative**: Non-numerical data (descriptive)
  - Describes quality or category // Name = Gourav , Color = Red , Gender = Male
    - Nominal Data : No order // Red , blue , green
    - Ordinal Data : order Data // 1st, 2nd, 3rd

## What is Information?

- Processed Organized and structured Data called information // Information = organized + processed data
  - 25, Gourav, 101 // Data
  - Student ID: 101 // Information
    - Name: Gourav
    - Age: 2
- [Why_We_need_Information]
- Decision Making
- Problem Solving (Helps find solutions)
- Planning & Strategy
- We need information to make decisions, understand data, and take actions

## What is Database?

- An organized collection of data stored in a structured way so it can be easily accessed, managed, and updated
  - Store large amount of data
  - Easy to search and retrieve
  - Update data easily
  - Maintain accuracy

## What is DBMS?

- DBMS : Database Management System it is a tool to handle databases
- [Popular_DBMS]: MySQL,Oracle,PostgreSQL,MongoDB

## What is File System

- What is File System. Stores data in files and folders
- .txt, .json, .csv files and Stored on your computer.

## Difference between file system vs DBMS?

| Feature           | File System | DBMS      |
|------------------|-------------|-----------|
| Data Storage     | Files       | Tables    |
| Structure        | Unstructured | Structured |
| Data Retrieval   | Slow ❌     | Fast ✅   |
| Redundancy       | High ❌    | Low ✅    |
| Security         | Low ❌     | High ✅   |
| Data Consistency | Difficult ❌ | Easy ✅   |
| Query Language   | No          | SQL ✔    |
| Multi-user Access | Limited ❌ | Supported ✅ |

- DBMS = middle layer that connects user and database and manages all operations

User / Application  
↓  
DBMS  
↓  
Database

## What is DBMS architecture?

- The main purpose of DBMS is to provide users with an abstract view and hide the complexities
- It is the way data is stored, managed, and accessed in a database system.
- [External_Level] (View Level)
  - What users see = Different users see different views of data
  - Hides unnecessary details
  - Example = Student sees → marks, Admin sees → full details
- [Conceptual_Level] (Logical Level)
  - What data are stored in DB and what relationships among them
  - Example = Table: Students (id, name, marks)
- [Internal_Level] (Physical Level)
  - How data is actually stored
  - Storage format
  - Indexing

User → External View → Conceptual Schema → Internal Storage → Database

## What is Schema?

- Schema = Structure / Design of the Database
- It defines how data is organized
- There are 3 types of Schema in DBMS:
  - External Schema
  - Conceptual Schema
  - Internal Schema
- Includes:
  - Tables
  - Columns
  - Data types
  - Relationships

## What is Instance?

- Instance = Actual Data stored at a particular time

## What are Data Models in DBMS?

- Data models serve as the conceptual framework or "blueprint" that defines how data is structured, stored, and managed
- [Importance] = Data models are essential because they ensure that a database aligns with business requirements
- Eg = Entity--relationShip model (ER model)

## Database Language?

- Types of Database Languages
  1. DDL (Data Definition Language)
     - commands:
       - CREATE → create table/database
       - ALTER → modify table
       - DROP → delete table
       - TRUNCATE → remove all data
  2. DML (Data Manipulation Language)
     - commands:
       - INSERT → add data
       - UPDATE → modify data
       - DELETE → remove data
  3. DCL (Data Control Language)
     - commands:
       - GRANT → give permission
       - REVOKE → remove permission
  4. TCL (Transaction Control Language)
     - Used to manage transactions
     - commands:
       - COMMIT → save changes
       - ROLLBACK → undo changes
       - SAVEPOINT → set checkpoint

## How Application Accessed DB's

- User → Application → Backend → Database → Backend → Application → User
- An application uses an API to communicate with a backend server, which accesses the database using drivers, runs queries, and sends the result back to the application
- [ORM] (Object-Relational Mapping) and [ODM] (Object-Document Mapping) are techniques that bridge the gap between object-oriented code and databases, allowing developers to interact with data using code objects instead of raw SQL or NoSQL queries.

