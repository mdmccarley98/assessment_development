# Service Worker Network Intercept

## Item ID
2128

## Claim
Claim 5

## Claim Behavior (evidence)
* [FetchEvent.respondWith()](https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/respondWith)
* [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

Compatibility:
* [fetchEvent.respondWith()](https://jakearchibald.github.io/isserviceworkerready/#fetchevent.respondwith\(\))

## Content Target
Web Workers

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Service Workers can be used to proxy some types of communication between the web client and server.  Which of the following types of communication can be intercepted?

* Reference to images: `<img src="logo.png" alt="logo">`
* Reference to style sheets: `<link rel="stylesheet" href="styles.css">`
* Requests via `fetch()`: `fetch('http://example.com')`
* WebSocket messages: `webSocket.send('message')`
* Reference to a script: `<script src="someScript.js"></script>`

## Code Snippet (optional)

## Answer Key
All except WebSocket messages.
* Reference to images: `<img src="logo.png" alt="logo">`
* Reference to style sheets: `<link rel="stylesheet" href="styles.css">`
* Requests via `fetch()`: `fetch('http://example.com')`
* Reference to a script: `<script src="someScript.js"></script>`

## Distractors
### 1.
Only `fetch()` Requests.
* Requests via `fetch()`: `fetch('http://example.com')`

### 2.
Only references from HTML tags:
* Reference to images: `<img src="logo.png" alt="logo">`
* Reference to style sheets: `<link rel="stylesheet" href="styles.css">`
* Reference to a script: `<script src="someScript.js"></script>`

### 3.
All except references to scripts:
* Reference to images: `<img src="logo.png" alt="logo">`
* Reference to style sheets: `<link rel="stylesheet" href="styles.css">`
* Requests via `fetch()`: `fetch('http://example.com')`
* WebSocket messages: `webSocket.send('message')`

## Common errors, misconceptions, or irrelevant information:
This feature can be used for client-side caching and offline functionality.  However, it only works for requests that trigger a `FetchEvent`.  Web Socket messages do not trigger a `FetchEvent`, even in their initiation.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
