# Warehousing / ETL - Extracting Structured Data: JSON Number

## Item ID
2716

## Claim
Claim 1

## Threshold Probabilities:
[0.25, 0.30, 0.50, 0.75]

## Claim Behavior (evidence)

[RFC 8259](https://datatracker.ietf.org/doc/html/rfc8259#section-6)

## Content Target
Extracting Structured Data

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
When parsing JSON, which of the following is a permissible representation of a number according to the official specification (RFC 8259)?

## Code Snippet (Optional)

## Answer Key
`1e400`

## Distractors
### 1.
`Infinity`

### 2.
`NaN`

### 3.
`012`

## Common errors, misconceptions, or irrelevant information (Optional):
Even though 1e400 exceeds the range of a 64-bit floating-point number, it is acceptable under the spec. 

### 1.
"Numeric values that cannot be represented in the grammar below (such as Infinity and NaN) are not permitted."

### 2.
"Numeric values that cannot be represented in the grammar below (such as Infinity and NaN) are not permitted."

### 3.
Leading zeros are not allowed (this prevents confusion with octal numbers)

## Triplebyte Review
- Language Review:
- Bias/Fairness Review:
- Content Review:
