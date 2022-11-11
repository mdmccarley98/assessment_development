# Java Containers `HashSet`

## Item ID
1434

## Claim
Claim 1: core_language


## Claim Behavior (evidence)
Class HashSet
https://docs.oracle.com/javase/8/docs/api/java/util/HashSet.html

HashSet in Java with Examples
https://www.geeksforgeeks.org/hashset-in-java/?ref=lbp


## Cognitive Model
* Comprehend
* Use


## Item Type
Multiple Choice

## Stem
You're writing a children's app to teach numbers.  Every time they get a number correct you add it to `numbers`.

What does the following program print out?

## Code Snippet
```java
import java.util.HashSet;

class Question {
    Integer number;
    Question(Integer number) {
        this.number = number;
    }

    @Override
    public String toString() {
        return number.toString();
    }
}

class Example {
    public static void main(String[] args){
        System.out.println("Numbers:");
        HashSet<Integer> numbers = new HashSet<>();
        numbers.add(2);
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        numbers.forEach(System.out::println);

        System.out.println("\nQuestions:");
        HashSet<Question> questions = new HashSet<>();
        questions.add(new Question(2));
        questions.add(new Question(1));
        questions.add(new Question(2));
        questions.add(new Question(3));
        questions.forEach(System.out::println);
    }
}
```

## Answer Key
```
Numbers:
1
2
3

Questions:
3
2
1
2
```

## Distractors

### 1.
```
Numbers:
2
1
2
3

Questions:
2
1
2
3
```


### 2.
```
Numbers:
1
2
3

Questions:
1
2
3
```

### 3.
```
Numbers:
8

Questions:
8
```


## Common errors, misconceptions, or irrelevant information (optional):
A `HashSet` makes sure only one of each item is in the list.
The `Question` object does not implement `equals`, so `HashSet` does not know how to compare the items.
The set stores both `2` questions, but only one of the `2` integers.

A HashSet does not necessarily store the items in order, but in this example the numbers happened to be printed in order.
Only the correct answer has the correct set of numbers and questions.
  
HashSet does not mathematically add or sum the numbers together.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

