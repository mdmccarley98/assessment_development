# algorithmic_knowledge - 3SUM Algorithm Complexity

## Item ID
2867

## Claim
1: algorithms

## Target Skill Level
4

## Claim Behavior (evidence)
https://people.csail.mit.edu/virgi/ksumtradeoff.pdf

## Content Target
Computational Complexity

## Cognitive Model
Comprehend, Use

## Item Type
Multiple Choice

## Stem
Given an array of unsorted integers `nums` and a target sum `sum`, is it possible to identify all unique triplets of integers `[x, y, z]` that belong to the array and sum up to `sum`?
<br><br>
What is the most efficient deterministic algorithm that can do this? *Note: assume that `nums` may contain duplicates and `x`, `y`, `z` may not be distinct.*

## Code Snippet (optional)

## Answer Key
Yes, this can be done in **Θ(n<sup>2</sup>)** time

## Distractors
### 1.
Yes, this can be done in **Θ(n<sup>3</sup>)** time

### 2.
Yes, this can be done in **Θ(n)** time

### 3.
It is not possible to identify unique triplets in arrays with duplicates

## Common errors, misconceptions, or irrelevant information:
A naive approach to this problem is to consider all possible combinations with a brute force search
in Θ(n^3) time.

This problem can't be solved in Θ(n) time because there is always an extra combination to
consider, even when employing the 2SUM method and the values are hashed.

Unique triplets can be identified regardless of the presence of duplicate values, as the uniqueness
of the values doesn't affect the uniqueness of their arrangement in a triplet.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
