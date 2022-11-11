# React Effect Order


## Item ID
1926

## Claim
2: state

## Threshold Probabilities
[0.25, 0.35, 0.45, 0.55]


## Claim Behavior (evidence)
- (useEffect)[https://reactjs.org/docs/hooks-reference.html#useeffect] - reactjs.org
- (useLayoutEffect)[https://reactjs.org/docs/hooks-reference.html#uselayouteffect] - reactjs.org


## Content Target
Hooks
Effects


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem
What is logged by the following component?


## Code Snippet (optional)
```jsx
function LogEffects() {

  useEffect(() => {
    console.log('useEffect 1')
  })
 
  useLayoutEffect(() => {
    console.log('useLayoutEffect 1')
  })

  useLayoutEffect(() => {
    console.log('useLayoutEffect 2')
  })

  useEffect(() => {
    console.log('useEffect 2')
  })

  console.log('rendering')

  return <div>Hello</div>
 }
```


## Answer Key
```
rendering
useLayoutEffect 1
useLayoutEffect 2
useEffect 1
useEffect 2
```


## Distractors
### 1.
```
rendering
useEffect 1
useLayoutEffect 1
useLayoutEffect 2
useEffect 2
```


### 2.
```
rendering
useEffect 1
useEffect 2
useLayoutEffect 1
useLayoutEffect 2
```


### 3.
```
useEffect 1
useLayoutEffect 1
useLayoutEffect 2
useEffect 2
rendering
```


## Common errors, misconceptions, or irrelevant information:
* `useLayoutEffect` is called before React updates the DOM.  `useEffect` is called afterward.
* The component function must run to even register the effects.  So `rendering` would have to happen first.
* Rendering and effects are not one-to-one.  React might batch up multiple (very quick) renders and call effects less often.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

