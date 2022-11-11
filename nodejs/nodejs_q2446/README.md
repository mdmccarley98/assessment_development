# Node module caching

## Item ID
2446

## Claim
Claim 2

## Threshold Probabilities
[0.10, 0.25, 0.40, 0.60]

## Claim Behavior (evidence)
> - [Node.js modules](https://nodejs.org/api/modules.html#modules_caching)

## Content Target
`Modules`

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
What would the output be when running `node index2.js`?

## Code Snippet
```javascript
//index1.js
console.log('Hello World!!')

//index2.js
try {
    require('./index1')
    require('./index1')
    require('./index1')
} catch (err) {
    console.log('An error occurred!')
    throw new Error()
}
```

## Answer Key
```
Hello World!!
```

## Distractors
### 1.
```
An error occurred!
```

### 2.
```
Hello World!!
Hello World!!
Hello World!!
```

### 3.
It will throw a new Error, that's going to call the outside catch handler

## Common errors, misconceptions, or irrelevant information (optional):
- It will output only one time because `require` function in node has caching, it just evaluates the function first time and then next time it just uses the cache.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
