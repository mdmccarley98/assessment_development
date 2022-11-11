# architecture_skill

## Item ID
q567

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
Suppose you work for a search engine company, and you would like to figure out the top 50 *terms* most frequently queried yesterday. You have query logs in plain text that are stored on thousands of computers. Which of the following approach sounds most reasonable to do this?

## Code Snippet (optional)


## Answer Key
This is a good use case for MapReduce. You could write a mapper to process the logs and a reducer to aggregate the results.

## Distractors

### 1.
Relational database is the best choice for finding top N results. You could write a small application to process query logs, write the counter of each term into a relational database, and then use a simple SQL query to find the result.

### 2.
Redis is super fast and has built-in support for incrementing counters. You could write a small application to process the query logs, increment the counter of each term in a Redis instance, and then use a special Redis command to find the top 50 values.

### 3.
Search engines store all the terms user queries in an inverted index. You can directly extract the information from the index itself.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

