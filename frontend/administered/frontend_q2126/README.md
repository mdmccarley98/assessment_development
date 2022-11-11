# Form Validation with Regex

## Item ID
2126

## Claim
Claim 1: responsive_ui

## Claim Behavior (evidence)
[Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

## Content Target
Forms

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
You are writing a form and want to use the `pattern` attribute to perform client side validation of the following "phone" input.  Valid entries are US phone numbers in nine or ten-digit format, with optional periods (.) or dashes (-) separating the sections.  Below are four valid examples.  Which regular expression accepts these formats, but NOT other formats?

```
1-123-456-7890
123-456-7890
1234567890
123.456.7890
```

## Code Snippet (optional)
```html
<label for="phone">Phone</label>
<input name="phone" type='tel' />
```

## Answer Key
`1?[-\.]?\d{3}[-\.]?\d{3}[-\.]?\d{4}`

## Distractors
### 1.
`1?[-\.]?\w{3}[-\.]?\w{3}[-\.]?\w{4}`

### 2.
`1?(-\.)?\w{3}(-\.)?\w{3}(-\.)?\w{4}`

### 3.
`1?(-\.)?\d{3}(-\.)?\d{3}(-\.)?\d{4}`

## Common errors, misconceptions, or irrelevant information:
* `\d` is for digits.  `\w` matches any "word" characters.  So distractor #1 would also match "dog-dog-wolf".
* Square brackets essentially form custom character classes.  Parentheses are used for "capture groups", usually to use part of the match in a replace operation.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
