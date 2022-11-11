# GCL: Regex Tests

## Item ID
2815

## Claim
Claim 1

## Claim Behavior (evidence)
> A regular expression is a sequence of characters that forms a search pattern. When you search for data in a text, you can use this search pattern to describe what you are searching for.

> A regular expression can be a single character, or a more complicated pattern.

> Regular expressions can be used to perform all types of text search and text replace operations.

## Target Level 
Level 4

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Consider the statements about the code below:<br><br>

I) Output is<br>
`False False True True`<br>
`True False True False`<br>
II) `fullmatch` with `str2_regex` is matching just numbers less than 300 with no more than 3 digits<br>
III) `fullmatch` with `str_regex` always begins with an uppercase letter<br><br>

Which statements are TRUE?

## Code Snippet (optional)
```python
import re

str_regex ="[A-Z]*[a-zA-Z][0-9]*(=)[0-9][a-z]*[0-9]*"
print('{} {} {} {}'.                                        \
    format(                                                 \
        bool(re.fullmatch(str_regex, "ABCDEFm0=0ABCDEFm0")),\
        bool(re.fullmatch(str_regex, "abedQ0=Q0")),         \
        bool(re.fullmatch(str_regex, "g233230=0")),         \
        bool(re.fullmatch(str_regex, "T1=8aaaaaaaaaaaa"))))

str2_regex = "[12]?[0-9]{1,2}"
print('{} {} {} {}'.                                        \
    format(                                                 \
        bool(re.fullmatch(str2_regex, "267")),              \
        bool(re.fullmatch(str2_regex, "0267")),             \
        bool(re.fullmatch(str2_regex, "66")),               \
        bool(re.fullmatch(str2_regex, "567"))))            
```

## Answer Key
I and II

## Distractors

### 1.
I and III

### 2.
II and III

### 3.
I, II and III


## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - I is TRUE but III is false, `a=1` is a valid match for `str_regex`.
- Distractor 2
    - II is TRUE but III is false again.
- Distractor 3
    - III is false.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

