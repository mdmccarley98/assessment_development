# Python Features Module __init__.py

## Item ID
1634

## Claim
3. Understand distinguishing features of that language as opposed to others.

## Claim Behavior (evidence)
> The `__init__.py` files are required to make Python treat directories containing the file as packages. This prevents directories with a common name, such as string, unintentionally hiding valid modules that occur later on the module search path. In the simplest case, `__init__.py` can just be an empty file, but it can also execute initialization code for the package or set the `__all__` variable, described later.  
> -- [Modules](https://docs.python.org/3.8/tutorial/modules.html#packages) Python.org 3.8 Tutorial

## Content Target
* modules
* packages

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
The following `__init__.py` file is in the subdirectory `animals`.
```python
# animals/__init__.py
def dog():
    return 'spot'

print('animals')

if __name__ == '__main__':
    print('snowball')
```

What is printed when you run the following python?

```python
# example.py
from animals import dog
print(dog())
```

## Code Snippet (optional)


## Answer Key
```
animals
spot
```

## Distractors

### 1.
```
spot
```

### 2.
```
animals
snowball
spot
```

### 3.
```
snowball
spot
```


## Common errors, misconceptions, or irrelevant information:

* Code in `__init__.py` is executed as soon as it is imported, even if you only import a single function from a module.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

