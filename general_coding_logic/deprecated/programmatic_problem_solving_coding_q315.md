# programmatic_problem_solving

## Item ID
q315

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
class A {
    public void print() {
        System.out.println("A");
    }
}

class B extends A {
    public void print() {
        System.out.println("B");
    }
}

public class Main {
    public static void main(String[] args) {
        A a = new B();
        a.print();
    }
}
```

## Answer Key
It prints B.

## Distractors

### 1.
It fails to compile because the assignment “A a = new B()” needs explicit type casting.

### 2.
It prints A.

### 3.
It prints A, B.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

