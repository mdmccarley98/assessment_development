# Node module circular dependencies

## Item ID
2440

## Claim
2. Be able to understand how modules work in Node.

## Threshold Probabilities
[0.10, 0.25, 0.40, 0.60]

## Claim Behavior (evidence)
> - [Node.js modules](https://nodejs.org/api/modules.html#modules_modules_commonjs_modules)


## Content Target
`Modules`

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
There is a circular dependency between module1 and module2 as given below, what would be the output while running `node module1.js` ?

```
//module1.js
require('./module2')
console.log('Inside Module1')

//module2.js
require('./module1')
console.log('Inside Module2')
```
## Answer Key

```
Inside Module2
Inside Module1
```

## Distractors

### 1.
```
Throw an error as circular dependencies are not allowed in node.js
```

### 2.
```
Inside Module1
Inside Module2
```

### 3.
```
Inside Module1
```

## Common errors, misconceptions, or irrelevant information (optional):
The circular dependency is detected by Node.js, and in order to avoid an infinite loop it returns the incompletely loaded module.
Let's say there is a dependency structure like this : A -> B -> C -> A
A.js loads B.js, then B.js in turn would load C.js. At this point, C.js tries to load A.js. In order to prevent an infinite loop, an unfinished copy of the A.js exports object is returned to the C.js module. C.js then finishes loading, and its exports object is provided to the A.js module.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)