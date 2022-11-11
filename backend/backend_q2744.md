# Backend - EDA Features

## Item ID
2744

## Claim
1

## Target Skill Level
4

## Claim Behavior (evidence)
[Designing Event-Driven Systems](https://www.oreilly.com/library/view/designing-event-driven-systems/9781492038252/)

## Content Target
Architecture

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Which of the following is NOT a common feature of event-driven software systems?

## Code Snippet (optional)

## Answer Key
Strong consistency

## Distractors
### 1.
Loose coupling

### 2.
Asynchronous execution

### 3.
Fault tolerance

## Common errors, misconceptions, or irrelevant information:
Systems using event-driven architecture have **highly decoupled components** which allows them to evolve independently of each other. One side effect of this loose coupling is that downtime of any single component or service does not create cascading failures across the system. This strengthens the system's **fault tolerance**. Another advantage of event-driven systems is their ability to receive, process, and output continuous flows of data items (events) in real-time, usually at the expense of **eventual consistency**. This is because they leverage **asynchronous broadcast**, deliberately removing the need for global state and avoiding synchronous execution.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
