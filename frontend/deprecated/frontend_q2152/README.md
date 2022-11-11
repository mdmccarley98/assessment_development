# Stopping Event Propagation

## Item ID
2152

## Claim
Claim 4

## Claim Behavior (evidence)
* [Event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
* [Event.stopPropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)
* [Event.stopImmediatePropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopImmediatePropagation)

## Content Target
Events

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
Given the following button:
```html
<button id="btn">Click Me</button>
```

and these event listeners:
```javascript
const btn = document.getElementById('btn')
btn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(1)
})
btn.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log(2)
})
btn.addEventListener('click', (e) => {
    e.stopImmediatePropagation()
    console.log(3)
})
btn.addEventListener('click', (e) => {
    console.log(4)
})
```

What is logged to the console when the button is clicked?

## Code Snippet (optional)

## Answer Key
```
1
2
3
```

## Distractors
### 1.
```
1
```

### 2.
```
1
2
3
4
```

### 3.
```
1
2
```

## Common errors, misconceptions, or irrelevant information:
* `Event.stopPropagation()` is used very frequently, but `Event.stopImmediatePropagation()` only serves a purpose when multiple event listeners are registered to the same element.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
