# programmatic_problem_solving

## Item ID
q452

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
What's wrong with this code?

## Code Snippet (optional)
```java
// Take two sorted lists, and return
// both combined in sorted order
List<Integer> mergeTwoSortedLists(List<Integer> l1, List<Integer> l2) {
    List<Integer> result = new ArrayList<Integer>();
    if (l1.get(0) < l2.get(0)) {
        result.addAll(l1);
    }
    result.addAll(l2);
    return result;
}
```

## Answer Key
This code makes no sense. It does something, but not merge two sorted lists

## Distractors

### 1.
This assumes the lists are sorted high to low, not low to high

### 2.
This will break if there are negative values in the lists

### 3.
This looks good. No errors

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

