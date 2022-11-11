# Front-end: Higher Order Functions

## Item ID
2151

## Claim
Claim 1: responsive_ui

## Claim Behavior (evidence)
[Currying](https://en.wikipedia.org/wiki/Currying) - wikipedia.org
[First-class Functions](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function) - developer.mozilla.org

## Content Target
Functional Programming

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
In the following code, what type is the "curry" function expecting `param` to be?

## Code Snippet (optional)
```javascript
function curry(param) {
  function curried(...args) {
    if (args.length >= param.length) {
      return param.apply(this, args)
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }

  return curried
}
```

## Answer Key
`function`

## Distractors
### 1.
`string`

### 2.
`number`

### 3.
`boolean`

## Common errors, misconceptions, or irrelevant information:
* "curry" is a higher-order function, that takes a `function` and returns a `function`. 

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
