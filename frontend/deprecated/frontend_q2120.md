# WebSockets Buffering

## Item ID
2120

## Claim
Claim 4

## Claim Behavior (evidence)
> This value resets to zero once all queued data has been sent.
* [WebSocket.bufferedAmount](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/bufferedAmount)
* [WebSocket.send()](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send)

## Content Target
WebSockets

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
When using `WebSocket.send()`, how do you know when the data sent has been transmitted to the network?

## Code Snippet (optional)

## Answer Key
The `bufferedAmount` property will be 0.

## Distractors
### 1.
`WebSocket.send()` is synchronous.  So it blocks execution until the data is transmitted.

### 2.
You can only know that data has been transmitted when the server sends a message back to confirm delivery.

### 3.
You know that data has been transmitted if `WebSocket.send()` returns `true`.

## Common errors, misconceptions, or irrelevant information:
* Checking `bufferedAmount` is often important when closing a WebSocket.  Calling `WebSocket.close()` before the buffer is empty results in data not being sent.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
