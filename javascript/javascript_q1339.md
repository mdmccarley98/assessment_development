# lang_javascript_14#

## Item ID
1339

## Claim
Claim 1: Using Core Syntax

## Claim Behavior (evidence)


## Content Target
`Functions `

## Cognitive Model


## Item Type
Multiple Choice

## Stem
What is logged when the function 'second' runs?

## Code Snippet

```javascript
    let x = 'fog';
    function first() {
        console.log(x)
    };
    x = 'dog';
    function second() {
        let x = 'log';
        first();
    };
```

## Answer Key

```
    'dog'
```

## Distractors

### 1.
```
    'fog'
```

### 2.

```
    'log'
```

### 3.
```
    Reference Error
```

## Common errors, misconceptions, or irrelevant information (optional):

Closure can be tricky - a function remembers the scope it was in when it was defined. For function ‘first’, that is the global variable x. So when the function runs, it will look to see the current value of the global variable x 

---
