# programmatic_problem_solving

## Item ID
1557

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
What is the value of `g` that is printed when `main` runs?

## Code Snippet (optional)
```java
class Recursive<I> {
  public I func;
}

class Main {
  public static void main(String[] args) {
    Recursive<Function<Integer, Integer>> recurse = new Recursive<>();
    recurse.func = (n) -> n <= 1 ? 1 : n * recurse.func.apply(n - 1);

    int g = recurse.func.apply(4);

    System.out.println(g);
  }
}
```

## Answer Key
24

## Distractors

### 1.
60

### 2.
120

### 3.
1

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

