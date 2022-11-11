# Java Containers Wrappers

## Item ID
1432

## Claim
Claim 1: core_language


## Claim Behavior (evidence)
Java Wrapper Classes
https://www.w3schools.com/java/java_wrapper_classes.asp

Wrapper Classes in Java
https://www.geeksforgeeks.org/wrapper-classes-java/


## Cognitive Model
* Comprehend
* Use


## Item Type
Multiple Choice


## Stem
You are writing a customer information app. The business uses integers for customer ids.  You decided to use a `HashMap` to hold a list of customers by id.

How do you create a `HashMap`?

Complete the missing line in the code below to initialize a `HashMap`.


## Code Snippet
```java
import java.util.HashMap;

class Customer {
}

public class Example {
    public static void main(String[] args) {
        // create a customers HashMap here
        customers.put(41, new Customer());
        customers.put(47, new Customer());
        customers.forEach((id, customer) -> System.out.println(id));
    }
}
```

## Answer Key
```
HashMap<Integer, Customer> customers = new HashMap<>();
```


## Distractors
### 1.
```
HashMap<int, Customer> customers = new HashMap<>();
```

### 2.
```
HashMap<Customer> customers = new HashMap<>();
```

### 3.
```
HashMap<Int, Customer> customers = new HashMap<>();
```


## Common errors, misconceptions, or irrelevant information (optional):
`int` cannot be used in the container classes because it is not an `Object`.
The Java "Wrapper Classes" are objects that wrap the primitive data types.
```
java: unexpected type
  required: reference
  found:    int
```

A `HashMap<K, V>` takes two types, the key `K` and value `V`.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

