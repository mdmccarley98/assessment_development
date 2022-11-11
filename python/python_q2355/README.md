# Python 

## Item ID
2355

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

Which value of `pattern` causes the following code to match all lines containing zero characters (empty lines) in the multi-line string `my_string`?


## Code Snippet (optional)

```python
re.findall(pattern, my_string, re.MULTILINE)
```

## Answer Key

`pattern = r"^$"`

## Distractors

### 1.

`pattern = r".{0}"`

### 2.

`pattern = r""`

### 3.

`pattern = r"\A\Z"`

## Common errors, misconceptions, or irrelevant information:

In multiline mode, `^` matches the start of the string and each line. '\A' only matches the start of the string.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

