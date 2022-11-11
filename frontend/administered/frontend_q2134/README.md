# Reduce Return Type

## Item ID
2134

## Claim
Claim 2: data

## Claim Behavior (evidence)
[Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

## Content Target
FP

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
What is the type of `result`?

## Code Snippet (optional)
```javascript
const tasks = [
    () => Promise.resolve(1),
    () => Promise.resolve(2),
    () => Promise.resolve(3)
]

const result = tasks.reduce((chain, current) => (
    chain.then(current)
), Promise.resolve())
```

## Answer Key
A Promise

## Distractors
### 1.
An Array of Promises

### 2.
A Function

### 3.
An Array of Functions

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
