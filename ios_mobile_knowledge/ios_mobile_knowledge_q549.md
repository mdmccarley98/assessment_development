# mobile_knowledge

## Item ID
q549

## Claim
5

## Claim Behavior (evidence)
NA

## Content Target
ios

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Suppose you wanted to execute `finalTask()` after `taskOne()` and `taskTwo()` had completed. Which of the following would NOT be suitable for managing this?

## Code Snippet (optional)


## Answer Key
Using a `DispatchGroup` and the `asyncAfter`  API to run `finalTask()` giving `taskOne()` and `taskTwo()` as arguments.

## Distractors

### 1.
Creating a `DispatchGroup` and entering the group before `taskOne()` and `taskTwo()` start, then exiting when they end. Using the `notify` API to see when there is nothing left in the group.

### 2.
Create `Operation`s of all of the tasks and use the `addDependency` API to add the `taskOne()` and `taskTwo()` operations to the `finalTask()` operation.

### 3.
Creating a `DispatchGroup` and entering the group before `taskOne()` and `taskTwo()` start, then exiting when they end. Using the `wait` API to see when there is nothing left in the group.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

