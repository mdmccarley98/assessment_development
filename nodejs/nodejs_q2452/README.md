# Node Streams and pipe

## Item ID
2452

## Claim
Claim 3

## Threshold Probabilities
[0.20, 0.30, 0.50, 0.80]

## Claim Behavior (evidence)
> - [Node - Streams](https://nodejs.org/api/stream.html)

## Content Target
`Node Streams`

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
What will be the output while running the node program included below? *Note: `info.txt` exists in the current directory and contains the text `Hello World`.*

## Code Snippet
```javascript
const fs = require("fs");
const zlib = require("zlib");
const file = 'info.txt';

const { Transform } = require("stream");

const printProgress = new Transform({
    transform(chunk, encoding, callback) {
        process.stdout.write("processing\n");
        callback(null, chunk);
    }
});

fs.createReadStream(file)
    .pipe(zlib.createGzip())
    .pipe(printProgress)
    .pipe(fs.createWriteStream(file + ".zip"))
    .on("finish", () => console.log("File processing complete"));
```

## Answer Key
It will create a compressed file `info.txt.zip` in the current directory and print the following to stdout:
```
processing
File processing complete
```

## Distractors
### 1.
The program will fail and exit with an exception because node streams do not support the use of pipe.

### 2.
It will not create a compressed file `info.txt.zip` but will print the following to the console:
```
processing
```

### 3.
Node will exit silently after creating the compressed file `info.txt.zip`, and it will print the following to the console:
```
File processing complete
```

## Common errors, misconceptions, or irrelevant information (optional):
- In Node, it is possible to easily pipe the output of a readable stream as the input of a writable stream which is the destination. The source must be a readable stream, and the destination must be a writable one.
- With the pipe method, we can easily consume streams and further customize our interaction with those streams using events.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
