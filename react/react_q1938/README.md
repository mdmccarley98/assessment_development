# Error Boundaries

## Item ID
1938

## Claim
3: profiling_and_performance

## Threshold Probabilities
[0.25, 0.38, 0.51, 0.65]

## Claim Behavior (evidence)
- [Error Boundaries](https://reactjs.org/docs/error-boundaries.html) - reactjs.org
- [Error Handling in React 16](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html) - reactjs.org

## Content Target
Error Boundaries

## Cognitive Model
* Comprehend

## Item Type
Multiple Choice

## Stem
The code below uses an "Error Boundary" pattern to prevent uncaught errors in `ChildComponent` from crashing the whole application.  Which implementation of `ErrorBoundary` will be most effective in accomplishing this goal?

## Code Snippet
```jsx
ReactDOM.render(
    <App>
      <ErrorBoundary message='Temporarily Unavailable...'>
        <ChildComponent />
      </ErrorBoundary>
    </App>
  document.getElementById('root')
)
```

## Answer Key
```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.props.message}</h1>
    }

    return this.props.children
  }
}
```

## Distractors
### 1.
```jsx
function ErrorBoundary({children, message}) {
  try {
    return children
  } catch (error) {
    return <h1>{message}</h1>
  }
}
```

### 2.
```jsx
function ErrorBoundary({message, children}) {
  const error = useCatchError()

  if (error) {
    return <h1>{message}</h1>
  }

  return children
}
```

### 3.
```jsx
const ErrorBoundary = React.errorBoundaryFactory(({children, message, error}) => {
  if (error) return <h1>{message}</h1>

  return children
})
```


## Common errors, misconceptions, or irrelevant information (optional):

* Try-catch blocks in parent components do almost nothing to stop errors from propagating up the call stack in React applications.
* As of React 17.1, there is no way to implement an effective Error Boundary with Function Components.  This will likely change in a future version.
* Even the Class Component approach has limitations.  Currently, this technique will not work while Server-side rendering.  Once again, this will likely change in a future version of React.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

