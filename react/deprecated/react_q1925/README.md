# Custom Hooks

## Item ID
1925

## Claim
2: state

## Threshold Probabilities
[0.25, 0.35, 0.45, 0.55]

## Claim Behavior (evidence)
- [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html) - reactjs.org
- [useRef](https://reactjs.org/docs/hooks-reference.html#useref) - reactjs.org

## Content Target
Hooks
Refs

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
Sometimes it is necessary to track the history of some state. In the simplified example below, a counter displays the history of the `count` value.  It uses a custom hook, `useHistory()`, to maintain that history.  Which implementation of `useHistory()` provides a correct history to `ViewHistoryCounter`?

## Code Snippet
```jsx
function ViewHistoryCounter() {
  const [count, setCount] = useState(0)
  const history = useHistory(count) // <-- Custom hook
  const increment = () => setCount(count + 1)

  return (
    <div>
      <div>History: {JSON.stringify(history)}</div>
      <div>Value: {count}</div>
      <div><button onClick={increment}>Increment</button></div>
    </div>
  )
}
```

## Answer Key
```jsx
function useHistory(state) {
  const historyRef = useRef([])

  useEffect(() => {
    historyRef.current = [...historyRef.current, state]
  })

  return historyRef.current
}
```

## Distractors
### 1.
```jsx
function useHistory(state) {
  useEffect(() => {
    const historyRef = useRef([])
    historyRef.current = [...historyRef.current, state]
    return historyRef.current
  })
}
```

### 2.
```jsx
function useHistory(state) {
  const history = []

  useEffect(() => {
    history.push(state)
  })

  return history
}
```

### 3.
```jsx
function useHistory(state) {
  const history = []

  history.push(state)

  return history
}
```


## Common errors, misconceptions, or irrelevant information (optional):

* Hooks are composable, in a very similar fashion to components.  Most hooks perform some sort of side-effect.  So most custom hooks will call `useEffect` in their implementation, or else be composed of other hooks that call `useEffect`.  `useEffect` is the most generic of all hooks.
* "Refs" are essentially a box to put a value that will exist unchanged throughout the lifecycle of a component.
* Hooks are executed ever time that a Function Component renders.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

