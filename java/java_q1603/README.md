# Switch Case

## Item ID
1603

## Claim
Claim 1: core_language

## Claim Behavior (evidence)

* [The switch statement](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/switch.html) - Oracle

## Content Target
Switch

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
What is the output of the following program?


## Code Snippet (optional)
```java
import java.util.ArrayList;
import java.util.List;

enum Shape {
    QUADRILATERAL("quadrilateral"),
    PARALLELOGRAM("parallelogram"),
    RECTANGLE("rectangle"),
    SQUARE("square");

    private String name;

    private Shape(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return name;
    }
}

public class Categorizer {

    public static void categorize(Shape shape) {
        List<String> categories = new ArrayList<>();

        switch (shape) {
            case SQUARE:
                categories.add(Shape.SQUARE.toString());
            case RECTANGLE:
                categories.add(Shape.RECTANGLE.toString());
            case PARALLELOGRAM:
                categories.add(Shape.PARALLELOGRAM.toString());
                break;
            case QUADRILATERAL:
                categories.add(Shape.QUADRILATERAL.toString());
                break;
            default: 
                throw new RuntimeException();
        }

        String first = categories.remove(0);
        System.out.print(String.format("A %s", first));

        if (!categories.isEmpty()) {
            String others = String.join(", and a ", categories);
            System.out.print(String.format(" is also a %s", others));
        }

        System.out.println(".");
    }
    
    public static void main(String[] args) {
        categorize(Shape.SQUARE);
    }
}
```

## Answer Key
A square is also a rectangle, and a parallelogram.

## Distractors

### 1.
A square.

### 2.
A square is also a rectangle, and a parallelogram, and a quadrilateral.

### 3.
This program throws a `RuntimeException` because the case statements do not specify the enum. For instance, the first case statement should be:
```java
case Shape.SQUARE: 
```


## Common errors, misconceptions, or irrelevant information (optional):

* Switch cases in Java "fall though" to lower blocks unless they hit a `break`, `return`, or `throw` statement. This includes `case` and `default` statements.
* The `switch` statement can match on byte, short, char, and int primitive data types, as well as Strings and Enum types.
* Enum cases are referred to by their unqualified enum constant. Fully qualifying the enum actually produces a compile error.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
