# programmatic_problem_solving

## Item ID
q99

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
Select the line of code that completes the function

## Code Snippet (optional)
```javascript
// return the index of the minimum element
// in an array 
function minIndex(array) {
    minIndex = -1;
    minValue = 0;
    for (i = 0; i < array.length; ++i) {
        if (array[i] < minValue || minIndex == -1) {
            minIndex = i;
            // MISSING LINE
        }
    }
    return minIndex;
}
```

## Answer Key
minValue = array[i];

## Distractors

### 1.
return minIndex;

### 2.
return minValue;

### 3.
i = minValue;

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

