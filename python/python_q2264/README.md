# Python Containers Method Resolution Order

## Item ID
2264

## Claim
2. Be able to manipulate the language’s container objects in whatever form they take.

## Claim Behavior (evidence)

[Multiple Inheritance](https://docs.python.org/3/tutorial/classes.html#multiple-inheritance)

[Method Resolution Order](https://www.python.org/download/releases/2.3/mro/)

## Content Target
MRO

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

In the following inheritance hierarchy, what is the method resolution order (MRO) for the class `Derived`?

## Code Snippet (optional)

```python
class Root: pass
class Second(Root): pass
class BaseA(Root): pass
class BaseB(Second): pass
class Derived(BaseA, BaseB): pass
```    


## Answer Key

`['Derived', 'BaseA', 'BaseB', 'Second', 'Root', 'object']`

## Distractors

### 1.

`['Derived', 'BaseA', 'BaseB', 'Root', 'Second', 'object']`

### 2.

`['Derived', 'BaseA', 'Root', 'BaseB', 'Second', 'object']`


### 3.

`['Derived', 'BaseA', 'BaseB', 'Second', 'Root']`

## Common errors, misconceptions, or irrelevant information:



# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

