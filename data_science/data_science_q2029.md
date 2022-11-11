# Preprocessing Feature Hashing

## Item ID
2029

## Claim
2

## Threshold Probabilities
[0.25, 0.33, 0.4, 0.5]

## Claim Behavior (evidence)
[Feature Hashing](https://en.wikipedia.org/wiki/Feature_hashing)

> The class FeatureHasher is a high-speed, low-memory vectorizer that uses a technique known as feature hashing, or the “hashing trick”. Instead of building a hash table of the features encountered in training, as the vectorizers do, instances of FeatureHasher apply a hash function to the features to determine their column index in sample matrices directly. The result is increased speed and reduced memory usage, at the expense of inspectability; the hasher does not remember what the input features looked like and has no inverse_transform method.

-- [Feature Hashing - Scikit Learn](https://scikit-learn.org/stable/modules/feature_extraction.html#feature-hashing)

## Content Target
Model Evaluation

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
When preprocessing text documents to convert word counts into vectors, which of the following is a disadvantage of using "feature hashing" (also known as the hashing trick), compared to using a dictionary?

## Code Snippet (optional)

## Answer Key
The output is not interpretible 

## Distractors
### 1.
Hash collisions adversely affect performance

### 2.
Feature hashing uses more memory

### 3.
Feature hashing only supports ASCII text

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
