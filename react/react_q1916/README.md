# HOC Conversion to Functional Components

## Item ID
1916

## Claim
2: state

## Threshold Probabilities
[0.25, 0.35, 0.45, 0.55]

## Claim Behavior (evidence)
- [Higher-Order Components](https://reactjs.org/docs/higher-order-components.html) - reactjs.org
- [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html) - reactjs.org

## Content Target
Composition

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
This is a Higher-Order Component that enhances a component to add logging behavior.  It returns a Class Component that uses lifecycle methods to create log messages when it mounts, unmounts, and each time it renders.

```jsx
function withLogging(WrappedComponent) {
  return class PL extends React.Component {
    componentDidMount() {
      console.log('Mounted')
      console.log(JSON.stringify(this.props))
    }

    componentWillUnmount() {
      console.log('Unmounted')
    }

    componentDidUpdate() {
      console.log(JSON.stringify(this.props))
    }

    render() {
      return <><WrappedComponent {...this.props}/></>
    }
  }
}
```

Using `withLogging()` in the following snippet creates these logs:
```
Mounted
{"value":3}
{"value":2}
{"value":1}
Unmounted
```

```jsx
function ClockDisplay({ value }) {
  return <div>{value}</div>
}

function CountDown({ from = 3, children }) {
  const [value, setValue] = useState(from)

  useEffect(() => {
    if (value > 0) {
      setTimeout(() => {
        setValue(value - 1)
      }, 1000)
    }
  }, [value])

  if (value > 0) {
    return React.cloneElement(children, { value })
  } else {
    return <h1>Blast off!</h1>
  }
}

const LoggingClockDisplay = withLogging(ClockDisplay)

ReactDOM.render(
    <CountDown from={3}>
      <LoggingClockDisplay />
    </CountDown>,
  document.getElementById('root')
)
```

You would like to rewrite `withLogging()` to return a Function Component.  Which new version of `withLogging()` would produce the same behavior as the old version?

## Answer Key
```jsx
const withLogging = (WrappedComponent) => (props) => {
  useEffect(() => {
    console.log('Mounted')

    return () => {
      console.log('Unmounted')
    }
  }, [])

  useEffect(() => {
    console.log(JSON.stringify(props))
  })

  return <><WrappedComponent {...props} /></>
}
```

## Distractors
### 1.
```jsx
const withLogging = (WrappedComponent) => (props) => {
  useEffect(() => {
    console.log('Mounted')

    console.log(JSON.stringify(props))

    return () => {
      console.log('Unmounted')
    }
  })

  return <><WrappedComponent {...props} /></>
}
```

### 2.
```jsx
function withLogging(WrappedComponent) {
  const [firstRender, setFirstRender] = useState(true)
  const wrappedRef = useRef()

  function isMounted() {
    return wrappedRef.current != null
  }

  return function (props) {
    if (firstRender) {
      console.log('Mounted')
      setFirstRender(false)
    }

    if (isMounted()) {
      console.log(JSON.stringify(props))
    } else {
      console.log('Unmounted')
    }

    return <><WrappedComponent {...props} /></>
  }
}
```

### 3.
```jsx
function withLogging(WrappedComponent) {
  return function (props) {
    useEffect(() => {
      console.log('Mounted')
      
      return () => {
        console.log('Unmounted')
      }
    }, [])
    
    console.log(JSON.stringify(props))

    return <><WrappedComponent {...props} /></>
  }
}
```

## Common errors, misconceptions, or irrelevant information (optional):

* Two effects are needed.  One is for mount and unmount.  Another is needed to run on each render.
* Hooks cannot be used within the Higher-Order Component itself.  Despite the name, HOCs are not components.  Hooks may only be used in actual components.
* Something like Distractor #2 could probably be made to work using a "RenderProps" pattern instead of a HOC pattern, but it would be a very clunky approach.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
