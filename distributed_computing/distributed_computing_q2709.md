# Distributed Computing - Network Reliability

## Item ID
2709

## Claim
Claim 2

## Target Skill Level
1

## Claim Behavior (evidence)
> 1. Network is reliable
> You cannot assume the network is reliable and not worry about network issues. The truth is that networks are more reliable than they used to be. However, they aren’t 100% reliable. When designing and writing your applications, don’t forget to account for network failures.

> https://blogs.oracle.com/developers/post/fallacies-of-distributed-systems
> https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing


> In addition to infrastructure concerns, you also need to think about connections being dropped and messages and API calls getting lost due to network failures.
> Additionally, you need mechanisms such as automatic reconnection and retries, deduplication (or idempotency), and ways to enforce message ordering and guarantee delivery.
> https://ably.com/blog/8-fallacies-of-distributed-computing

## Content Target
concepts

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Some users have noted that they are occasionally not receiving alerts from the application. The Alert microservice handles this process. The logs for the application reveal that the requests time out.
<br><br>
What are the developers falsely assuming from what we see in the code below?

```
var retries = 0;
var alertService = new AlertService(retries);
alertService.alert(newIssue);
```

## Code Snippet (optional)

## Answer Key
The network is reliable.

## Distractors
### 1.
The service is on the same node.

### 2.
The container is in the same pod.

### 3.
The service handles new issues.

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
