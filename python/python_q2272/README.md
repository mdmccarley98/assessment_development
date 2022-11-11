# Python Containers

## Item ID
2272

## Claim
2. Be able to manipulate the language’s container objects in whatever form they take.

## Claim Behavior (evidence)

[Method Resolution Order](https://www.python.org/download/releases/2.3/mro/)
[super()](https://docs.python.org/3/library/functions.html#super)
[OrderedDict.__setitem__](https://github.com/python/cpython/blob/8c9f847997196aa76500d1ae104cbe7fe2a467ed/Lib/collections/__init__.py#L106)

## Content Target
* multiple inheritance

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

The standard library `collections.OrderedDict` is a `dict` subclass that does not call `super()` in its `__setitem__` method. 

Which of the following class definitions composes the behavior of both the below `PrintingDict` and `OrderedDict`?


## Code Snippet (optional)
```python
from collections import OrderedDict

class PrintingDict(dict):
    def __setitem__(self, k, v):
        print(f'Setting {k} to {v}')
        super().__setitem__(k, v)
```


## Answer Key

```python
class A(PrintingDict, OrderedDict): pass
```

## Distractors

### 1.
```python
class B(OrderedDict, PrintingDict): pass
```

### 2.
```python
class C(dict, PrintingDict, OrderedDict): pass
```

### 3.
```python
class D(PrintingDict, dict, OrderedDict): pass
```


## Common errors, misconceptions, or irrelevant information:

`PrintingDict` has to appear first in order to appear in the method resolution order first. 

`OrderedDict` does not call `super()` so `PrintingDict.__setitem__` will never be called if `OrderedDict` is first.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

