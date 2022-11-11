#


## Item ID
2206

## Claim

7

## Claim Behavior (evidence)

>Covariate shift is a simpler particular case of dataset shift where only the input distribution changes (covariate denotes input), while the conditional distribution of the outputs given the inputs p(y|x) remains unchanged

-- [Dataset Shift](https://cs.nyu.edu/~roweis/papers/invar-chapter.pdf)

>Covariate shift is a machine learning technique that can be utilized in supervised learning when the training and prediction distributions are known to differ, but the concept being learned remains stationary.

-- [Understanding covariate shift in model performance](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5070592/)

## Content Target

Data Quality

## Cognitive Model

Comprehend

## Item Type

Multiple Choice

## Stem

Your company has decided to train and deploy its own spam filter using years of historical emails sent to company addresses. 

Which of the following would be an instance of "covariate shift" between the training and deployment distributions?

## Code Snippet (optional)


## Answer Key

Spammers send more and more emails due to increased computing power

## Distractors
### 1.

Spammers use words not seen in training like "ca$h" instead of "cash"

### 2.

Employees start using new business jargon in valid emails

### 3.

A mail server bug results in 1% of all emails randomly being dropped


## Common errors, misconceptions, or irrelevant information:

In the correct answer, the distribution of emails has shifted towards spam, but what words actually imply spam (the conditional distribution) did not change.

In D1 and D2, the conditional distribution HAS changed - words no longer have the same implication about whether a message is spam. This is still a problem but is not specifically a covariate shift problem.

In D3, emails are being lost at random, so the distribution is unaffected.



# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

