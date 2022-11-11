# WebSockets: Text and Binary

## Item ID
2132

## Claim
Claim 2: data

## Claim Behavior (evidence)
[WebSocket.send()](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send)

## Content Target
Web Sockets

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
You have a web app that allows users to chat with their friends.  The app uses WebSockets to send text data.  You would like to add a feature to allow users to send binary files as "blobs".  Which of the following statements is true?

## Code Snippet (optional)

## Answer Key
Your existing WebSocket can send and recieve both text and binary formats, but you have to check the type with `instanceof` when receiving incoming messages.

## Distractors
### 1.
A single WebSocket connection cannot handle both text and binary data.  You will need to open an additional websocket.

### 2.
WebSockets messages can only contain text data.  So the binary files will need to be encoded in a text-compatible encoding, such as Base64.

### 3.
In order to use the same WebSocket connection, you will need to implement a protocol to signal that the next message will be binary so that the settings of the WebSocket connection can be updated.

## Common errors, misconceptions, or irrelevant information:
* Switching between Blobs and ArrayBuffers would require a change in settings similar to Distractor 3.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
