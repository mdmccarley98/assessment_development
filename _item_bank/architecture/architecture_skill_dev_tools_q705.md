# architecture_skill

## Item ID
q705

## Claim
5

## Claim Behavior (evidence)
NA

## Content Target
dev_tools

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
In a Dockerfile, `apt-get` commands are typically on the same `RUN` line, as in the below example.  Why?

## Code Snippet (optional)
```plain
RUN apt-get update && apt-get install -y ...
```

## Answer Key
Caching would cause outdated versions to be installed.

## Distractors

### 1.
`update` must be run first.

### 2.
`install` should only be run if `update` succeeds.

### 3.
It is a purely stylistic choice in line with the `DOCKERFILE` community style guidelines.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

