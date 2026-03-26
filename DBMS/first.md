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

## What is DBA

- **DBA** (Database Administrator) is a person who manages, maintains, and controls a database system.
- **Responsibilities of DBA**
  - 🔒 Security Management
  - 💾 Backup & Recovery
  - ✅ Data Integrity
  - 📊 Monitoring & Maintenance

## Explain Database Application Architecture

- **DBMS Application Architecture** (Simple + Detailed)
- DBMS Application Architecture defines how an application, database, and users interact with each other.

### 1-Tier Architecture (Single Tier)
- Client, server, and DB are on the same machine

### 2-Tier Architecture (Client-Server)
- **What it is:** Two separate machines are involved. The "Client" (your PC) has the UI, and it talks directly to the "Server" (the database machine).
- **Best for:** Small organizations with a limited number of users.

### 3-Tier Architecture (Web-Based)
- There is an Application Server sitting in the middle. Your computer talks to the Middleman, and the Middleman talks to the database.
- `[Client]` ↔ `[Application Server]` ↔ `[Database]`

## What is ER Model?

**ER Model** is a high-level data model used to design a database.

### Entities (Objects)
- A real-world object (person, place, thing)
- Examples: Student, Course
  - Single Student = Entity
  - Group of Students = Entity set

### Attributes (Properties)
Properties of an entity (Id, rollno, course)

#### Types of Attributes
- **Simple Attribute** → Cannot be divided further (e.g., customer account number)
- **Composite Attribute** → Can be divided into subparts (e.g., name → first + middle + last; address → street + city + state + zip)
- **Multivalued Attribute** → Multiple values (e.g., phone numbers) `// double ellipse`
- **Derived Attribute** → Calculated (e.g., age from DOB) `// dotted ellipse`
- **Key Attribute** → Unique identifier (e.g., student_id)

### Relationships (Connections)
Connection between entities

#### Strong Relationship
- Has its own primary key
- Can exist independently
- ✔️ Example: Employee, Student
- `Student ── Enrolls ── Course`

#### Weak Relationship
- Does NOT have full primary key
- Depends on strong entity
- Example: Loan has Payment (Payment only exists when we have a loan)
- `[Strong Entity] ──── [Weak Relationship] ──── [Weak Entity]`

### Degree of Relationship
Degree = Number of entities involved in a relationship

- **Unary Relationship** (Degree = 1): `Employee ── Manages ── Employee`
- **Binary Relationship** (Degree = 2): `Student ── Enrolls ── Course`
- **Ternary Relationship** (Degree = 3): `Supplier ── Supplies ── Product ── Project`

### Relationship Constraints / Mapping Constraint
Number of entities associated with another entity

| Type | Example |
|------|---------|
| **1:1** (One-to-One) | One student → one ID card |
| **1:M** (One-to-Many) | One teacher → many students |
| **M:N** (Many-to-Many) | Many students → many courses |

### Participation Constraint / Minimum Cardinality Constraint

#### Total Participation
- Each entity must have at least one relationship
- Example: `[Customer] ══ Borrow ══ [Loan]`
- Every loan must be linked to a customer
- Shown with **double line** (══)

#### Partial Participation
- Not all entities are involved in the relationship
- Example: Some customers may not have loans
- Shown with **single line** (──)

## What are Constraints?

**Constraints** = Rules that control what data can be stored

Constraints are rules applied on a database to ensure that the data is accurate, valid, and consistent.

### Why Constraints are Used?
- ✅ Maintain data integrity (data is correct and trustworthy)
- ✅ Prevent wrong or invalid data
- ✅ Ensure consistency
- ✅ Improve data reliability

**Examples:**
- Primary Key ensures no duplicate or NULL IDs
- Foreign Key ensures valid relationships
- Age cannot be negative ❌
- Email cannot be empty ❌

### Types of Constraints
- NOT NULL Constraint
- UNIQUE Constraint
- PRIMARY KEY Constraint
- FOREIGN KEY Constraint
- CHECK Constraint

## ER Model Symbols

| Symbol | Meaning |
|--------|---------|
| Rectangle | Entity |
| Double Rectangle | Weak Entity |
| Oval | Attribute |
| Underlined Oval | Primary Key |
| Double Oval | Multivalued Attribute |
| Dashed Oval | Derived Attribute |
| Diamond | Relationship |
| Double Diamond | Weak (Identifying) Relationship |
| Single Line | Partial Participation |
| Double Line | Total Participation |