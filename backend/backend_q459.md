# architecture_skill

## Item ID
459

## Claim
3

## Threshold Probabilities
[.20, .25, .55, .80]

## Claim Behavior (evidence)
NA

## Content Target
Application Servers

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Suppose you want to deploy a CPU-bound single-threaded app server to a machine with 16 logical CPU cores. Which design makes the most sense to maximize performance?

## Code Snippet (optional)


## Answer Key
You'll want 16 copies of your app server, with a reverse proxy (like NGINX) in front to balance load and provide persistent connections and security.

## Distractors

### 1.
You'll want a flexibly sized pool of server processes. This pool can grow if CPU utilization is low, and shrink if it's high. Then you can use round-robin DNS to balance load between them.

### 2.
It's rarely helpful to run multiple copies of a CPU bound app server (the global interpreter lock means they just take turns). You'll want to make sure that TCP buffers are small, and that you're using fastCGI.

### 3.
You'll want your app server to `fork()` a new process on every request. This has better socket utilization and a lower memory footprint under load vs creating a fixed number of processes up-front.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

