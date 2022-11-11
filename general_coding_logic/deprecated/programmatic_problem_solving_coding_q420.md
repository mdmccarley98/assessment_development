# programmatic_problem_solving

## Item ID
q420

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What is wrong with the following code?

## Code Snippet (optional)
```java
// Find the smallest integer in the array,
// and returns the index of that integer.
public static int findIndexOfMin(int[] arr) {
    int minIndex = -1;
    int minValue = Integer.MAX_VALUE;
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minIndex = i;
        }
    }
    return minIndex;
}
```

## Answer Key
Right after line 8, it should set `minValue` to `arr[i]`, inside the `if` statement.

## Distractors

### 1.
This looks good. No errors.

### 2.
At line 5, it should assign `minValue` to `Integer.MIN_VALUE` instead.

### 3.
The `if` statement at line 7 should have an `else` block that sets `minValue` to `val`.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

