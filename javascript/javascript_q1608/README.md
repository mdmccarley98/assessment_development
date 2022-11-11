# Sparse Array

## Item ID
1608


## Claim
Claim 2: Candidate is able to manipulate the language's container objects in whatever form they take

## Claim Behavior (evidence)
- [Sparse and Dense Arrays in JavaScript](https://medium.com/javascript-in-plain-english/sparse-and-dense-arrays-in-javascript-4ba874fc243c) - Medium

## Content Target
Arrays

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
What is the output of the following program?

## Code Snippet

```javascript
const myArray = new Array(2)

myArray[1] = 1
myArray[3] = 3

console.log('Length:', myArray.length)

console.log('Elements:')
for (const element of myArray) {
    console.log('\t', element)
}
```

## Answer Key
```
Length: 4
Elements:
	undefined
	1
	undefined
	3
```

## Distractors
### 1.
```
Length: 2
Elements:
	1
	3
```

### 2.
```
Error: Array out of bounds.
```

### 3.
```
Length: 2
Elements:
	undefined
	1
```

## Common errors, misconceptions, or irrelevant information (optional):

* Array `length` is always going to be the maximum index + 1.
* Whether "holes" are iterated over, and the value of the holes are different depending on which form of iterating or looping is being used.
1. `for` and `for..of` loops process holes, and the holes have the value of `undefined`.
1. `Array.forEach()` will not process holes. See: [Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
1. `Array.entries()` will return an iterator that will have values for holes, but those values will be `null` instead of `undefined`. Note that the best practice in Javascript is to always use strict equals (`===`), which means that `null` and `undefined` are not equal to each other.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

