# For loops

## Item ID
1619


## Claim
Claim 1: Candidate can understand the core syntax of the language itself


## Claim Behavior (evidence)
- [Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) - Mozilla

## Content Target
Loops
Iteration

## Cognitive Model
* Recall

## Item Type
Multiple Choice

## Stem
Below is the definition of an array, `myArray`.  Note that `myArray` has a custom property.

```javascript
let myArray = [1, 2]
myArray.customProperty = true
```

Suppose you want to log the values of the array elements to produce the following output:

```
1
2
```

Which answer below has a bug that would cause it to also log the value of `myArray.customProperty`?


## Answer Key
```javascript
for (const index in myArray) {
    const element = myArray[index]
    console.log(element)
}
```

## Distractors
### 1.
```javascript
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index]
    console.log(element)
}
```

### 2.
```javascript
for (const element of myArray) {
    console.log(element)
}
```

### 3.
```javascript
myArray.forEach(element => {
    console.log(element)
})
```

## Common errors, misconceptions, or irrelevant information (optional):

* The `for...in` syntax is not recommended for looping over arrays.  It is meant to be used to loop over the enumerable properties of objects.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

