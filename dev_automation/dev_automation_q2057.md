# Dev Automation 3: Environment Variables


## Item ID
2057

## Claim

- Claim: 3

## Threshold Probabilities

[0.20, 0.30, 0.50, 0.70]

## Claim Behavior (evidence)

> Creating a context allows you to share environment variables across multiple projects, and control who has access. For more information, see the Contexts documentation.
https://circleci.com/docs/2.0/env-vars/#setting-an-environment-variable-in-a-project

> Note: secret masking will only prevent the secret value from appearing in your build output. The value is still accessible to code executed within your builds and users debugging builds with SSH.
> https://circleci.com/docs/2.0/contexts/#restricting-a-context

## Content Target

Configuration
Tools


## Cognitive Model



## Item Type



## Stem
CircleCI is setup on your project.  The environment variable `SECRET_PASSWORD` is set in a context and masked for security.

Which of the following is true?

## Code Snippet (optional)



## Answer Key
Code running in the context can read the value of `SECRET_PASSWORD`.


## Distractors
### 1.
Code running in the context will NOT have any access `SECRET_PASSWORD`.


### 2.
Code running in the context can know that the `SECRET_PASSWORD` is set, but NOT it's value.


### 3.
Code running in the context can only access `SECRET_PASSWORD` one time.


## Common errors, misconceptions, or irrelevant information:
The brand of the CI system is irrelevant, environment variables are meant to be read by code.

Masking is to prevent the environment variable from being read by a human looking at logs.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

