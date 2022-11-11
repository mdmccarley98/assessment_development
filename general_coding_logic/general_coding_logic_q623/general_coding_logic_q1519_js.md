# programmatic_problem_solving

## Item ID
1519

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
The following code implements a random sample of items in a single pass.  Fill in the missing line of code.

## Code Snippet (optional)
```javascript
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function sample(items, n) {
  result = []
  items.forEach((item, i) => {
    if (i < n) {
      result.push(item)
    } else {
      let j = randInt(0, i) // random integer, inclusive
      if (j < n) {
        // MISSING LINE
      }
    }
  })
  return result
}
```

## Answer Key
```javascript
        result[j] = item
```

## Distractors

### 1.
```javascript
        result[i] = item
```

### 2.
```javascript
        result.push(item)
```

### 3.
```javascript
        result.splice(j, 1)
```

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

