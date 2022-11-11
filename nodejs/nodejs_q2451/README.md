# Node Process Uncaught Exception

## Item ID
2451

## Claim
Claim 3

## Threshold Probabilities
[0.20, 0.30, 0.50, 0.80]

## Claim Behavior (evidence)
> - [Node - Process](https://nodejs.org/api/process.html)

## Content Target
`Node Process`

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
When running the program below, what will the output be? *Note: `fileDoesNotExist.csv` does not exist.*

## Code Snippet
```javascript
const fs = require("fs").promises;

process.on("uncaughtException", (err) => {
    console.log(`Caught exception: ${err}`);
    process.exit(1);
});

async function createCSV() {
    try {
        const csvHeaders = "driver,team,points";
        await fs.writeFile("formula1.csv", csvHeaders);
    } catch (error) {
        console.error(`Got an error trying to write to a file: ${error.message}`);
    }
}

async function addTeam(driver, team, points) {
    try {
        const csvLine = `\n${driver},${team},${points}`;
        await fs.writeFile("formula1.csv", csvLine, { flag: "a" });
    } catch (error) {
        console.error(`Got an error trying to write to a file: ${error.message}`);
    }
}

async function readCSV() {
    await fs.readFile("fileDoesNotExist.csv");
}
(async function () {
    await createCSV();
    await addTeam("Lewis", "Mercedes", 103);
    await addTeam("Max", "Redbull", 100);
    await readCSV();
})();
```

## Answer Key
Node will print the following to the console and then exit:

```
Caught exception: Error: ENOENT: no such file or directory, open 'fileDoesNotExist.csv'
```

## Distractors
### 1.
Node will immediately exit because it tries to read a file that does not exist.

### 2.
Node will continue to run in a wait mode until file `fileDoesNotExist.csv` is available for reading.

### 3.
Node will exit silently without printing anything to the console because you cannot catch an event loop exception.

## Common errors, misconceptions, or irrelevant information (optional):
- The 'uncaughtException' event is emitted when an uncaught JavaScript exception bubbles all the way back to the event loop.
- Adding a handler for the 'uncaughtException' event overrides this default behavior.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
