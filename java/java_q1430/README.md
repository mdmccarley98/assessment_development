# Java Features Interface

## Item ID
1430

## Claim
Claim 1: core_language


## Claim Behavior (evidence)
Java implements Keyword
https://www.w3schools.com/java/ref_keyword_implements.asp

Java extends Keyword
https://www.w3schools.com/java/ref_keyword_extends.asp

Java instanceof Keyword
https://www.w3schools.com/java/ref_keyword_instanceof.asp

Java instanceof and it's applications
https://www.geeksforgeeks.org/java-instanceof-and-its-applications/

"What's an example of duck typing in Java?"
> Java is by design not fit for duck typing.
> https://stackoverflow.com/questions/1079785/whats-an-example-of-duck-typing-in-java

## Cognitive Model
* Comprehend
* Use


## Item Type
Multiple Choice


## Stem
Java's type system is a powerful tool.  
In this puzzle the `Mallard`, `Swan`, and `DuckNoiseGenerator` all have a `public void quack()` function.

This example executes which `quack()` functions?


## Code Snippet
```java
// Copyright (C) 2020 Triplebyte

interface Duck {
    void quack();
}

class Mallard implements Duck {
    public void quack() { System.out.println("Mallards quack"); }
}

abstract class Anatidae implements Duck {
}

class Swan extends Anatidae {
    public void quack() { System.out.println("Swans quack"); }
}

class DuckNoiseGenerator {
    public void quack() { System.out.println("Generators caw"); }
}

public class Example {
    public static void main(String[] args) {
        Object[] birds = new Object[]{ 
                new Mallard(), 
                new Swan(), 
                new DuckNoiseGenerator()
        };
        for (Object bird: birds) {
            if (bird instanceof Duck) {
                ((Duck) bird).quack();
            }
        }
    }
}
```

## Answer Key
```
Malards quack
Swans quack
```

## Distractors
### 1.
```
Malards quack
Swans quack
Generators quack
```

### 2.
It executes none of the `quack()` functions.

### 3.
```
Malards quack
```

## Common errors, misconceptions, or irrelevant information (optional):
Java does NOT support something called "duck typing".
Duck typing gets its name from the example: "If it walks like a duck, and quacks like a duck, it must be a duck!"

* `Mallard` implements `Duck` directly.
* `Swan` implements `Duck` through their parent class `Anatidae` which implements `Duck`.
* Only `DuckNoiseGenerator` does NOT implement `Duck`.

Does this mean Java is bad?  No.  There are cases where a function name doesn't mean it does the thing expected by the interface.

An example might be `void click()`.
It could either mean the class should respond to a mouse click, or create a click event in the system.
It may be difficult to figure out if a `MouseClick` class responds to or generates clicks.
Someone could use it in the wrong situation with duck typing.

With Java's more strict typing, it's signature might be `class MouseClick extends EventProducer`.
Now you can tell from the signature that it produces clicks.  `MouseClick` cannot be used in place of an `EventReciever` class
that also has a `void click()` function.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

