# Python 

## Item ID
2356

## Claim
4

## Claim Behavior (evidence)

[re](https://docs.python.org/3/library/re.html)


## Content Target
regular expressions

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Suppose `items` is a list of ASCII strings. Which value of `pattern` causes the following code to output all strings that do NOT start with one of the vowels `aeiou`?

## Code Snippet (optional)

```python
for item in items:
    if re.search(pattern, item, re.IGNORECASE):
        print(item)
```

## Answer Key

`pattern = r'^[^aeiou]'`

## Distractors

### 1.

`pattern = r'^[aeiou]'`

### 2.

`pattern = r'^[^(aeiou)]`

### 3.

`pattern = r'^[^a^e^i^o^u]`

## Common errors, misconceptions, or irrelevant information:

D1: caret in front of a character class has no special meaning, so it's just a start of string caret.
D2: inside a character class, parentheses are literal parentheses so this doesn't work.
D3: only the first caret can act as a negation, so future carets are just literal carets.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

