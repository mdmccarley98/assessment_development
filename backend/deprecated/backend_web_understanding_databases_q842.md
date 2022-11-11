# backend_web_understanding

## Item ID
q842

## Claim
5

## Claim Behavior (evidence)
NA

## Content Target
databases

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
The following SQL query is being executed repeatedly with increasing values for `offset`, to avoid running out of memory on the client.  What is a likely pitfall of this approach?

## Code Snippet (optional)
```plain
SELECT * FROM items ORDER BY id LIMIT 1000 OFFSET %d;
```

## Answer Key
It will run in `O(n^2)` time (where `n` is the number of rows)

## Distractors

### 1.
It is incompatible with server-side cursors

### 2.
The client will not know when to terminate querying

### 3.
It has an off-by-one error in the logic

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

