# programmatic_problem_solving

## Item ID
378

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
What is wrong with the following code?

## Code Snippet (optional)
```javascript
function findFirstPosition(arr, fn) {
  let pos = false;
  for(let i = 0; i < arr.length; i++) {
    let row = arr[i];
    for(let j = 0; j < row.length; j++) {
      if (fn(row[j])) {
        pos = [i, j];
        break;
      }
    }
  }
  return pos;
}
```

## Answer Key
This code will return a position for which `fn` is truthy, but might not return the *first* occurrence.

## Distractors

### 1.
This code only works for square arrays.

### 2.
This code will return the *last* position for which `fn` is truthy.

### 3.
`j` is going to be returned incorrectly. It will always be the length of the row.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

