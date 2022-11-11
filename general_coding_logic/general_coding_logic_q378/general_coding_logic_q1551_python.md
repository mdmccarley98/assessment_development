# programmatic_problem_solving

## Item ID
1551

## Claim
3

## Claim Behavior (evidence)
```python
def find_first_position(arr, fn):
    pos = False
    for i in range(len(arr)):
        row = arr[i]
        for j in range(len(row)):
            if fn(row[j]):
                pos = (i, j)
                break
    return pos

arr = [[chr(97 + j) for j in range(5)] for i in range(5)]
print(arr)
print(find_first_position(arr, lambda i: i == 'b'))
print(find_first_position(arr, lambda i: i == 'e'))
```
```
>python example.py
[['a', 'b', 'c', 'd', 'e'], 
 ['a', 'b', 'c', 'd', 'e'], 
 ['a', 'b', 'c', 'd', 'e'], 
 ['a', 'b', 'c', 'd', 'e'], 
 ['a', 'b', 'c', 'd', 'e']]
(4, 1)
(4, 4)
```

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What is wrong with the following code?

## Code Snippet (optional)
```python
def find_first_position(arr, fn):
    pos = False
    for i in range(len(arr)):
        row = arr[i]
        for j in range(len(row)):
            if fn(row[j]):
                pos = (i, j)
                break
    return pos
```

## Answer Key
This code will return a position for which `fn` is truthy, but might not return the *first* occurrence.

## Distractors

### 1.
This code only works for square arrays.

### 2.
This code will return the *last* position for which `fn` is truthy.

### 3.
`j` is going to be returned incorrectly. It will always be the length of the row.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
