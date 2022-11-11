#


## Item ID
2199

## Claim

8

## Claim Behavior (evidence)

[Embarrassingly parallel](https://en.wikipedia.org/wiki/Algorithms_for_calculating_variance#Welford's_online_algorithm)

## Content Target

Parallel algorithms

## Cognitive Model

Comprehend

## Item Type

Multiple Choice

## Stem

An "embarrassingly parallel" problem is one where it is trivial to divide the problem into multiple tasks that can run in parallel.

Which of the following models can be trained in this manner?


## Code Snippet (optional)


## Answer Key

Random Forest

## Distractors
### 1.

Gradient boosted decision tree

### 2.

Adaboost

### 3.

Neural network with SGD optimizer


## Common errors, misconceptions, or irrelevant information:

Every tree in the random forest is completely independent and can be trained with no communication.

While some within-iteration parallelization is possible for GBDT and AdaBoost, each iteration requires the completed results of the previous iteration, so boosting is inherently sequential.

Similarly with SGD, processes have to communicate the gradients and updates for a given iteration before they can start calculating the next iteration. More machines gives a larger batch size, but this doesn't correspond directly to faster convergence. 

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

