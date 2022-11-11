# programmatic_problem_solving

## Item ID
1553

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
What is wrong with the following code?

## Code Snippet (optional)
```java
  public static <T> int[] findFirstPosition(T[][] array, Predicate pred) {
    int[] pos = {-1, -1};

    for (int i = 0; i < array.length; i++) {
      T[] row = array[i];
      for(int j = 0; j < row.length; j++) {
        if (pred.test(row[j])) {
          pos[0] = i;
          pos[1] = j;
          break;
        }
      }
    }

    return pos;
  }
```

## Answer Key
This code will return a position for which `pred` is true, but might not return the *first* occurrence.

## Distractors

### 1.
This code only works for square arrays.

### 2.
This code will return the *last* position for which `pred` is true.

### 3.
`j` is going to be returned incorrectly. It will always be the length of the row.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

