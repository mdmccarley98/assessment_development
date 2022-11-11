# programmatic_problem_solving

## Item ID
q312

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
What is the result of compiling and running the following code?

## Code Snippet (optional)
```java
public class Main {

    class Apple {
        public void run() {
            System.out.println("Run");
        }
    }

    public static void main(String[] args) {
        new Apple().run();
    }
}
```

## Answer Key
It fails to compile because the main method attempts to create an instance of non-static class Apple.

## Distractors

### 1.
It fails to compile because a class cannot be defined inside another class.

### 2.
It fails to compile because the main method attempts to invoke the non-static method run().

### 3.
It compiles and prints “Run”.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

