# Generators

## Item ID
1614

## Claim
Claim 3: Understand distinguishing features of that language as opposed to others

## Claim Behavior (evidence)
- [function*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) - Mozilla

## Content Target
generators

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
What is the output of this program?

## Code Snippet
```javascript
function* gen1() {
    console.log(yield 1)
    console.log(yield 2)
    console.log(yield 3)
}

const iterator = gen1()

console.log(iterator.next('a').value)
console.log(iterator.next('b').value)
console.log(iterator.next('c').value)
```

## Answer Key
```
1
b
2
c
3
```

## Distractors
### 1.
```
a
1
b
2
c
3
```

### 2.
```
1
2
3
```

### 3.
```
1
a
2
b
c
3
```


## Common errors, misconceptions, or irrelevant information (optional):

* Generator functions pause execution on the first `yield`.
* The value that is yielded will be returned from the first call to the iterator's `next()` function.
* All subsequent calls to `next()` can pass a value, and the next `yield` will evaluate to that value.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

