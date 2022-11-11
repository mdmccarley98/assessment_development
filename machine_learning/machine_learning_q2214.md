#


## Item ID
2214

## Claim

1

## Claim Behavior (evidence)
[LogSumExp](https://en.wikipedia.org/wiki/LogSumExp#log-sum-exp_trick_for_log-domain_calculations)

[The log-sum-exp trick](https://gregorygundersen.com/blog/2020/02/09/log-sum-exp/)


## Content Target

Data Manipulation

## Cognitive Model

Comprehend

## Item Type

Multiple Choice

## Stem

Scientific libraries like NumPy or SciPy provide a function called `logsumexp(x)` which takes a vector `x` and computes the expression `log(sum(exp(x)))` in a numerically stable way. 

A common application of this in machine learning is converting a vector `x` of log-likelihoods to a vector of normalized probabilities using the expression `probabilities = exp(x) / sum(exp(x))`. 

Which of the below expressions correctly makes use of `logsumexp` to calculate `probabilities`?

## Code Snippet (optional)

## Answer Key

`exp(x - logsumexp(x))`

## Distractors
### 1.

`logsumexp(exp(x))`

### 2.

`logsumexp(x) - exp(x)`

### 3.

`exp(logsumexp(x))`


## Common errors, misconceptions, or irrelevant information:

Using `log(a/b) = log(a) - log(b)`, this is easy to show:

```
p 
= exp(log(p)) 
= exp(log(exp(x) / sum(exp(x)))
= exp(log(exp(x)) - log(sum(exp(x))))
= exp(x - logsumexp(x))
```


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

