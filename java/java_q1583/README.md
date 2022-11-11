# Overriding the Equals Method

## Item ID
1583

## Claim
Claim 1: core_language

## Claim Behavior (evidence)

* [Object.hashCode()](https://docs.oracle.com/javase/10/docs/api/java/lang/Object.html#hashCode()) - Oracle
* [Object.equals()](https://docs.oracle.com/javase/10/docs/api/java/lang/Object.html#equals(java.lang.Object)) - Oracle

## Content Target
Abstract data types

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
The following program includes an implementation of 2D coordinates.  When this program is executed, what is the size of `coords`, and why?


## Code Snippet (optional)
```java
import java.util.HashSet;
import java.util.Set;

class Coordinate {
    private Integer x;
    private Integer y;

    public Coordinate(Integer x, Integer y) {
        this.x = x;
        this.y = y;
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Coordinate)) {
            return false;
        }
        Coordinate other = (Coordinate) o;

        return this.x.equals(other.x) && this.y.equals(other.y);
    }
}

public class Example {
    public static void main(String[] args) {
        Coordinate c1 = new Coordinate(1, 1);
        Coordinate c2 = new Coordinate(1, 1);

        assert c1.equals(c2);

        Set<Coordinate> coords = new HashSet<Coordinate>();

        coords.add(c1);
        coords.add(c2);

        System.out.println("Size of coords: " + coords.size());
    }
}
```

## Answer Key
The size is 2, because `Object.hashCode()` has not been overridden.


## Distractors

### 1.
The size is 1, because Sets will never contain two instances of object that are equal to each other.

### 2.
`System.out.println(...)` is never reached, because the implementation of `equals(...)` is incorrect and the assertion fails.

### 3.
The size is 2, because Hashsets do not automatically check for duplicates.


## Common errors, misconceptions, or irrelevant information (optional):

* Java developers must remember to always override `Object.hashCode()` every time they override `Object.equals()`. Without doing this, hash-based collections will likely not work as intended.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
