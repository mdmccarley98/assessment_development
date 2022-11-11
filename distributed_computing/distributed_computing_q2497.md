# Distributed Computing 1: Cluster Quorum

## Item ID
2497

## Claim
Claim 1

## Claim Behavior (evidence)
> A cluster agrees that it's received an update when a majority of the nodes in the cluster have acknowledged the update. We call this number a quorum. So if we have a cluster of five nodes, we need a quorum of three. (For a cluster of n nodes, the quorum is n/2 + 1.)
> https://martinfowler.com/articles/patterns-of-distributed-systems/quorum.html

> When nodes fail, or when some subset of nodes loses contact with another subset, surviving nodes need to verify that they constitute the majority of the cluster to remain online. If they can't verify that, they'll go offline.

> If you have two nodes, a witness is required.
> https://docs.microsoft.com/en-us/azure-stack/hci/concepts/quorum#cluster-quorum-overview

## Content Target
- concepts
- troubleshooting

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
A clustered application your team is responsible for appears to be down. It is currently configured to run on two nodes. You could log into both nodes but notice that the application on one of the nodes has crashed. What is the likely reason for the cluster failure?

## Code Snippet (optional)

## Answer Key
The cluster has no quorum.

## Distractors
### 1.
The cluster has a network issue.

### 2.
The cluster has no load balancer.

### 3.
The cluster node has exhausted its resources.

## Common errors, misconceptions, or irrelevant information:
When clustering applications, it is generally best practice to use at least 3 nodes to ensure that if one of the nodes is offline for any reason the cluster will still function.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
