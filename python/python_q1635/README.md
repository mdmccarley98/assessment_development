# Python Features Module __name__

## Item ID
1635

## Claim
3. Understand distinguishing features of that language as opposed to others.

## Claim Behavior (evidence)
> A module is a file containing Python definitions and statements. The file name is the module name with the suffix `.py` appended. Within a module, the module’s name (as a string) is available as the value of the global variable `__name__`.  
> -- [Modules](https://docs.python.org/3.8/tutorial/modules.html) Python.org 3.8 Tutorial

## Content Target
* modules
* packages

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
The following `__init__.py` file is in the subdirectory `utils`.
```python
# utils/__init__.py
def name():
    return __name__
```

What is printed when you run the following python?

```python
# example.py
from utils import name
print(name())
```

## Code Snippet (optional)


## Answer Key
```
utils
```

## Distractors

### 1.
```
__main__
```

### 2.
```
__init__
```

### 3.

```
example
```


## Common errors, misconceptions, or irrelevant information:

* `__name__` is the name of the module, "utils"

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

