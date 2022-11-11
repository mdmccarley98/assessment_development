# Python Syntax Keyword Arguments

## Item ID
1297

## Claim
Claim 1

## Claim Behavior (evidence)
* [Python Tutorial 4.7.2 Keyword Arguments](https://docs.python.org/3/tutorial/controlflow.html#keyword-arguments)

## Content Target
`function arguments`

## Cognitive Model 
Recall

## Item Type
Multiple choice

## Stem
Which of the following is NOT valid python?

## Code Snippet (optional)

## Answer Key
```python
def f(x, y, z):
    return x + y + z

f(z=3, y=2, 1)
```

## Distractors 
### 1.
```python
def f(x, y, z):
    return x + y + z

f(1, z=3, y=2)
```

### 2.
```python
def f(x, y, z=3):
    return x + y + z

f(1, 2)
```

### 3.
```python
def f(x, y, z):
    return x + y + z

f(x=1, y=2, z=3)
```

## Common errors, misconceptions, or irrelevant information (optional)
The answer will not run because it contains a positional argument after a keyword argument.
```
>>> f(z=3, y=2, 1)
  File "<stdin>", line 1
SyntaxError: positional argument follows keyword argument
```
It is perfectly valid to use named arguments in a different order than their definition. As long as positional arguments come first, then named arguments can be randomly chosen at will.

## Content Review

- Accuracy: ✅
- Alignment: 👎 it wasn't about lambdas it was about positional args
    * changed the distractors to functions, and made them all about arguments
    * changed the target to function arguments
    * adjusted the behavior link to a specific anchor on the page about function arguments
