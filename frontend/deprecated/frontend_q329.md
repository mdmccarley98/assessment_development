# frontend

## Item ID
q329

## Claim
Claim 1

## Claim Behavior (evidence)
NA

## Content Target
javascript

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
How will `function_logger` and `fat_arrow_logger` behave differently?

## Code Snippet (optional)
```javascript
var function_logger = function() {
  return {
    log: function() {
      console.log(this.val);
    }
  };
}

var fat_arrow_logger = function() {
  return {
    log: () => {
      console.log(this.val);
    }
  };
}
```

## Answer Key
The `log` function in `fat_arrow_logger` will inherit `this` from its parent scope.

## Distractors

### 1.
Fat arrows are just semantic sugar for `function()`. There is no difference between the two.

### 2.
The `log` function in `function_logger` will inherit `this` from its parent scope.

### 3.
There is no difference here, but fat arrows generally only support one statement in their bodies.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

