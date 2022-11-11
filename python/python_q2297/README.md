# Python 

## Item ID
2297

## Claim
3

## Claim Behavior (evidence)

[GIL](https://wiki.python.org/moin/GlobalInterpreterLock)
[GIL](http://www.dabeaz.com/python/GIL.pdf)
[Threading](https://docs.python.org/3/library/threading.html)

## Content Target
GIL

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Which of the following is a benefit of CPython's "global interpreter lock" (GIL)?

## Code Snippet (optional)

## Answer Key

The GIL ensures that reference counting does not encounter race conditions

## Distractors

### 1.

The GIL ensures that threads cannot deadlock

### 2.

The GIL ensures thread priorities are respected

### 3.

The GIL ensures that Ctrl-C immediately interrupts any thread

## Common errors, misconceptions, or irrelevant information:

D1 - Threads can still deadlock
D2 - Python threads don't have priorities
D3 - KeyboardInterrupt won't be raised until potentially quite a long time later (try interrupting `-1 in list(range(1000000000))`)

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

