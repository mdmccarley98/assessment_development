# Distributed Computing 2 - Synchronous Workflow

## Item ID
2611

## Claim
Claim 2

## Target Level
Level 1

## Claim Behavior (evidence)
> HTTP is a synchronous protocol. The client sends a request and waits for a response from the service. That's independent of the client code execution that could be synchronous (thread is blocked) or asynchronous (thread isn't blocked, and the response will reach a callback eventually). The important point here is that the protocol (HTTP/HTTPS) is synchronous and the client code can only continue its task when it receives the HTTP server response.

See Figure 4-15. Anti-patterns and patterns in communication between microservices

> https://docs.microsoft.com/en-us/dotnet/architecture/microservices/architect-microservice-container-applications/communication-in-microservice-architecture

## Content Target
concepts

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Your team is in the process of refactoring an e-commerce web application into several microservices. The proposed design uses REST APIs between the related services. What type of communication does this proposed design offer?

## Code Snippet (optional)

## Answer Key
Synchronous Communication

## Distractors
### 1.
Asynchronous Communication

### 2.
Hybrid Communication

### 3.
Fan-Out Communication

## Common errors, misconceptions, or irrelevant information:
Since this is using a REST API between services and there is no message broker mentioned this is a synchronous form of communication.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
