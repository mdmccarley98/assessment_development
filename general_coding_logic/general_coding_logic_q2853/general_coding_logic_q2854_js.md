# General Coding Logic - Logical Expression Reduction

## Item ID
2854

## Claim
1: `programming_logic`

## Claim Behavior (evidence)
> The outptut of the expression in the code is 
```
0 0 0: 1 
0 0 1: 1 
0 1 0: 1 
0 1 1: 1 
1 0 0: 1 
1 0 1: 0 
1 1 0: 1 
1 1 1: 0
```

## Target Skill Level
1

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Which other expression can substitute `expr` and result in the same output?

## Code Snippet (optional)
```javascript
const example = () => {
  for (let i = 0; i < 8; i++) {
    const is_car = Number((i & 1) > 0);
    const has_spoiler = Number((i & 2) > 0);
    const is_lowered = Number((i & 4) > 0);

    const expr = Number(((!is_car && !has_spoiler) || (!is_car || !is_lowered)));

    console.log(is_lowered + " " + has_spoiler + " " + is_car + ": " + expr);
  }
}
```

## Answer Key
```javascript
!(is_car && is_lowered)
```

## Distractors
### 1.
```javascript
(!is_car && is_lowered) || has_spoiler
```

### 2.
```javascript
(is_car && has_spoiler) || (is_car || !is_lowered)
```

### 3.
```javascript
(is_car && has_spoiler)
```

## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - Output is 
    ```
    0 0 0: 0
    0 0 1: 0
    0 1 0: 1
    0 1 1: 1
    1 0 0: 1
    1 0 1: 0
    1 1 0: 1
    1 1 1: 1
    ```
- Distractor 2
    - Output is
    ```
    0 0 0: 1
    0 0 1: 1
    0 1 0: 1
    0 1 1: 1
    1 0 0: 0
    1 0 1: 1
    1 1 0: 0
    1 1 1: 1
    ```
- Distractor 3
    - Output is
    ```
    0 0 0: 0
    0 0 1: 0
    0 1 0: 0
    0 1 1: 1
    1 0 0: 0
    1 0 1: 0
    1 1 0: 0
    1 1 1: 1
    ```

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
