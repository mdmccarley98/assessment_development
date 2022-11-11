# WebSockets Fragmentation

## Item ID
2706

## Claim
2

## Target Skill Level
3

## Claim Behavior (evidence)
[RFC 6455 Section 5.4](https://datatracker.ietf.org/doc/html/rfc6455#section-5.4).

## Content Target
WebSockets

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
A WebSocket message may be fragmented amongst many message frames. Consider the following simplified messaging from a client to a WebSocket server:
```plain
Client: FIN=0, opcode=0x1, msg="hello"
Client: FIN=0, opcode=0x1, msg=", how"
Client: FIN=0, opcode=0x1, msg="are yo"
Client: FIN=0, opcode=0x1, msg="u toda"
Client: FIN=1, opcode=0x1, msg="y?"
```

What is the crucial consideration for the server in response to such frames?

## Code Snippet (optional)

## Answer Key
These frames should be appended together for processing as a single message from the client.

## Distractors
### 1.
The server MUST send a `PONG` response to the client to keep the connection alive between each frame.

### 2.
The server should close the connection due to an invalid `opcode` and `FIN` combination on the final frame.

### 3.
The server MUST process each frame as received to prevent a client from filling the server's memory with an endless message.

## Common errors, misconceptions, or irrelevant information:
Because a message may be larger than the size of a single frame, messages can be fragmented across many frames and must be reassembled on the server to make a whole message.

While distractor three might seem like a good idea in light of 
[RFC 6455 10.4](https://datatracker.ietf.org/doc/html/rfc6455#section-10.4), it breaks the protocol, so you'll need to impose limits on total message size, not process each message as it comes.

The others simply aren't true.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
