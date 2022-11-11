# Reducer Not Triggering Render


## Item ID
1940

## Claim
2: state

## Threshold Probabilities
[0.25, 0.35, 0.45, 0.55]

## Claim Behavior (evidence)
> If you return the same value from a Reducer Hook as the current state, React will bail out without rendering the children or firing effects. (React uses the `Object.is` comparison algorithm.)
- [Bailing out of a dispatch](https://reactjs.org/docs/hooks-reference.html#bailing-out-of-a-dispatch)


## Content Target
Reducers


## Cognitive Model
Comprehend


## Item Type
Multiple Choice


## Stem
The following `HelloWorld` component should display "Hello" and then update to "Hello World!"  However, it only ever displays "Hello".  Choose the implementation of `helloReducer()` that fixes the problem without producing any warnings or errors.


## Code Snippet (optional)
```jsx
const initialState = { value: 'Hello' }

const helloReducer = (state, action) => {
  if (state.value === 'Hello') {
    state.value = state.value + ' World!'
    return state
  }
  return state
}

function HelloWorld() {
  const [message, dispatch] = useReducer(helloReducer, initialState)

  useEffect(() => {
    dispatch({ type: 'addWorld' })
  }, [message])

  return <div>{message.value}</div>
}
```


## Answer Key
```jsx
const helloReducer = (state, action) => {
  if (state.value === 'Hello') {
    return { ...state, value: state.value + ' World!'}
  }
  return state
}
```


## Distractors
### 1.
```jsx
const helloReducer = (state, action) => {
  if (state.value === 'Hello') {
    return { ...state, value: state.value + ' World!'}
  }
  return { ...state }
}
```


### 2.
```jsx
const helloReducer = (state, action) => {
  switch (action.type) {
    case 'addWorld':
      if (state.value === 'Hello') {
        state.value = state.value + ' World!'
        return state
      }
      break
    default:
      return state
  }
}
```


### 3.
```jsx
const lazyInitializer = (initState) => ({ value: initState.value })

const helloReducer = (state, action, init=lazyInitializer) => {
  if (state.value === 'Hello') {
    state.value = state.value + ' World!'
    return state
  }
  return state
}
```


## Common errors, misconceptions, or irrelevant information:
* React re-renders any time the new state returned from the reducer is a new object, regardless of property values.
* Any time the new state is the same object, React will not re-render.
* Distractor #1 appears to work, but it is actually an infinite render loop that throws errors in the console.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

