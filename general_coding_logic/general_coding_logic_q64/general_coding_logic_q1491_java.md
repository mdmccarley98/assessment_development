# programmatic_problem_solving

## Item ID
1491

## Claim
2

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Select the code that completes the function

## Code Snippet (optional)
```java
  // function returns index of first matching
  // element in an array
  public static <T> int firstIndexOfElementInArray(T element, List<T> list) {
    int result = -1;

    for (int i = 0; i < list.size(); i++) {
      // MISSING CODE
    }

    return result;
  }
```

## Answer Key
```java
      if (list.get(i).equals(element)) {
        return i;
      }
```

## Distractors

### 1.
```java
      return list.get(i).equals(element);
```

### 2.
```java
      return i + 1;
```

### 3.
```java
      if (list.get(i).equals(element)) {
        return i + 1;
      }
```

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

