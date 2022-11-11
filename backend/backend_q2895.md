# Backend - Containers and Virtualization

## Item ID
2895

## Claim
3: infrastructure

## Target Skill Level
4

## Claim Behavior (evidence)
[System Design Interview – An Insider's Guide](https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF)

## Content Target
Infrastructure, Deployment

## Cognitive Model
Comprehend, Use

## Item Type
Multiple Choice

## Stem
What is a practical reason for running containers inside a system virtual machine?

## Code Snippet (optional)

## Answer Key
To increase security by reducing the scope of possible attack vectors

## Distractors
### 1.
To control the underlying hardware directly, without relying on the host operating system

### 2.
To improve isolation and mitigate the noisy neighbor effect

### 3.
To increase flexibility and make the system easier to deploy and maintain at scale

## Common errors, misconceptions, or irrelevant information:
Running containers inside VMs:
- comes with a trade-off between security and flexibility; containers are no longer exposed to OS-level vulnerabilities, but it becomes more difficult to deploy and maintain them at scale.
- does introduce a new level of isolation (technically), but not the kind of isolation that mitigates the noisy neighbor effect; this effect can only be mitigated with bare metal servers.
- does not allow direct control over the hardware; this is what a bare metal hypervisor does in the context of virtualization.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
