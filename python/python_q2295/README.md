# Python 

## Item ID
2295

## Claim
3

## Claim Behavior (evidence)

[Boolean Objects](https://docs.python.org/3/c-api/bool.html)

## Content Target
booleans

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Which of the following describes the behavior of the constant `True` in Python?

## Code Snippet (optional)

## Answer Key

`True` is an instance of the class `int`

## Distractors

### 1.

`True` is a reference to the same object as referenced by `1`

### 2.

`True` raises `TypeError` when multiplied by an integer

### 3.

`True` is textually replaced by `1` at compile time


## Common errors, misconceptions, or irrelevant information:

`bool` is a subclass of `int` and `True` is an instance of `bool`, so it is also an instance of `int`. In other words, `isinstance(True, int)` is True.

D1 and D3 are wrong because `True` is a bool and `1` is an int; also their repr() is different.
D2 is wrong because `True` coerces to 1 for integer operations

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

