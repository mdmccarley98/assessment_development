# Node.js - Axios Auth

## Item ID
2687

## Claim
Claim 3

## Threshold Probabilities
[0.20, 0.40, 0.60, 0.80]

## Claim Behavior (evidence)
- [Node axios library](https://github.com/axios/axios)

## Content Target
`Node Function implementation`

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
Our fraud and risk detection application is trying to invoke an API to retrieve transaction data. However, these APIs have a secure point of entry using the Oauth2.0 standard and require Bearer/Token authentication. Currently `SendRequest` function returns `401 - Access Denied`. What should be changed to fix the error?

```javascript
import axios from 'axios'
const sendRequest =async () => {
    const endpoint = 'https://api.transaction.data/v1'
    const path = '/2022/01'
    try {
        await axios.get(endpoint + path);
    } catch(err) {
        console.log('An error has occurred while fetching the data', err)
        throw new Error(err)
    }
}
```

## Answer Key
Modify the try block to pass the Bearer token with the `Authorization` header:
```javascript
        await axios.get(endpoint + path, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6.eyJzY29wZSI6WyJDUlQiLCJNQVAiL.bj8EXZLIGJISU1f"
            },
        });
```

## Distractors
### 1.
Modify the try block to pass the Bearer token with `Params`:
```javascript
        await axios.get(endpoint + path, {
            params: {
                Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6.eyJzY29wZSI6WyJDUlQiLCJNQVAiL.bj8EXZLIGJISU1f"
            },
        });
```

### 2.
Use Basic authentication:
```javascript
        await axios.get(endpoint + path, {
            params: {
                Authorization: "Basic eyJhbGciOiJSUzI1NiIsInR5cCI6.eyJzY29wZSI6WyJDUlQiLCJNQVAiL.bj8EXZLIGJISU1f"
            },
        });
```

### 3.
Token should be passed as data:
```javascript
        await axios.get(endpoint + path, {
            data: "Basic eyJhbGciOiJSUzI1NiIsInR5cCI6.eyJzY29wZSI6WyJDUlQiLCJNQVAiL.bj8EXZLIGJISU1f"
        });
```

## Common errors, misconceptions, or irrelevant information (optional):

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
