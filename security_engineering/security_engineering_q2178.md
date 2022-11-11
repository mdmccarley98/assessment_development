# Security Engineering 3: ssh key login


## Item ID
2178

## Claim
3


## Claim Behavior (evidence)
> PasswordAuthentication
> Specifies whether password authentication is allowed. The default is ''yes''.
> -- https://linux.die.net/man/5/sshd_config


## Content Target
server hardening


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem
Which of the following sshd_config options forces users to login with an ssh key?


## Code Snippet (optional)



## Answer Key
PasswordAuthentication no


## Distractors
### 1.
PermitRootLogin no


### 2.
PermitKeyLogin true


### 3.
KeyLogin yes


## Common errors, misconceptions, or irrelevant information:
1. Should be set but is unrelated to the stem.
2. This setting does not exist.
3. This setting does not exist.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
