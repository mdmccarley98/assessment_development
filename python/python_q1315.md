# Python Features exceptions

## Item ID
1315

## Claim

Claim 3

## Claim Behavior (evidence)

[Source](https://docs.python.org/3/tutorial/errors.html#handling-exceptions). Try/Except and error types

## Content Target
`error-handing`

## Cognitive Model 

Recall

## Item Type
Multiple choice

## Stem

What is the output of the code below?

## Code Snippet (optional)

```python
def sum(a, b):
    try:
        return a + b
    except NameError:
        print("Name not defined")
    except TypeError:
        print("Error in variable type")
    else:
        print("There is another issue")

sum(23, "2")
```

## Answer Key

Error in variable type

## Distractors 
### 1.
25

### 2.
232

### 3.
There is another issue

## Common errors, misconceptions, or irrelevant information (optional)

The function will not run successfully because the input variables are of two different types, which raises a `TypeError`.

## Content Review

- Accuracy: ✅ (it was fine, I made it more difficult)
    - changed the stem to use `sum(23, "2")` instead of `sum(23, "two")`
    - changed distractor 2 "Name not defined" to "232" (the way JavaScript works), #1 is still way PHP works and #2 is the way JavaScript works
- Alignment: ✅

* fixed `<code>` formatting to ` ```python `
