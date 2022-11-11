# Python Features generator send

## Item ID
2298

## Claim
3

## Claim Behavior (evidence)

[PEP 0342](https://www.python.org/dev/peps/pep-0342/)

## Content Target
generators

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

In the code below, what is the behavior of `gen` after sending in the integers `1`, `2`, and `3` successively?

## Code Snippet (optional)

```python
def adder():
    total = 0
    while True:
        n = yield total
        total += n

gen = adder()
```


## Answer Key

`gen` raises `TypeError`

## Distractors

### 1.

`gen` yields `0`, `1`, `3`, `6`

### 2.
`gen` yields `1`, `3`, `6`

### 3.

`gen` raises `StopIteration`

## Common errors, misconceptions, or irrelevant information:

A common "gotcha" is that you have to call `next(gen)` or `gen.send(None)` before you can send in values.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

