# programmatic_problem_solving

## Item ID
1507

## Claim
2

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
The below code implements the `quickselect` algorithm for finding the kth smallest element in an unordered list.  Fill in the missing line of code.

## Code Snippet (optional)
```javascript
function randValue(array) {
  const index = Math.floor(Math.random() * (array.length - 0) + 0)
  return array[index]
}

function select(values, k) {
  const pivot = randValue(values) // randomly select pivot value
  let low = []
  let high = []

  for (let value of values) {
    if (value < pivot) {
      low.push(value)
    } else if (value > pivot) {
      high.push(value)
    }
  }

  if (k < low.length) {
    return select(low, k)
  }
  // MISSING LINE
  
  if (k < 0) {
    return pivot
  }
  return select(high, k)
}
```

## Answer Key
```javascript
    k += high.length - values.length
```

## Distractors

### 1.
```javascript
    k -= values.length
```

### 2.
```javascript
    k -= low.length
```

### 3.
```javascript
    k = values.length - high.length - low.length
```

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
