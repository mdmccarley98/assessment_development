# algorithmic_knowledge

## Item ID
2731

## Claim
1: algorithms

## Claim Behavior (evidence)
[Integer sorting](https://en.wikipedia.org/wiki/Integer_sorting)

[Counting sort](https://www.interviewcake.com/concept/java/counting-sort)

## Content Target
Computational complexity

## Target Skill Level
4

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Suppose an array of `keys` needs to be sorted by an array of corresponding integer `weights`. What would be the running time of an efficient algorithm that can do this?

## Code Snippet (optional)
```python
keys = ['a', 'b', 'c', 'd']
weight = [5, 1, 4, 3]  # weight of each key at the same index

sorted_keys = sort(keys, weight) 
print(sorted_keys)  # ['b', 'd', 'c', 'a']
```

## Answer Key
O(n)

## Distractors
### 1.
O(n log<sub>2</sub>(n))

### 2.
O(n log<sub>2</sub>(log<sub>2</sub>(n)))

### 3.
O(n<sup>2</sup>)

## Common errors, misconceptions, or irrelevant information:
Popular **comparison sorting** algorithms (like Mergesort and Heapsort) are capped at **O(n log<sub>2</sub>(n))**, and some at **O(n<sup>2</sup>)**, e.g., Quicksort and Insertion sort.

However, most variants of **integer sorting** algorithms (such as Counting sort, which can be used in this instance) run in linear time, usually at the expense of some additional space.

**O(n log<sub>2</sub>(log<sub>2</sub>(n)))** is achievable with some [comparison sorts](https://www.sciencedirect.com/science/article/abs/pii/S0196677402912113) given additional input constraints but is irrelevant here.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
