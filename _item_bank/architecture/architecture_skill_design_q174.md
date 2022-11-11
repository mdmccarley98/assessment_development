# architecture_skill

## Item ID
q174

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
design

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
You want to store the locations of 20k users as they move around, in an environment where you care about read and write speed a lot but you don’t really mind occasionally losing data. Which of these strategies makes the most sense?

## Code Snippet (optional)


## Answer Key
Use an in-memory datastore like Redis or Memcached.

## Distractors

### 1.
Use Postgres, with an index on the user_id so that it’s fast to insert and remove.

### 2.
Use the filesystem directly: have a file for each user_id, and write to it or read from it to store new locations.

### 3.
Just store the locations in memory, in a Python program which just maintains an unordered list of (user_id, location) tuples.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

