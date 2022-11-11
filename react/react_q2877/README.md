# React - Server Side Rendering

## Item ID
2877

## Claim
3: profiling_and_performance

## Threshold Probabilities
[0.25, 0.35, 0.45, 0.55]

## Claim Behavior (evidence)
- [ReactDOMServer](https://reactjs.org/docs/react-dom-server.html) - reactjs.org
- [hydrateRoot](https://reactjs.org/docs/react-dom-client.html#hydrateroot) - reactjs.org

## Content Target
Server-side rendering

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
You are building a messaging app with React. To shorten perceived loading time, you are implementing Server-Side Rendering for your React app. What are the crucial calls necessary on the server and client to achieve this?

## Code Snippet (optional)

## Answer Key
On the server: `ReactDOMServer.renderToString()`
On the client: `hydrateRoot()`

## Distractors
### 1.
On the server: `ReactDOMServer.renderToStaticMarkup()`
On the client: `hydrateRoot()`

### 2.
On the server: `ReactDOMServer.renderToString()`
On the client: `ReactDOM.render()`

### 3.
On the server: `ReactDOMServer.renderToStaticMarkup()`
On the client: `ReactDOM.render()`

## Common errors, misconceptions, or irrelevant information:
* `ReactDOMServer.renderToStaticMarkup()` will produce output that cannot be "rehydrated".  It is useful for rendering static sites.
* `ReactDOM.render()` is usually used to render components into DOM nodes, but for components that have been rendered on the server the appropriate call is `hydrateRoot()`.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
