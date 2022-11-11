# programmatic_problem_solving

## Item ID
q280

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What statement about the output of the following code is most accurate?

## Code Snippet (optional)
```java
public class Main {

    public static int number = 0;

    public static void test() {
        number = 0;       
        for (int i = 0; i < 10; i++) {
            new Thread(new Runnable() {
                public void run() {
                    number++;
                }
            }).start();
        }
        System.out.println(number);
    }

    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            test();
        }
    }
}
```

## Answer Key
It prints out ten unpredictable values that are either positive or 0.

## Distractors

### 1.
It prints out ten unpredictable positive values.

### 2.
It prints out value “0” ten times.

### 3.
It prints out the same non-zero value ten times.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

