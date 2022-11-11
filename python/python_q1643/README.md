# Python Syntax Docstring

## Item ID
1643

## Claim
1. Understand the core syntax of the language itself.

## Claim Behavior (evidence)

> A docstring is a string literal that occurs as the first statement in a module, function, class, or method definition. Such a docstring becomes the `__doc__` special attribute of that object.
> 
> -- [PEP 257](https://www.python.org/dev/peps/pep-0257/) - python.org

```
$ python
Python 3.8.5 (tags/v3.8.5:580fbb0, Jul 20 2020, 15:57:54) [MSC v.1924 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>> from example import *
>>> help(example)
Help on function example in module example:

example()
    This is an example.
    More description here.

>>> print(example.__doc__)

    This is an example.

    More description here.

>>> print(distractor1.__doc__)
None
```

## Content Target
docstring

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem

Which of the following sets the `docstring`?

## Code Snippet (optional)


## Answer Key
```python
def example():
    """
    This is an example.
    More description here.
    """
    pass
```

## Distractors

### 1.
```python
# This is an example.
# More description here.
def distractor1():
    pass
```

### 2.
```python
@doc("This is an example.\nMore description here.")
def distractor2():
    pass
```

### 3.
```python
def distractor3():
    __doc__ = "This is an example.\nMore description here."
    pass
```


## Common errors, misconceptions, or irrelevant information:
> A docstring is a string literal that occurs as the first statement in a module, function, class, or method definition. Such a docstring becomes the `__doc__` special attribute of that object.
> 
> -- [PEP 257](https://www.python.org/dev/peps/pep-0257/) - python.org

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

