# Local State

## Item ID
1939

## Claim
2: state

## Threshold Probabilities
[0.30, 0.48, 0.66, 0.85]

## Claim Behavior (evidence)
- [Using the State Hook](https://reactjs.org/docs/hooks-state.html) - reactjs.org

## Content Target
Local State
Hooks

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
You are implementing a simple component that toggles between displaying "On!" and "Off" states.  What code could be added to setup local state handling in this component?

## Code Snippet
```jsx
function Toggle() {
    /* ### Missing state-handling code goes here ### */

    function handleClick() {
        setStatusValue(!statusValue)
    }

    const Status = () => {
        switch (statusValue) {
            case true:
                return <div>On!</div>
            case false:
                return <div>Off</div>
            default:
                return <div>Error: No Value!</div>
        }
    }

    return (
        <div>
            <Status />
            <input type='button' onClick={handleClick} value='Toggle' />
        </div>
    )
}
```

## Answer Key
```jsx
const [statusValue, setStatusValue] = useState(false)
```

## Distractors
### 1.
```jsx
const [setStatusValue, statusValue] = useState(false)
```

### 2.
```jsx
const statusValue = useState(false)

function setStatusValue(value) {
    statusValue = value
}
```

### 3.
```jsx
const {statusValue} = getState()

function setStatusValue(value) {
    this.setState({statusValue: value})
}
```

## Common errors, misconceptions, or irrelevant information (optional):

* In function components, local state is managed using the `useState()` hook.
* The `useState()` hook returns an array of two elements. The first element is the value, the second is a setter function for that value.
* Updates to the state should always be made through the setter function supplied by `useState()`.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
