# architecture_skill

## Item ID
159

## Claim
1

## Threshold Probabilities
[.35, .55, .70, .85]

## Claim Behavior (evidence)
NA

## Content Target
Design

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Imagine you're writing a distributed worker system that allows you to schedule jobs for execution at a given time in the future. What might you use to build the part of this system that does the scheduling?

## Code Snippet (optional)


## Answer Key
This sounds like a perfect job for a priority queue data structure (where each item is a job, and the priority is the time when it should be executed). In practice, this can be implemented with a data store with a priority-queue like data type (a redis sorted set, for example).


## Distractors

### 1.
A good design is to use a first-in-first-out queuing service. Each job can include a target execution time. When a worker pulls a job with an execution time in the future, it can simply re-add the job to the back of the queue to be processed at a later time.

### 2.
This sounds like just the task for Cron! Shell scripts are stored on a specific server, and the system can simply schedule a cron job for every task. When the tasks run, they can remove themselves from the crontab.

### 3.
All three of the other methods are reasonable and should be chosen based on the technology stack being used.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

