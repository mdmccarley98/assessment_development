# Python 

## Item ID
2280

## Claim
3

## Claim Behavior (evidence)

See included `main.py`

## Content Target
Scoping

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Which of the following functions has the same behavior as `arr.append`?


## Code Snippet (optional)
```python
arr = [...] # a non-empty list
```

## Answer Key

```python
def my_append_d(item):
    arr[len(arr):] = [item]
```

## Distractors

### 1.

```python
def my_append_a(item):
    arr += [item]
```


### 2.

```python
def my_append_b(item): 
    arr[len(arr)] = item
```


### 3.

```python
def my_append_c(item):
    arr[-1] = item
```


## Common errors, misconceptions, or irrelevant information:

A doesn't work because of scoping issues: `arr += [item]` is equivalent to `arr = arr + item` which would be writing to a new local variable.
B is a correct way to append to a Javascript array, but in Python it's not valid to assign past the end of an array.
C just overwrites the last element instead of appending.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

