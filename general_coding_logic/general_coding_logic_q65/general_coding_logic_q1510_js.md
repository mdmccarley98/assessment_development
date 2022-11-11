# programmatic_problem_solving

## Item ID
1510

## Claim
2

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Select the line of code that completes the function

## Code Snippet (optional)
```javascript
// function recursively reverses a string 
function recursiveStringReverse(string) {
  if (string.length <= 1) {
    return string
  }

  let firstChar = string.charAt(0)
  let lastChars = string.slice(1)
  
  // MISSING LINE
}
```

## Answer Key
```javascript
  return recursiveStringReverse(lastChars) + firstChar
```

## Distractors

### 1.
```javascript
  return recursiveStringReverse(lastChars)
```

### 2.
```javascript
  return firstChar + recursiveStringReverse(lastChars)
```

### 3.
```javascript
  return lastChars + firstChar
```


## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

