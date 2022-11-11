# Python Features 

## Item ID
2288

## Claim
4

## Claim Behavior (evidence)

[Python Wiki - Performance Tips](https://wiki.python.org/moin/PythonSpeed/PerformanceTips#Avoiding_dots...)

## Content Target
Modules

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Consider a performance critical function `slow` that calls `math.sin()` millions of times.

Idea A to make the program faster is to write `from math import sin` at the top of the file and replace `math.sin` with `sin`.

Idea B is to write `from math import sin` as the first line of the body of `slow` and replace `math.sin` with `sin`.

How does the speed of ideas A and B compare to `slow`?

## Code Snippet (optional)


## Answer Key

B is faster than A. A is faster than `slow`.

## Distractors

### 1.

B and A are the same. Both are faster than `slow`.

### 2.

B, A, and `slow` are all the same.

### 3.

A is faster than `slow`. B is slower than `slow`.


## Common errors, misconceptions, or irrelevant information:

Module imports are always cached, so the file is always loaded just once. 

The difference in speed comes with the opcodes used for loading the `sin` symbol:

slow uses LOAD_GLOBAL, LOAD_ATTR opcodes.
A only needs a LOAD_GLOBAL.
B can use LOAD_FAST since sin is a local variable.

Representative timings:

slow: 5.7s
B: 4.5s
C: 4.0s


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

