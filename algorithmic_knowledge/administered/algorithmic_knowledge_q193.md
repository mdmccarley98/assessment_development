# algorithmic_knowledge

## Item ID
193

## Claim
1: algorithms

## Target Skill Level
3

## Claim Behavior (evidence)
NA

## Content Target
Sorting

## Cognitive Model
Comprehend, Use

## Item Type
Multiple Choice

## Stem
You have to sort an array of 100,000 items in place. Most items are already in the correct order, except that 10 pairs of random adjacent items have been swapped. Which algorithm will sort the array the fastest (i.e., with the fewest number of operations)?

## Code Snippet (optional)

## Answer Key
Insertion sort

## Distractors
### 1.
Merge sort

### 2.
Quicksort

### 3.
Heapsort

## Common errors, misconceptions, or irrelevant information:
- Neither mergesort nor quicksort can sort the array in place, as they require **O(n)** and **O(log<sub>2</sub> n)** space respectively. 
- Heapsort can sort the array in place, but its best case time complexity is **O(n log<sub>2</sub> n)** because it has to build a binary heap.
- Insertion sort can sort the array in place. Its time complexity varies between linear, i.e., **O(n)** and quadratic, i.e., **O(n<sup>2</sup>)**, depending on how many items are already sorted and how far an item needs to be pushed back to insert it in its proper place.
    - Since all of the displaced items in this example are *adjacent to each other*, the algorithm will run in linear time with its time complexity being bound by **O(n + k)**, where **k** is the number of pairs that need to be swapped and **k <= n/2**.
    - The number of displaced items is irrelevant in this scenario; they would only play a role when their position in the array is unconstrained, in which case heapsort may yield better results.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
