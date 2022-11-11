# Python Features Enumerate

## Item ID
1633

## Claim
3. Understand distinguishing features of that language as opposed to others.

## Claim Behavior (evidence)
```python
>>> seasons = ['Spring', 'Summer', 'Fall', 'Winter']
>>> list(enumerate(seasons))
[(0, 'Spring'), (1, 'Summer'), (2, 'Fall'), (3, 'Winter')]
```
-- [enumerate()](https://docs.python.org/3/library/functions.html#enumerate) python 3 library

## Content Target
enumerate

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
What does enumerating the string "python" do?

## Code Snippet (optional)
```python
enumerate("python")
```

## Answer Key

It creates an iterator of tuples over every character in the string.
```python
list(enumerate("python")) == 
    [(0, 'p'), (1, 'y'), (2, 't'), (3, 'h'), (4, 'o'), (5, 'n')]
```

## Distractors

### 1.
It creates an iterator over every character in the string.
```python
list(enumerate("python")) == ['p', 'y', 't', 'h', 'o', 'n']
```

### 2.
It creates an iterator over the length of the string.
```python
list(enumerate("python")) == list(range(len("python")))
```

### 3.
It creates an enum class called "python"
```python
e = enumerate("python")
str(type(e)) == "<class 'python'>"
isinstance(e, Enum)
```


## Common errors, misconceptions, or irrelevant information:

`enumerate` is useful for getting the index of a generator item

```python
>>> for k, v in enumerate(x*x for x in range(5)):
...     print(k,v)
... 
0 0
1 1
2 4
3 9
4 16
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
