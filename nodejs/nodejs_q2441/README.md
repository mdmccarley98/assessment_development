# Node.js Event Loop and Call stack

## Item ID
2441

## Claim
Claim 1: Candidate is able to understand and apply knowledge related to the Node.js concurrency model and event loop

## Threshold Probabilities
[0.10, 0.25, 0.40, 0.60]

## Claim Behavior (evidence)
- [Node.js Eventloop & Call stack](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)


## Content Target
`Node.js event loop & Call stack`

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
What will happen if the call stack and the event loop are empty in Node?

## Answer Key
Node will exit

## Distractors

### 1.
Node will keep running and wait for events from the event loop

### 2.
Node will start a new call stack and start running asynchronous tasks

### 3.
Node will run GC (Garbage Collector) to free up memory

## Common errors, misconceptions, or irrelevant information (optional):
When you start a node program, it automatically starts event loop, and when event loop has nothng to do, it will simply exit. To keep node running, you need to place something in the event queue. For example, when you start a timer or http server, you put something to event queue to keep the program running.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)