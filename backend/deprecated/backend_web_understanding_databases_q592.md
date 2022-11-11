# backend_web_understanding

## Item ID
q592

## Claim
2

## Claim Behavior (evidence)
NA

## Content Target
databases

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Suppose you need to track the location of items.  Items are located in a particular region, which have unique identifiers. Additionally regions have multiple zones, with identifiers that are unique within a region. Given a database table with columns `item`, `region`, and `zone`, what index(es) would be most efficient for querying which items are in a given region, or given region and zone.

## Code Snippet (optional)


## Answer Key
a composite B-tree index on `(region, zone)`

## Distractors

### 1.
a hash index on `region`

### 2.
a hash index on `zone`

### 3.
a B-tree index on `region` and a B-tree index on `zone`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

