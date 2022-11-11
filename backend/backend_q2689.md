# Backend - Cache Bug in Production

## Item ID
2689

## Claim
2

## Claim Behavior (evidence)
NA

## Content Target
Data caching

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
Your web application, comprised of your custom application code and a relational database, was designed to run on a single server. To prepare it for production, you simply created three instances of this server behind a load balancer. Now, many of your users are complaining that some pages keep switching between old and new content when navigating between pages. What is the *most* likely cause of this behavior?

## Code Snippet (optional)

## Answer Key
The caching of the DB tables is happening in memory without replication or invalidation against the other instances.

## Distractors

### 1.
The load balancer is using an IP hash policy to route requests from the same client to the same server instance.

### 2.
This is a browser caching issue due to a mismatch between caching headers sent by each server.

### 3.
The load balancer is sending traffic to only one instance.

## Common errors, misconceptions, or irrelevant information:
1. IP hash load balancing might change the content served to a user but won't alter between old and new.
2. Stale browser cache can lead to old content being served but pages won't update after refresh.
3. Traffic sent to only one server instance would serve the same content and won't alter after page refresh.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
