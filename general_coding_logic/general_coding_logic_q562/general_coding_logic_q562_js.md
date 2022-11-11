# programmatic_problem_solving

## Item ID
562

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
What is the value of the variable `names` after the following code runs?

## Code Snippet (optional)
```javascript
function deleteBlankItems(items) {
  for(var i = 0; i < items.length; i++) {
      if(items[i].length == 0) {
          // remove 1 element at index i
          // modifies array in place
          items.splice(i, 1);
      }
  }
}

var names = ['Rachel', '', 'Meghana', '', '', 'Tim'];
deleteBlankItems(names);
```

## Answer Key
`["Rachel", "Meghana", "", "Tim"]`

## Distractors

### 1.
`["Rachel", "", "Meghana", "", "", "Tim"]`

### 2.
`["Rachel", "", "Meghana", "", "Tim"]`

### 3.
`["Rachel", "Meghana", "Tim"]`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

