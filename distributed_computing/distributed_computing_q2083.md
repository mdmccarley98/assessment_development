# Distributed Computing 3: Function Endpoint


## Item ID
2083

## Claim

-   Claim: 3

## Threshold Probabilities
[0.30, 0.60, 0.80, 0.90]


## Claim Behavior (evidence)

> AWS Lambda is a serverless compute service that is well suited to event-driven architectures. Lambda functions are triggered by events via integrated event sources such as Amazon Simple Queue Service (SQS), Amazon Simple Notification Service (SNS), and Amazon Kinesis that can be used to create asynchronous integrations. Lambda functions consume and produce events that other services can then consume.
https://aws.amazon.com/getting-started/deep-dive-serverless/


## Content Target
serverless


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem
The development team just wants to write http endpoints in JavaScript that the cloud provider executes, and only pay for the time the functions are running.  They don't want to worry about provisioning servers, patching OSes, or managing disks.

Which of the following AWS services is well suited for this application?


## Code Snippet (optional)



## Answer Key
Lambda


## Distractors
### 1.
EC2


### 2.
Cloud9


### 3.
DynamoDB


## Common errors, misconceptions, or irrelevant information:

1. EC2 does have an autoscaling feature, but you choose the ABI/OS and how to provision them.
2. Cloud9 is a tool to _write_ functions, not execute them.
3. DynamoDB isn't designed for serving HTTP


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

