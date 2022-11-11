# WebSocket Message Handling

## Item ID
2141

## Claim
Claim 2: data

## Claim Behavior (evidence)
[WebSocket.onmessage](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/onmessage)

## Content Target
Web Sockets

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
For the following WebSocket, which of the following correctly registers `messageHandler()` to receive incoming messages?

## Code Snippet (optional)
```javascript
const socket = new WebSocket('wss://example.org')

function messageHandler(event) {
    console.log(event.data)
}
```

## Answer Key
```javascript
socket.onmessage = messageHandler
```

## Distractors
### 1.
```javascript
window.addEventListener('message', messageHandler)
```

### 2.
```javascript
window.onmessage = messageHandler
```

### 3.
```javascript
socket.onmessage(messageHandler)
```

## Common errors, misconceptions, or irrelevant information:
* MessageEvent does not "bubble".  So the handler function can only be registered on the event "target", which is `socket` in this case.
* Simply assigning the handler function to the `onmessage` property of the Web Socket is sufficient.  Another way is to use `addEventListener()`.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
