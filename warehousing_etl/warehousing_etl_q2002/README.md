# warehousing_etl

## Item ID
2002

## Claim
Claim 2

## Threshold Probabilities
[0.3, 0.5, 0.7, 0.8]

## Claim Behavior (evidence)
[Concurrency Control](https://stackoverflow.com/questions/129329/optimistic-vs-pessimistic-locking)

## Content Target
`Understand the difference between optimistic and pessimistic concurrency control`

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
What is a difference between optimistic concurrency control and pessimistic concurrency control (also known as optimistic and pessimistic locking)?

## Code Snippet (Optional)

## Answer Key
Optimistic concurrency control processes a record first and waits until commit to check for a conflict, whereas pessimistic concurrency control locks a record, does the processing, then unlocks the record

## Distractors
### 1.
Optimistic concurrency control has a possibility of deadlock, whereas pessimistic concurrency control has no possibility of deadlock

### 2.
Optimistic concurrency control has no possibility of making a dirty read, whereas pessimistic concurrency control has a possibility of making a dirty read

### 3.
Optimistic concurrency control is rarely used in OLAP applications, whereas pessimistic concurrency control is used in the vast majority of OLAP applications

## Common errors, misconceptions, or irrelevant information (Optional):
### 1.
Pessimistic concurrency control has a possibility of deadlock

### 2.
The point of concurrency control is to eliminate dirty reads -- both strategies should eliminate the possibility of dirty reads

### 3.
OCC is used in many OLAP applications

## Triplebyte Review
- Language Review:
- Bias/Fairness Review:
- Content Review:
