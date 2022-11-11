# Python 

## Item ID
2283

## Claim
4

## Claim Behavior (evidence)

[Import](https://docs.python.org/3/library/functions.html#import__)
[builtins](https://docs.python.org/3/library/builtins.html)

## Content Target

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Suppose you want to override the behavior of `import module` to log the name of the module being imported. 

You write a function `my_import` that performs the logging, then delegates to a function `orig_import` to complete the import. 

Which of the following installs `my_import` correctly?

## Code Snippet (optional)

```python
import builtins
import importlib

# A
orig_import = import
import = my_import

# B
orig_import = __import__
__import__ = my_import

# C
orig_import = importlib.__import__
importlib.__import__ = my_import

# D
orig_import = builtins.__import__
builtins.__import__ = my_import
```


## Answer Key
D

## Distractors

### 1.
A


### 2.
B

### 3.
C



## Common errors, misconceptions, or irrelevant information:

Writing '__import__' in the global scope does nothing; what you need to overwrite is the '__import__' builtin. 

In recent Python versions this method is discouraged in favor of the newer import hook system, but this way is less complicated, compatible with more versions, and is still supported.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

