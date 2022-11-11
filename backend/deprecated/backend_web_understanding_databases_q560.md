# backend_web_understanding

## Item ID
q560

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
#### cats_a:

| id | name      |
|----|-----------|
| 1  | Maru      |
| 2  | Cole      |
| 3  | Marmalade |
| 4  | Lil Bub   |

#### cats_b:
| id | name      |
|----|-----------|
| 1  | Henri     |
| 2  | Marmalade |
| 3  | Nyan      |
| 4  | Maru      |

Given the above tables *cats_a* and *cats_b*, which of the following queries will produce the result below?

| id | name    | id   | name |
|----|---------|------|------|
| 2  | Cole    | null | null |
| 4  | Lil Bub | null | null |

## Code Snippet (optional)


## Answer Key
SELECT * FROM cats_a LEFT JOIN cats_b ON cats_a.name = cats_b.name WHERE cats_b.id IS null

## Distractors

### 1.
SELECT * FROM cats_a JOIN cats_b ON cats_a.name = cats_b.name WHERE cats_b.id IS null

### 2.
SELECT * FROM cats_a RIGHT OUTER JOIN cats_b ON cats_a.name = cats_b.name WHERE cats_b.id IS null

### 3.
SELECT * FROM cats_a CROSS JOIN cats_b

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

