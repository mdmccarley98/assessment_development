# Python containers comparisons

## Item ID
2257

## Claim
2

## Claim Behavior (evidence)

[Value Comparisons](https://docs.python.org/3/reference/expressions.html#value-comparisons)
[Rich Comparison Methods](https://docs.python.org/3/reference/datamodel.html#object.__lt__)

## Content Target
Comparisons

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Consider a class `Base` and a second class `Derived` inheriting from `Base`. Both define the rich comparison methods `__gt__` and `__lt__`. 

Which methods are called in the following code?

## Code Snippet (optional)

```python
b = Base()
d = Derived()

b < d 
d > b
```



## Answer Key

`b < d` calls `d.__gt__`. `d > b` calls `d.__gt__`

## Distractors

### 1.

`b < d` calls `b.__lt__`. `d > b` calls `d.__gt__`

### 2.
`b < d` calls `d.__gt__`. `d > b` calls `b.__lt__`

### 3.
`b < d` calls `b.__lt__`. `d > b` calls `b.__lt__`

## Common errors, misconceptions, or irrelevant information:

Left side has priority, unless the right side is a (non-virtual) subclass.

D1 would be true if the left side always had priority.
D2 would be true if the right side always had priority.
D3 would be true if the base class always had priority.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

