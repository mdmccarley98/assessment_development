# Python 

## Item ID
2354

## Claim
4

## Claim Behavior (evidence)

[re](https://docs.python.org/3/library/re.html)

[Why can't raw strings end with a backslash?](https://docs.python.org/3/faq/design.html#why-can-t-raw-strings-r-strings-end-with-a-backslash)


## Content Target
regular expressions

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Which value of `pattern` causes the following code to match each single backslash character `\` in the string `my_string`?

## Code Snippet (optional)

```python
re.findall(pattern, my_string)
```

## Answer Key

`pattern = '\\\\'`

## Distractors

### 1.

`pattern = '\\'`

### 2.

`pattern = r'\'`

### 3.

`pattern = R'\\\\'`


## Common errors, misconceptions, or irrelevant information:

D1: pattern consists of a single backslash character, which isn't valid for the regexp.
D2: this is not accepted as valid Python syntax
D3: R makes this a pattern consisting of 4 backslashes, which as a regex matches 2 literal backslashes.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

