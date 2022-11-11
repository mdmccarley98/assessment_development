# Java Containers Array

## Item ID
1436

## Claim
Claim 1: core_language

## Claim Behavior (evidence)
Java Arrays
https://www.w3schools.com/java/java_arrays.asp

## Cognitive Model
* Comprehend
* Use

## Item Type
Multiple Choice

## Stem
You are writing a weather app. You want to make an array of the seasons in a year.

How do you initialize an array?

Complete the missing line in the code below to initialize the `seasons` array.

## Code Snippet
```java
import java.util.Arrays;

public class Example {
    public static void main(String[] args) {
        // create array of seasons here
        System.out.println(Arrays.toString(seasons));
    }
}
```

## Answer Key

```
String[] seasons = { "spring", "summer", "fall", "winter" };
```

## Distractors

### 1.
```
String[] seasons = String[]("spring", "summer", "fall", "winter");
```

### 2.
```
String[] seasons = String("spring", "summer", "fall", "winter");
```

### 3.
```
String[] seasons = Arrays.asList("spring", "summer", "fall", "winter");
```


## Common errors, misconceptions, or irrelevant information (optional):

### 1.
You define the type of the array with square brackets, and the value with curly braces.
```
Example.java:7:36
java: '.class' expected
```

### 2.
The `String` constructor does not take a list of values to a string array.
```
Example.java:7:28
java: cannot find symbol
  symbol:   method String(java.lang.String,java.lang.String,java.lang.String,java.lang.String)
  location: class Example
```

### 3.
`Arrays.asList("")` returns a `List<String>` not a `String[]`.
```
/Users/robert/Dev/triplebyte-java/containers-array/src/Example.java:7:41
java: incompatible types: no instance(s) of type variable(s) T exist so that java.util.List<T> conforms to java.lang.String[]
```


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

