# Distributed Computing 3: Cloud Pricing


## Item ID
2093

## Claim

-   Claim: 3

## Threshold Probabilities
[0.20, 0.40, 0.60, 0.80]


## Claim Behavior (evidence)


* n1-standard-64, (64cpu, 240gb), 1y commit: $1,398.04/mo (multi-tenant)
* n1-standard-64 (64cpu, 240gb), no commit: $1,553.43/mo $2.128/hr (multi-tenant)
* c2-node-60-240, (60cpu, 240gb), 1y commit: $1,623.25/mo (single-tenant)
* c2-node-60-240, (60cpu, 240gb), no commit: $2,011.81/mo $2.756/hr (single-tenant)
-- https://cloud.google.com/products/calculator#id=4ffb8756-5e7c-4c50-ae11-cdabc4cddad8


* m6g.metal, 1y commit: $1,131.29 (multi-tenant EC2)
* m6g.metal, no commit: $1,801.72 (multi-tenant EC2)
* m6g, 1y commit: $1,244.00 (single-tenant EC2 Dedicated Host)
* m6g, no commit: $1,981.30 (single-tenant EC2 Dedicated Host)
-- https://calculator.aws/#/estimate?id=3fefb59ad74299fcbd0c84ba475572dcc09ec6b3

## Content Target
Cloud Pricing


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem
Which of the following VMs will generally have the least yearly cost in dollars?


## Code Snippet (optional)



## Answer Key
Multi-Tenant, 1 year Commitment


## Distractors
### 1.
Sole-Tenant, 1 year Commitment


### 2.
Multi-Tenant, No Commitment


### 3.
Sole-Tenant, No Commitment


## Common errors, misconceptions, or irrelevant information:
Knowing the difference between single or multi-tenant and commitment level is important when you are provisioning machines.
It requires coordination between finance, product, and engineering departments to know if the application needs to be on it's own server, and how long the application will run.

A technical reasons for sole-tenant may include addressing the spectre CPU vulnerability.
> Given the latest Specter and Meltdown security flaws will likely give more prominence to bare metal deployments with customers who are wary of deploying their mission-critical applications and data in a multi-tenant environment, such as traditional public clouds. 
https://www.otava.com/blog/what-do-spectre-and-meltdown-mean-for-bare-metal-hosting/


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

