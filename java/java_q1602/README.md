# Protected Member Access

## Item ID
1602

## Claim
Claim 1: core_language

## Claim Behavior (evidence)

* [Controlling Access to Members of a Class](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html) - Oracle

## Content Target
Attributes - accessing and modifying

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
When a class member variable is specified to be `protected`, what other classes have direct access to that member variable?


## Code Snippet (optional)
```java
public class Example {
    protected int foo;
}
```

## Answer Key
The `Example` class, any subclass of `Example`, and any class that is in the same package as `Example`.


## Distractors

### 1.
Only the `Example` class.

### 2.
The `Example` class, and any subclass of `Example`.

### 3.
The `Example` class, and any class that is in the same package as `Example`.


## Common errors, misconceptions, or irrelevant information (optional):

* The `protected` access modifier is most often used to give subclasses direct access to a member variable. It also grants direct access to any other classes that are in the same package.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)