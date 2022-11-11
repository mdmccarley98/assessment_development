# Front-end: Nested Promise Chaining

## Item ID
2135

## Claim
Claim 2

## Claim Behavior (evidence)
[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Content Target
Promises

## Cognitive Model
Comprehend

## Item Type
Multiple Choice 

## Stem
The function, `childFunction`, returns a Promise that will be rejected.  Define the `logRejection()` function such that `Log rejection` is logged before `Do retry`.

## Code Snippet (optional)
```javascript
function childFunction() {
    let result = new Promise((resolve, reject) => {
        setTimeout(reject, 5)
    })

    return logRejection(result)
}

function parentFunction() {
    childFunction()
        .then(() => { console.log('Success!') })
        .catch(() => { console.log('Do retry') })
}

parentFunction()
```

## Answer Key
```javascript
function logRejection(result) {
    result.catch(() => console.log('Log rejection'))

    return result
}
```

## Distractors
### 1.
```javascript
function logRejection(result) {
    return result.catch(() => console.log('Log rejection'))
}
```

### 2.
```javascript
function logRejection(result) {
    return result.then(() => console.log('Log rejection'))
}
```

### 3.
```javascript
function logRejection(result) {
    result.finally(() => () => console.log('Log rejection'))

    return result
}
```

## Common errors, misconceptions, or irrelevant information:
* Promises that are "caught" are resolved by default, and proceed along the "resolved" path of the Promise chain.  So any catch function must return a rejected Promise to stay on the "rejected" path.
* The `then()` and `finally()` functions are not capable of logging a promise rejection.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
