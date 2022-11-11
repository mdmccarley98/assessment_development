# Garbage Collection

## Item ID
1591

## Claim
Claim 1: core_language


## Claim Behavior (evidence)
- [Java Memory Management](https://dzone.com/articles/java-memory-management) - DZone
- [Available Collectors](https://docs.oracle.com/javase/9/gctuning/available-collectors.htm) - Oracle

## Content Target
Memory Management

## Cognitive Model
* Comprehend

## Item Type
Multiple Choice

## Stem
Regarding Garbage Collection in Java, which of the following statements are true?

## Code Snippet


## Answer Key
You can choose the right Garbage Collector implementation for your application on the Java command line.

```
java -XX:+UseG1GC -jar myApp.jar
```

## Distractors
### 1.
Java doesn't let you choose a Garbage Collector implementation, but you can request garbage collection at runtime.

```java
System.gc();
```

### 2.
Java doesn't give you any control over the Garbage Collector, which is why it is so great. It is totally automatic!

### 3.
It is impossible for Java applications to have memory leaks, since the Garbage Collector automatically reclaims unnecessary memory allocations.


## Common errors, misconceptions, or irrelevant information (optional):

* There are many Garbage Collector implementations to choose from.
* Different versions of Java have different default Garbage Collectors.
* It is possible to request garbage collection at runtime using `System.gc()`

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

