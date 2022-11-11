# FP: Recognize Compose Operation

## Item ID
2116

## Claim
Claim 5

## Claim Behavior (evidence)
(Function composition)[https://en.wikipedia.org/wiki/Function_composition_(computer_science)] - wikipedia.org

## Content Target
FP

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
The following code implements which of the classic Functional Programming operations?

## Code Snippet (optional)
```javascript
const fp_operation = (...functions) => {
  const [first, ...restOfFuncs] = functions.reverse()
  return (...args) => restOfFuncs.reduce((res, fn) => fn(res), first(...args))
}
```

## Answer Key
Compose

## Distractors
### 1.
Curry

### 2.
Lift

### 3.
Lazy Evaluation

## Common errors, misconceptions, or irrelevant information:
* All of the options are basic FP operations.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
