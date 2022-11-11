# programmatic_problem_solving

## Item ID
1506

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
The below code implements the `quickselect` algorithm for finding the kth smallest element in an unordered list.  Fill in the missing line of code.

## Code Snippet (optional)
```java
  <T extends Comparable<? super T>> T select(List<T> values, int k)
  {
      Random random = new Random();
      // randomly select pivot value
      int r = random.nextInt(values.size());
      T pivot = values.get(r);
      List<T> low = new ArrayList<T>();
      List<T> high = new ArrayList<T>();
      for (T value : values) {
          if (value.compareTo(pivot) < 0) {
              low.add(value);
          }
          else if (value.compareTo(pivot) > 0) {
              high.add(value);
          }
      }
      if (k < low.size()) {
          return select(low, k);
      }
      // MISSING LINE

      if (k < 0) {
          return pivot;
      }
      return select(high, k);
  }
```

## Answer Key
`k += high.size() - values.size();`

## Distractors

### 1.
`k -= values.size();`

### 2.
`k -= low.size();`

### 3.
`k = values.size() - high.size() - low.size();`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
