# Ellipses

## Item ID
1606

## Claim
Claim 2: Candidate is able to manipulate the language's container objects in whatever form they take

## Claim Behavior (evidence)
- [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) - Mozilla
- [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) - Mozilla

## Content Target
Spread syntax
Rest parameters

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
What is the output of the following program?

## Code Snippet

```javascript
function myFunction(y1, y2, ...y3) {
    const [x1, ...[result]] = y3

    console.log(result)
}

const myArray = ['rock', 'paper', 'scissors', 'lizard', 'spock']

myFunction(...myArray)
```

## Answer Key
```
lizard
```

## Distractors
### 1.
```
Array(2) ["lizard", "spock"]
```

### 2.
```
undefined
```

### 3.
```
spock
```

## Common errors, misconceptions, or irrelevant information (optional):

* Depending on context, ellipses (`...`) either perform a "spread" or a "rest" operation.
* Objects and Arrays can be deconstructed to bring specific elements into a local scope.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

