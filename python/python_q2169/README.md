# Python domain `__slots__`

## Item ID
2169

## Claim
6


## Claim Behavior (evidence)

> Without a __dict__ variable, instances cannot be assigned new variables not listed in the __slots__ definition. Attempts to assign to an unlisted variable name raises AttributeError. If dynamic assignment of new variables is desired, then add '__dict__' to the sequence of strings in the __slots__ declaration.

-- [Notes on using __slots__](https://docs.python.org/3/reference/datamodel.html#notes-on-using-slots)

## Content Target
`__slots__`

## Cognitive Model
Comprehension

## Item Type
* Multiple Choice

## Stem

Consider a class `Normal` with a single instance variable `x`, and a second class `Slots` that has an instance variable `x` and a class variable `__slots__ = ['x']`.

For each of these two classes, what happens if you create an object of that class `obj` and then execute `obj.y = 1`?

## Code Snippet

## Answer Key

Only the `Slots` instance raises `AttributeError`

## Distractors

### 1.
Both `Normal` and `Slots` instances raise `AttributeError`

### 2.
Only the `Normal` instance raises `AttributeError`

### 3.

The assignment succeeds for both instances


## Common errors, misconceptions, or irrelevant information:
`__slots__` turns off `__dict__`, so no more members can be added to the instance.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
