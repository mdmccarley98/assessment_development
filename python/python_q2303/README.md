# Python 

## Item ID
2303

## Claim
3

## Claim Behavior (evidence)

[Iterators](https://docs.python.org/3/tutorial/classes.html#iterators)
[PEP 234](https://www.python.org/dev/peps/pep-0234/)

## Content Target
iterables

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem


## Code Snippet (optional)

In Python 3, which `obj` in the following examples is NOT an iterator?

## Answer Key

```python
obj = {i : i for i in range(100)}
```

## Distractors

### 1.

```python
# Assume open() succeeds
obj = open('README.md')
```

### 2.

```python
obj = (i for i in range(100))
```

### 3.

```python
def gen(): yield from range(100)
obj = gen()
```


## Common errors, misconceptions, or irrelevant information:

A dictionary is an iterable but not itself an iterator; calling `iter()` on it returns a `dict_keyiterator` object.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

