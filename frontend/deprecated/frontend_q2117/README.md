# Promise Rejection Handling Semantics

## Item ID
2117

## Claim
Claim 5

## Claim Behavior (evidence)
[When is .then(success, fail) considered an antipattern for promises?](https://stackoverflow.com/questions/24662289/when-is-thensuccess-fail-considered-an-antipattern-for-promises) - stackoverflow.com

## Content Target
Promises

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
The Promise, `myPromise`, is guaranteed to resolve successfully.  The function, `task()`, will throw an error.

```javascript
const myPromise = Promise.resolve()

const task = () => throw new Error()

const errorHandler = () => console.log('Handle exception')
```

Below are three lines of code that each attempt to do the same thing, run `task()` and handle the error that is thrown.  Does one of these lines have a bug that leaves the error unhandled?

## Code Snippet (optional)
```javascript
myPromise.then(task, errorHandler)

myPromise.then(task).catch(errorHandler)

myPromise.then(task, undefined).then(undefined, errorHandler)
```

## Answer Key
This line leaves the error unhandled:

```javascript
myPromise.then(task, errorHandler)
```

## Distractors
### 1.
This line leaves the error unhandled:

```javascript
myPromise.then(task).catch(errorHandler)
```

### 2.
This line leaves the error unhandled:

```javascript
myPromise.then(task, undefined).then(undefined, errorHandler)
```

### 3.
All three lines of code are equivalent and will all execute `errorHandler()`.

## Common errors, misconceptions, or irrelevant information:
* The arguments of `then()` are "onFulfilled" and "onRejected" of the Promise that `then()` is called on.  So the "onRejected" function will not be called for an error thrown from the "onFulfilled" function.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
