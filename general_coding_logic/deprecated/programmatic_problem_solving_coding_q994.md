# programmatic_problem_solving

## Item ID
q994

## Claim
5

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What is an accurate statement regarding the following code snippet?

## Code Snippet (optional)
```go
file, err := os.Open(filepath)
defer file.Close()
// read from file
```

## Answer Key
The file will be closed before the enclosing function returns.

## Distractors

### 1.
It may attempt to close a `nil` file, causing a runtime error.

### 2.
It attempts to read from a closed file, causing a runtime error.

### 3.
The file will not be closed in the event of a runtime error.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

