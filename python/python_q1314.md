# Python Features kwargs

## Item ID
1314

## Claim

Claim 3

## Claim Behavior (evidence)

[Source](https://book.pythontips.com/en/latest/args_and_kwargs.html). Understanding how to use `*args` and `**kwargs` in functions. 

## Content Target
`function args`

## Cognitive Model 

Use

## Item Type
Multiple choice

## Stem

Which of the following options converts the function below from a function that takes `3` inputs into one that can take any number of inputs using `*args` and/or `**kwargs`?

## Code Snippet (optional)

```python
    def mean(x, y, z):
        return (x + y + z) / 3
```

## Answer Key

```python
    def mean(*args):
        sum = 0
        count = 0
        for num in args:
            sum += num
            count += 1
        return sum / count
```

## Distractors 
### 1.
```python
    def mean(*args):
        sum = 0
        count = 0
        for num in *args:
            sum += num
            count += 1
        return sum / count
```

### 2.
```python
    def mean(**kwargs):
        sum = 0
        count = 0
        for num in kwargs:
            sum += num
            count += 1
        return sum / count
```

### 3.
```python
    def mean(**kwargs):
        sum = 0
        count = 0
        for num in **kwargs:
            sum += num
            count += 1
        return sum / count
```

## Common errors, misconceptions, or irrelevant information (optional)

`*args` is used when the arguments are unnamed:
```python
def f(*args):
    for arg in args:
        print(arg)

>>> f(1, 2, 3)
1
2
3
```

While `**kwargs` is used when the arguments are named arguments:
```python
def f(**kwargs):
    for (name, value) in kwargs.items():
        print(name + " = " + str(value))

>>> f(x=1, y=2, z=3)
x = 1
y = 2
z = 3
```
## Content Review

- Accuracy: ✅
    * The misconceptions section wasn't very clear, so I added examples to the "misconceptions" section, and changed "input" to "argument".
- Alignment: ✅

* fixed `<code>` formatting to ` ```python `
