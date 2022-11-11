# Python domain `__slots__`

## Item ID
1630

## Claim
6. Be able to complete everyday coding tasks, particularly ones that relate to the language’s core features.


## Claim Behavior (evidence)

```
% python3 example.py
Apple 155772.0
Banana 202556.0
Orange 88964.0
```

> The special attribute `__slots__` allows you to explicitly state which instance attributes you expect your object instances to have, with the expected results:
> 
> 1. faster attribute access.
> 2. space savings in memory.
> 
> The space savings is from
> 
> 1. Storing value references in slots instead of `__dict__`.
> 2. Denying `__dict__` and `__weakref__` creation if parent classes deny them and you declare `__slots__`.
> 
> -- https://stackoverflow.com/a/28059785/92584

## Content Target
`__slots__`

## Cognitive Model
Comprehension

## Item Type
* Multiple Choice
* sorting

## Stem

Using Python 3 and the `bench` function below, you instantiate 1000 instances of the classes `Apple`, `Orange`, and `Banana`.

Rank the classes by memory consumption from least to most memory consumed.


## Code Snippet
```python
import tracemalloc


class Apple:
    nutritious = True
    tasty = True
    fruit = True
    grocery = True
    perishable = True
    farmable = True


class Orange:
    __slots__ = 'nutritious', 'tasty', 'fruit', 'grocery', 'perishable', 'farmable'

    def __init__(self):
        self.nutritious = True
        self.tasty = True
        self.fruit = True
        self.grocery = True
        self.perishable = True
        self.farmable = True


class Banana:
    def __init__(self):
        self.nutritious = True
        self.tasty = True
        self.fruit = True
        self.grocery = True
        self.perishable = True
        self.farmable = True


def bench(class_, instances):
    tracemalloc.start()

    l = [class_() for _ in range(instances)]
    props = 0
    for c in l:
        for _ in dir(c):
            props += 1

    current, _top = tracemalloc.get_traced_memory()

    tracemalloc.stop()
    return current
```

## Answer Key
* Orange
* Apple
* Banana

## Distractors

### 1.
* Apple
* Orange
* Banana

### 2.
* Banana
* Apple
* Orange

### 3.
* Apple
* Banana
* Orange

## Common errors, misconceptions, or irrelevant information:
`__slots__` turns off `__dict__`, which is lazily generated, so for ORMs that inspect an object with `__dict__` or `dir()` then `__slots__` could save a significant amount of memory.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

