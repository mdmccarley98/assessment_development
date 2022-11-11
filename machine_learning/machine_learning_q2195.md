#


## Item ID
2195

## Claim

4

## Claim Behavior (evidence)

[Random Forest Regressor](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestRegressor.html)

[Random Forest Classifier](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html)


>  It essentially consists of randomizing strongly both attribute
and cut-point choice while splitting a tree node. In the extreme case, it builds totally randomized trees whose structures are independent of the output values of the learning sample.

-- [Extremely randomized trees](https://link.springer.com/content/pdf/10.1007/s10994-006-6226-1.pdf)

## Content Target

Machine Learning Models

## Cognitive Model

Comprehend

## Item Type

Multiple Choice

## Stem

When fitting an ensemble of decision tree classifiers, at each non-terminal node we need to choose a split condition to grow the tree. 

Which of the following is NOT an established method for choosing the split?

## Code Snippet (optional)


## Answer Key

Mean squared error

## Distractors
### 1.

Choose randomly

### 2.

Gini impurity

### 3.

Information Gain


## Common errors, misconceptions, or irrelevant information:

Mean squared error requires a continuous target, so it is usable for a decision tree *regressor*, not a classifier.

D2 and D3 are the most commonly used methods. D1 is the basis of the "extremely randomized trees" algorithm (also available in scikit-learn) which can initially feel counterintuitive.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

