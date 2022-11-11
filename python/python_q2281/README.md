# Python 

## Item ID
2281

## Claim
3

## Claim Behavior (evidence)

[Python listsort.txt](https://github.com/python/cpython/blob/main/Objects/listsort.txt)

[Timsort](https://en.wikipedia.org/wiki/Timsort)
[Sorting algorithm](https://en.wikipedia.org/wiki/Sorting_algorithm)

## Content Target
Lists

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Given a list of length `n`, which of the following describes the performance of the built-in sorting algorithm in CPython?


## Code Snippet (optional)
```python


```

## Answer Key

The sort completes in `O(n)` time if the list is already reverse sorted

## Distractors

### 1.

The sort has worst case `O(n^2)` behavior

### 2.

The sort uses only a constant amount of additional space 

### 3.

The sort uses "divide and conquer" to distribute work to multiple CPU cores

## Common errors, misconceptions, or irrelevant information:

Timsort efficiently converts descending runs into ascending runs. If the list is completely reverse sorted then it will simply swap elements from each end until the middle is reached.

D1 - `O(n * log(n))` is the worst case behavior, similar to merge sort
D2 - In the worst case (random data) it can use up to N//2 additional pointers.
D3 - Timsort is single threaded

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

