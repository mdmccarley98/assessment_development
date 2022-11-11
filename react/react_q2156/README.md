# Forwarding Refs

## Item ID
2156

## Claim
1: core_concepts

## Threshold Probabilities
[0.25, 0.41, 0.57, 0.75]

## Claim Behavior (evidence)
- [React.forwardRef](https://reactjs.org/docs/react-api.html#reactforwardref) - reactjs.org

## Content Target
Composition
Refs

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
Some third-party styling libraries, like react-bootstrap, rely heavily on being able to find elements based on a provided ref.  You may use your own components with these libraries, but you must be sure to forward any provided refs.  In this simplified case, you are implementing a custom text input that must forward its ref so that `MyApp` can change focus to the text input when the button is clicked.  Which implementation of `MyText` properly forwards its ref?

## Code Snippet
```jsx
function MyApp() {
  const ref = useRef()

  const focusOnText = () => ref.current.focus()

  return (
    <div>
      <MyText ref={ref} />
      <button onClick={focusOnText}>Focus on Text</button>
    </div>
  )
}
```

## Answer Key
Use `React.forwardRef()`.

```jsx
const MyText = React.forwardRef((props, ref) => {
  const [value, setValue] = useState('')
  const handleChange = (e) => setValue(e.target.value)

  return <input ref={ref} type='text' value={value} onChange={handleChange} />
})
```

## Distractors
### 1.
Pass `ref` from `props` to the top-level element in the return value.

```jsx
function MyText({ref}) {
  const [value, setValue] = useState('')
  const handleChange = (e) => setValue(e.target.value)

  return <input ref={ref} type='text' value={value} onChange={handleChange} />
}
```

### 2.
`ref` is the second parameter on function components.

```jsx
function MyText(props, ref) {
  const [value, setValue] = useState('')
  const handleChange = (e) => setValue(e.target.value)

  return <input ref={ref} type='text' value={value} onChange={handleChange} />
}
```

### 3.
Refs are forwarded automatically by React. So the other answers would be providing the wrong value.

```jsx
function MyText() {
  const [value, setValue] = useState('')
  const handleChange = (e) => setValue(e.target.value)

  return <input type='text' value={value} onChange={handleChange} />
}
```

## Common errors, misconceptions, or irrelevant information (optional):

* The refs provided to elements are updated internally by React on each render.
* To forward refs, one should use `React.forwardRef()`.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
