# DOM Event Target

## Item ID
2145

## Claim
Claim 2

## Claim Behavior (evidence)
[Event.target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)

## Content Target
Events

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Below is a button inside nested `div` elements:
```html
<div id="outer">
    <div id="inner">
        <button id="btn">Click Me</button>
    </div>
</div>
```

There is an event handler registered on `<div id="inner">`:
```javascript
const innerDiv = document.getElementById('inner')
innerDiv.addEventListener('click', (event) => {
    // Event Handler
})
```

When the event handler executes, what is the value of `event.target`?

## Code Snippet (optional)

## Answer Key
It is the `button` element, because that was the element that triggered the event.

## Distractors
### 1.
It is the "inner" `div` element, because that is the current element in the event propagation.

### 2.
It is the "outer" `div` element, because that is the element where the event propagation will stop.

### 3.
It is `window`, because that is the element where the event propagation will stop.

## Common errors, misconceptions, or irrelevant information:
* There is also a `currentTarget` property that would reference the "inner" `div`.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
