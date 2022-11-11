# Async Blocking

## Item ID
2147

## Claim
Claim 2: data

## Claim Behavior (evidence)
[The downsides of async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await#the_downsides_of_asyncawait)

## Content Target
Promises

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
Below are four implementations of the `performTasks()` function.  All call `asyncTask()` three times.  Which version is SLOWEST?

## Code Snippet (optional)
```javascript
const asyncTask = () => new Promise(resolve => {
    setTimeout(resolve, 1000)
})

await performTasks()
```

## Answer Key
```javascript
async function performTasks() {
    await asyncTask()
    await asyncTask()
    await asyncTask()
}
```

## Distractors
### 1.
```javascript
async function performTasks() {
    const r1 = asyncTask()
    const r2 = asyncTask()
    const r3 = asyncTask()

    await r1
    await r2
    await r3
}
```

### 2.
```javascript
async function performTasks() {
    await Promise.all([
        asyncTask(),
        asyncTask(),
        asyncTask()
    ])
}
```

### 3.
```javascript
async function performTasks() {
    await Promise.allSettled([
        asyncTask(),
        asyncTask(),
        asyncTask()
    ])
}
```

## Common errors, misconceptions, or irrelevant information:
* A common mistake with async/await is to unnecessarily block code in an async function.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
