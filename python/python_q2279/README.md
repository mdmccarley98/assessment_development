# Python 

## Item ID
2279

## Claim
3

## Claim Behavior (evidence)

[Evaluation Order](https://docs.python.org/3/reference/expressions.html#evaluation-order)

[compile.c - peephole optimizer](https://github.com/python/cpython/blob/db693df3e112c5a61f2cbef63eedce3a36520ded/Python/compile.c#L8202)
[ceval.c - implmentation of ROT_TWO, ROT_THREE instructions](https://github.com/python/cpython/blob/main/Python/ceval.c#L1827)

See main.py for disassembly.

## Content Target
Data Encoding and Processing


## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Syntax such as `x, y, z = y, z, x` can be used to swap any number of local variables in a single line. How is this implemented internally in CPython?

## Code Snippet (optional)


## Answer Key

Swapping four or more variables creates a temporary tuple; swapping fewer is specially optimized

## Distractors

### 1.

A temporary copy of each variable prefixed with `__temp_` is stored in the local scope.


### 2.

A temporary tuple is created, then the left side variables are set from right to left


### 3.

A deep copy of the local scope is made, then all the reads come from the copy.


## Common errors, misconceptions, or irrelevant information:

Swaps are a feature not found in many other languages that can seem mysterious at first without understanding the semantics of the language. 


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

