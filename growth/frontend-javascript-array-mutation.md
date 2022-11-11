# Front-end: Understanding Javascript Array Mutation

## Item ID
frontend-javascript-array-mutation

## Claim
Claim #2: Be able to manipulate the language’s container objects in whatever form they take.

## Claim Behavior (evidence)

* [Array.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) - MDN
* [Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) - MDN
* [Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) - MDN
* [Array.prototype.unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) - MDN

## Content Target
Array mutation

## Cognitive Model
Recall


## Item Type
Multiple Choice

## Stem
Which array method does *NOT* mutate `origArray`?


## Code Snippet (optional)

```
let origArray = [1, 2];
```

## Answer Key

```
let result = origArray.concat([3]);
```

## Distractors

### 1.
```
let result = origArray.push(3);
```

### 2.
```
let result = origArray.unshift(3);
```

### 3.
```
let result = origArray.splice(1, 1, 3);
```


## Common errors, misconceptions, or irrelevant information (optional):

* A common source of bugs is to accidentally mutate an underlying array.
* Most of the array manipulation methods in Javascript *do* mutate the original array.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)