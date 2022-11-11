# Backend - HTTP/3 (HOL Blocking)

## Item ID
2907

## Claim
2: data_apis

## Target Skill Level
5

## Claim Behavior (evidence)
[HTTP/3](https://en.wikipedia.org/wiki/HTTP/3)  
[HOL blocking](https://en.wikipedia.org/wiki/Head-of-line_blocking)

## Content Target
REST APIs, HTTP/3

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Which technique eliminates head of line blocking over HTTP?

## Code Snippet (optional)

## Answer Key
UDP encapsulation

## Distractors
### 1.
Multiplexing

### 2.
Chunked transfer encoding

### 3.
Head of line blocking cannot be eliminated; it is always present at the transport layer

## Common errors, misconceptions, or irrelevant information:
- Chunked encoding is a feature of HTTP/1.1 which allows data streaming over persistent connections but is prone to HOL blocking as new requests have to wait for previous ones to complete.
- HTTP/2 uses multiplexing, which eliminates HOL blocking at the application layer, but not at the transport layer.
- HTTP/3 uses the QUIC protocol with UDP instead of TCP which eliminates HOL blocking completely.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
