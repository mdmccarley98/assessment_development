# programmatic_problem_solving

## Item ID
q411

## Claim
2

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What is the result of compiling and running the following code?

## Code Snippet (optional)
```java
public class SomeClass {

    SomeClass instance;

    private SomeClass() {
        instance = new SomeClass();
    }

    public static void main(String[] args) {
        new SomeClass();
    }
}
```

## Answer Key
It compiles and runs, but throws `StackOverflowError` at runtime.

## Distractors

### 1.
It fails to compile because the constructor of the class `SomeClass` is private.

### 2.
It fails to compile because `SomeClass` cannot have a member of its own type.

### 3.
It compiles and runs successfully.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

