# Node busy eventloop

## Item ID
2454

## Claim
Claim 1

## Threshold Probabilities
[0.20, 0.30, 0.50, 0.80]

## Claim Behavior (evidence)
> - [Node - Process](https://nodejs.org/api/process.html)

## Content Target
`Node Eventloop`

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Select the answer that best describes what problem will occur when running the program below.

## Code Snippet
```javascript
const http = require("http");

const calculate = () => {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum += i;
    }
    return sum;
};

const server = http.createServer();

server.on("request", (req, res) => {
    if (req.url === "/api/v1/calculate") {
        const sum = calculate();
        return res.end(`Sum is ${sum}`);
    } else {
        res.end("Ok");
    }
});

server.listen(3000);
```

## Answer Key
When the `/api/v1/calculate` API is invoked, the server won't be able to handle other requests because the event loop is busy with the compute-heavy operation.

## Distractors
### 1.
There will not be a problem. When `/api/v1/calculate` API is invoked, the event loop won't be blocked as node will create multiple threads.

### 2.
The program will never finish running.

### 3.
When `/api/v1/calculate` API is invoked, the program will throw an error as node inherently doesn't allow running long compute operations in the main event loop.

## Common errors, misconceptions, or irrelevant information (optional):
Node.js provides a single-threaded environment. This means that no two parts of your application run in parallel; instead, concurrency is achieved by handling I/O bound operations asynchronously. For example, a request from Node.js to the database engine to fetch some document is what allows Node.js to focus on some other part of the application:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
