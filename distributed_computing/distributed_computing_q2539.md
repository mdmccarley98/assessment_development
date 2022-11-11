# Distributed Computing 1: Serverless concept

## Item ID
2539

## Claim
- Claim 1

## Target Level
- Level 2

## Claim Behavior (evidence)
Serverless functions (FaaS) are event based.

> When an event triggers app code to run, the public cloud provider dynamically allocates resources for that code.
> https://www.redhat.com/en/topics/cloud-native-apps/what-is-serverless

> AWS Lambda is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers.
> https://aws.amazon.com/lambda/

## Content Target
- concepts
- serverless

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Your team has recently discovered that a serverless function that was previously working has not been invoked in some time. What could be a possible cause?

## Code Snippet (optional)

## Answer Key
The event that triggers the function has not occurred.

## Distractors
### 1.
The code has a bug that prevents it from running correctly.

### 2.
The instance running the code is down.

### 3.
The function has not been deployed.

## Common errors, misconceptions, or irrelevant information:
1. The code would still be invoked, but you would see errors.
2. This is a serverless function, so you would not be maintaining any instances that the code runs on.
3. As mentioned in the question, the function has been previously working, implying it has been deployed already.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
