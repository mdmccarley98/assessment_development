# low_level_systems_understanding

## Item ID
q658

## Claim
5

## Claim Behavior (evidence)
NA

## Content Target
systems

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Consider the below pseudocode implementation of a readers-writer lock using a mutex.  Which is a true statement regarding its concurrency?

## Code Snippet (optional)
```plain
Reader:
    lock r
    if counter == 0: lock w
    counter += 1
    unlock r
    # read
    lock r
    counter -= 1
    if counter == 0: unlock w
    unlock r

Writer:
    lock w
    # write
    unlock w
```

## Answer Key
Writers may starve waiting on successive readers

## Distractors

### 1.
Readers and writers may deadlock attempting to acquire both locks

### 2.
Multiple simultaneous writers are allowed

### 3.
Writers may block readers forever

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

