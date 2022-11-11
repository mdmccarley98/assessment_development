# backend_web_understanding - Serverless

## Item ID
2859

## Claim
3: `infrastructure`

## Target Skill Level
3

## Claim Behavior (evidence)
> - https://www.okta.com/identity-101/serverless-computing/
> - https://bejamas.io/blog/serverless-architectures/

## Content Target
Web and application servers

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
What is NOT a feature of serverless architecture?

## Code Snippet (optional)

## Answer Key
Serverless computing guarantees very low latency at all times.

## Distractors

### 1.
Serverless applications can scale without human intervention.

### 2.
There's no need to maintain servers and allocate server space.

### 3.
Serverless architecture enables faster deployments.

## Common errors, misconceptions, or irrelevant information:
- Serverless computing is not constantly running. When a function is called for the first time, it requires a "cold start" which is to say that a container needs to spin up before the function can be run. This may degrade performance although it’s important to note that a container will continue to run for a period of time after the API call is complete in case it is needed again soon after at which point we get a "warm start" without the added latency.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
