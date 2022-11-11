# programmatic_problem_solving

## Item ID
q537

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
Consider the following Javascript code. The final output to the console is 0. Why?

## Code Snippet (optional)
```javascript
function incr(num) {
    this.count++;
}

incr.count = 0;

let i;
for (i=0; i<10; i++) {
    if (i > 5) {
        incr(i);
    }
}

console.log(incr.count);
```

## Answer Key
this in incr doesn't have a reference to incr.count.

## Distractors

### 1.
There's a bug in the for-loop.

### 2.
console.log is async and therefore doesn't reflect the most up-to-date value.

### 3.
This is caused by Javascript's hoisting mechanism.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

