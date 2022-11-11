# Node Exponential backoff

## Item ID
2455

## Claim
Claim 2

## Threshold Probabilities
[0.30, 0.50, 0.60, 0.80]

## Claim Behavior (evidence)
> - NodeJS functions

## Content Target
`Node Function implementation`

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
Exponential backoff is a useful technique in dealing with unpredictable API responses. The severity of a server's failure is unknown so It is beneficial to increase the retry delay with every attempt.
For example, first 5 retries will have the following delays: [1ms,10ms,100ms,1s,10s] and if that exceeds, it will throw the last known error.

Please finish the implementation of below code to achieve above outcome.

```javascript
const randomlyFail = (resolve, reject) => Math.random() < 0.8 ? reject() : resolve();
const apiCall = () => new Promise((...args) => setTimeout(() => randomlyFail(...args), 1000));
const delay = retryCount => new Promise(resolve => setTimeout(resolve, 10 ** retryCount));

const getResource = async (retryCount = 0, lastError = null) => {
  if (retryCount > 5) throw new Error(lastError);

  // please complete the code
};

```
## Answer Key

```
  try {
    return apiCall();
  } catch (e) {
    await delay(retryCount);
    return getResource(retryCount + 1, e);
  }
```

## Distractors

### 1.
```
  try {
    return getResource(retryCount + 1, e);
  } catch (e) {
    await delay(retryCount);
    return apiCall();
  }
```

### 2.
```
  try {
    return apiCall();
  } catch (e) {
    return getResource(retryCount + 1, e);
  }
```

### 3.
```
  try {
    return apiCall();
  } catch (e) {
    return getResource(retryCount + 1, e);
    await delay(retryCount);
  }
```

## Common errors, misconceptions, or irrelevant information (optional):


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)