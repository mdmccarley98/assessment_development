# Java Syntax Classes

## Item ID
1420

## Claim
Claim 1: core_language

## Claim Behavior (evidence)
Abstract Methods and Classes
https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html

## Cognitive Model
* Recall
* Comprehend

## Item Type
Multiple Choice

## Stem
You are writing a program that simulates tree growth, so you want an abstract Tree class for other tree types to inherit.

What errors are there in this program?

## Code Snippet
```java
abstract class Tree {
    abstract String getName();
    public void grow() {
        System.out.println(getName() + " is growing.");
    }
}

class Elm extends Tree {
    String getName() {
        return "Elm";
    }
}

public class Example {
    public static void main(String[] args) {
        Elm tree = new Elm();
        tree.grow();
    }
}
```


## Answer Key
* There are no errors in this program.  It compiles, executes, and prints "Elm is growing."


## Distractors
### 1.
* `abstract` can only be used on a class, not a method.

### 2.
* `abstract` classes cannot have implementations, the `grow()` method cannot have an implementation in `Tree`.

### 3.
* `abstract` can only be used on a class, not a method.
* `abstract` classes cannot have implementations, the `grow()` method cannot have an implementation in `Tree`.


## Common errors, misconceptions, or irrelevant information (optional):
> If a class includes abstract methods, then the class itself must be declared `abstract`.
> https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

