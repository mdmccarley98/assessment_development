# programmatic_problem_solving

## Item ID
1534

## Claim
3

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Threshold Probabilities
[.50, .70, .85, .90]

## Item Type
Multiple Choice

## Stem
What is wrong with the following code snippet?

## Code Snippet (optional)
```cpp
const int BUF_SIZE = 1024;
char* buffer[1024] = {0};
FILE* file;

if (file=fopen(filepath, "r")) {
    fgets((char*)buffer, BUF_SIZE, file);
}
fclose(file);
```

## Answer Key
If opening the file fails, the original error is suppressed and a different error is raised.

## Distractors

### 1.
If a line is exactly BUF_SIZE long, `fgets` will overflow the buffer.

### 2.
Casting buffer to `(char*)` sends the wrong address to `fgets`.

### 3.
If there is an error opening the file, it will still try to execute `fgets`.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

