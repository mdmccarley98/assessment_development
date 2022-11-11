# Distributed Computing - Event

## Item ID
2609

## Claim
Claim 2

## Target Level
Level 4

## Claim Behavior (evidence)
> The final communication pattern we will visit in this post is the event-driven pattern. This is another asynchronous approach, and it looks to remove the coupling between services altogether.

> Unlike the messaging pattern where the services must know of a common message structure, an event-driven approach doesn’t need this. Communication between services takes place via events that individual services produce.

> https://blog.logrocket.com/methods-for-microservice-communication/

> Producer services and consumer services are decoupled, which allows them to be scaled, updated, and deployed independently

> https://aws.amazon.com/event-driven-architecture/

## Content Target
concepts

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
Your team is looking to implement a method of communication between services that is asynchronous and only occurs after a change of state. The team would also like the consuming services to be unaware of the other services. Which of the following architectures would meet these requirements?

## Code Snippet (optional)

## Answer Key
Event-Driven Architecture

## Distractors
### 1.
Message-Driven Architecture

### 2.
An HTTP API

### 3.
Remote Procedure Invocation

## Common errors, misconceptions, or irrelevant information:
1. Would be aware of the producer. Used for Req/Reply.
2. Also Req/Reply.
3. This is for inter-process communication and is referring to services like gRPC.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
