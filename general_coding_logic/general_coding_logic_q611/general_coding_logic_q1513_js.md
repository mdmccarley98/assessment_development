# programmatic_problem_solving

## Item ID
1513

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
Given objects with `name` and `date` fields, the task is to sort the objects alphabetically by name, using most recent date as a tie-breaker.  

Using the provided `sortBy()` method, which call(s) to a stable sort method would implement this correctly?


## Code Snippet (optional)
```javascript
function sortBy(array, prop) {
  return array.sort((a, b) => {
    if (a[prop] < b[prop]) return -1
    if (a[prop] > b[prop]) return 1

    return 0
  })
}
```

## Answer Key
```javascript
sortBy(sortBy(objs, 'date').reverse(), 'name')
```

## Distractors

### 1.
```javascript
sortBy(objs, ['name', 'date'])
```

### 2.
```javascript
sortBy(sortBy(objs, 'name'), 'date').reverse()
```

### 3.
```javascript
sortBy(objs, ['date', 'name'])
```

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

