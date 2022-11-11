# Defining Props

## Item ID
1616

## Claim
Claim 3: Understand distinguishing features of that language as opposed to others.

## Claim Behavior (evidence)
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty](Object.defineProperty\(\)) - Mozilla

## Content Target
Properties

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
What is the output of the following program?

## Code Snippet
```javascript
const obj = {
    prop: 1
}
console.log(obj.prop)

Object.defineProperty(obj, 'prop', {
    writable: false,
    value: 2
})
console.log(obj.prop)

obj.prop = 3
console.log(obj.prop)
```

## Answer Key
```
1
2
2
```

## Distractors
### 1.
```
1
2
TypeError: Cannot assign to read only property 'prop' of object '#<Object>'
```

### 2.
```
1
1
3
```

### 3.
```
1
2
3
```

## Common errors, misconceptions, or irrelevant information (optional):

* Attempting to write to an unwritable variable fails silently, unless the code is running in "strict" mode. Then it will throw an exception.
* Redefining a property can allow you to set the value. This is true even if the `writable` option is false.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

