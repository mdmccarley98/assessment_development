# Component Lifecycle

## Item ID
1920

## Claim
1: core_concepts

## Threshold Probabilities
[0.30, 0.48, 0.66, 0.85]

## Claim Behavior (evidence)
- [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html) - reactjs.org

## Content Target
lifecycle

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
You are implementing a class component that displays a single random dog picture.  The `fetchDog()` method will fetch a URL to a random picture of a dog.  This component needs some more code to work.  What code could be added to achieve the desired result?

## Code Snippet
```jsx
class RandomDog extends React.Component {
  fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      this.setState({ dogUrl: data.message })
    })
  }

  render() {
    if (this.state && this.state.dogUrl) {
      return <img src={this.state.dogUrl} alt='random' />
    }
    return <h3>Loading...</h3>
  }
}
```

## Answer Key
Override the `componentDidMount()` lifecycle method by inserting the following into the `RandomDog` component:

```jsx
// In RandomDog
componentDidMount() {
    this.fetchDog()
}
```

## Distractors
### 1.
Modify the `render()` function to start with a call to the `fetchDog()` method:

```jsx
// In RandomDog
render() {
  this.fetchDog() // <-- Add this line

  if (this.state && this.state.dogUrl) {
    return <img src={this.state.dogUrl} alt='random' />
  }
  return <h3>Loading...</h3>
}
```

### 2.
Override the `componentWillUpdate()` lifecycle method by inserting the following into the `RandomDog` component:

```jsx
// In RandomDog
componentWillUpdate() {
  this.fetchDog()
}
```

### 3.
Override the `shouldComponentUpdate()` lifecycle method by inserting the following into the `RandomDog` component:

```jsx
// In RandomDog
shouldComponentUpdate() {
  this.fetchDog()
}
```

## Common errors, misconceptions, or irrelevant information (optional):

* The React developer community has come to realize that lifecycle methods in general are dangerous.  React is based on a functional programming paradigm, and it has very specific times in the lifecycle when side-effects are safe.  Unfortunately, Javascript has no way of enforcing these expectations.  So it has been common for developers to misunderstand and add side-effects where they should not.  What's worse is that, in a lot of cases, the unwhitting developer's code will often work *most* of the time.  This has caused some React codebases to become riddled with bugs that are very difficult to reproduce.
* Currently, the documentation on Reactjs.org essentially hides most of the component lifecycle methods, because they are mostly unsafe for the use-cases that most developers want to implement.  The only lifecycle methods that are highlighted in the top-level docs are `componentDidMount()` and `componentWillUnmount()`, both of which are safe for side-effects because they happen in the "commit" phase of the lifecycle.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
