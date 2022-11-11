# Python Features list comprehension

## Item ID
1310

## Claim
Claim 3

## Claim Behavior (evidence)
[List Comprehensions](https://docs.python.org/3/tutorial/datastructures.html), use of `%` 

## Content Target
`list-comprehension`

## Cognitive Model 
Use

## Item Type
Multiple choice

## Stem

Which of the following will produce a list of values containing the square of every odd number between `1` and `11` (inclusive)?

## Code Snippet (optional)

## Answer Key
```python
squares = [i ** 2 for i in range(1,12) if i % 2 != 0]
```

## Distractors 
### 1.
```python
squares = [i ** 2 for i in range(1,12) if i % 2 == 0]
```

### 2.
```python
squares = [i ** 2 if i % 2 != 0 for i in range(1,12)]
```

### 3.
```python
squares = [i for i ** 2 in range(1,12) if i % 2 != 0]
```

## Common errors, misconceptions, or irrelevant information (optional)
the `for` statement comes before the `if` in a list comprehension

## Content Review

- Accuracy: ✅
- Alignment: ✅
