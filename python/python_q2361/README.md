# Python 

## Item ID
2361

## Claim

## Claim Behavior (evidence)

[Einsum](https://numpy.org/doc/stable/reference/generated/numpy.einsum.html)

## Content Target
Numpy Arrays

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

The NumPy function `einsum` can be used to perform many common linear algebra operations. Which of the following computes the outer product of NumPy arrays `X` and `Y`?


## Code Snippet (optional)

## Answer Key

```python
einsum('i, j -> ij', X, Y)
```

## Distractors

### 1.

```python
einsum('i, i -> i', X, Y)
```

### 2.

```python
einsum('i, i -> ', X, Y)
```

### 3.

```python
einsum('i, j -> j i', X, Y)
```


## Common errors, misconceptions, or irrelevant information:

D1 is elementwise multiplication
D2 is the inner or dot product
D3 is the transpose of the outer product


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

