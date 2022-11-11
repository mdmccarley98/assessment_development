# GCL: Prime Numbers

## Item ID
2836

## Claim
Claim 2

## Claim Behavior (evidence)
NA

## Target Level
Level 2

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Below are four different implementations of the `is_prime_number` function. You will use the `is_prime_number` function to check if a number is a prime number for any number in the range of 2 to 10000.
<br><br>
Choose the correct implementation that will achieve its purpose with the LEAST amount of operations.

## Code Snippet (optional)

## Answer Key
```javascript
function is_prime_number(num) {
  let j = 2

  while (j * j <= num) {

    if (num % j === 0) {
      return false
    }

    j++
  }

  return true
}
```


## Distractors

### 1.
```javascript
function is_prime_number(num) {
  let j = 2

  while (j * 2 <= num) {

    if (num % j === 0) {
      return false
    }

    j++
  }

  return true
}
```

### 2.
```javascript
function is_prime_number(num) {
  let j = 1

  while (j * j <= num) {

    if (num % j === 0) {
      return false
    }

    j++
  }

  return true
}
```

### 3.
```javascript
function is_prime_number(num) {
  let j = 1

  while (j * j <= num) {

    if (num % j === 0) {
      return false
    }

    j++
  }

  return true
}
```


## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - `while j*2 <= i` has to check until `i`/2 in the worst cases, `while j*j <= i` goes until square root of `i`, then
      `while j*2 <= i ` doesn't generate the prime numbers with LESS operations than `while j*j <= i `
- Distractor 2
    - `j = 1;` actually generates a bug. All numbers will have `is_prime = False` and will not print.
- Distractor 3
    - It's a combination of distractor 1 and 2.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

