# Python

## Item ID
2286

## Claim
4. Be able to use common components of the language’s standard library.

## Claim Behavior (evidence)
[PEP 442 - Safe Object Finalization](https://www.python.org/dev/peps/pep-0442/)
[Garbage Collection](https://docs.python.org/3/library/gc.html)
[Design of CPython's Garbage Collector](https://docs.python.org/3/library/gc.html)


## Content Target
Garbage Collection

## Cognitive Model
Comprehend


## Item Type
Multiple Choice

## Stem

In CPython, objects are normally freed automatically when they become unreachable. Prior to CPython 3.4, which of the following would be stored in `gc.garbage` instead of being freed?

## Code Snippet (optional)


## Answer Key
Two objects that reference each other and define `__del__` methods

## Distractors

### 1.
A list that has itself as a member

### 2.
Three objects with cyclic references to each other

### 3.
A dictionary that has itself as a value


## Common errors, misconceptions, or irrelevant information:

Prior to PEP 442 (May 2013, CPython 3.4) the objects in the answer would be uncollectible.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

