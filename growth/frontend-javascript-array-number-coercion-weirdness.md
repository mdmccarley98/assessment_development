# Front-end: Understanding Javascript Array Concatenation

## Item ID
frontend-javascript-array-number-coercion-weirdness

## Claim
Claim #2: Be able to manipulate the language’s container objects in whatever form they take.

## Claim Behavior (evidence)

* [JavaScript Operators Reference](https://www.w3schools.com/jsref/jsref_operators.asp) - w3schools.com
* [What you need to know about Javascript's Implicit Coercion](https://dev.to/promhize/what-you-need-to-know-about-javascripts-implicit-coercion-e23#) - Dev.to

## Content Target
Automatic coercion between array, string, and number types.

## Cognitive Model
Use


## Item Type
Multiple Choice

## Stem
What is the final value of `myArray`?


## Code Snippet (optional)

```
let myArray = [1, 2];
myArray += [3];

```

## Answer Key

```
"1,23"
```

## Distractors

### 1.
```
[1, 2, 3]
```

### 2.
```
[1, 2, [3]]
```

### 3.
```
"1,2,3"
```


## Common errors, misconceptions, or irrelevant information (optional):

* Some languages, like Python, use `+=` for array concatenation. Javascript only uses `+=` for addition of numbers and string concatenation.
* First, Javascript implicitly coerces the arrays into strings. Next, it concatenates the strings.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
