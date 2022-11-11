# Hook Rules

## Item ID
1927

## Claim
2: state

## Threshold Probabilities
[0.25, 0.38, 0.51, 0.65]

## Claim Behavior (evidence)
- [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html) - reactjs.org

## Content Target
Hooks

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
Which implementation of `ListItems` obeys React's "Hook Rules"?

## Answer Key
```jsx
function ListItems({ showItems }) {
  const refs = [
    useRef(),
    useRef(),
    useRef()
  ]

  if (showItems) {
    return refs.map((ref, index) => (
      <li ref={ref}>List item: {index}</li>
    ))
  }

  return null
}
```

## Distractors
### 1.
```jsx
function ListItems({ showItems }) {
  let refs = []
  for (let i = 0; i < 3; i++) {
    refs[i] = useRef()
  }

  if (showItems) {
    return refs.map((ref, index) => (
      <li ref={ref}>List item: {index}</li>
    ))
  }

  return null
}
```

### 2.
```jsx
function ListItems({ showItems }) {
  let refs = []

  if (showItems) {
    refs = [
      useRef(),
      useRef(),
      useRef()
    ]

    return refs.map((ref, index) => (
      <li ref={ref}>List item: {index}</li>
    ))
  }

  return null
}
```

### 3.
```jsx
function ListItems({ showItems }) {
  let refs = []

  useEffect(() => {
      ref[0] = useRef()
      ref[1] = useRef()
      ref[2] = useRef()
  })

  if (showItems) {
    return refs.map((ref, index) => (
      <li ref={ref}>List item: {index}</li>
    ))
  }

  return null
}
```


## Common errors, misconceptions, or irrelevant information (optional):

* Hooks must be used at the "top-level" of function components.  Using hooks within an array or object literal is fine.
* Hooks are not supposed to be used in loops, conditionals, or nested functions.
* The React team provides an ESLint plugin to enforce the rules, since Javascript has no mechanism to enforce such rules.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

