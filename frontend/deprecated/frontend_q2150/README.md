# DOM Event Capture Phase

## Item ID
2150

## Claim
Claim 5

## Claim Behavior (evidence)
[Event Bubbling and Capture](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture) - developer.mozilla.org

## Content Target
Events

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
For the following HTML:
```html
  <div id="outer">
      <div id="inner">
          <button id="btn">Click Me</button>
      </div>
  </div>
```
and the following Javascript:
```javascript
['btn', 'outer', 'inner'].forEach((id) => {
    document.getElementById(id).addEventListener('click', () => {
        console.log(id)
    }, capture=true)
})
```

What is logged when the button is clicked?

## Code Snippet (optional)

## Answer Key
```
outer
inner
btn
```

## Distractors
### 1.
```
outer
```

### 2.
```
btn
inner
outer
```

### 3.
```
btn
outer
inner
```

## Common errors, misconceptions, or irrelevant information:
* The code adds the event listeners to the "capture" phase of event propagation, which starts with the outermost parent and propagates inward.  This is opposite of the more commonly used "bubbling" phase.
* Also, "capture" is not related to "stopPropagation", as someone might guess from the name.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
