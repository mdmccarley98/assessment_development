# Python Syntax Type Annotations

## Item ID
1641

## Claim
1. Understand the core syntax of the language itself.

## Claim Behavior (evidence)

-- [Function Annotations](https://docs.python.org/3/tutorial/controlflow.html#function-annotations) - python.org/3/tutorial

> Use Cases
> ...
> * Providing typing information  
> -- [pep-3107 Function Annotations](https://www.python.org/dev/peps/pep-3107/) - python.org

-- [What are type hints in python 3.5?](https://stackoverflow.com/questions/32557920/what-are-type-hints-in-python-3-5) - stackoverflow

## Content Target
type annotations

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem

You are working on a shopping cart.  How do you add type annotations to the `add_item` function?


## Code Snippet (optional)
```python
class Item:
    """item available for purchase"""
    price = 0


class Cart:
    """cart containing many items"""
    total = 0

    def add_item(self, item):
        self.total += item.price
        return self.total
```



## Answer Key

```python
    def add_item(self, item: Item) -> int:
        ...
```


## Distractors

### 1.

Python is a dynamically typed language, there are no type annotations.

### 2.

```python
    def add_item(self, Item item) int:
        ...
```

### 3.
```python
    @int
    def add_item(self, @Item item):
        ...
```


## Common errors, misconceptions, or irrelevant information:

The `mypy` linter is one linter that will check type hints.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

