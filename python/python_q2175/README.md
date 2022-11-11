# Python Features membership

## Item ID
2175

## Claim
3

## Claim Behavior (evidence)

[Membership Test Operations](https://docs.python.org/3/reference/expressions.html#membership-test-operations)

## Content Target
Membership Test Operations

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

For a user-defined container class, consider the following three ways that the test `x in my_container` can return True:

- The container defines `__iter__` and some element of the iterable `is x` or `== x`.
- The container defines `__contains__` and `my_container.__contains__(x)` returns True
- The container defines `__getitem__` and for some integer `i`, `my_container.__getitem__(i) is x` or `== x`.

If more than one of these special methods have been defined, which one takes precedence?

## Code Snippet (optional)

## Answer Key
`__contains__` 

## Distractors

### 1.

`__iter__` 

### 2.
`__getitem__` 

### 3.
It is a `RuntimeError` to define more than one of these methods

## Common errors, misconceptions, or irrelevant information:



# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

