# programmatic_problem_solving

## Item ID
q60

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
Select the line of code that completes the function

## Code Snippet (optional)
```c
// function returns true if the string 
// contains only numeric characters
bool is_a_number(const char *str) {
    for (int i = 0; str[i] != '\0'; ++i) {
        if (str[i] < '0' || str[i] > '9') {
            // MISSING LINE
        }
    }
    return true;
}
```

## Answer Key
return false;

## Distractors

### 1.
return true;

### 2.
str[i] = '\\0';

### 3.
break;

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

