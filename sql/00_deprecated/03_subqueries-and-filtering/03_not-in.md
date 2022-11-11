# SQL

## Claim

Claim 3 (Subqueries and Filtering): Can filter to relevant rows using IN, EXISTS, WITH statements and extract information using window functions.

## Claim Behavior (evidence)

NOT IN - https://docs.microsoft.com/en-us/sql/t-sql/language-elements/not-transact-sql?view=sql-server-ver15

## Content Target

`target`

## Cognitive Model

text

## Item Type

Multiple Choice

## Stem

The task is to select all of the rangers not currently assigned to a campsite. Given the following schema, what is the result of the query?

## Code Snippet (Optional)

```sql
Ranger
id name
-- -------
1  Jessica
2  Donald
3  Alex
4  Tom

Campsite
id site_name   ranger_id
-- ----------- -----
1  Lakewood    1
2  Raven Ridge 1
3  Dry Creek   NULL
4  High Moon   3

SELECT R.name
FROM Ranger AS R
WHERE R.id NOT IN (SELECT C.ranger_id
  FROM Campsite AS C
);
```

## Answer Key

Donald
Tom

## Distractors

### 1.

Donald

### 2.

Tom

### 3.

Type mismatch in expression error

## Common errors, misconceptions, or irrelevant information (Optional):

### 1.

All rows are filtered out and the query returns an empty set since `IN` compares the values one by one, and comparing to `NULL` evaluates to `UNKNOWN`. Not knowing this, it's tempting to say 2 is returned, or 4 if thinking `UNKNOWN` returns the row, or if comparing the id of type int to `NULL` is a mismatch type comparison.

## Triplebyte Review

- Language Review:
- Bias/Fairness Review:
- Content Review:

---
