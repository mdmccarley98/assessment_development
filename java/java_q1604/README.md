# Variable Arguments

## Item ID
1604

## Claim
Claim 1: core_language


## Claim Behavior (evidence)
- [Passing Information to a Method or a Constructor](https://docs.oracle.com/javase/tutorial/java/javaOO/arguments.html) - Oracle

## Content Target
Methods

## Cognitive Model
* Recall


## Item Type
Multiple Choice

## Stem
Choose the method signature that correctly uses *Varargs*.

## Code Snippet

## Answer Key
```java
public int method(String message, int ...nums);
```

## Distractors
### 1.
```java
public int method(String ...message, int ...nums);
```

### 2.
```java
public int method(int nums..., String message);
```

### 3.
```java
public int method(String message, int[] ...nums);
```

## Common errors, misconceptions, or irrelevant information (optional):

* The Varargs feature automatically converts a variable number of arguments into an array.
* Only the last argument of a method signature can use the Varargs feature.
* It is not necessary to add array brackets to the variable argument definition.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

