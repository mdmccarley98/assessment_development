# Context

## Item ID
1937

## Claim
2: state

## Threshold Probabilities
[0.30, 0.48, 0.66, 0.85]

## Claim Behavior (evidence)
- [Context](https://reactjs.org/docs/context.html) - reactjs.org

## Content Target
Context
Providers

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
React has two Context APIs. One is the "Legacy" Context API. It was only ever an experimental feature and will be removed in a future version of React.  React also has a newer, fully-supported Context API.  The following code uses the newer, fully-supported Context API.  

Below is an application that uses Context to provide all child components a language-code.  Which implementation of `DeeplyNestedComponent` correctly uses React's *fully supported* Context API.

## Code Snippet
```jsx
// LanguageContext.js
import React from 'react'

export const languageCodes = {
    english: { us: 'en-US', britain: 'en-GB' },
    spanish: { spain: 'es-ES', mexico: 'es-MX' }
}

export const LanguageContext = React.createContext(languageCodes.english.us)
```

```jsx
// index.js
import React from 'react'
import ReactDOM from 'react-dom';
import { LanguageContext, languageCodes } from './LanguageContext'
import DeeplyNestedComponent from './DeeplyNestedComponent'

const ShallowlyNestedComponent = () => (
    <DeeplyNestedComponent />
)

const MyApp = () => (
    <LanguageContext.Provider value={languageCodes.english.us}>
        <ShallowlyNestedComponent />
    </LanguageContext.Provider>
)

ReactDOM.render(
    <MyApp />,
    document.getElementById('root')
)
```

## Answer Key
```jsx
// DeeplyNestedComponent.js
import React, { useContext } from 'react'
import { LanguageContext } from './LanguageContext'

function DeeplyNestedComponent() {
    const language = useContext(LanguageContext)

    return (
        <div>Language: {language}</div>
    )
}

export default DeeplyNestedComponent
```

## Distractors
### 1.
```jsx
// DeeplyNestedComponent.js
import React from 'react'
import { LanguageContext } from './LanguageContext'

function DeeplyNestedComponent() {
    const language = LanguageContext

    return (
        <div>Language: {language}</div>
    )
}

export default DeeplyNestedComponent
```

### 2.
```jsx
// DeeplyNestedComponent.js
import React from 'react'

function DeeplyNestedComponent() {
    const language = this.context.LanguageContext

    return (
        <div>Language: {language}</div>
    )
}

export default DeeplyNestedComponent
```

### 3.
```jsx
// DeeplyNestedComponent.js
import React from 'react'

function DeeplyNestedComponent(props, context) {
    const language = context.LanguageContext

    return (
        <div>Language: {language}</div>
    )
}

export default DeeplyNestedComponent
```

## Common errors, misconceptions, or irrelevant information (optional):

* Confusion can obviously be caused by the existance of the Legacy Context API, for those who may have started using it as an experimental feature.
* Many popular libraries make use of Context internally so that components of the libary can share state without that state having to be passed around by the user of the library.
* While Context has some good use cases, it is essentially just global state. So even the React docs discourage the use of Context for state management in most cases.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
