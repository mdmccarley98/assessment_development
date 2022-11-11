# Python Features list comprehension evaluation

## Item ID
2185

## Claim
1

## Claim Behavior (evidence)
[List Comprehensions](https://docs.python.org/3/tutorial/datastructures.html)

## Content Target
`list-comprehension`

## Cognitive Model 
Use

## Item Type
Multiple choice

## Stem

Which of the following is a syntactically valid nested list comprehension?

## Code Snippet (optional)

## Answer Key
```python
[f(x, y) for x in range(5) if f(x, y) > 0 for y in range(5)]
```

## Distractors 
### 1.
```python
[for x in range(5) for y in range(5) f(x, y) if f(x, y) > 0]
```

### 2.
```python
[f(x, y) if f(x, y) > 0 for x in range(5) for y in range(5)]
```

### 3.
```python
[for x in range(5) for y in range(5) if f(x, y) > 0 f(x, y)]
```

## Common errors, misconceptions, or irrelevant information (optional)

D1 - SyntaxError, postfix `if` is not supported in Python
D2 - SyntaxError, `if` can't be the first (outermost) clause
D3 - SyntaxError, f(x,y) has to be at the start, not the end.

The correct answer is syntactically valid (has a runtime UnboundLocalError instead).

## Content Review
