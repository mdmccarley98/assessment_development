# Protecting Against Overflow

## Item ID
1594

## Claim
Claim 2: libraries_frameworks

## Claim Behavior (evidence)

* [Math: addExact()](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html#addExact-int-int-) - Oracle

## Content Target
Math

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
When doing arithmetic it is important to protect against any possible overflow, especially when the data comes from a user or third-party API.

Which of the following definitions of `addUserInput()` will throw an ArithmeticException when called by the following line of code:


## Code Snippet (optional)
```java
int sum = addUserInput(Integer.MAX_VALUE, 1);
```

## Answer Key
```java
public int addUserInput(int num1, int num2) {
    return Math.addExact(Integer.MAX_VALUE, 1);
}
```


## Distractors

### 1.
```java
public int addUserInput(int num1, int num2) throws ArithmeticException {
    return num1 + num2;
}
```

### 2.
```java
public int addUserInput(int num1, int num2) {
    int sum = num1 + num2;

    if (sum > Integer.MAX_VALUE) {
        throw new ArithmeticException();
    }
    return sum;
}
```

### 3.
```java
public int addUserInput(int num1, int num2) {
    return Integer.sum(num1, num2);
}
```


## Common errors, misconceptions, or irrelevant information (optional):

* `java.lang.Math` provides methods for protecting against overflow.
* `ArithmeticException` is a runtime exception. So specifying that a method could throw it has no purpose, other than for documentation.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)