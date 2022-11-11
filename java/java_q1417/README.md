# Java Syntax Polymorphism

## Item ID
1417

## Claim
Claim 1: core_language

## Claim Behavior (evidence)
Dynamic Method Dispatch or Runtime Polymorphism in Java
https://www.geeksforgeeks.org/dynamic-method-dispatch-runtime-polymorphism-java/?ref=rp

## Cognitive Model
* Recall
* Comprehend

## Item Type
Multiple Choice

## Stem
You're writing a shopping cart for a website that sells computers.

What is printed on the screen when the following code executes?

## Code Snippet
```java
class Item {
    String description = "Item";
    boolean isOnSale = true;

    public String getDescription() {
        return description;
    }

    public String getOnSale() {
        if (isOnSale) {
            return ", is ON SALE";
        }
        return "";
    }

    public String toString() {
        return getDescription() + getOnSale();
    }
}

class Computer extends Item {
    Computer(String computerDescription) {
        description = computerDescription;
    }

    public String getDescription() {
        return "PC: " + super.getDescription();
    }
}

public class Example {
    public static void main(String[] args) {
        Item item = new Computer("gamer elite");
        System.out.println(item);
    }
}
```

## Answer Key
```
PC: gamer elite, is ON SALE
```

## Distractors
### 1.
```
Item, is ON SALE
```

### 2.
```
Exception in thread "main" java.lang.StackOverflowError
	at java.lang.AbstractStringBuilder.append(AbstractStringBuilder.java:449)
	at java.lang.StringBuilder.append(StringBuilder.java:136)
	at Computer.getDescription(Example.java:30)
	at Computer.getDescription(Example.java:30)
	at Computer.getDescription(Example.java:30)
    ...
```

### 3.
```
Computer@74a14482
```

## Common errors, misconceptions, or irrelevant information (optional):
Java calls the `getDescription()` function on the `Computer` class, even though `item` is an `Item`.

The `getDescription()` class in `Computer` calls `super.getDescription()` if it called itself and not it's parent class then it would stack overflow.

When `println` prints an `Object`, it calls the object's `toString()` function.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

