# Dev Automation 1: Detached Head


## Item ID
2059

## Claim

- Claim: 1


## Threshold Probabilities

[0.10, 0.30, 0.40, 0.60]

## Claim Behavior (evidence)

> Travis working in "Detached Head' mode can cause confusion
> ...
> Closing this issue for now, as we have no immediate plans to pursue this further.
https://github.com/travis-ci/travis-ci/issues/1701


## Content Target

Tools
Git

## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem
Your project is setup in Travis CI.
Looking at the build logs you see this warning:

> You are in 'detached HEAD' state.

What does this mean?

## Code Snippet (optional)



## Answer Key
Travis checks out the hash, there is no issue.


## Distractors
### 1.
Travis needs to be configured to build on branches instead of commits.


### 2.
Travis made a change to the source code, but hasn't committed it.


### 3.
Travis could not get the latest code from the repository.


## Common errors, misconceptions, or irrelevant information:
This is aguably correct behavior, because Travis needs to build a specific version of the code, and thus a specific hash, even if the branch it points to now has been updated since the job was started.

Also it is irrelevant whether Travis does this or a different CI.  Travis was just chosen for it's popularity.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

