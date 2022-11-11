# programmatic_problem_solving

## Item ID
q569

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
class Foo {
  private Foo bar = new Foo();

  private void print() {
    System.out.println("Foo");
  }

  public Foo() {
    this.bar.print();
  }
}

class Main {
  public static void main(String[] args) {
    new Foo();
  }
}
```

## Answer Key
It compiles fine but raises `java.lang.StackOverflowError` at runtime.

## Distractors

### 1.
It fails to compile because the public constructor of Foo class cannot access private instance bar.

### 2.
It prints out one line of “Foo” and exit successfully.

### 3.
It prints out two lines of “Foo” and exit successfully.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

