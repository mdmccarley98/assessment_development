# Overloaded Methods

## Item ID
1592

## Claim
Claim 1: core_language

## Claim Behavior (evidence)

* [Defining Methods](https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html) - Oracle

## Content Target
Overloading

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Java allows you to "overload" methods. The following signatures are attempts to overload `myMethod`. Which of the following method signatures is *NOT* a valid way to overload `myMethod`?


## Code Snippet (optional)
```java
public Integer myMethod(Integer i) {
    return i;
}
```

## Answer Key
```java
public String myMethod(Integer i) {
    return i.toString();
}
```


## Distractors

### 1.
```java
protected static Integer myMethod(Float f) {
    return Math.round(f);
}
```

### 2.
```java
public Integer myMethod(Number n) {
    return n.intValue();
}
```

### 3.
```java
public Integer myMethod(String value, Integer i) {
    return i;
}
```


## Common errors, misconceptions, or irrelevant information (optional):

* Method access modifiers can be different for different overloaded methods.
* When overloaded methods differ by arguments that are related, for example Number and Integer, Java will execute the most specific of the available method definitions. So, an overloaded method definition that takes an Integer argument will take precedence over a definition that takes a Number argument.
* In Java, it is not possible to overload a method by specifying a different return type.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)