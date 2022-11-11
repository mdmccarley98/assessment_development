# Distributed Computing 1: Serverless Framework Invoke

## Item ID
2505

## Claim
Claim 1

## Claim Behavior (evidence)
> If you deployed a function that isn't exposed via a URL, you can invoke it via
> serverless invoke -f functionName
> https://www.serverless.com/framework/docs/getting-started#invoking-function

## Content Target
- serverless
- troubleshooting

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
You have been asked to test a serverless framework function named `testRunner1` in the test environment. Which of the following commands would help you accomplish this?

## Code Snippet (optional)
N/A

## Answer Key
`sls invoke -f testRunner1`

## Distractors
### 1.
`serverless deploy -f testRunner1`

### 2.
`export SERVERLESS_FUNC=testRunner1 sls`

### 3.
`sls run testRunner1`

## Common errors, misconceptions, or irrelevant information:
1. While the cli will also work with the name "serverless", the function is already deployed as implied by the stem.
2. This will init a new project, and the env var won't help you.
3. There is no run sub command.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)

