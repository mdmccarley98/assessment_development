# Python Std Dir

## Item ID
1637

## Claim
4. Be able to use common components of the language’s standard library.


## Claim Behavior (evidence)
> The built-in function dir() is used to find out which names a module defines. It returns a sorted list of strings
> ...
> Without arguments, dir() lists the names you have defined currently
-- [Modules: the dir function](https://docs.python.org/3.8/tutorial/modules.html#the-dir-function) - python 3 tutorial

## Content Target
`dir()`

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem

There is a Cup class defined in the current context as follows:
```python
# example.py
class Cup:
    coffee = False
```

Using the `dir` function, which python expressions return `True`?

## Code Snippet (optional)


## Answer Key

```python
'coffee' in dir(Cup)
'Cup' in dir()
```

## Distractors

### 1.
```python
'coffee' in dir('Cup')
```

### 2.
```python
'example.py' in dir()
```

### 3.
```python
dir in builtins
```


## Common errors, misconceptions, or irrelevant information:

The `dir` function is very useful when running the python interpreter from the command line, so you can see which values are declared in the current context, what is available in a module, or which members are in a class.


> IIRC I named it after the `DIR` command in DOS.
> -- [Guido van Rossum (creator of Python)](https://stackoverflow.com/a/48912069/92584)

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

