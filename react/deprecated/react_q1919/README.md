# Class Function Binding

## Item ID
1919

## Claim
1: core_concepts

## Threshold Probabilities
[0.30, 0.48, 0.66, 0.85]

## Claim Behavior (evidence)
- [Handling Events](https://reactjs.org/docs/handling-events.html) - Reactjs.org

## Content Target
Class Function Binding

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
Your coworker is having trouble implementing a counter with React.  The initial render is fine, but when the `Add One` button is clicked the following error is produced:

```
TypeError: Cannot read property 'setState' of undefined
```

Why is this error happening?

## Code Snippet
```jsx
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {count: 0}
    }

    addOne() {
        // Error on the next line
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <input type='button' value='Add One' onClick={this.addOne} />
            </div>
        )
    }
}
```

## Answer Key
Class components need to explicitly bind member functions to `this`.  One way to do that is to modify the constructor to:

```jsx
    constructor(props) {
        super(props)
        this.state = {count: 0}

        // Add the next line
        this.addOne = this.addOne.bind(this)
    }
```

## Distractors
### 1.
Class components that need to reference `this` outside of the constructor should extend `React.ForwardThisComponent`:

```jsx
class Counter extends React.ForwardThisComponent {
    // Snip: Class code goes here
}
```

### 2.
The call to `this.addOne` is missing parentheses.  Modify the `render()` function like so:

```jsx
render() {
    return (
        <div>
            <div>{this.state.count}</div>
            <input type='button' value='Add One' onClick={this.addOne()} />
        </div>
    )
}
```

### 3.
The `addOne` method is missing a parameter definition.  Modify the `addOne` method to accept the `this` parameter.

```jsx
addOne(this) {
    this.setState({count: this.state.count + 1})
}
```

## Common errors, misconceptions, or irrelevant information (optional):

* This is the #1 issue that new developers have trouble with when they jump into writing React Components.  It seems like the React framework would handle such binding for you, but it does not.  Fortunately, function components do not have this problem.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

