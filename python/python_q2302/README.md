# Python Features

## Item ID
2302

## Claim
3

## Claim Behavior (evidence)

[Iterators](https://docs.python.org/3/tutorial/classes.html#iterators)
[Iterator Types](https://docs.python.org/3/library/stdtypes.html#iterator-types)

## Content Target
iterables

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Which of the following conditions is strictly necessary for the loop below to function?

## Code Snippet (optional)

```python
for x in iterable:
    print(x)
```


## Answer Key

`hasattr(iter(iterable), '__next__')`

## Distractors

### 1.

`hasattr(iter(iterable), '__iter__')`

### 2.

`hasattr(iterable, '__next__')`

### 3.

`hasattr(iterable, '__iter__')`


## Common errors, misconceptions, or irrelevant information:

The for loop calls `iter(iterable)` to obtain an iterator, and then calls `next` on the iterator.

D1: Normally the iterator does have an `__iter__` that returns self, but this is only needed for `for x in iter(iterable)` support
D2: It's the iterator that must have `__next__`, not the iterable
D3: iterable can EITHER have `__iter__` or `__getitem__`

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

