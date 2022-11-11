# SQL

## Claim

Claim 1 (Basics): Can pull simple structured data from a table with SELECT...FROM...WHERE queries, basic operations like sums, averages, DISTINCT, GROUP BY. Can perform basic CRUD operations.

## Claim Behavior (evidence)

IS NULL - https://docs.microsoft.com/en-us/sql/t-sql/queries/is-null-transact-sql?view=sql-server-ver15

## Content Target

`Selecting possible NULL values`

## Cognitive Model

Recall

## Item Type

Multiple Choice

## Stem

Given the following table, which query selects all items that are not expired?

## Code Snippet (Optional)

```
Id	Item			ExpirationDate
1	Canned Soup		NULL
2	Cereal     		"2021-05-10"
3	Milk    		"2021-07-04"
4	Spam    		NULL
5	Rice    		"2026-08-02"
```

## Answer Key

```sql
    SELECT * FROM items WHERE ExpirationDate > NOW() OR ExpirationDate IS NULL;
```

## Distractors

### 1.

```sql
   SELECT * FROM items WHERE ExpirationDate > NOW() OR IFNULL(ExpirationDate, TRUE);
```

### 2.

```sql
    SELECT * FROM Items WHERE ExpirationDate > NOW();
```

### 3.

```sql
    SELECT * FROM Items WHERE ExpirationDate > NOW() OR ExpirationDate = NULL;
```

## Common errors, misconceptions, or irrelevant information (Optional):

### 1.

Improper use of `IFNULL`, even though it's commonly used to check for `NULL`

### 2.

Does not check for `NULL` values

### 3.

Comparing anything to `NULL` evaluates to `UNKNOWN`. To properly compare, use `IS` or `IS NOT`

## Triplebyte Review

- Language Review:
- Bias/Fairness Review:
- Content Review:

---
