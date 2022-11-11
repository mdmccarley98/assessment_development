# SQL

## Claim

Claim 2 (Joins and Unions): Can manipulate data from multiple tables at once using left/right/full JOINs and UNION/UNION ALL. Understands the differences among these operations.

## Claim Behavior (evidence)

LEFT JOIN - https://docs.microsoft.com/en-us/office/client-developer/access/desktop-database-reference/left-join-right-join-operations-microsoft-access-sql

## Content Target

`Performing a LEFT/RIGHT JOIN to account for no matching values`

## Cognitive Model

Recall

## Item Type

Multiple Choice

## Stem

For your music application, you notice there are artists missing when displaying their information. What could be happening?

## Code Snippet (Optional)

```sql
    SELECT
        a.full_name,
        a.added_date,
        a.genre,
        c.image_url,
        COUNT( SELECT *
            FROM likes
            WHERE likes.artist_id = a.id
                AND likes.user_id = {?}
        ) AS likes
    FROM artist a
    JOIN cover c ON c.artist_id = a.id
    ORDER BY a.full_name;
```

## Answer Key

Artists without cover information are not a matching result, a `LEFT JOIN` should be used

## Distractors

### 1.

Rows are missing if the user hasn't liked a song by the artist, a `CASE` statement should be used

### 2.

`RIGHT JOIN` should be used to get all the artists even if their cover information is `NULL`

### 3.

A `FULL OUTER JOIN` should be used to account for `NULL` values in the artist table

## Common errors, misconceptions, or irrelevant information (Optional):

## Triplebyte Review

- Language Review:
- Bias/Fairness Review:
- Content Review:

---
