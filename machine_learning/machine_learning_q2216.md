#


## Item ID
2216

## Claim

7

## Claim Behavior (evidence)

[OneHotEncoder, scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.OneHotEncoder.html)

[pandas.get_dummies](https://pandas.pydata.org/docs/reference/api/pandas.get_dummies.html)

## Content Target

Data Quality

## Cognitive Model

Comprehend

## Item Type

Multiple Choice

## Stem

Suppose you have trained and deployed a model for determining the value of a used car, where the features include the manufacturer of the car represented as a one-hot (aka dummy) encoded variable.

Which of the following would NOT be a commonly accepted method for encoding a new car manufacturer that is not present in any of your training data?


## Code Snippet (optional)


## Answer Key

Return a vector of all ones

## Distractors
### 1.

Raise an exception

### 2.

Return a vector of all zeros

### 3.

Have an extra binary feature for "unknown manufacturer"

## Common errors, misconceptions, or irrelevant information:

D1, D2, and D3 are all standard methods as documented. 

Semantically the vector of all ones would mean the car comes from every manufacturer.



# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

