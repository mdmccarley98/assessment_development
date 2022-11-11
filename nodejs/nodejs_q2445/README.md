# Node module exports

## Item ID
2445

## Claim
Claim 2

## Threshold Probabilities
[0.35, 0.55, 0.75, 0.95]

## Claim Behavior (evidence)
> - [Node.js modules](https://nodejs.org/api/modules.html#modules_modules_commonjs_modules)

## Content Target
`Modules`

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
Choose the answer that is an INCORRECT way to export a module?

## Code Snippet
```javascript
const add = (x,y) => x+y
```

## Answer Key
```javascript
exports = {
    add
}
```

## Distractors
### 1.
```javascript
module.exports.addition = add
```

### 2.
```javascript
exports.additionOp = add
```

### 3.
```javascript
module.exports = {
    add
}
```

## Common errors, misconceptions, or irrelevant information (optional):
- modules are self-contained units of functionality that can be shared and reused across projects.
- `exports` is a reference to `module.exports`.
- Changing the reference of `exports` means it will no longer change the official API which is module.exports. And it would be just another local variable in the module scope.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
