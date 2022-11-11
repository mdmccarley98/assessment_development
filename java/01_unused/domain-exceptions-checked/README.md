# Exception Handling

## Item ID
java-domain-exceptions-checked

## Claim
Claim 6: Candidates are able to complete everyday coding tasks that relate to the language’s core features.


## Claim Behavior (evidence)
* [Lesson: Exceptions](https://docs.oracle.com/javase/tutorial/essential/exceptions/index.html) - Oracle
* [The Catch or Specify Requirement](https://docs.oracle.com/javase/tutorial/essential/exceptions/catchOrDeclare.html) - Oracle

## Cognitive Model
* Comprehend

## Item Type
Multiple Choice

## Stem
The following method definition fails to compile. This compilation error can be fixed by adding a `throws` statement to the method signature. Which of the following is true?

## Code Snippet
```java
public void mightThrowExceptions() {
    Random rand = new Random();
    
    if (rand.nextBoolean()) {
        throw new NullPointerException();
    }

    if (rand.nextBoolean()) {
        throw new FileNotFoundException();
    }
}
```

## Answer Key
The method signature of `mightThrowExceptions` *ONLY* needs to throw `FileNotFoundException`.

```java
public void mightThrowExceptions() throws FileNotFoundException
```

## Distractors

### 1.
The method signature of `mightThrowExceptions` *ONLY* needs to throw `NullPointerException`.

```java
public void mightThrowExceptions() throws NullPointerException
```

### 2.
The method signature of `mightThrowExceptions` needs to throw *BOTH* `NullPointerException` and `FileNotFoundException`.

```java
public void mightThrowExceptions() throws NullPointerException, FileNotFoundException
```

### 3.
The method signature of `mightThrowExceptions` is *ONLY ALLOWED* to throw *ONE* exception. So that one exception must be a superclass of all possible exceptions thrown by the method.

```java
public void mightThrowExceptions() throws Exception
```


## Common errors, misconceptions, or irrelevant information (optional):
* Java has "checked" and "unchecked" exceptions. The compiler only enforces the handling of checked exceptions.
* NullPointerExceptions are unchecked exceptions.  Handling unchecked exceptions is not necessary for a program to compile.
* Methods may `throw` exceptions that they can not handle, but all checked exceptions must be handled with a try-catch statement somewhere in the application.
* Methods can throw any number of exceptions. Use commas to delimit the exceptions.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

