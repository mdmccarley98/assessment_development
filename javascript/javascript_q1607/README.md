# Set Equality

## Item ID
1607

## Claim
Claim 2: Be able to manipulate the language's container objects in whatever form they take.

## Claim Behavior (evidence)
- [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) - Mozilla

## Content Target
Set

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
What is the output of this program?

## Code Snippet

```javascript
const mySet = new Set()
mySet.add(1)
mySet.add(1)
mySet.add('a')
mySet.add('a')
mySet.add(undefined)
mySet.add(undefined)
mySet.add({prop: true})
mySet.add({prop: true})

console.log('Size:', mySet.size)
```

## Answer Key
```
Size: 5
```

## Distractors
### 1.
```
Size: 4
```

### 2.
```
Size: 3
```

### 3.
```
Size: 8
```

## Common errors, misconceptions, or irrelevant information (optional):

* Sets store unique values.
* ES2015 defines Set equality to be the same as triple equals (`===`).
* Two object literals will always be different instances.  So they will always be unequal via double (`==`) and triple (`===`) equals.  For this reason, a Set may contain objects that might be considered equal via deep-equals functions in third-party libraries, like Lodash or Underscore.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

