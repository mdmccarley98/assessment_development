# Distributed Computing 1: Load Balancing Basic Issue

## Item ID
2536

## Claim
Claim 1

## Claim Behavior (evidence)
> The load balancer starts routing requests to a newly registered target as soon as the registration process completes and the target passes the initial health checks.

> https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html

> https://cloud.google.com/load-balancing/docs/l7-internal/setting-up-l7-internal#lb-config

> Round Robin – Requests are distributed across the group of servers sequentially.
> https://www.nginx.com/resources/glossary/load-balancing/


## Content Target
- load balancers
- troubleshooting

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Your team has just deployed a new application that consists of a load balancer, a pool of autoscaling compute nodes that serve the application code, and a relational database. It has been noted that only 1 of the compute nodes is handling all the requests even though other compute nodes appear to be running. Which step will most likely NOT help you troubleshoot this issue?

## Code Snippet (optional)

## Answer Key
SSH into the running compute node and check the logs.

## Distractors
### 1.
Ensure that the health check on the compute nodes is functional.

### 2.
Check the load balancer configuration and ensure that round robin is used.

### 3.
Ensure that the compute nodes were correctly added to the target pool.

## Common errors, misconceptions, or irrelevant information:
Since the running compute node is functional, there is no reason to start troubleshooting there. The other steps are more likely to help.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
