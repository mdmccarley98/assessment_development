# Computer Science: Name This Sorting Algorithm

## Item ID
cs-recognize-sort-algorithm

## Claim
Computer Science

## Claim Behavior (evidence)

* [Quicksort](https://en.wikipedia.org/wiki/Quicksort) - Wikipedia

## Content Target
Computer Science

## Cognitive Model
Recall


## Item Type
Multiple Choice

## Stem
What is the name of this sorting algorithm?


## Code Snippet (optional)

```
function mysterySort(array) {
  if (array.length === 0) return []
  let [pivot, ...tail] = array
  let lowerPartition = mysterySort(tail.filter(x => x < pivot))
  let upperPartition = mysterySort(tail.filter(x => x >= pivot))

  return [...lowerPartition, pivot, ...upperPartition]
}
```

## Answer Key
Quicksort

## Distractors

### 1.
Insertion Sort

### 2.
Heapsort

### 3.
Bubble Sort


## Common errors, misconceptions, or irrelevant information (optional):

* Merge sort and Quicksort are both recursive. So some people might confuse them.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
