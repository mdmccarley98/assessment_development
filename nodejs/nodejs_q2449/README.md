# Node.js package.json scripts

## Item ID
2449

## Claim
Claim 2

## Threshold Probabilities
[0.35, 0.55, 0.75, 0.95]

## Claim Behavior (evidence)
- [Node.js scripts](https://docs.npmjs.com/cli/v8/using-npm/scripts)

## Content Target
`package.json scripts`

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Which of the following commands will execute the `lint` script in `package.json`?

## Code Snippet (optional)
```json
{
    "name": "npm-scripts",
    "version": "1.0.0",
    "description": "This folder is for a list of Node.js questions for Triplebyte.",
    "main": "index.js",
    "scripts": {
        "lint": "eslint",
        "test": "jest --detectOpenHandles",
        "test:watch": "jest --watch --detectOpenHandles"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
}
```

## Answer Key
```
npm run lint
```

## Distractors
### 1.
```
npm lint
```

### 2.
```
npm -r eslint
```

### 3.
```
npm i eslint
```

## Common errors, misconceptions, or irrelevant information (optional):
- The "scripts" property of package.json file supports a number of built-in scripts and user-defined scripts which can be executed by running npm run <script>

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
