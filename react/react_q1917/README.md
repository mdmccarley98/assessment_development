# Rendering Children

## Item ID
1917


## Claim
1: core_concepts

## Threshold Probabilities
[0.30, 0.48, 0.66, 0.85]

## Claim Behavior (evidence)
- [Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html) - reactjs.org

## Content Target
Composition

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
You are implementing a component to display articles.  The `Article` component renders some structure (in this case just a `<div>`), and renders its child components within that structure.  Which implementation of `Article` correctly renders its child components.

## Code Snippet
```jsx
function NewsSite() {
  return (
    <Article>
      <h1 className='title'>Go To Statement Considered Harmful</h1>
      <section className='intro'>For a number of years I have been familiar with ...</section>
      <section className='content'>For a number of years I have been familiar with ...</section>
    </Article>
  )
}
```

## Answer Key
```jsx
function Article(props) {
  return (
    <div className='article'>
      {props.children}
    </div>
  )
}
```

## Distractors
### 1.
```jsx
function Article() {
  return (
    <div className='article'>
      {this.children}
    </div>
  )
}
```

### 2.
```jsx
function Article(props, children) {
  return (
    <div className='article'>
      {children}
    </div>
  )
}
```

### 3.
```jsx
function Article() {
  return (
    <div className='article'>
      React.renderChildren()
    </div>
  )
}
```

## Common errors, misconceptions, or irrelevant information (optional):

* Child elements are found on `props.children`.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
