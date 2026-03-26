# Start

## what is Data?

- A collection Raw facts and figures stored in a database
- unprocessed information stored in tables

## Types of Data?

- [Quantitative]: Numerical data (numbers)
  - Discrete Data (Countable) // Number of students = 50
  - Continuous Data (Measurable) // Weight = 65.8 kg
- [Qualitative] : Non-numerical data (descriptive)
  - Describes quality or category //  Name = Gourav , Color = Red , Gender = Male
    - Nominal Data : No order // Red , blue , green
    - Ordinal Data : order Data // 1st, 2nd, 3rd
  
## what is information?

- Processed Organized and structured Data called information // Information = organized + processed data
  - 25, Gourav, 101 // Data
  - Student ID: 101  // Information
    Name: Gourav  
    Age: 2
-[Why_We_need_Information]
- Decision Making
- Problem Solving(Helps find solutions)
- Planning & Strategy
- We need information to make decisions, understand data, and take actions

## What is Database?

- An organized collection of data stored in a structured way so it can be easily accessed, managed, and updated
  - Store large amount of data
    Easy to search and retrieve
    Update data easily
    Maintain accuracy

## What is DBMS?

- DBMS : Database Management System it is a tool to handle databases
-[Popular_DBMS]: MySQL,Oracle,PostgreSQL,MongoDB

## What is File System

- What is File System. Stores data in files and folders
- .txt, .json, .csv files and Stored on your computer.

## Difference between file system vs DBMS?

| Feature | File System | DBMS |
|---------|-------------|------|
| Data Storage | Files | Tables |
| Structure | Unstructured | Structured |
| Data Retrieval | Slow ❌ | Fast ✅ |
| Redundancy | High ❌ | Low ✅ |
| Security | Low ❌ | High ✅ |
| Data Consistency | Difficult ❌ | Easy ✅ |
| Query Language | No | SQL ✔ |
| Multi-user Access | Limited ❌ | Supported ✅ |

- DBMS = middle layer that connects user and database and manages all operations
- User / Application
        ↓
      DBMS
        ↓
     Database

## What is DBMS architecture?

-  The main purpose of DBMS is to Provide users with an abstract view and hide the Compexities 
-  It is the way data is stored, managed, and accessed in a database system.
- [External_Level] (View Level)
- What users see = Different users see different views of data
- Hides unnecessary details
- Example = Student sees → marks
          Admin sees → full details
- [Conceptual_Level] (Logical Level)
- What data are Stored in DB and What relationships among them 
- Eample = Table: Students (id, name, marks)
- [Internal_Level] (Physical Level)
- How data is actually stored
- Storage format
- Indexing

User → External View → Conceptual Schema → Internal Storage → Database  
 
## What is Schema?
- Schema = Structure / Design of the Database
- It defines how data is organized
Includes:
  Tables
  Columns
  Data types
  Relationships