# lang_javascript_05#

## Item ID
1330

## Claim
Claim 1: Using Core Syntax

## Claim Behavior (evidence)


## Content Target
`Logical Operators`

## Cognitive Model


## Item Type
Multiple Choice

## Stem
The following code results in a Reference Error. Which line of code could you add to fix this error?

## Code Snippet

```javascript
    const a = 0;
    const b = '';
    // MISSING LINE HERE
    const outcome = !!(a || b || c || d);
```

## Answer Key

```javascript
    const c = [false];
```

## Distractors

### 1.
```javascript
    const c = '';
```

### 2.

```javascript
    const c = null;
```

### 3.
```
    none of these options will eliminate the Reference Error
```

## Common errors, misconceptions, or irrelevant information (optional):

The line of code with an OR || operator with stop executing when the first truthy value is reached, resolving the reference error.

---