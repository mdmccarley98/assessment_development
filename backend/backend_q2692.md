# Backend - Legacy Application Session Manager

## Item ID
2692

## Claim
3

## Claim Behavior (evidence)
NA

## Content Target
Session Management

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
You have a legacy application deployed on a single server that stores user sessions in memory. You need to add a couple of servers because of increased load. What is the *best* approach to quickly make this change without introducing session related bugs?

## Code Snippet (optional)

## Answer Key
Create a load balancer with a sticky cookie configuration, pointing to a cookie that identifies the session.

## Distractors

### 1.
Create 2 DNS entries to the same domain so that each user will access only one of them.

### 2.
Create a load balancer to distribute the requests in a round robin manner.

### 3.
None of the other options are practical in this scenario.

## Common errors, misconceptions, or irrelevant information:
How sessions work at a scale bigger than one is something many junior backend developers don't understand.
A Load Balancer in round robin configuration would send the same user requests to multiple servers, with different session state in each one.
DNS "load balancing" is client dependent, and even if the browser/client caches the IP being used, it can change to another one at any time.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
