#


## Item ID
2210

## Claim

4

## Claim Behavior (evidence)


> In particular, they give empirical evidence that, when AdaBoost and Random
Forests are used with maximally large (interpolating) decision trees, the flexibility of the fitting
methods yield interpolating predictors that are more robust to noise in the training data than
the predictors produced by rigid, non-interpolating methods (e.g., AdaBoost or Random Forests
with shallow trees). This in turn is said to yield better generalization. The averaging of the (near)
interpolating trees ensures that the resulting function is substantially smoother than any individual
tree, which aligns with an inductive bias that is compatible with many real world problems.


> The textbook corollary of this curve is that “a model with zero training error
is overfit to the training data and will typically generalize poorly” [21, page 221], a view still widely
accepted.

[Reconciling modern machine learning practice
and the bias-variance trade-off](https://www.cs.columbia.edu/~djhsu/papers/biasvariance-arxiv.pdf)

## Content Target

Machine Learning Models

## Cognitive Model

Comprehend

## Item Type

Multiple Choice

## Stem

Consider a random forest trained on the MNIST dataset: a dataset of handwritten single digits where the features are the pixel values of a 28x28 grayscale image and the target is the digit. 

You incrementally build the forest using large decision trees of up to 2000 nodes as the base learner. 

At 15 trees you reach 100% training accuracy and 93% test accuracy. 

What happens if you massively increase the model's capacity by going up to 150 trees?

## Code Snippet (optional)


## Answer Key

Test accuracy increases 

## Distractors
### 1.

Test accuracy decreases

### 2.

Test accuracy stays roughly the same

### 3.

Test accuracy reaches 100% as well


## Common errors, misconceptions, or irrelevant information:


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

