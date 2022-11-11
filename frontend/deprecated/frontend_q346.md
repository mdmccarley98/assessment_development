# frontend

## Item ID
q346

## Claim
Claim 1

## Claim Behavior (evidence)
NA

## Content Target
javascript

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What's wrong with the following React component?

## Code Snippet (optional)
```jsx
class App extends Component {
  updateMessage(e) {
    this.setState({message: e.target.value});
  }
  render() {
    return (
      <input type='text'
        onChange={this.updateMessage}
        value={this.state && this.state.message || ''}
      />
    );
  }
}
```

## Answer Key
`updateMessage` is not bound properly, so `this.setState` will be undefined.

## Distractors

### 1.
An `input` tag cannot be self-closing.

### 2.
`message` will never be updated because `e.target.value` never changes. `e.target.innerText` is the proper value.

### 3.
`e.target.value` is incorrect - we should use `e.currentTarget.value`.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

