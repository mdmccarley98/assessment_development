# React Native PanResponder Lifecycle


## Item ID
1933

## Claim
1: core_concepts

## Threshold Probabilities
[0.25, 0.41, 0.57, 0.75]

## Claim Behavior (evidence)
- [PanResponder](https://reactnative.dev/docs/panresponder) - reactnative.dev


## Content Target
Gestures


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem
You are implementing a file manager in React Native.  The user should be able to use a drag-and-drop gesture to move a file.  In which of the following PanResponder lifecycle methods might you execute the movement of a file?


## Code Snippet (optional)



## Answer Key
`onPanResponderRelease()`


## Distractors
### 1.
`onMoveShouldSetPanResponderCapture()`


### 2.
`onPanResponderTerminate()`


### 3.
`onPanResponderMove()`


## Common errors, misconceptions, or irrelevant information:
* `onMoveShouldSetPanResponderCapture()` and `onPanResponderMove()` both happen before the user's gesture is complete.
* `onPanResponderTerminate()` happens when the component is no longer the responder before the user's gesture was complete.  This can happen if another component or the OS has taken over as the responder.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

