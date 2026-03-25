# Start

## What is Data?

- A collection of raw facts and figures stored in a database
- Unprocessed information stored in tables

## Types of Data

- **Quantitative**: Numerical data (numbers)
    - Discrete Data (Countable) — Number of students = 50
    - Continuous Data (Measurable) — Weight = 65.8 kg
- **Qualitative**: Non-numerical data (descriptive)
    - Describes quality or category — Name = Gourav, Color = Red, Gender = Male
        - Nominal Data: No order — Red, blue, green
        - Ordinal Data: Ordered data — 1st, 2nd, 3rd

## What is Information?

- Processed, organized, and structured data called information (Information = organized + processed data)
    - Example:
        - Data: `25, Gourav, 101`
        - Information: `Student ID: 101, Name: Gourav, Age: 25`

## Why We Need Information

- Decision Making
- Problem Solving (Helps find solutions)
- Planning & Strategy
- Understanding data and taking actions

## What is Database?

- An organized collection of data stored in a structured way so it can be easily accessed, managed, and updated
    - Store large amounts of data
    - Easy to search and retrieve
    - Update data easily
    - Maintain accuracy

## What is DBMS?

- **DBMS** (Database Management System): A tool to handle databases
- **Popular DBMS**: MySQL, Oracle, PostgreSQL, MongoDB

## What is File System?

- Stores data in files and folders
- Common formats: `.txt`, `.json`, `.csv`
- Stored on your computer

## File System vs DBMS

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

**DBMS Architecture:**
```
User / Application
        ↓
    DBMS (middle layer)
        ↓
    Database
```