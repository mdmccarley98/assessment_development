# programmatic_problem_solving

## Item ID
1537

## Claim
3

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What is wrong with the following code snippet?

## Code Snippet (optional)
```java
byte[] data = null;
FileInputStream stream = null;
File file = new File("example.txt");
try {
    stream = new FileInputStream(file);
    data = stream.readAllBytes();
} catch (java.io.IOException ignored) {
} finally {
    stream.close();
}
```

## Answer Key
If opening the file fails, the original error is suppressed and a different error is raised.

## Distractors

### 1.
If an error is raised, the file will remain open.

### 2.
The file may be closed before all data is read.

### 3.
Not all bytes from the file are read.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

