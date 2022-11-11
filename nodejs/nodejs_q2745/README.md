# Node.js - Concurrency Model

## Item ID
2745

## Claim
1

## Target Skill Level
4

## Claim Behavior (evidence)
https://nodejs.org/en/docs/guides/dont-block-the-event-loop/

## Content Target
Node.js concurrency model

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
What type of application is Node.js NOT suitable for?

## Code Snippet

## Answer Key
CPU intensive programs

## Distractors
### 1.
Reactive systems

### 2.
WebSocket servers

### 3.
APIs fronting NoSQL DBs

## Common errors, misconceptions, or irrelevant information (optional):
- Reactive systems are built with reactive programming, an event-driven programming paradigm where discrete steps are executed in an async and non-blocking manner, which is in line with Node's default concurrency model. Candidates unfamiliar with the "reactive" terminology and libraries might not be aware that this is a natural way to make use of Node's asynchronous event loop architecture.
- The WebSocket protocol enables bidirectional client-server communication over a persistent connection. Inexperienced candidates might be tricked into thinking this would block or consume the resources of the application thread. In reality, Node.js can maintain hundreds of WebSockets connections simultaneously by processing events asynchronously.
- NoSQL databases have better support for non-blocking access across the board and work with flexible data types (including JSON), making it easy to build fully non-blocking web services with Node.js. Candidates might be thrown off by the mention of NoSQL databases, especially if they have no hands-on experience with them.
- While it is possible to optimize/offload CPU intensive workloads in Node.js, this kind of use-case is bad for Node's concurrency model, as it can block the event loop and slow down the application.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
