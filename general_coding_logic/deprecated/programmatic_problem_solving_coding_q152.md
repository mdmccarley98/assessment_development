# programmatic_problem_solving

## Item ID
q152

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Suppose you're designing a distributed worker library, and would like it to be able to queue jobs using a number of different message queuing services (RabbitMQ, Amazon Simple Queue Service, ZeroMQ). What's a good way to handle making our code work with each of these services?

## Code Snippet (optional)


## Answer Key
We could design a base interface that defines how our library will interact with the queue service. We can create several implementations of this interface (one for RabbitMQ, one for ZeroMQ, etc). A method that runs when our library loads can look at config details, and instantiate the correct object.

## Distractors

### 1.
We can use a global \

### 2.
 variable. This will be initialized to a flag like \

### 3.
, or \

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

