# programmatic_problem_solving

## Item ID
q528

## Claim
5

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What is the value of g after the following code block runs?

## Code Snippet (optional)
```javascript
function gen(start, range) {
  let x = start;
  let direction = 1;
  return function() {
     x += direction;
     if ( Math.abs(x - start) >= range) direction *= -1;
     return x;
  };
}

let f = gen(4, 5);
f();
f();
f();
f();
f();
let g = f();
```

## Answer Key
8

## Distractors

### 1.
9

### 2.
10

### 3.
An error occurs

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

