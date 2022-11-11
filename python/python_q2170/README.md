# Python Features negation

## Item ID
2170

## Claim
3

## Claim Behavior (evidence)

[is-not](https://docs.python.org/3/reference/expressions.html#is-not)


## Content Target
Negation

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Which of the following is true for arbitrary Python objects `x` and `y`?

## Code Snippet (optional)

## Answer Key
`x is not y` implies `not (x is y)`

## Distractors

### 1.

`hash(x) != hash(y)` implies `x != y`

### 2.

`x != y` implies `not (x == y)`

### 3.

`x != y` implies `not (x is y)`


## Common errors, misconceptions, or irrelevant information:

`__hash__`, `__eq__`, and `__ne__` can be overridden in custom classes and any consistency between them is up to the user writing the class. 

However, there is no `__is__` or `__is_not__` method: `x is not y` is just equivalent to `id(x) != id(y)`.




# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

