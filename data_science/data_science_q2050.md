# Statistical Models OLS Autocorrelation

## Item ID
2050

## Claim
2

## Threshold Probabilities
[0.2, 0.3, 0.4, 0.5]

## Claim Behavior (evidence)
> The consequences of autocorrelation are similar to those of heteroscedasticity. Thus the coefficient estimates will still be okay (i.e. they will be consistently and unbiasedly estimated) provided that the other assumptions of the classical linear regression model are valid. The OLS estimator will be inefficient in the presence of autocorrelation, which implies that the standard errors could be sub-optimal. Since the standard errors may be inappropriate in the presence of autocorrelation, it is true that hypothesis tests could reach the wrong conclusion, since the t-test statistic contains the coefficient standard error in it. As the parameter estimates should still be correct, forecasts obtained from the model will only use the coefficients and not the standard errors, so the forecasts should be unbiased. 
> 
-- [Introductory Econometrics for Finance, Ch 4](http://www.cambridge.org/features/economics/brooks/downloads/mcq/chapter%204/ch04.htm)

## Content Target
Statistical Models

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
You have been asked to create a model to predict weekly sales for your company's product. After some analysis and the application of ordinary least squares, you observe that a linear model fits well except that the residuals follow a seasonal pattern. 

Which of the following issues can result from the presence of this pattern?

## Code Snippet (optional)

## Answer Key
Tests for statistical significance may be invalid

## Distractors
### 1.
Forecasts from your model may be biased

### 2.
Parameter estimates may be inconsistent 

### 3.
The condition number may be very large

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
Distractor 1 is potentially confusing. Long-term forecasts are unbiased, but suppose a context in which the client always wants to forecast the value expected in March. Each forecast based on data up until December 31 going out to the end of March is likely to have the same unmodeled seasonal effect, and thus be biased. I would re-word Distractor 1 to "Long-term forecasts from your model may be biased". Or you could change distractor 1 to "The linear model R-square will over-estimate the amount of predictive accuracy that could be obtained by including seasonal effect in the model." That would clearly be false.
