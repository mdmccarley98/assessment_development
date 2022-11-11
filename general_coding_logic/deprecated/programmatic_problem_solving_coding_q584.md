# programmatic_problem_solving

## Item ID
q584

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Fill in the missing code

## Code Snippet (optional)
```javascript
// Get the cumulative sum of a list
// e.g. cumulative_sum([1,2,3,4,5]) => [1,3,6,10,15]
function cumulative_sum(list) {
  let output = [];
  for(let i = 0; i < list.length; i++) {
    if (i == 0) {
      output.push(list[i])
    } else {
      // (Fill in the missing line here)
    }
  }
  return output;
}
```

## Answer Key
`output.push(list[i] + output[i-1])`

## Distractors

### 1.
`output.push(list[i])`

### 2.
`output.push(list[i-1] + output[i])`

### 3.
`output.push(list[i-1])`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

