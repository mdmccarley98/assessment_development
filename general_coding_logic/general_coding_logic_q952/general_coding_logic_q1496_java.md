# programmatic_problem_solving

## Item ID
1496

## Claim
3

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
The following code attempts to detect whether an array contains positive and negative numbers in a single pass.  Which test input would reveal a bug by producing incorrect output?

## Code Snippet (optional)
```java
  public static Boolean[] hasPosNeg(List<Integer> list) {
    boolean hasPos = false;
    boolean hasNeg = false;

    for (int i = 0; i < list.size(); i++) {
      hasPos = list.get(i) > 0;
      hasNeg = list.get(i) < 0;
    }

    return new Boolean[] { hasPos, hasNeg };
  }
```

## Answer Key
```java
Arrays.asList(-1, 0, 1);
```

## Distractors

### 1.
```java
new ArrayList<Integer>();
```

### 2.
```java
Arrays.asList(0, 1, 2);
```

### 3.
```java
Arrays.asList(0, -1, -2);
```

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

