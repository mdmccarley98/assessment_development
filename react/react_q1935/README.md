# Avoiding Unnecessary Rerendering

## Item ID
1935

## Claim
3: profiling_and_performance

## Threshold Probabilities
[0.25, 0.35, 0.45, 0.55]

## Claim Behavior (evidence)
- [React.memo](https://reactjs.org/docs/react-api.html#reactmemo) - reactjs.org
- [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback) - reactjs.org

## Content Target
Performance

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
It is often necessary to avoid unnecessary re-rendering of components to improve performance. In this simplified example, a `Counter` has two buttons that should NOT re-render after `Counter` has mounted. You are using `React.memo()` to stop the buttons from re-rendering when there are NO changes to their props.  You are also using `useCallback()` to wrap the `handleIncrement()` and `handleDecrement()` callbacks.

This works perfectly for `ResetButton`.  However, `IncrementButton` is still re-rendering every time `Counter()` re-renders!

Why is this happening, and is it possible to fix this so that `IncrementButton` only renders one time?

## Code Snippet
```jsx
const IncrementButton = React.memo(({ increment }) => {
    console.log('Render IncrementButton')

    return (
        <button onClick={increment}>Increment</button>
    )
})

const ResetButton = React.memo(({ reset }) => {
    console.log('Render ResetButton')

    return (
        <button onClick={reset}>Reset</button>
    )
})

function Counter() {
    const [value, setValue] = useState(0)
    const handleIncrement = useCallback(() => { setValue(value + 1) }, [value])
    const handleReset = useCallback(() => { setValue(0) }, [])

    console.log('Render Counter')

    return (
        <div>
            <div>{value}</div>
            <IncrementButton increment={handleIncrement} />
            <ResetButton reset={handleReset} />
        </div>
    )
}
```

## Answer Key
`IncrementButton` is re-rendering because of its data dependency on `value`.  One possible fix would be to manage the state using `useReducer()` rather than `useState()`.

## Distractors
### 1.
`IncrementButton` is re-rendering because of its data dependency on `value`.  This can be fixed by removing `value` from the dependency array of `useCallback()` where it is used to wrap `handleIncrement()`.

### 2.
This is happening during development because React always re-renders components when users interact with them, and `IncrementButton` is being clicked.  Since this behavior only happens for development builds there is no need to fix it for production.

### 3.
This is happening because React always re-renders components when users interact with them, and `IncrementButton` is being clicked.  So it is not possible to stop it from re-rendering.


## Common errors, misconceptions, or irrelevant information (optional):

* Starting with a naive counter, there are (unfortunately) three steps involved in avoiding unnecessary re-renders of the buttons.
* Unless one uses memoized function components or class comonents that extend `PureComponent`, all children will re-render when their parent renders.
* Any new prop value will trigger a re-render, and this includes any callback functions that are recreated with each render.
* Switching from `useState()` to `useReducer()` breaks the data dependency because a reducer would use "actions" rather than a reference to `value`.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
