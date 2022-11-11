# programmatic_problem_solving

## Item ID
1544

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
What does the following code do?

## Code Snippet (optional)
```javascript
function _(func, items) {
  let i = 0
  for (let item of items) {
    if (func(item)) {
      items[i] = item
      i += 1
    }
  }
  items.splice(i)
}
```

## Answer Key
Filter a sequence in-place for items which satisfy a predicate

## Distractors

### 1.
Remove items which satisfy a predicate

### 2.
Partition the items around a pivot value

### 3.
Return sorted items

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

