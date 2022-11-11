# Python Containers 2D List Comprehension

## Item ID
1621

## Claim
2. Be able to manipulate the language’s container objects in whatever form they take.

## Claim Behavior (evidence)
> The following list comprehension will transpose rows and columns:
```
>>> [[row[i] for row in matrix] for i in range(4)]
[[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]
```
-- [5.1.4 Nested List Comprehensions](https://docs.python.org/3/tutorial/datastructures.html#nested-list-comprehensions) python 3 tutorial

## Content Target
nested list comprehensions

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
You are writing a function to transpose a matrix.

Choose the list comprehension that transforms the 3x3 matrix:
```python
[
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
]
```

into the following matrix:
```python
[
    [1, 4, 7], 
    [2, 5, 8], 
    [3, 6, 9]
]
```

## Code Snippet (optional)


## Answer Key
```python
[[row[i] for row in matrix] for i in range(row_len)]
```

## Distractors

### 1.
```python
[[row[i] for i in range(row_len)] for row in matrix]
```

### 2.
```python
[row[i] for i in range(row_len) for row in matrix]
```

### 3.
```python
[row[i] for row in matrix for i in range(row_len)]
```

## Common errors, misconceptions, or irrelevant information:

```python
>>> [[row[i] for row in matrix] for i in range(row_len)]
[[1, 4, 7], [2, 5, 8], [3, 6, 9]]

>>> [[row[i] for i in range(row_len)] for row in matrix]
[[1, 2, 3], [4, 5, 6], [7, 8, 9]]

>>> [row[i] for i in range(row_len) for row in matrix]
[1, 4, 7, 2, 5, 8, 3, 6, 9]

>>> [row[i] for row in matrix for i in range(row_len)]
[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

