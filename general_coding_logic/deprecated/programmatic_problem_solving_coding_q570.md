# programmatic_problem_solving

## Item ID
q570

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
What happens when you try to compile and run the following code?

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

class Main {
  public static void main(String[] args) {
    A a = new B();
    a.print();
  }
}
```

## Answer Key
Prints out “B”

## Distractors

### 1.
Prints out “A”

### 2.
Prints out “AB”

### 3.
It fails to compile because an object of class B cannot be assigned to an instance of class A without explicit type casting.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

