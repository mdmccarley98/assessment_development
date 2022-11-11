# architecture_skill

## Item ID
589

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
Design

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Suppose you're designing a banking system and want to use random UUIDs (128-bit universally unique identifiers) to represent clients. What's the most reasonable way to handle the probability of UUID collisions (two users being assigned the same UUID)?

## Code Snippet (optional)


## Answer Key
The probability of UUID collisions can be safely ignored — it is lower than that of life on earth being destroyed by an asteroid strike in the next 10 minutes.

## Distractors

### 1.
Potential UUID collisions can be ignored in most applications, but not in the context of a banking system. ID values should be stored in a database and double-checked to ensure colliding UUIDs are never issued.

### 2.
Whenever UUIDs are used, collision checks have to be performed. This can be done in a memory efficient way by using Hamming codes.

### 3.
This is a fundamentally unsafe application of UUIDs. The _birthday paradox_ makes a collision not just possible, but virtually inevitable.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

