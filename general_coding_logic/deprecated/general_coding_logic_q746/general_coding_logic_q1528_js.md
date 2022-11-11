# programmatic_problem_solving

## Item ID
1528

## Claim
3

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
The below function attempts to format an integer, using commas as a thousands separator.  Which test case would fail, indicating a bug?

## Code Snippet (optional)
```javascript
function format(num, sep = ',') {
  let parts = []
  while (num) {
    let mod = num % 1000
    num = Math.floor(num / 1000)

    parts.push(mod.toString().padStart(3, '0'))
  }
  return parts.reverse().join(sep) || '0'
}
```

## Answer Key
`format(1000) === '1,000'`

## Distractors

### 1.
`format(0) === '0'`

### 2.
`format(100) === '100'`

### 3.
`format(100000) === '100,000'`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

