# warehousing_etl

## Item ID
1998

## Claim
Claim 2

## Threshold Probabilities
[0.2, 0.4, 0.6, 0.75]

## Claim Behavior (evidence)
- [Batch, Stream, and Microbatch](https://www.upsolver.com/blog/batch-stream-a-cheat-sheet)
- [Spark Structured Streaming](https://spark.apache.org/docs/latest/streaming-programming-guide.html) - Defines microbatch and continuous streaming modules

## Content Target
`Understand the difference between batch and microbatch architectures`

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
What is a key difference between batch and microbatch architectures?

## Code Snippet (Optional)

## Answer Key
Microbatch latency is typically expressed in minutes, whereas batch latency is typically expressed in hours or days

## Distractors
### 1.
Batch architectures process data in set time or data volume intervals whereas microbatch arcitectures process data as soon as it is available

### 2.
Microbatch architectures process entire datasets whereas batch architectures only process change data

### 3.
Microbatch architectures require datasets to be processed in sub-second timeframes, whereas batch architectures are typically scheduled in daily or weekly intervals

## Common errors, misconceptions, or irrelevant information (Optional):
### 1.
Both microbatch and batch architectures are set to run at pre-determined time or data intervals

### 2.
The opposite is (mostly) true -- batch architecture in general processes entire partitions of data, whereas microbatch could update either smaller partitions or individual records

### 3.
Continuous streaming typically has sub-second latency requirements, whereas microbatch architectures typically are expressed in minutes

## Triplebyte Review
- Language Review:
- Bias/Fairness Review:
- Content Review:
