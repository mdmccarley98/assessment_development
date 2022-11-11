# SQL

## Claim

Claim 1 (Basics): Can pull simple structured data from a table with SELECT...FROM...WHERE queries, basic operations like sums, averages, DISTINCT, GROUP BY. Can perform basic CRUD operations.

## Claim Behavior (evidence)

CASE https://docs.microsoft.com/en-us/sql/t-sql/language-elements/case-transact-sql?view=sql-server-ver15

## Content Target

`Use a case statement to solve a mapping problem`

## Cognitive Model

Use

## Item Type

Multiple Choice

## Stem

Suppose you have a source column `color_cd` with numeric id values that represent colors.  In a query result you want to include a column `color_full_name` that represents the human-readable name of the color_cd.  What addition needs to made to the query in the snippet?  The relevant mappings and table values are included in the code snippet SQL comment.

## Code Snippet (Optional)

```sql
/**
product
product_id  color_cd
----------  --------
0123        1
0124        2
0125        3

Relevant mappings for color_cd
1 -> 'RED'
2 -> 'BLUE'
3 -> 'YELLOW'


result
product_id color_full_name
---------- ---------------
0123       RED
0124       BLUE
0125       YELLOW
**/

SELECT
  p.product_id,
  --INSERT CODE HERE
FROM product p
```

## Answer Key

```sql
CASE
  WHEN p.color_cd = 1 THEN 'RED'
  WHEN p.color_cd = 2 THEN 'BLUE'
  WHEN p.color_cd = 3 THEN 'YELLOW'
END AS color_full_name
```

## Distractors

### 1.

```sql
IF
  p.color_cd = 1 THEN 'RED'
  ELSEIF p.color_cd = 2 THEN 'BLUE'
  ELSEIF p.color_cd = 3 THEN 'YELLOW'
END AS color_full_name
```

### 2.

```sql
TRANSLATE([1 => 'RED',2 => 'BLUE',3 =>'YELLOW'], color_cd) AS color_full_name
```

### 3.

There is no way to get the `color_full_name` without joining to a dimensional table with the corresponding mappings

## Common errors, misconceptions, or irrelevant information (Optional):

### 1.

Using IF in a SQL query is not valid SQL syntax

### 2.

This usage of TRANSLATE() is not valid SQL syntax

### 3.

While a dimensional table with the corresponding mappings works, using a `CASE` statement also works here

## Triplebyte Review

- Language Review:
- Bias/Fairness Review:
- Content Review:

---
