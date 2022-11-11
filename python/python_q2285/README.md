# Python Enum Duplicates

## Item ID
2285

## Claim
4

## Claim Behavior (evidence)
[Duplicating enum members and values](https://docs.python.org/3/library/enum.html#duplicating-enum-members-and-values)

## Content Target
enum

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Consider two classes `ColorA` and `ColorB` that inherit from the standard library `enum.Enum`. `ColorA` has two members with the same value such as `RED = 1; GREEN = 1;`. `ColorB` has two members with the same name such as `RED = 1; RED = 2;`.

Which of these raise an exception at class definition time?


## Code Snippet (optional)


## Answer Key

Only ColorB raises an exception

## Distractors

### 1.

Only ColorA raises an exception

### 2.

Both ColorA and ColorB raise an exception

### 3.

Both ColorA and ColorB are defined successfully



## Common errors, misconceptions, or irrelevant information:

Duplicate names are checked for at definition time and raise TypeError. Duplicate values are legal and create aliases.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

