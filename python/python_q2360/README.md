# Python 

## Item ID
2360

## Claim

## Claim Behavior (evidence)

[as_strided](https://numpy.org/devdocs/reference/generated/numpy.lib.stride_tricks.as_strided.html)

## Content Target
NumPy Arrays

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Suppose `x` is a NumPy array containing `N` 32-bit floats. Which of the following computes the rolling average (also called the moving average or sliding average) of `x` for a window of length `w`?


## Code Snippet (optional)

```python
from numpy.lib.stride_tricks import as_strided
```

## Answer Key

```python
as_strided(x, (N - w + 1, w), (4, 4)).mean(axis=1)
```

## Distractors

### 1.

```python
as_strided(x, (N - w + 1, w), (1, 1)).mean(axis=1)
```

### 2.

```python
as_strided(x, (N - w + 1, w), (4, 4)).mean(axis=0)
```

### 3.

```python
as_strided(x, (N, w), (4, 4)).mean(axis=-1)
```


## Common errors, misconceptions, or irrelevant information:

D1: Strides are in bytes, so one float32 needs to be 4 bytes
D2: The result must sum out the window - axis=0 is the length dimension
D3: -1 is also correct for the window axis, but the output must be smaller than the input as no padding was specified.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

