# Java Autoboxing and Unboxing

## Item ID
1599

## Claim
Claim 1: Candidate can understand the core syntax of the language itself


## Claim Behavior (evidence)
- [Autoboxing and Unboxing](https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html) - Oracle

## Content Target
Primitive data types

## Cognitive Model
* Comprehend


## Item Type
Multiple Choice

## Stem
In most situations, Java will "autobox" and "unbox" between primitive values and their corresponding object wrapper classes.  

Choose the line of code that, if placed within the `main` method, would cause a compile error due to Java's inability to perform an implicit type conversion.

## Code Snippet
```java
public class Example {
    public static Integer myCompareToWrapper(Integer num1, Integer num2) {
        return num1.compareTo(num2);
    }

    public static void main(String[] args) {
        // Answer line goes here
    }
}
```

## Answer Key
```java
Integer result = 10.compareTo(20);
```

## Distractors
### 1.
```java
Integer result = myCompareToWrapper(10, 20);
```

### 2.
```java
int result = myCompareToWrapper(Integer.valueOf(10), Integer.valueOf(20));
```

### 3.
```java
int result = Integer.valueOf(10).compareTo(Integer.valueOf(20));
```

## Common errors, misconceptions, or irrelevant information (optional):

* Java will "autobox" and "unbox" when sending and receiving method arguments and return values.
* Java will not convert a primitive type to its corresponding object wrapper by attempting to access a method on the object wrapper's interface.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

