# Try with Resource

## Item ID
1589

## Claim
Claim 3: coding_tasks

## Claim Behavior (evidence)

* [Try with Resources](https://docs.oracle.com/javase/tutorial/essential/exceptions/tryResourceClose.html) - Oracle

## Content Target
Try, catch, throw

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
What is the output of the following program?


## Code Snippet (optional)
```java
import java.io.Closeable;
import java.io.IOException;

class MyResource implements Closeable {
    public void doStuff() {
        System.out.println("Using resource.");
    }

    @Override
    public void close() throws IOException {
        System.out.println("Closing...");
    }
}

public class Example {
    public static void main(String[] args) {
        try (MyResource res = new MyResource()) {
            System.out.println("Inside Try Block.");

            res.doStuff();
            
        } catch (Exception e) {
            System.out.println("Inside Catch Block.");
        } finally {
            System.out.println("Inside Finally Block.");
        }
    }
}
```

## Answer Key
Inside Try Block.
Using resource.
Closing...
Inside Finally Block.


## Distractors

### 1.
Inside Try Block.
Inside Finally Block.

### 2.
Inside Try Block.
Using resource.
Inside Finally Block.

### 3.
Inside Try Block.
Using resource.
Closing...
Inside Catch Block.
Inside Finally Block.


## Common errors, misconceptions, or irrelevant information (optional):

* Java objects do not have destructor methods, unlike C++. However, it is possible for objects to automatically clean up their resources after use or in case of an exception.
* The `Closable.close()` method is called before the `finally` block of the `try-catch`.
* The `catch` block is never executed because no exceptions are thrown.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)