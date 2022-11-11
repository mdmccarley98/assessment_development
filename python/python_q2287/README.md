# Python 

## Item ID
2287

## Claim
4

## Claim Behavior (evidence)

[JSON](https://docs.python.org/3/library/json.html)

> Numeric values that cannot be represented in the grammar below (such as Infinity and NaN) are not permitted.
-- [RFC 7159](https://datatracker.ietf.org/doc/html/rfc7159.html)


## Content Target
json

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Which value of `obj` below causes invalid JSON (JavaScript Object Notation) to be returned when the standard library `json.dumps(obj)` is called? Valid JSON is defined by RFC 7159.

## Code Snippet (optional)
```python

obj = # fill in the missing expression here
result = json.dumps(obj)
```

## Answer Key

`float('inf')`


## Distractors

### 1.

`12345678901234567890`

### 2.

`-0`

### 3.

`'\\'`


## Common errors, misconceptions, or irrelevant information:

It is a "gotcha" that under the default settings, Python can generate JSON which cannot be parsed by compliant implementations such as Javascript's JSON.parse. The `allow_nan` keyword argument can be set to False to generate compliant JSON but this is not the default.

Distractor 1 will parse by JSON.parse but will lose precision (this is allowed by the spec).

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

