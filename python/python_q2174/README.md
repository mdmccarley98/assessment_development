# Python Features inplace

## Item ID
2174

## Claim
3

## Claim Behavior (evidence)

[Augmented Assignment](https://docs.python.org/3/reference/simple_stmts.html#augmented-assignment-statements)

[iadd](https://docs.python.org/3/reference/datamodel.html?highlight=iadd#object.__iadd__)


## Content Target
Augmented Assignment

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

If `x` and `y` are lists, which of the following statements modify `x` in-place?


## Code Snippet (optional)

```python
# A
x.extend(y)

# B
x.__iadd__(y)

# C
x += y

# D
x = x + y
```

## Answer Key

`A`, `B`, and `C`

## Distractors

### 1.

`A`

### 2.

`A` and `B`

### 3.

`A`, `B`, `C`, and `D`

## Common errors, misconceptions, or irrelevant information:

`D` allocates a new list and makes `x` reference it, then frees the old list referenced by `x`.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

