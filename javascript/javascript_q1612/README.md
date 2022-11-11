# Serial Promises

## Item ID
1612

## Claim
Claim 6: Candidates are able to complete everyday coding tasks that relate to the language's core features

## Claim Behavior (evidence)
- [Resolve promises one after another (i.e. in sequence)?](https://stackoverflow.com/questions/24586110/resolve-promises-one-after-another-i-e-in-sequence) - Stack Overflow 

## Content Target
Promises
Serial Execution

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
It is often important to control the number of asynchronous tasks happening at any one time. The simplest form of this is to process only one asynchronous task at a time.  The program below contains a function named `runOneAtATime()`.  This function should be called for every element in the `input` array.  However, each execution of `runOneAtATime()` must complete before the next element can be processed.  Choose the implementation of `processInput()` that processes the elements of `input` one at a time.  The correct implementation of `processInput()` will always print the output: `Result: true`

## Code Snippet

```javascript
const input = [1, 2, 3, 4, 5]
let output = []

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

function runOneAtATime(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            output.push(num)
            resolve()
        }, getRandomInt(10))
    })
}

/* ### Implement processInput() here ### */

processInput(input).then(() => {
    const result = input.join() === output.join()

    console.log(`Result: ${result}`)
})
```

## Answer Key
```javascript
async function processInput(input) {
    for (const num of input) {
        await runOneAtATime(num)
    }
}
```

## Distractors
### 1.
```javascript
async function processInput(input) {
    input.forEach(async num => {
        await runOneAtATime(num)
    })
}
```

### 2.
```javascript
function processInput(input) {
    const work = input.map(num => {
        return runOneAtATime(num)
    })
    return Promise.all(work)
}
```

### 3.
```javascript
async function processInput(input) {
    for await (let num of input) {
        runOneAtATime(num)
    }
}
```

## Common errors, misconceptions, or irrelevant information (optional):

* Using `forEach()` on `async` functions does not cause the loop to wait for each asynchronous function to complete.
* Using `map()` and then `Promise.all()` ensures that all promises have resolved, but does nothing to chain execution.
* The `for...await` loop is meant for iterating over asynchronous `asyncIterator` objects, such as the return value of an `async` generator function.
* There is another good way executing asynchronous work in series, using `reduce` to add to the promise chain:

```javascript
function processInput(input) {
    return input.reduce((work, num) => {
        return work.then(() => runOneAtATime(num))
    }, Promise.resolve())
}
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

