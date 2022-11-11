#


## Item ID

1-manipulate-data-augmentation-digits

## Claim

1

## Claim Behavior (evidence)

[A survey on Image Data Augmentation for Deep Learning](https://journalofbigdata.springeropen.com/articles/10.1186/s40537-019-0197-0)

Note these techniques are not specific to deep learning.

## Content Target

Data Manipulation

## Cognitive Model

Comprehend

## Item Type

Multiple Choice

## Stem

Consider a model trained on the MNIST dataset: a dataset of handwritten single digits where the features are the pixel values of a 28x28 grayscale image and the target is the digit.

Which of the following data augmentation techniques would NOT be appropriate for this dataset?

## Code Snippet (optional)


## Answer Key

Vertical flipping

## Distractors
### 1.

Applying a sharpening kernel filter

### 2.

Small rotations between -10 and +10 degrees

### 3.

Randomly replacing a small patch with random values


## Common errors, misconceptions, or irrelevant information:

Data augmentation techniques must preserve the labels at least most of the time in order to improve generalization performance. However, vertically flipping any 6 makes it into a 9 and vice versa.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

