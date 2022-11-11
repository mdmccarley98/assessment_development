# Node Express Error middleware

## Item ID
2443

## Claim
Claim 3

## Threshold Probabilities
[0.20, 0.30, 0.50, 0.80]

## Claim Behavior (evidence)
> - [Express JS - Error Middleware](https://expressjs.com/en/guide/using-middleware.html)

## Content Target
`Express error middleware`

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
It is often necessary to catch and process the errors that your program throws. It’s important to ensure that Express catches all errors that occur while running route handlers and middleware.

What would be the console output of the below code when the user runs the below program and requests `localhost:3009/download`?

## Code Snippet
```javascript
import express from 'express';
import fs from 'fs';

const app = express();
const fsPromises = fs.promises;

app.get('/download', (req, res, next) => {
    fsPromises.readFile('./file-not-exists.txt')
        .then(data => res.send(data))
        .catch(err => next(err));
})

app.use((err, req, res, next) => {
    console.log('Error middleware - One');
    next(err);
});

app.use((err, req, res, next) => {
    console.log('Error middleware - Two');
    res.status(500);
    res.send('Internal Server Error');
});

app.use((err, req, res, next) => {
    console.log('Error middleware - Three');
});

app.listen(3009);
```

## Answer Key
```
Error middleware - One
Error middleware - Two
```

## Distractors
### 1.
```
Error middleware - One
Error middleware - Two
Error middleware - Three
```

### 2.
```
Error middleware - Two
Error middleware - One
Error middleware - Three
```

### 3.
```
Error middleware - Two
Error middleware - Three
Error middleware - One
```

## Common errors, misconceptions, or irrelevant information (optional):
- Middleware functions in Express are functions that executes when the server receives the request and before the response is served to the client.
- They have access to the request and the response objects.
- They can be used for any data processing, database querying, making API calls, sending the response, or calling the next middleware function (using the next() function).
- Two key aspects of middleware functions are:
  - They are triggered sequentially (top to bottom) based on their sequence in code.
  - They operate until the process exits, or the response has been sent back to the client.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
