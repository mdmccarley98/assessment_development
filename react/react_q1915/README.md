# Fragments


## Item ID
1915


## Claim
1: core_concepts

## Threshold Probabilities
[0.30, 0.48, 0.66, 0.85]

## Claim Behavior (evidence)
- [Fragments](https://reactjs.org/docs/fragments.html)


## Content Target
Accessibility
Fragments


## Cognitive Model
Comprehend


## Item Type
Multiple Choice


## Stem
Below is a Dictionary component that uses the render-props pattern to render dictionary entries.

```jsx
function Dictionary({ terms, renderEntry }) {
  return (
    <dl>
      {terms.map(renderEntry)}
    </dl>
  )
}
```

Here is a sample of dictionary data:

```jsx
const nauticalTerms = [
  { 
    word: 'abaft', 
    definition: 'Toward the stern, relative to some object (e.g. "abaft the cockpit").'
  },
  { 
    word: 'abeam', 
    definition: 'On the beam, a relative bearing at right angles to the ship\'s keel.' 
  },
  { 
    word: 'aboard', 
    definition: 'On or in a vessel.' 
  }
]
```

Choose the `renderEntry()` function that meets the following requirements:
1. No errors or warnings are produced.
1. Accessibility is maintained by avoiding unnecessary container elements.


## Answer Key
```jsx
function renderEntry({ word, definition }) {
  return (
    <React.Fragment key={word}>
      <dt>{word}</dt>
      <dd>{definition}</dd>
    </React.Fragment>
  )
}
```


## Distractors
### 1.
```jsx
function renderEntry({ word, definition }) {
  return (
    <>
      <dt>{word}</dt>
      <dd>{definition}</dd>
    </>
  )
}
```


### 2.
```jsx
function renderEntry({ word, definition }) {
  return (
    <dt>{word}</dt>
    <dd>{definition}</dd>
  )
}
```


### 3.
```jsx
function renderEntry({ word, definition }) {
  return (
    <div key={word}>
      <dt>{word}</dt>
      <dd>{definition}</dd>
    </div>
  )
}

```


## Common errors, misconceptions, or irrelevant information:
* `<>` and `React.Fragment` are do the same thing, except that `React.Fragment` can accept a `key`.
* React render functions can only return a single element tree, not sibling elements.  


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

