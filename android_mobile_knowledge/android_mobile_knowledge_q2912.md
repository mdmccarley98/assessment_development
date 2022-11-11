# Android - api vs implementation

## Item ID
2912

## Claim
3: publishing

## Target Skill Level
Level 4

## Claim Behavior (evidence)
The two most basic and important ways to add a dependency on Android are by using `api` or
`implementation` on Gradle.  
Understanding its differences is especially important when building a library.  
https://developer.android.com/studio/build/dependencies#dependency_configurations

## Content Target
- Android libraries
- Gradle
- Dependencies management

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
When should we use `api` over `implementation` to add a dependency on Gradle?

## Code Snippet (optional)

## Answer Key
To expose the dependency upstream

## Distractors
### 1.
There is no difference, `implementation` is a deprecated version of `api`

### 2.
When there is no need for the full dependency, just its APIs

### 3.
To force a dependency when a conflict is happening

## Common errors, misconceptions, or irrelevant information:
- Previous to `api` and `implementation` existence, we had a `compile` method which would then be 
the sole way to add a dependency, the introduction of these 2 new ways might have added doubt on 
some developers;
- Developers that have not created a library, might also never really understood this concept.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
