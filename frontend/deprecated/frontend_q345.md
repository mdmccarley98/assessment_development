# frontend

## Item ID
q345

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
What's wrong with the following React render function?

## Code Snippet (optional)
```jsx
render() {
  if (this.props.input !== this.state.message) {
    this.setState({message: this.props.input});
  }
  return (<div className='message'>{message}</div>);
}
```

## Answer Key
It is incorrect to call `setState` inside a `render` function.

## Distractors

### 1.
Message is not properly interpolated. It should be `{{message}}`.

### 2.
`className` is not a valid property. Use `\u003cdiv class=”message”\u003e`.

### 3.
React components should avoid using local state and instead communicate with a global store, e.g. `redux`.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

