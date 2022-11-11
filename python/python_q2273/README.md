# Python 

## Item ID
2273

## Claim
6

## Claim Behavior (evidence)

[-O flag](https://github.com/python/cpython/blob/b9cdd0fb9c463c2503a4d854bb6529a9db58fe1b/Python/initconfig.c#L53)

## Content Target
Debugging

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

In CPython, which optimizations are enabled by invoking a script with `python -O script.py` (or equivalently `PYTHONOPTIMIZE=1 python script.py`)?

## Code Snippet (optional)
```python


```

## Answer Key

Assert statements are removed

## Distractors

### 1.

Unreachable code within an `while False` block is removed

### 2.

Constant expressions like `a = 2 + 2` are simplified

### 3.

Docstrings are removed


## Common errors, misconceptions, or irrelevant information:

A common misconception is that Python is purely interpreted - in fact during the bytecode compilation process, a peephole optimizer does a number of passes even at the default optimization level 0. 

D1 and D2 are always performed. D3 is only done at optimization level 2.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

