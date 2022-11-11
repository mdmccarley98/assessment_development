# Python 

## Item ID
2271

## Claim
2

## Claim Behavior (evidence)

[dir](https://docs.python.org/3/library/functions.html#dir)
[vars](https://docs.python.org/3/library/functions.html#vars)

## Content Target
__slots__

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

If `obj` is an instance of a custom class which defines its attributes using `__slots__`, how do those attributes appear in the output of `dir(obj)` and `vars(obj)`?

## Code Snippet (optional)
```python


```

## Answer Key

They appear in `dir`. `vars` raises an exception.


## Distractors

### 1.

They appear in both `dir` and `vars`.


### 2.

They appear in `vars` but are omitted from `dir`.


### 3.

They are omitted from `vars`. `dir` raises an exception.


## Common errors, misconceptions, or irrelevant information:

`vars(obj)` is exactly equivalent to `obj.__dict__` and using slots disables `__dict__`. 

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

