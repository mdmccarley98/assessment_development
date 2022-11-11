# Manipulate Mean Imputation

## Item ID
2023

## Claim
1

## Threshold Probabilities
[0.2, 0.27, 0.35, 0.5]

## Claim Behavior (evidence)
> However, mean imputation attenuates any correlations involving the variable(s) that are imputed. This is because, in cases with imputation, there is guaranteed to be no relationship between the imputed variable and any other measured variables. Thus, mean imputation has some attractive properties for univariate analysis but becomes problematic for multivariate analysis.

-- [Imputation](https://en.wikipedia.org/wiki/Imputation_(statistics)#Mean_substitution)

## Content Target
Data Manipulation

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Consider a dataset with target variable y and two features X1, X2 that are positively correlated with y. Some values of X2 are missing completely at random. 

You perform two analyses using ordinary least squares. Analysis A deletes all rows where X2 is missing, and Analysis B fills each missing X2 value with the mean value of X2.

Which of the following is necessarily true about Analysis B:

## Code Snippet (optional)

## Answer Key
The correlation between X1 and X2 is weaker than in Analysis A

## Distractors
### 1.
The correlation between X1 and X2 is stronger than in Analysis A

### 2.
The correlation between X2 and y is stronger than in Analysis A

### 3.
The correlation between X1 and y is weaker than in Analysis A

## Common errors, misconceptions, or irrelevant information:
For distractor 3, since X2 values are missing at random, the correlation between X1 and y is equally likely to strengthen or weaken by dropping rows.

Since the correlations are all positive, we could just say smaller rather than "the magnitude of the correlation" is smaller, but "weaker" and "stronger" are more consistent for general discussions of correlation.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
I would return to "the magnitude of the correlation", because X1 and X2 can be positively correlated with Y but negatively correlated with each other. Or else I would state that X1 and X2 are positively correlated.

Drew: suggest "stronger" and "weaker", as edited above.
