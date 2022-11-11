# Python Syntax Assignment Expressions

## Item ID
2294

## Claim
1. Understand the core syntax of the language itself.

## Claim Behavior (evidence)

[PEP 572](https://www.python.org/dev/peps/pep-0572/)
[Assignment Expressions](https://docs.python.org/3/whatsnew/3.8.html#assignment-expressions)


## Content Target
walrus operator

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Assignment Expressions, informally known as "the walrus operator" were introduced in 2018 with the release of Python 3.8. Which of the following examples contains a syntactically valid assignment expression?


## Code Snippet (optional)



## Answer Key

```
while cmd := input("prompt> ") != "quit":
    print(cmd)
```

## Distractors

### 1.

```
f'{x := 20}'
```

### 2.

```
f(x = y := 0)
```

### 3.

```
if flag and value := f():
    pass
```



## Common errors, misconceptions, or irrelevant information:

Generally speaking, adding parentheses around expression statements is safe and prevents issues from arising.

The answer is syntactically valid, though it binds cmd to the boolean result of the comparison, not the input as the user probably intended. Adding parens would fix this.

D1 has `:=` but this is actually part of the format string.
D2 and D3 are invalid because the assignment expression MUST to be wrapped in parens to be unambiguous.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

