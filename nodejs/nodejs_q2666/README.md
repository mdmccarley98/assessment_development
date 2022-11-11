# NodeJS - Data Fetch

## Item ID
2666

## Claim
Claim 1

## Threshold Probabilities
[0.40, 0.50, 0.70, 0.90]

## Claim Behavior (evidence)
> - [Node - Process](https://nodejs.org/api/process.html)

## Content Target
`Node Data fetch`

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Assume that you're building a health check for your micro-service which returns 200 if the service is healthy and non-200 if the service is unhealthy.

Assume that `https://localhost:4000/order` always returns HTTP status code `200`. However, `https://localhost:4000/order/healthcheck` always returns `401`.

What would be the output when the user runs `ENVIRONMENT=prod node index.js`?

## Code Snippet
```javascript
//healthcheck.js

import axios from 'axios'

const healthCheck = async (path) => {
  const PORT = '4000'
  const SERVER = 'healthcheckserver'

  if (!process.env.ENVIRONMENT || !path) {
    console.log('Environment not set, returning')
    return
  }

  const service = appBasePath.split('/').shift()
  const endpoint = `https://${SERVER}:${PORT}/${service}`

  try {
    await axios.get(endpoint)
    return
  } catch (err) {
    console.log('An error occurred', err)
    throw err
  }
}

export default healthCheck
```

```javascript
//index.js
import healthCheck from './healthcheck.js'

healthCheck('order/healthcheck')
```

## Answer Key
The program will successfully return without any errors.

## Distractors
### 1.
The program will exit with an error due to the line `await axios.get(endpoint)`.

### 2.
The endpoint returns `401`, and the program will finish without throwing errors.

### 3.
The program will exit with an error message `An error occurred`.

## Common errors, misconceptions, or irrelevant information (optional):

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
