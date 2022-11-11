# GCL: Simple FOR Premature Exit

## Item ID
2840

## Claim
Claim 1

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Target Level 
Level 1

## Item Type
Multiple Choice

## Stem
What is the output of the following code snippet?

## Code Snippet (optional)
```javascript
function main() {
    let sum = 0;
    let i = 10;
    while (i < 1) {
        sum = sum + i;
        sum = sum * 2;
        i -= 1;
    }
    console.log(sum)
}
  
main();
```
## Answer Key
0

## Distractors

### 1.
27

### 2.
18434

### 3.
9216

## Common errors, misconceptions, or irrelevant information:
Solution is 0, because this code has a bug 

```java
for(int i=10; i < 1; i--)
```
`i < 1` makes the loop to terminate in the beginning since `i` is NOT LESS than `1` when it begins.

- Distractor 1
    - If this code had `sum = sum + 2;` instead of `sum = sum * 2;` and `i > 1` instead of `i < 1`
- Distractor 2
    - If this code had `i >= 1` instead of `i < 1`
- Distractor 1
    - If this code had `i > 1` instead of `i < 1`

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

