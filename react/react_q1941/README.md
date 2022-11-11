# Reducers

## Item ID
1941

## Claim
2: state

## Threshold Probabilities
[0.25, 0.38, 0.51, 0.65]

## Claim Behavior (evidence)
- [Core Concepts](https://redux.js.org/introduction/core-concepts) - Redux.js.org
- [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer) - Reactjs.org

## Content Target
Reducers
useReducer

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
The Redux framework and React's `useReducer` hook both require you to define a type of function called a "Reducer".  Below is an implementation of a Controlled text field using `useReducer` to manage its state.  You want to add an "Undo" feature so that users can undo their input.  Pick the implementation of the "undo" case statement that will generate the correct next state.  Be sure to avoid an error if someone tries to "undo" beyond the beginning of the history of changes.

## Code Snippet
```jsx
import React, { useReducer } from 'react'

const initState = {
  value: '',
  history: ['']
}

function undoTextReducer(state, { type, payload }) {
  switch (type) {
    case 'change':
      return {
        value: payload,
        history: [
          ...state.history,
          payload
        ]
      }
    // ### Undo Block Goes Here! ###
    default:
      throw new Error('Invalid action: ' + type)
  }
}

function UndoTextInput() {
  const [state, dispatch] = useReducer(undoTextReducer, initState)
  const handleChange = e => dispatch({ type: 'change', payload: e.target.value })
  const handleUndo = () => dispatch({ type: 'undo' })

  return (
    <div>
      <input type='text' value={state.value} onChange={handleChange} />
      <input type='button' value='Undo' onClick={handleUndo} />
    </div>
  )
}
```

## Answer Key
```jsx
    case 'undo':
      if (state.history.length === 1) {
        return state
      } else {
        const newHistory = state.history.slice(0, -1)
        return {
          value: newHistory[newHistory.length - 1],
          history: newHistory
        }
      }
```

## Distractors
### 1.
```jsx
    case 'undo':
      if (state.history.length === 1) {
        return state
      } else {
        state.history = state.history.slice(0, -1)
        state.value = state.history[state.history.length - 1]
        return state
      }
```

### 2.
```jsx
    case 'undo':
      if (state.history.length === 1) {
        return state
      } else {
        return {
          value: state.history[state.history.length - 1],
          history: state.history.slice(0, -1)
        }
      }
```

### 3.
```jsx
    case 'undo':
      return {
        value: state.history[state.history.length - 2],
        history: state.history.slice(0, -1)
      }
```

## Common errors, misconceptions, or irrelevant information (optional):

* React does a shallow equality comparison on the previous state and new state to determine if the component should be rerendered.  So if you mutate a state object, React will not know to rerender.  Likewise, to avoid unnecessary rerenders one should not return a new object from their reducer if no state has changed.
* Distractor 2 is generally the right approach but it has an easily-produced off-by-one bug.
* Distractor 3 simply does not handle the case when the user tries to undo beyond the change history, as specified in the stem.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
