# spark

## Item ID
1994

## Claim

Claim 1: Candidate is able to create, deploy, and use Spark to perform distributed computation

## Claim Behavior (evidence)

https://spark.apache.org/docs/latest/rdd-programming-guide.html#rdd-persistence

## Content Target

`Understand the default storage level behavior of the persist() operation`

## Cognitive Model

Recall

## Item Type

Multiple Choice

## Stem

When using the default storage level for `persist()`, what happens when an RDD does not fit in the cluster's memory?

## Code Snippet (Optional)

```

```

## Answer Key

Some partitions will not be persisted and will be recomputed on the fly when they're needed

## Distractors

### 1.

Some partitions will spill to disk

### 2.

The cluster will autoscale up to have enough memory to fit the entire RDD

### 3.

The Spark application will throw an out-of-memory error and exit

## Common errors, misconceptions, or irrelevant information (Optional):

### 1.

This is the behavior with the `MEMORY_AND_DISK` storage level, not the default level

### 2.

Spark does not send a signal to the cluster to scale up in this case

### 3.

This is not the behavior of the default storage level

## Triplebyte Review

- Language Review:
- Bias/Fairness Review:
- Content Review:

---
