# Dev Automation 2: CI Security


## Item ID
2074

## Claim

- Claim: 2

## Threshold Probabilities

[0.10, 0.20, 0.30, 0.50]


## Claim Behavior (evidence)

> Self-hosted runner security with public repositories
>
> We recommend that you only use self-hosted runners with private repositories. This is because forks of your repository can potentially run dangerous code on your self-hosted runner machine by creating a pull request that executes the code in a workflow.
>
> This is not an issue with GitHub-hosted runners because each GitHub-hosted runner is always a clean isolated virtual machine, and it is destroyed at the end of the job execution.
>
> Untrusted workflows running on your self-hosted runner poses significant security risks for your machine and network environment, especially if your machine persists its environment between jobs. Some of the risks include:
>
> * Malicious programs running on the machine.
> * Escaping the machine's runner sandbox.
> * Exposing access to the machine's network environment.
> * Persisting unwanted or dangerous data on the machine.
>
> -- https://docs.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories


> Potential impact of a compromised runner  
> ...
> Accessing secrets  
> ...
> Exfiltrating data from a runner  
> ...
> Stealing the job's GITHUB_TOKEN  
> ...
> Modifying the contents of a repository  
> --  https://docs.github.com/en/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner

## Content Target

Security


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
The node.js library for a product SDK at your company is hosted in a public GitHub repository.
Your users often suggest features and make pull-requests to improve your SDK.
The SDK repo is configured using GitHub Actions.

Which feature of GitHub Actions may pose a security risk to the company?


## Code Snippet (optional)



## Answer Key
`runs-on: self-hosted`


## Distractors
### 1.
`- run: npm publish`


### 2.
Using `actions/setup-node`


### 3.
Using `actions/checkout`


## Common errors, misconceptions, or irrelevant information:
This question seems fair to someone that doesn't know Github Actions but does know another CI SaaS.  Because self-hosted runners are a feature of most CIs.

> Warning
>
> We recommend that you only use self-hosted runners with private repositories. This is because forks of your repository can potentially run dangerous code on your self-hosted runner machine by creating a pull request that executes the code in a workflow.
> -- https://docs.github.com/en/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups


1. the repo is public, publishing to npm is pretty normal, it could be an issue, but not as bad as self-hosted
2. actions/setup-node is the 'official' node buildpack
3. actions/stale just comments on stale PRs or closes them

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
