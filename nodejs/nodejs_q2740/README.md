# NodeJS - NPM Scripts

## Item ID
2740

## Claim
1

## Target Skill Level

## Threshold Probabilities
[0.50, 0.70, 0.90, 0.99]

## Claim Behavior (evidence)
> - [NPM scripts](https://docs.npmjs.com/cli/v8/using-npm/scripts/)

## Content Target
NPM scripts

## Cognitive Model
- Comprehend
- Use

## Item Type
Multiple Choice

## Stem
You are working with a team to develop a new greenfield application in Node.js. You've observed that there is no consistency in code style. The team has decided to add a linter to the project to fix this problem.
<br><br>
Assume that you have the following package.json file. What else would you need to do to use eslint as an npm script?

## Code Snippet
```json
//package.json
{
    "name": "hello-node",
    "version": "1.0.0",
    "description": "Hello world!",
    "main": "index.js",
    "license": "ISC",
    "devDependencies": {
        "eslint": "^8.16.0"
    }
}
```

## Answer Key
Add the following to the package.json file and run it with the command `npm run lint`.
```json
    "scripts": {
        "lint": "eslint"
    },
```

## Distractors
### 1.
Add the following to the package.json file and run it with the command `npm lint`.
```json
    "scripts": {
        "lint": "eslint"
    },
```

### 2.
Since `eslint` is already inside `node_modules`, you can use it by running the command `eslint` from the project directory.

### 3.
Add the following to the package.json file and run the command `eslint` from the project directory.
```json
    "scripts": {
        "eslint":"eslint"
    },
```

## Common errors, misconceptions, or irrelevant information (optional):

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
