# Node Events

## Item ID
2442

## Claim
Claim 3

## Threshold Probabilities
[0.10, 0.25, 0.40, 0.60]

## Claim Behavior (evidence)
> - [Node.js Events](https://nodejs.dev/learn/the-nodejs-event-emitter)

## Content Target
`Node Events`

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
Assuming a `data.txt` file in the current folder with sample data, what would the output of the following program be?

## Code Snippet (optional)

```javascript
const fs = require('fs');
const EventEmitter = require('events');

const readFile = async filePath => {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    return data;
  }
  catch(err) {
    console.log(err);
  }
}

class ReadEvents extends EventEmitter {
  async execute(asyncFunc, ...args) {
    this.emit('begin');
    try {
      const data = await asyncFunc(...args);
      this.emit('data', data);
      this.emit('end');
    } catch(err) {
      console.log('An error occurred');
      this.emit('error', err);
    }
  }
}
const readEvents = new ReadEvents();

readEvents.on('begin', () => console.log('About to execute'));
readEvents.on('end', () => console.log('Done with execute'));
readEvents.on('data', (data) => console.log('data:', data));

readEvents.execute(readFile, './data.txt');
```

## Answer Key

```
About to execute
data: <data placeholder>
Done with execute
```

## Distractors

### 1.
```
About to execute
An error occurred

```

### 2.
```
About to execute
Done with execute
data: <data placeholder>
```

### 3.
```
data: <data placeholder>
About to execute
Done with execute
```

## Common errors, misconceptions, or irrelevant information (optional):
The EventEmitter is a module that helps communication between objects in Node. EventEmitter is at the core of Node asynchronous event-driven architecture. Many of Node’s built-in modules inherit from EventEmitter.

The concept is simple: emitter objects emit named events that cause previously registered listeners to be called. So, an emitter object basically has two main features:

Emitting name events.

Registering and unregistering listener functions.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)