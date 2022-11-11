# Node Child Process

## Item ID
2453

## Claim
Claim 3

## Threshold Probabilities
[0.20, 0.30, 0.50, 0.80]

## Claim Behavior (evidence)
> - [Node - Process](https://nodejs.org/api/process.html)

## Content Target
`Node Process`

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
When running the program below, what will the output be? *Note: `Current directory` has five files*

## Code Snippet
```javascript
const { spawn } = require("child_process");

const files = spawn("find . -type f | wc -l");

console.log(`Number of files ${files}`);
```

## Answer Key
Node will throw an error as `spawn` does not support shell syntax

## Distractors
### 1.
It will print - `Number of files 7`

### 2.
It will print - `Number of files 5`

### 3.
The program will exit without any output as the child process is not listening to stdio streams

## Common errors, misconceptions, or irrelevant information (optional):
The spawn function does not create a shell to execute the command. However, the exec function uses shell. Hence in exec command, it's possible to use the shell-like syntax but not in spawn.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
