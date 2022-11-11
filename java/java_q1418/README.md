# Java Syntax Modifiers

## Item ID
1418

## Claim
Claim 1: core_language

## Claim Behavior (evidence)
Java final Keyboard
https://www.w3schools.com/java/ref_keyword_final.asp

Final Keyword in Java
https://www.geeksforgeeks.org/final-keyword-java/

## Cognitive Model
* Recall
* Comprehend

## Item Type
Multiple Choice

## Stem
A coworker is writing a class which keeps track of the sound different cars make.

What are the errors in this code?

## Code Snippet

```java
class Car {
    private final String carSound;

    public void setSound(String newCarSound) {
        this.carSound = newCarSound;
    }

    private String speak() {
        return carSound;
    }
}

public class Example {
    public static void main(String[] args) {
        Car sedan = new Car();
        sedan.setSound("vroom");
        System.out.println(sedan.speak());
    }
}
```

## Answer Key

* `carSound` is an uninitialized `final` value
* `setSound()` is attempting to change a `final` value
* `speak()` is `private` and used outside the class

## Distractors

### 1.
* `final` can only be used on classes
* `speak()` is `private` and used outside the class

### 2.
* There are no problems.  This code compiles, executes, and writes "vroom" to the console.

### 3.

* The class is missing a constructor.
* `carSound` is an uninitialized `final` value
* `setSound()` is attempting to change a `final` value
* `speak()` is `private` and used outside the class

## Common errors, misconceptions, or irrelevant information (optional):
The `final` keyword can be used on a variable to make it constant or immutable.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

