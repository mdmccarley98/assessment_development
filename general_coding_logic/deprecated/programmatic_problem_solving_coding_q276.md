# programmatic_problem_solving

## Item ID
q276

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Which statement about the following code is most accurate?

## Code Snippet (optional)
```java
public class Foo {

    private Foo() {
    }

    private static Foo instance;

    public synchronized static Foo getInstance() {
        if (instance == null)
            instance = new Foo();
        return instance;
    }
}
```

## Answer Key
This is a thread safe singleton implementation in Java.

## Distractors

### 1.
The synchronized keyword on getInstance() method is unnecessary in any cases.

### 2.
This implementation is not thread safe.

### 3.
This code is unnecessarily complex. We can always use static methods on a class instead.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

