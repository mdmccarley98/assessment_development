# Try Catch Finally

## Item ID
1587

## Claim
Claim 3: coding_tasks

## Claim Behavior (evidence)

* [Putting It All Together](https://docs.oracle.com/javase/tutorial/essential/exceptions/putItTogether.html) - Oracle

## Content Target
Multiple Exceptions

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
What is the output of the following program?


## Code Snippet (optional)
```java
import java.io.FileNotFoundException;
import java.io.IOException;

public class Example {
    public static void throwsIOException(String message) throws IOException {
        throw new IOException(message);
    }
    public static void throwsFileNotFoundException(String message) throws FileNotFoundException {
        throw new FileNotFoundException(message);
    }

    public static void main(String[] args) {
        try {
            System.out.println("Inside try.");
            throwsIOException("Exception 1");
            System.out.println("After Exception 1.");
            throwsFileNotFoundException("Exception 2");
            System.out.println("After Exception 2.");
        } catch (FileNotFoundException e) {
            System.out.println("Handling: " + e.getMessage() + ".");
        } catch (IOException e) {
            System.out.println("Handling: " + e.getMessage() + ".");
        } finally {
            System.out.println("Inside finally.");
        }

        try {
            System.out.println("Inside second try.");
        } finally {
            System.out.println("Inside second finally.");
        }
    }
}
```

## Answer Key
Inside try.
Handling: Exception 1.
Inside finally.
Inside second try.
Inside second finally.


## Distractors

### 1.
Inside try.
Handling: Exception 1.
Inside finally.
Inside second try.

### 2.
Inside try.
Handling: Exception 1.
After Exception 1.
Handling: Exception 2.
After Exception 2.
Inside finally.
Inside second try.
Inside second finally.

### 3.
Inside try.
Handling: Exception 2.
Inside finally.
Inside second try.
Inside second finally.


## Common errors, misconceptions, or irrelevant information (optional):

* Multiple `catch` blocks can be used to handle different exceptions.
* Exectution of the `try` block stops if an exception is thrown.
* The `finally` block is exectuted even when there are no exceptions.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)