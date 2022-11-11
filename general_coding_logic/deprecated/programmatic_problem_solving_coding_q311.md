# programmatic_problem_solving

## Item ID
q311

## Claim
5

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What is the result of compiling and running the following code?

## Code Snippet (optional)
```java
public class Main {

    static void run(List<Integer> a, List<Integer> b) {
        a.addAll(b);
        b = a;
    }

    public static void main(String[] args) {
        ArrayList<Integer> a = new ArrayList<>(Arrays.asList(1, 2));
        ArrayList<Integer> b = new ArrayList<>(Arrays.asList(3, 4));
        run(a, b);
        System.out.println(a.toString() + b.toString());
    }
}
```

## Answer Key
It prints `[1, 2, 3, 4][3, 4]`

## Distractors

### 1.
It fails to compile because the run method accepts `List\u003cInteger\u003e` but not `ArrayList\u003cInteger\u003e`

### 2.
It prints `[1, 2][3, 4]`

### 3.
It prints `[1, 2, 3, 4][1, 2, 3, 4]`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

