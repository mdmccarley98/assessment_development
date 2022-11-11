# programmatic_problem_solving

## Item ID
q96

## Claim
4

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What's wrong with this code?

## Code Snippet (optional)
```java
// return a string with the bits in binary 
// of a 32-bit int 
public static String getBitStringForInt(int n)  {
    StringBuilder rtn = new StringBuilder();
    for (int i = 31; i >= 0; i--) {
        int v = (1 << i) & n;
        rtn.append(v == 1 ? "1" : "0");
    }
    return rtn.toString();
}

```

## Answer Key
The check v == 1 should be v != 0. The non-zero result will have 1 bit set, but in many different positions

## Distractors

### 1.
The loop starts at 31, but should start at 32. Off by one

### 2.
The code checks the bits from right to left, but appends them from left to right

### 3.
Everything's good

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

