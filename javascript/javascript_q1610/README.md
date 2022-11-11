# Implement Callback to Promise

## Item ID
1610

## Claim
Claim 6: Candidates are able to complete everyday coding tasks that relate to the language's core features

## Claim Behavior (evidence)
- [What are callback's?](https://nodejs.org/en/knowledge/getting-started/control-flow/what-are-callbacks/) - nodejs.org
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) - mozilla.org 

## Content Target
Node-style callbacks
Promises

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
Two popular ways of wrapping asynchronous operations in Javascript are Promises and Node-style callbacks. Frequently, one must integrate APIs that are using mismatched approaches, particularly when writing code for Node.js.  It can be helpful to create a higher-order function that converts arbitrary Node-style functions that use callbacks to functions that return a Promise of an array.  Choose the correct implementation of `callbackToPromise()`.

The correct implementation will cause the following snippet to log `3`:

## Code Snippet

```javascript
// Node-style: Zero or more args, plus a callback
function funcWithCallback(val1, val2, callback) {
    setTimeout(() => {
        callback(val1 + val2)
    }, 1)
}

const resultFunc = callbackToPromise(funcWithCallback)

resultFunc(1, 2).then(([value]) => console.log(value))
```

## Answer Key
```javascript
const callbackToPromise = (asyncWithCallback) => (...funcArgs) => {
    return new Promise((resolve, reject) => {
        try {
            asyncWithCallback(...funcArgs, (...callbackArgs) => {
                resolve(callbackArgs)
            })
        } catch (error) {
            reject(error)
        }
    })
}
```

## Distractors
### 1.
```javascript
function callbackToPromise(asyncWithCallback) {
    return new Promise((resolve, reject) => {
        try {
            asyncWithCallback((...callbackArgs) => {
                resolve(callbackArgs)
            })
        } catch (error) {
            reject(error)
        }
    })
}
```

### 2.
```javascript
const callbackToPromise = (asyncWithCallback) => {
    return async (...funcArgs) => {
        return await asyncWithCallback(...funcArgs, (...callbackArgs) => {
            return callbackArgs
        })
    }
}
```

### 3.
```javascript
function callbackToPromise(asyncWithCallback) {
    function callback(...callbackArgs) {
        return Promise.resolve(callbackArgs)
    }

    return function() {
        return new Promise(() => {
            try {
                asyncWithCallback.apply(null, [...arguments, callback])
            } catch (error) {
                return Promise.reject(error)
            }
        })
    }

}
```

## Common errors, misconceptions, or irrelevant information (optional):

* Javascript does not help someone keep correct types.  The return type should be a function that takes an arbitrary number of arguments, creates the same side-effect as the original function, and returns a Promise of an array of the arguments that would have been provided to the original callback.
* Calling `Promise.resolve()` does not resolve a wrapping Promise.  One must use the `resolve()` that is provided by the wrapping Promise.
* Some people strongly prefer async/await syntax, but some algorithms are very difficult (or impossible?) to implement with it, like this one.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

