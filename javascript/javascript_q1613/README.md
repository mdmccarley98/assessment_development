# Generators

## Item ID
1613

## Claim
Claim 3: Understand distinguishing features of that language as opposed to others

## Claim Behavior (evidence)
- [function*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) - Mozilla
- [Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Iterables) - Mozilla

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
    yield 'a'
    yield 'b'
    yield 'c'
}

function* gen2() {
    yield* gen1()
    yield* [1, 2, 3]

    return 4
}

for (const element of gen2()) {
    console.log(element)
}
```

## Answer Key
```
a
b
c
1
2
3
```

## Distractors
### 1.
```
a
b
c
1
2
3
4
```

### 2.
```
a
Array(3) [1, 2, 3]
```

### 3.
```
a
1
b
2
c
3
```


## Common errors, misconceptions, or irrelevant information (optional):

* Generators can delegate to other iterables by using `yield*`.
* Arrays are iterables.
* Delegation does not interleave values. It simply hands control over to another iterator until that iterator is done.
* The return value of a Generator method is not iterated over by looping constructs like `for...of`.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

