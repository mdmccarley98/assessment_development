# Python Features repr

## Item ID
2171

## Claim
3

## Claim Behavior (evidence)

[repr](https://docs.python.org/3/library/functions.html#repr)

## Content Target
repr

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Which of the following describes the behavior of the `repr` built-in function?

## Code Snippet (optional)


## Answer Key
Calling `str` on a list or set calls `repr` on each item

## Distractors

### 1.

`repr(obj)` will call `obj.__str__` if `obj.__repr__` does not exist.

### 2.
For any object, `print(obj)` is equivalent to `print(repr(obj))`

### 3.
For any object, `eval(repr(obj)) == obj`

## Common errors, misconceptions, or irrelevant information:

D1: str will fall back to `__repr__` , but not vice versa
D2: print calls `str`, not `repr`
D3: this is desirable but not guaranteed

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

