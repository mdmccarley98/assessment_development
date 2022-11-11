# SQL

## Claim

Claim 1 (Basics): Can pull simple structured data from a table with SELECT...FROM...WHERE queries, basic operations like sums, averages, DISTINCT, GROUP BY. Can perform basic CRUD operations.

## Claim Behavior (evidence)

DISTINCT - https://docs.microsoft.com/en-us/sql/dmx/select-distinct-from-model-dmx?view=sql-server-ver15

## Content Target

`Use of DISTINCT command`

## Cognitive Model

Use

## Item Type

Multiple Choice

## Stem

Given the table schema `Customer (Id, Name, ReferralType)`, which SQL query returns the total number of different referral types?

## Code Snippet (Optional)

```

```

## Answer Key

```sql
    SELECT COUNT(DISTINCT ReferralType) FROM Customer;
```

## Distractors

### 1.

```sql
    SELECT DISTINCT COUNT(ReferralType) FROM Customer;
```

### 2.

```sql
    SELECT COUNT(ReferralType) FROM Customer GROUP BY ReferralType;
```

### 3.

```sql
    SELECT UNIQUE COUNT(ReferralType) FROM Customer;
```

## Common errors, misconceptions, or irrelevant information (Optional):

### 1.

A common syntax error is to put `DISTINCT` outside of `COUNT`.

### 2.

`UNIQUE` is an old syntax, still used incorrectly in the example.

### 3.

`GROUP BY` can be used to remove duplicates, but not when using an aggregate function like `COUNT`

## Triplebyte Review

- Language Review:
- Bias/Fairness Review:
- Content Review:

---
