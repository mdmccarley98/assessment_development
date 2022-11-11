# backend_web_understanding

## Item ID
593

## Claim
2

## Claim Behavior (evidence)
NA

## Content Target
Databases (SQL)

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Suppose there is a large database table mapping tag ids to document ids, with a B-tree index on `tag_id`.  The query to select `doc_ids` which match a given `tag_id` is running slowly, and you suspect the cause is excessive disk seeks.  Which solution would be *most* likely to improve that query's speed?

## Code Snippet (optional)


## Answer Key
replace the index on `tag_id` index with a composite index on `(tag_id, doc_id)`

## Distractors

### 1.
replace the index on `tag_id` with an index on `doc_id`

### 2.
add an index on `doc_id`

### 3.
add a composite index on `(doc_id, tag_id)`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

