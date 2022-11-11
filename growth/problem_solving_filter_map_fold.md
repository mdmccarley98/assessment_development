# Front-end: Understanding Javascript Functional Array Methods

## Item ID
problem_solving_filter_map_fold

## Claim
Claim #2: Be able to manipulate the language’s container objects in whatever form they take.

## Claim Behavior (evidence)

* [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) - MDN
* [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) - MDN
* [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) - MDN

## Content Target
Basic understanding of functional list operations

## Cognitive Model
Use


## Item Type
Multiple Choice

## Stem
After the following Javascript executes, what is the value of `result`?


## Code Snippet (optional)

```
let result = [1, 2, 3, 4, 5]
              .filter(x => x % 2 === 0)
              .map(x => x * 2)
              .reduce((x, y) => x + y)
```

## Answer Key

```
12
```

## Distractors

### 1.
```
18
```

### 2.
```
15
```

### 3.
```
30
```


## Common errors, misconceptions, or irrelevant information (optional):

* Lambda syntax was introduced in Ecmascript 6. 
* The `map` method applies a transformation to every element in an array.
* The `reduce` method aggregates an array into a single value.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)