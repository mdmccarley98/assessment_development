# Node moodules paths

## Item ID
2447

## Claim
Claim 2

## Threshold Probabilities
[0.05, 0.30, 0.50, 0.70]

## Claim Behavior (evidence)
> - [Node.js module paths](https://nodejs.dev/learn/the-nodejs-path-module)

## Content Target
`Modules`

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
Assume your project directory is `/Users/tb/services/`. This directory contains the `index.js` file, which requires the `foo` package. However, `node_modules/foo.js` doesn't exist in `/Users/tb/services/`. It lives inside the `/Users` directory. When the user runs `node index.js` from the `/Users/tb/services/` directory, what will be the output?

## Code Snippet
```javascript
// /Users/node_modules/foo.js file
console.log('I am lost');

// /Users/tb/services/index.js file
require('foo')
```

## Answer Key
Prints `I am lost` because node will search for modules in `/Users`

## Distractors
### 1.
`Error: Cannot find module 'foo'` because node will only search inside the current folder

### 2.
`Error: Cannot find node_modules directory`

### 3.
Exits the program silently


## Common errors, misconceptions, or irrelevant information (optional):
- Node module.paths is a list of node_modules directories under every directory from the current directory to the root directory.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
