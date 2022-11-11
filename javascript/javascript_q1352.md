# lang_javascript_27#

## Item ID
1352

## Claim
Claim 6: Completing Everyday Coding Tasks

## Claim Behavior (evidence)


## Content Target
`Error Handling`

## Cognitive Model


## Item Type
Multiple Choice

## Stem
The getData function is asynchronous but you forget to use the await keyword in the function below. What will happen if the getData Promise is rejected?

## Code Snippet
```javascript
    async function tryToGetData() {
        try {
            getData();
        } catch (e) {
            console.log(e);
        }
    };
    tryToGetData();
```

## Answer Key
There will be an uncaught exception and the app might crash.

## Distractors

### 1.
The catch block will log the exception.

### 2.
getData() will return undefined and the app will continue running.

### 3.
getData() will not execute at all.

## Common errors, misconceptions, or irrelevant information (optional):

---

