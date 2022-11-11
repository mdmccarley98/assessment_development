# Model Evaluation Stat Leakage

## Item ID
2042

## Claim
2

## Threshold Probabilities
[0.2, 0.3, 0.35, 0.45]

## Claim Behavior (evidence)
> Just as it is important to test a predictor on data held-out from training, preprocessing (such as standardization, feature selection, etc.) and similar data transformations similarly should be learnt from a training set and applied to held-out data for prediction:

-- [Scikit-learn Cross Validation](https://scikit-learn.org/stable/modules/cross_validation.html)


## Content Target
Model Evaluation

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
You have a training dataset with 200 rows and 100 input features, plus a single continuous target feature.

You perform feature selection by choosing the 10 input features with the largest absolute correlation to the target.

Since your training data is small, you decide to use 10-fold cross-validation to determine your hyperparameters. After some searching, you obtain a model with cross validation mean square error (MSE) of 400 +/- 100.

The MSE of your model's predictions on new test data drawn from the same distribution as your training data will be:

## Code Snippet (optional)

## Answer Key
Larger than 400

## Distractors
### 1.
Within 10% of 400

### 2.
Smaller than 400

### 3.
Exactly 400

## Common errors, misconceptions, or irrelevant information:
The k-fold cross validation MSE is overfit because the correlations were computed by looking at the full training data. 

To obtain an unbiased estimator of test set MSE, feature selection should be performed separately within each fold.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
The item is correct as written.
