# Python 

## Item ID
2305

## Claim
2

## Claim Behavior (evidence)

[Dictionary view](https://docs.python.org/3/glossary.html#term-dictionary-view)


## Content Target
dictionary views

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Suppose you have a dictionary `d`, and you execute `items = d.items()`. In Python 3, if you delete a key `k` and its corresponding value `v` from `d`, how does this affect `items`?


## Code Snippet (optional)


## Answer Key

`items` no longer contains `(k, v)`


## Distractors

### 1.

`items` still contains `(k, v)`

### 2.

`items` contains `(None, None)` at the index where `(k, v)` was previously

### 3.

It becomes undefined behavior to use `items` 


## Common errors, misconceptions, or irrelevant information:

In Python 2 `items` would be an independent list. In Python 3 it is a view into `d`.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

