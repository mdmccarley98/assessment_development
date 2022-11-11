# Without JSX


## Item ID
1918

## Claim
1: core_concepts

## Threshold Probabilities
[0.25, 0.35, 0.45, 0.55]

## Claim Behavior (evidence)
- [React Without JSX](https://reactjs.org/docs/react-without-jsx.html) - reactjs.org
- [createFactory()](https://reactjs.org/docs/react-api.html#createfactory) - reactjs.org


## Content Target
JSX
Composition


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem
In situations where it is impractical to run a toolchain to compile JSX, it is still possible to write code for React.  Choose the answer whose code is equivalent to the snippet below AND does NOT use a deprecated API:


## Code Snippet (optional)
```jsx
function MyApp({ theme, children }) {
  return (
    <div className={theme}>{children}</div>
  )
}

ReactDOM.render(
  <MyApp theme='dark'>
    <h1>Title</h1>
    <h2>Sub-title</h2>
  </MyApp>,
  document.getElementById('root')
)
```


## Answer Key
```javascript
const e = React.createElement

function MyApp({ theme, children }) {
  return e('div', { theme }, children)
}

ReactDOM.render(
  e(MyApp, { theme: 'dark' },
    e('h1', {}, 'Title'),
    e('h2', {}, 'Sub-title')
  ),
  document.getElementById('root')
)
```


## Distractors
### 1.
```javascript
const f = React.createFactory

function MyApp({ theme, children }) {
  return f('div')({ theme }, children)
}

ReactDOM.render(
  f(MyApp)({},
    f('h1')({}, 'Title'),
    f('h2')({}, 'Sub-title')
  ),
  document.getElementById('root')
)
```


### 2.
```javascript
const e = React.createElement

function MyApp({ theme, children }) {
  return e('div', { theme }, children)
}

ReactDOM.render(
  e(MyApp({ theme: 'dark' },
    [
      e('h1', {}, 'Title'),
      e('h2', {}, 'Sub-title')
    ]
  )),
  document.getElementById('root')
)
```


### 3.
```javascript
const f = React.createFactory

function MyApp({ theme, children }) {
  return f('div')({ theme }, children)
}

ReactDOM.render(
  MyApp.bind(null, {
    theme: 'dark',
    children: [
      f('h1')({}, 'Title'),
      f('h2')({}, 'Sub-title')
    ]
  }),
  document.getElementById('root')
)
```


## Common errors, misconceptions, or irrelevant information:
* `React.createFactory` is deprecated.
* `React.createElement` is transforms a function component into an actual React component.  The function component should not be executed.  It should be passed.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

