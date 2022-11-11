# Dev Automation 1: ssh-keygen


## Item ID
2065

## Claim

- Claim: 1

## Threshold Probabilities

[0.25, 0.50, 0.65, 0.80]

## Claim Behavior (evidence)

> 
>
> -- https://www.man7.org/linux/man-pages/man1/ssh-keygen.1.html

## Content Target

Machine Access


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem
You already have your SSH key set up in GitHub for the local machine.

Which of the following commands will require you to upload a new SSH key to access GitHub?


## Code Snippet (optional)



## Answer Key

```
ssh-keygen -t rsa -f ~/.ssh/id_rsa
```

## Distractors
### 1.
```
ssh-keygen -p -f ~/.ssh/id_rsa
```


### 2.
```
ssh-add -q ~/.ssh/id_rsa
```


### 3.
```
ssh-agent -k
```


## Common errors, misconceptions, or irrelevant information:
1. changes the password to the private key, but doesn't change the public key
2. adds the current key to the agent
3. starts a new agent, killing the previous agent instance (does not change the private key).


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

