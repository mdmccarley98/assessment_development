# Distributed Computing 3: docker-compose


## Item ID
2080

## Claim

-   Claim: 3

## Threshold Probabilities
[0.10, 0.30, 0.40, 0.60]

## Claim Behavior (evidence)

> Each container can now look up the hostname web or db and get back the appropriate container’s IP address. For example, web’s application code could connect to the URL postgres://db:5432 and start using the Postgres database.
> -- https://docs.docker.com/compose/networking/

https://github.com/compose-spec/compose-spec/blob/master/spec.md


## Content Target
docker-compose


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem
Which of the following IS a feature of Docker Compose?


## Code Snippet (optional)



## Answer Key
Set up networking to allow containers to connect to each other by hostname.


## Distractors
### 1.
Create an ingress routing mesh to route connections to services not running on the host server.


### 2.
Build public and private container images into different S3 buckets.


### 3.
Reduce load on containers by caching API responses.


## Common errors, misconceptions, or irrelevant information:

1. This is a feature of Docker Swarm.
2. This is a feature of a Docker Container Registry.
3. This is a feature of a proxy cache.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

