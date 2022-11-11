# Distributed Computing 1: kubectl basic troubleshooting

## Item ID
2535

## Claim
Claim 1

## Claim Behavior (evidence)
> Check pod status by following command: kubectl get pods
> https://kubernetes.io/docs/tasks/debug-application-cluster/_print/

> -A checks all namespaces

## Content Target
troubleshooting

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Your team has received an alert that the application running in Kubernetes is not functioning correctly. Which command would be the best choice to start looking into the issue?

## Code Snippet (optional)

## Answer Key
kubectl get pods -A

## Distractors
### 1.
kubectl describe cluster

### 2.
kubectl get info -A

### 3.
kubectl config view

## Common errors, misconceptions, or irrelevant information:
1. Resource of type cluster does not exist.
2. Resource of type info does not exist.
3. While this is an actual command, it will not be an effective command to execute to troubleshoot at this point.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
