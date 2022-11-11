# Array as Queue

## Item ID
1605

## Claim
Claim 2: Candidate is able to manipulate the language's container objects in whatever form they take

## Claim Behavior (evidence)
- [Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) - Mozilla
- [Array.prototype.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) - Mozilla

## Content Target
Arrays

## Cognitive Model
* Recall

## Item Type
Multiple Choice

## Stem
You are implementing a First In First Out (FIFO) Queue. Choose the Queue implementation such that the output of the code snippet below is `true`.

## Code Snippet

```javascript
const myQueue = Queue()
myQueue.enqueue(1)
myQueue.enqueue(2)

const r1 = myQueue.dequeue() === 1
const r2 = myQueue.dequeue() === 2

console.log(r1 && r2)
```

## Answer Key
```javascript
function Queue() {
    const backingArray = []

    return {
        enqueue: backingArray.push,
        dequeue: backingArray.shift
    }
}
```

## Distractors
### 1.
```javascript
function Queue() {
    const backingArray = []

    return {
        enqueue: backingArray.push,
        dequeue: backingArray.pop
    }
}
```

### 2.
```javascript
function Queue() {
    const backingArray = []

    return {
        enqueue: backingArray.unshift,
        dequeue: backingArray.shift
    }
}
```

### 3.
```javascript
function Queue() {
    const backingArray = []

    return {
        enqueue: backingArray.pop,
        dequeue: backingArray.unshift
    }
}
```

## Common errors, misconceptions, or irrelevant information (optional):

* Using `push` and `pop` creates a Stack, using the end of the array.
* Using `shift` and `unshift` also creates a Stack, using the beginning of the array.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

