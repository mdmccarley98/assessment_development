# Python Domain sys.path

## Item ID
1631

## Claim
6. Be able to complete everyday coding tasks, particularly ones that relate to the language’s core features.

## Claim Behavior (evidence)
> There's a general principle that applies when modifying sys.path: never put a package directory directly on sys.path. The reason this is problematic is that every module in that directory is now potentially accessible under two different names: as a top level module (since the package directory is on sys.path) and as a submodule of the package (if the higher level directory containing the package itself is also on sys.path).
> 
> -- [Pep 0395](https://www.python.org/dev/peps/pep-0395/) -- python/dev Nick Coghlan

## Content Target
sys.path

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem

There is a module named `mod` which has a module named `submod`:
```
mod/
    __init__.py
    submod/
        __init__.py
```

```python
# mod/__init__.py
val = 5
```

```python
# mod/submod/__init__.py
subval = 11
```
What are the values of `mod.val` and `mod.submod.subval` after running the code below?

## Code Snippet (optional)
```python
import sys, os

import mod as mod1
mod1.val = 6

import mod.submod as submod1
submod1.subval = 12

sys.path.insert(0, os.path.join('mod'))

import mod as mod2
mod2.val = 7

import submod as submod2
submod2.subval = 13

import mod
```

## Answer Key
* 7
* 12

## Distractors

### 1.
* 6
* 12

### 2.
* 5
* 11

### 3.
* 7
* 13

## Common errors, misconceptions, or irrelevant information:
Adding a module to the sys.path creates a second copy of the module, one named `mod.submod` and the other named `submod`.  Any internal state between the two copies are separate.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

