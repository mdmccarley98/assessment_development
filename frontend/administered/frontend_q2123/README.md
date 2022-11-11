# Registering Multiple Event Handlers

## Item ID
2123

## Claim
Claim 1: responsive_ui

## Claim Behavior (evidence)
[Multiple identical event listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#multiple_identical_event_listeners) - developer.mozilla.org

## Content Target
Use

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
What is logged when the button is clicked?

## Code Snippet (optional)
```javascript
function firstEvent(event) {
    console.log('An event')
}

function anotherEvent(event) {
    console.log('...and another')
}

let btn = document.getElementById('btn')
btn.addEventListener('click', firstEvent)
btn.addEventListener('click', anotherEvent)
btn.addEventListener('click', anotherEvent)
```

## Answer Key
```
An event
...and another
```

## Distractors
### 1.
```
An event
...and another
...and another
```

### 2.
```
An event
```

### 3.
```
...and another
```

## Common errors, misconceptions, or irrelevant information:
* Someone might think that only one handler can be registered.  The event attributes for an element give that impression, as do event properties.
* Handler functions that are the exact same object are automatically deduped.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
