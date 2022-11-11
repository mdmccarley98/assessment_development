# Java Standard Library Time API

## Item ID
1421

## Claim
Claim 2: libraries_frameworks


## Claim Behavior (evidence)
Package java.time
https://docs.oracle.com/javase/8/docs/api/java/time/package-summary.html

The Java Tutorials: Date-Time Design Principles
https://docs.oracle.com/javase/tutorial/datetime/overview/design.html


## Cognitive Model
* Comprehend
* Use


## Item Type
Multiple Choice

## Stem
Java has a standard API for fluently programming dates and time.

In the following example, what is printed as a result?

## Code Snippet
```java
public class Example {
    public static void main(String[] args) {
        Object result = LocalDate
                .of(2030, Month.SEPTEMBER, 21)
                .with(TemporalAdjusters.next(DayOfWeek.FRIDAY))
                .plusDays(7)
                .minusWeeks(4)
                .getDayOfWeek();
        System.out.println("result: " + result);
    }
}
```

## Answer Key
```
result: FRIDAY
```

## Distractors
### 1.
```
result: 2030-09-09
```

### 2.
```
result: 2030-09-13
```

```
result: SATURDAY
```

## Common errors, misconceptions, or irrelevant information (optional):

* Any day's next Friday is a Friday.
* Friday + 7 days is a Friday.
* Friday minus 3 weeks is a Friday.

The before `getDayOfWeek()` is called, the value is `2030-09-06`.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

