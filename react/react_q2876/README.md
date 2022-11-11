# Setup

## Item ID
2876

## Claim
1: core_concepts

## Threshold Probabilities
[0.35, 0.55, 0.75, 0.95]

## Claim Behavior (evidence)
- [Hello World](https://reactjs.org/docs/hello-world.html) - reactjs.org

## Content Target
Setup

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
You are setting up a new React project.  How do you render the `App` component into `<div id="root"></div>`?

## Code Snippet
```html
<!-- File: my-app/public/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

## Answer Key
Use the `ReactDOM.createRoot()` API and then `render()` method.

```javascript
// File: my-app/index.js
import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

## Distractors
### 1.
Decorate the `div` with React attributes to reference the `App` component.

```html
<!-- File: my-app/public/index.html -->
<!-- snip -->
<div id="root" react-render="App"></div>
<!-- snip -->
```

### 2.
Edit the `render` property in the "react.json" file to tell React to link the root `div` to the Javascript file that exports `App`.

```json
// File: my-app/react.json
render: {
    "html-root": "#root",
    "init": "./App.js"
}
```

### 3.
Include the JSX preprocessor `meta` tag to tell browsers to parse JSX, and include the component in the desired location.

```html
<!-- File: my-app/public/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta preprocessor="JSX" >
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
        <App />
    </div>
  </body>
</html>
```

## Common errors, misconceptions, or irrelevant information (optional):

* React setup is done in Javascript, using the `render` method.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

