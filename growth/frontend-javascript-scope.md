# Front-end: Understanding Javascript variable scope

## Item ID
frontend-javascript-scope

## Claim
Claim #1: Understand the core syntax of the language itself.

## Claim Behavior (evidence)

* [Javascript variable scope](https://www.w3schools.com/js/js_let.asp) - w3schools.com

## Content Target
Variable scoping

## Cognitive Model
Use


## Item Type
Multiple Choice

## Stem

What output does this Javascript snippet produce?

## Code Snippet (optional)

```
for (a = 0; a < 1; a++) {}
for (let b = 0; b < 2; b++) {}
for (var c = 0; c < 3; c++) {}

(function() {
  for (d = 0; d < 4; d++) {}
})()

let found = []
if (typeof a !== 'undefined') found.push('a')
if (typeof b !== 'undefined') found.push('b')
if (typeof c !== 'undefined') found.push('c')
if (typeof d !== 'undefined') found.push('d')

console.log('Found: ', found)
```

## Answer Key

```
Found: ['a', 'c', 'd']
```

## Distractors

### 1.
```
Found: ['a', 'b', c', 'd']
```

### 2.
```
Found: ['a', 'b', 'c']
```

### 3.
```
Found: ['a']
```


## Common errors, misconceptions, or irrelevant information (optional):

* In early versions of Javascript there was no block scope, only global and "function" scopes.
* Variable's initialized with `var` get that initialization "hoisted" to the top of the local scope.
* Modern Javascript introduces block scoping through the use of the `let` keyword.
* If unspecified, the default scope is global scope.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)