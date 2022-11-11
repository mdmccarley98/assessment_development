#


## Item ID
2187

## Claim

7

## Claim Behavior (evidence)

[F-score](https://en.wikipedia.org/wiki/F-score)

## Content Target

Performance Metrics

## Cognitive Model

Comprehend

## Item Type

Multiple Choice

## Stem

You have deployed a model which currently has a precision of P and a recall of R, where 1 > P > R > 0. 

You have been working on some modifications to try and improve your model's F1 score, which is defined as the harmonic mean of precision and recall and given by the equation `2 * P * R / (P + R)`.

Which of the following changes would result in the largest F1 score increase?

## Code Snippet (optional)


## Answer Key

Increase R by 0.02 while holding P constant

## Distractors
### 1.

Increase P by 0.02 while holding R constant

### 2.

Increasing R and P each by 0.01

### 3.

Increase P to 1 and decrease R by 1 - P


## Common errors, misconceptions, or irrelevant information:

Intuitively, since F1 score treats precision and recall as equally important it benefits more to increase the weaker attribute. Distractor 3 will actually decrease the F1 score.

Symbolically, considering the derivative of F1 with respect to R, you gain an increment proportional to P. Since P > R, this is better than the symmetrical situation of gaining an increment proportional to R.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

