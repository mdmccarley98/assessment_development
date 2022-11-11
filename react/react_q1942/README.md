# Redux Side Effects

## Item ID
1942

## Claim
2: state

## Threshold Probabilities
[0.25, 0.41, 0.57, 0.75]

## Claim Behavior (evidence)
> Redux is inspired by functional programming, and out of the box, has no place for side effects to be executed. In particular, reducer functions must always be pure functions of (state, action) => newState. However, Redux's middleware makes it possible to intercept dispatched actions and add additional complex behavior around them, including side effects.
- [How can I represent “side effects” such as AJAX calls? Why do we need things like “action creators”, “thunks”, and “middleware” to do async behavior?](https://redux.js.org/faq/actions#how-can-i-represent-side-effects-such-as-ajax-calls-why-do-we-need-things-like-action-creators-thunks-and-middleware-to-do-async-behavior) - redux.js.org

## Content Target
Redux

## Cognitive Model
* Comprehend

## Item Type
Multiple Choice

## Stem
In an application that manages its state with Redux, where is it *unsafe* to execute code with side-effects, like AJAX calls?

## Answer Key
Within Reducers

## Distractors
### 1.
Within functions that dispatch Actions

### 2.
Within Middleware

### 3.
Within Listeners


## Common errors, misconceptions, or irrelevant information (optional):

* Most projects using Redux manage side-effects with at least one Redux Middleware library.  Redux Thunk and Redux Sagas are popular choices.
* Middleware like Redux Thunk is so simple that it only consists of a few lines of code.
* Most important to the design philosophy of Redux is that Reducers are kept purely functional.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
