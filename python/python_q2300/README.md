# Python 

## Item ID
2300

## Claim
6

## Claim Behavior (evidence)

[iter](https://docs.python.org/3/library/functions.html#iter)

## Content Target
iter

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Which of the following examples will repeatedly accept a line of input and terminate the loop if the input is `'quit'`, and otherwise print the input?

## Code Snippet (optional)



## Answer Key

```python
for command in iter(lambda: input('echo: '), 'quit'):
    print(command)
```

## Distractors

### 1.

```python
for command in input('echo: ', iter=True, end='quit'):
    print(command)
```

### 2.
```python
for command in iter(input('echo: '), 'quit'):
    print(command)
```

### 3.

```python
for command in iter(input('echo: ')) != 'quit':
    print(command)
```

## Common errors, misconceptions, or irrelevant information:

`iter` has two forms. The two argument version takes a callable and a sentinel, and raises `StopIteration` when the sentinel is returned from the callable.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

