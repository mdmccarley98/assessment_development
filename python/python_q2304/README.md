# Python 

## Item ID
2304

## Claim
3

## Claim Behavior (evidence)

[setobject.c](https://hg.python.org/cpython/file/b878f206b71f/Objects/setobject.c#l1254)

## Content Target
Data Encoding and Processing

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Suppose `A` and `B` are large dictionaries, with `len(A)` much larger than `len(B)`. 

Which of the following most rapidly computes the set of keys that exist in both dictionaries?


## Code Snippet (optional)

## Answer Key
```python
{k for k in B if k in A}
```

## Distractors

### 1.
```python
{k for k in A if k in B}
```

### 2.

```python
set(B) & set(A)
```

### 3.
```python
set(A) & set(B)
```

## Common errors, misconceptions, or irrelevant information:

Hash lookups are roughly constant in the size of the dictionary, so it's much faster to do `len(B)` lookups than `len(A)` lookups.

D2 and D3 are equal and equivalent algorithmically to the answer, but they have to copy both sets making them almost as bad as D1.

Sample timings on my machine in seconds:

0.15
1.63
1.60
1.60

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

