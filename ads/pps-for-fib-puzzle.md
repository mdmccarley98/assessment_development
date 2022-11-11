# For Fib Puzzle

## Item ID
pps-for-fib-puzzle

## Claim
Programmatic Problem Solving

## Claim Behavior (evidence)


## Content Target
* array indexing
* modulo even
* for loops starting somewhere other than 0

## Cognitive Model
* Use

## Item Type


## Stem

What is does `puzzle(x, fib)` return?


## Code Snippet (optional)

```javascript
var x = 3;
var fib = [1, 1, 2, 3, 5, 8, 13, 21, 34];
function puzzle(x, fib) {
    var result = 0;
    for (var i = x; i < 6; i++) {
        if (i % 2 == 0) {
            result += x;
        }
        result += fib[i];
    }
    return result + 1;
}
```

## Answer Key
```
20
```

## Distractors

### 1.
```
19
```

### 2.
```
14
```

### 3.
```
36
```


## Common errors, misconceptions, or irrelevant information (optional):

* The value of `i` in the for loop is only 3, 4, and 5.
* `i % 2 == 0` tests if `i` is even, it is even one time while `i` changes from 3, to 4, and finally 5.
* The indexes of fib at 3, 4, and 5 are: 3, 5, and 8.  So 3 + 5 + 8 is 16.
* 16 + 3 = 19.  After all that mental modeling don't give up, the function returns `result + 1`, 19 + 1 is 20.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

