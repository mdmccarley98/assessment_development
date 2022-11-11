# Sparse Array

## Item ID
1609

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
Which answer adds the values of the given sparse array such that `sum` equals 10?

## Code Snippet

```javascript
const sparseArray = [,1,,2,,3,,4]
```

## Answer Key
```javascript
let sum = 0

sparseArray.forEach(val => {
    sum += val
})
```

## Distractors
### 1.
```javascript
let sum = 0

for (let i = 0; i < sparseArray.length; i++) {
    sum += sparseArray[i]
}
```

### 2.
```javascript
let sum = 0

for (const val of sparseArray) {
    sum += val
}
```

### 3.
```javascript
let sum = 0

for (const val in sparseArray) {
    sum += val
}
```

## Common errors, misconceptions, or irrelevant information (optional):

* Array functions like `forEach()`, `map()`, `filter()`, and `reduce()`, sometimes referred to as "internal iterators", do not process "holes" in sparse arrays.
* `for` and `for...of` process holes in sparse arrays.  So those constructs will need a conditional to guard against unset values.
* Using `for...in` is never recommended for arrays. They are intended to be used on objects.  Also, it loops over property names, which includes array the defined array indexes.  So those keys would need to be used to reference the value on the array.  However, if there are any user-defined properties on the array it will process those as well.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

