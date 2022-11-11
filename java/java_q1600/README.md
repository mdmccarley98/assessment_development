# Generics: Bounded Type Parameters

## Item ID
1600

## Claim
Claim 1: core_language

## Claim Behavior (evidence)

* [Bounded Type Parameters](https://docs.oracle.com/javase/tutorial/java/generics/bounded.html) - Oracle

## Content Target
Generics

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
You are implementing a robust work queue. It should implement the `Queue` interface, but only allow queued items that are *BOTH* `Runnable` *AND* `Serializable`. Which of the following interface definitions is correct?


## Code Snippet (optional)


## Answer Key
```java
public interface RobustWorkQueue<T extends Runnable & Serializable> extends Queue<T> { 

}
```


## Distractors

### 1.
```java
public interface RobustWorkQueue extends Queue<T extends Runnable & Serializable> { 

}
```

### 2.
```java
public interface RobustWorkQueue<T implements Runnable & Serializable> implements Queue<T> { 

}
```

### 3.
```java
public interface RobustWorkQueue<T extends Runnable, Serializable> extends Queue<T> { 

}
```


## Common errors, misconceptions, or irrelevant information (optional):

* Named type parameters are defined on the class or interface that is being implemented.  Attempting to define them on a class or interface that is being implemented or extended will result in a compiler error, such as: "Syntax error on token(s), misplaced construct(s)".
* Interfaces can `extend` other interfaces, they do not `implement` other interfaces. Similarly, type parameters always use the `extends` keyword, not the `implements` keyword.
* Use a single ampersand to specify that a type parameter must implement two interfaces.
* Commas are used between type parameter definitions.  Using a comma instead of an ampersand will result in a warning such as: "The type parameter Serializable is hiding the type Serializable".

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)