# Backend - Multithreading

## Item ID
2885

## Claim
1: architecture_design

## Target Skill Level
2

## Claim Behavior (evidence)
[Multithreaded programs vs single-threaded programs pros and cons](https://en.wikipedia.org/wiki/Thread_(computing)#Multithreaded_programs_vs_single-threaded_programs_pros_and_cons)

## Content Target
Architecture

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
What is NOT a benefit of building multi-threaded backend systems with languages like Java, C#, or Go?

## Code Snippet (optional)

## Answer Key
Reduced context switching and associated overhead

## Distractors
### 1.
Effective utilization of parallel hardware and multiprocessor systems

### 2.
Improved overall server throughput

### 3.
Superior application responsiveness

## Common errors, misconceptions, or irrelevant information:
When a CPU switches from executing one thread to another, it saves the local data of the current thread and loads the local data of the thread it wants to execute next. This process of saving and restoring context between threads, aka "context switching," adds overhead to multi-threaded systems.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
