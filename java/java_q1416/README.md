# Java Syntax Strings

## Item ID
1416

## Claim
Claim 1: core_language

## Claim Behavior (evidence)
Difference between == and .equals method in Java
https://www.geeksforgeeks.org/difference-equals-method-java/

Package java.lang
https://docs.oracle.com/javase/7/docs/api/java/lang/package-summary.html

## Cognitive Model
* Recall
* Comprehend

## Item Type
Multiple Choice 

## Stem
You're writing a program to help people choose healthy snacks.

What does this program do?

## Code Snippet
```java
public class SyntaxStrings {
    public static void main(String[] args) {
        String aHealthySnack = new String("apples");
        String myFavoriteSnack = new String("apples");
        if (aHealthySnack == myFavoriteSnack) {
            System.out.println("Your snack is healthy.");
        } else {
            System.out.println("Choose a healthier snack next time.");
        }
    }
}
```

## Answer Key
* Prints "Choose a healthier snack next time." to the console.

## Distractors

### 1.
* Prints "Your snack is healthy." to the console.

### 2.
* Throws an exception:
```
Exception in thread "main" java.lang.NullPointerException
```

### 3.
* Does not compile:
```
java: cannot find symbol
  symbol:   method String(java.lang.String)
  location: class SyntaxStrings
```

## Common errors, misconceptions, or irrelevant information (optional):

### 1.
The `==` operator compares by object id, not by the contents of the string.
`new String()` was used to create both strings, so they have different internal ids.

### 2.
The program above does not throw an exception.

### 3.
You don't need to `import java.lang.String`. Java includes all `java.lang` classes by default.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


