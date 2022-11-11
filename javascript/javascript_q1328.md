# lang_javascript_03#

## Item ID
1328

## Claim
Claim 1: Using Core Syntax

## Claim Behavior (evidence)


## Content Target
`Comparison Operators`

## Cognitive Model


## Item Type
Multiple Choice

## Stem
What is a valid way to compare if array a is a deep copy of array b?

## Code Snippet

## Answer Key

```javascript
    JSON.stringify(a) === JSON.stringify(b)
```

## Distractors

### 1.
```javascript
    a == b
```

### 2.

```javascript
    a.reduce((bool, val, i) => bool = bool && val === b[i], true)
```

### 3.
```javascript
    [...a] === [...b]
```

## Common errors, misconceptions, or irrelevant information (optional):

People may confuse shallow copies for deep copies. 

---
