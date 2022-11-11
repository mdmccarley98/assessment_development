# backend_web_understanding

## Item ID
q971

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
Given a SQL table of places with a spatial index on a `location` field, which query would efficiently find places within a given `distance` from a point?

## Code Snippet (optional)


## Answer Key
`SELECT id, ST_Distance(location, :point) FROM places WHERE ST_DWithin(location, :point, :distance)`

## Distractors

### 1.
`SELECT id, ST_Distance(location, :point) FROM places WHERE ST_Distance(location, :point) \u003c= :distance`

### 2.
`SELECT * from (SELECT id, ST_Distance(location, :point) as d FROM places) as ds WHERE d \u003c= :distance`

### 3.
`SELECT id, ST_Distance(location, :point) FROM places WHERE ST_Within(location, :point)`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

