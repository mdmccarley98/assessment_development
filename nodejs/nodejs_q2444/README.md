# Node.js npm main

## Item ID
2444

## Claim
Claim 2

## Threshold Probabilities
[0.10, 0.25, 0.40, 0.60]

## Claim Behavior (evidence)
- [NPM Main](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#main)

## Content Target
`NPM Main`

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
When running `node index.js`, what would be the output?

## Code Snippet
```js
// Main index.js
require('foo');

// ./node_modules/foo/index.js
console.log('In index');

// ./node_modules/foo/start.js
console.log('In start');

// ./node_modules/foo/package.json
{
  "name": "foo",
  "main": "start.js"
}
```

## Answer Key
```
In start
```

## Distractors

### 1.
```
In index
```

### 2.
```
Error: Cannot find module 'foo'
```

### 3.
```
{}
```

## Common errors, misconceptions, or irrelevant information (optional):
The main field is a module ID that is the primary entry point to your program. That is, if your package is named foo, and a user installs it, and then does require("foo"), then your main module's exports object will be returned.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
