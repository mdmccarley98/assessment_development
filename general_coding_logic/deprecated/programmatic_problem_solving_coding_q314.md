# programmatic_problem_solving

## Item ID
q314

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
What is the result of compiling and running the following code?

## Code Snippet (optional)
```java
public class Main {

    public static void run() {
        System.out.println("1");
        try {
            System.out.println("2");
            throw new Exception();
        } catch (Exception e) {
            System.out.println("3");
            return;
        } finally {
            System.out.println("4");
        }
    }

    public static void main(String[] args) {
        run();
    }
}
```

## Answer Key
It prints 1, 2, 3, 4

## Distractors

### 1.
It prints 1, 2, 3

### 2.
It fails to compile because method run() did not specify that it throws an Exception.

### 3.
It fails to compile because method run() cannot be called inside main()

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

