# Java Containers java.util.Arrays

## Item ID
1433

## Claim
Claim 1: core_language


## Claim Behavior (evidence)
Class Arrays
https://docs.oracle.com/javase/7/docs/api/java/util/Arrays.html

Arrays class in Java
https://www.geeksforgeeks.org/array-class-in-java/


## Cognitive Model
* Comprehend
* Use


## Item Type
Multiple Choice

## Stem
You are writing an app that lists several shapes.  You want them to be in alphabetical order.
The `Arrays` utility class can help.

Complete the missing code below to sort the shapes array.

## Code Snippet
```java
import java.util.Arrays;

public class Example {
    public static void main(String[] args) {
        String[] shapes = {"square", "circle", "triangle"};

        // sort the shapes array here

        for (String shape : shapes) {
            System.out.println(shape);
        }
    }
}
```

## Answer Key
```
Arrays.sort(shapes);
```

## Distractors

### 1.
```
shapes = shapes.sort();
```

### 2.
```
shapes = ArrayList.sort(shapes);
```

### 3.
```
for (int i = 0; i < shapes.length; i++) {
    shapes[i] = shapes[(i + 1) % shapes.length];
}
```

## Common errors, misconceptions, or irrelevant information (optional):
`java.utils.Arrays` has a function `sort()` that sorts the array in place.

### 1
Arrays don't have a built in sort method.

### 2
`ArrayList` doesn't have a static `sort` method.

### 3
The for loop does not sort the array, and has a bug producing:
```
circle
triangle
circle
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

