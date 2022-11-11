# Cross Origin Messages

## Item ID
2148

## Claim
Claim 3: performance_and_security

## Claim Behavior (evidence)
* [Window.postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)
* [Broadcast Channel API](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API)
* [Worker.prototype.postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage) - (inherited by ServiceWorker and SharedWorker)

## Content Target
WebWorkers

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Each tab, window, and Web Worker is its own "browser context".  In sophisticated front-end architectures, it is often necessary to communicate between different browser contexts.  An example would be two browser tabs communicating.  

There are a few ways to accomplish this, but which of the following also allows communication across different origins?

## Code Snippet (optional)

## Answer Key
```javascript
window.postMessage()
```

## Distractors
### 1.
```javascript
BroadcastChannel.postMessage()
```

### 2.
```javascript
ServiceWorker.postMessage()
```

### 3.
```javascript
SharedWorker.port.postMessage()
```

## Common errors, misconceptions, or irrelevant information:
* Mostly, cross-origin communication is not allowed.  `window.postMessage()` allows cross-origin messaging from any code that has a reference to the target `window`.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
