# Java Standard Library Stream API

## Item ID
1423

## Claim
Claim 2: libraries_frameworks

## Claim Behavior (evidence)
Package java.util.stream
https://docs.oracle.com/javase/8/docs/api/java/util/stream/package-summary.html

Stream in Java
https://www.geeksforgeeks.org/stream-in-java/

Java - changing the value of a final variable from within a lambda.
https://stackoverflow.com/questions/31851892/java-changing-the-value-of-a-final-variable-from-within-a-lambda

## Cognitive Model
* Comprehend
* Use

## Item Type
Multiple Choice

## Stem
Java Streams are a way that Java supports functional-style operations on streams of elements.

Which of the following uses the Java stream API to produce the result `12`?

Complete the missing code below.

## Code Snippet
```java
import java.util.Arrays;

public class Example {
    public static void main(String[] args) {
        int[] numbers = new int[] { 2, 4, 5 };

        // Complete the missing code here.

        System.out.println("Result: " + result);
        assert(result == 12);
    }
}
```

## Answer Key
```java
int result = Arrays.stream(numbers)
        .filter(x -> x % 2 == 0)
        .map(x -> x * 2)
        .sum();
```

## Distractors

### 1.
```java
int result = int numbers.stream()
        .filter(x -> x % 2 == 0)
        .map(x -> x * 2)
        .sum();
```

### 2.
```java
final int[] results = new int[1];
Arrays.stream(numbers)
        .filter(x -> x % 2 == 0)
        .map(x -> x * 2)
        .forEach(x -> results[0] = x);
int result = results[0];
```

### 3.
```java
int result;
Arrays.stream(numbers).forEach( x -> {
    if (x % 2 == 0) {
        result = x * 2;
    }
});
```


## Common errors, misconceptions, or irrelevant information (optional):

### 1.
The `stream()` function is in `Arrays`, not on an array of integers.
It's also on `List` but `numbers` is not a `List`.
You should use `Arrays.stream(numbers)` in this case.

### 2.
The clever "final one element array" trick demonstrated here gets around the possible error:
```
error: local variables referenced from a lambda expression must be final or effectively final
                result = x
                ^
```
However, in this case `result[0]` is set equal to `4` (2*2), and then set equal to `8` (2*4),
it doesn't accumulate or sum the values.  The code `result += x` would have worked in this
case.  So the value of `result[0]` is `8` not `12`.

Using the stream API's `.sum()` function would have been more idiomatic.

### 3.
This answer doesn't use the stream API as well as the correct answer.
More importantly, it produces an error:
```
error: local variables referenced from a lambda expression must be final or effectively final
                result = x * 2
                ^
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

