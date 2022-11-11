# SQL

## Claim

Claim 3 (Subqueries and Filtering): Can filter to relevant rows using IN, EXISTS, WITH statements and extract information using window functions.

## Claim Behavior (evidence)

IN - https://docs.microsoft.com/en-us/sql/t-sql/language-elements/in-transact-sql?view=sql-server-ver15
EXISTS - https://docs.microsoft.com/en-us/sql/t-sql/language-elements/exists-transact-sql?view=sql-server-ver15

## Content Target

`Use of IN and EXIST operators for filtering`

## Cognitive Model

Comprehend

## Item Type

Multiple Choice

## Stem

Which of the following will not return all the persons that have made a sale?

## Code Snippet (Optional)

```

```

## Answer Key

```sql
    SELECT *
    FROM Person
    JOIN Sales ON Person.ID = Sales.PersonID
```

## Distractors

### 1.

```sql
    SELECT *
    FROM Person
    WHERE ID IN (
        SELECT PersonID
        FROM Sales
    )
```

### 2.

```sql
    SELECT *
    FROM Person
    WHERE EXISTS (
        SELECT *
        FROM Sales
        WHERE Sales.PersonID = Person.ID
    )
```

### 3.

All the queries will work

## Common errors, misconceptions, or irrelevant information (Optional):

### 1.

In order for the `JOIN` query to work, it needs a `DISTINCT` keyword to avoid duplicates

## Triplebyte Review

- Language Review:
- Bias/Fairness Review:
- Content Review:

---
