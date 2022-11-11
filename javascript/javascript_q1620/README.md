# Checking for Existance

## Item ID
1620

## Claim
Claim 1: Understand the core syntax of the language itself

## Claim Behavior (evidence)
- [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) - Mozilla

## Content Target
typeof

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
Suppose that there is a variable named `TEST_ENV` that is only declared in your test environment.  In your production environment the `TEST_ENV` variable is never declared.  Choose the answer that logs to the console in your test environment and does not produce any errors in your production environment.

## Answer Key
```javascript
if (typeof TEST_ENV !== 'undefined') {
    console.log('In test environment.')
}
```

## Distractors
### 1.
```javascript
if (typeof TEST_ENV !== undefined) {
    console.log('In test environment.')
}
```

### 2.
```javascript
if (TEST_ENV !== undefined) {
    console.log('In test environment.')
}
```

### 3.
```javascript
if (!!TEST_ENV) {
    console.log('In test environment.')
}
```

## Common errors, misconceptions, or irrelevant information (optional):

* All of these will work for a variable that has been declared.  If the variable has NEVER been declared you must use `typeof` to check it, otherwise it will produce a `ReferenceError`.
* `typeof` produces string values to describe the type.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

