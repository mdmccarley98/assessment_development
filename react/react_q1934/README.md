# Performance: Memo

## Item ID
1934

## Claim
3: profiling_and_performance

## Threshold Probabilities
[0.25, 0.35, 0.45, 0.55]

## Claim Behavior (evidence)
- [React.memo](https://reactjs.org/docs/react-api.html#reactmemo) - reactjs.org

## Content Target
Performance

## Cognitive Model
* Recall

## Item Type
Multiple Choice

## Stem
`React.memo` is a higher-order component that caches the rendered output of a provided component.  This can be beneficial for performance.  The code below simply imports `MyComponent` and exports a memoized version.  After the first render, under what conditions would the memoized component rerender?

## Code Snippit
```jsx
import React from 'react'
import MyComponent from './MyComponent'

export default React.memo(MyComponent)
```

## Answer Key
When a shallow-equality comparison between a component's previous and current props fails.

## Distractors
### 1.
When a shallow-equality comparison between a component's previous and current props OR state fails.

### 2.
When a shallow-equality comparison between a component's previous and current props AND state fails.

### 3.
When a deep-equality comparison between a component's previous and current props OR state fails.


## Common errors, misconceptions, or irrelevant information (optional):

* Memoizing components is useful when a component is rendered purely from props *and* the render logic itself is computationally intensive.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

