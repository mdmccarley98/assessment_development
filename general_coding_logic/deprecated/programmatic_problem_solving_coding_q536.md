# programmatic_problem_solving

## Item ID
q536

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
What's the expected result after the following Java code runs?

## Code Snippet (optional)
```java
import java.util.ArrayList;

public class MyClass {

  ArrayList<Integer> myArray = new ArrayList<>();

  public void initArray(int numElements) {
    for (int i = 0; i < myArray.size() + numElements; i++) {
      myArray.add(i);
    }
  }

  public static void main(String[] args) {
    MyClass myClass = new MyClass();
    myClass.initArray(10);
  }
}
```

## Answer Key
The program eventually runs out of heap space.

## Distractors

### 1.
The compiler will throw the error "Variable already defined".

### 2.
myArray gets populated with numbers from 0 to 10 inclusive.

### 3.
myArray gets populated with numbers from 0 to 9 inclusive.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

