# SQL

## Claim

Claim 2 (Joins and Unions): Can manipulate data from multiple tables at once using left/right/full JOINs and UNION/UNION ALL. Understands the differences among these operations.

## Claim Behavior (evidence)

JOIN - https://docs.microsoft.com/en-us/sql/relational-databases/performance/joins?view=sql-server-ver15

## Content Target

`Use knowledge of self joins to create a query that uses a self join to materialize hierarchical relationships`

## Cognitive Model

Use

## Item Type

Multiple Choice

## Stem

Consider the schema `employee (employee_id, employee_name, employee_supervisor_id)`, where the column `employee_supervisor_id` is a self-referencing key that references the `employee_id` of each employee's supervisor.  Provide a `SELECT` statement for the code snippet to return the name of each employee, aliased as `employee_name` -- and the name of each employee's supervisor, aliased as `supervisor_name`

## Code Snippet (Optional)

```sql
--INSERT SELECT STATEMENT HERE
FROM employee emp1
LEFT JOIN employee emp2
ON emp1.employee_supervisor_id = emp2.employee_id;
```

## Answer Key

```sql
SELECT emp1.employee_name AS employee_name, emp2.employee_name AS supervisor_name
```

## Distractors

### 1.

```sql
SELECT emp1.employee_name AS employee_name, emp2.supervisor_name AS supervisor_name
```

### 2.

```sql
SELECT emp2.employee_name AS employee_name, emp1.employee_name AS supervisor_name
```

### 3.

This join will give an error, as SQL does not allow a table to be joined to itself

## Common errors, misconceptions, or irrelevant information (Optional):

### 1.

This select statement gives an error, as there is no column named `supervisor_name` in the source schema

### 2.

This select statement has a logic bug, it is giving the supervisor's name as `employee_name`, and the employee's name as `supervisor_name`

### 3.

SQL allows self-joins and are leveraged to solve myriad use cases

## Triplebyte Review

- Language Review:
- Bias/Fairness Review:
- Content Review:

---
