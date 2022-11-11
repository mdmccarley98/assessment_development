# Node.js - Parsing Data from Large Files Using Streams

## Item ID
2712

## Claim
3

## Target Skill Level

## Threshold Probabilities
[0.60, 0.70, 0.80, 0.90]

## Claim Behavior (evidence)
> - [Node - Streams](https://nodejs.org/api/stream.html)

## Content Target
`Node Streams`

## Cognitive Model
- Comprehend
- Use

## Item Type
Multiple Choice

## Stem
An e-commerce startup wants to add a new API endpoint to their Node.js backend server to allow admin users to query data for all orders placed by customers. This data is stored into a large CSV file named `orders.csv` in the server's root directory, taking up ~500MB of space.
<br><br>
Select the code snippet that you can use to achieve this most efficiently.

## Code Snippet

## Answer Key
```javascript
server.on('request', (req, res) => {
  const src = fs.createReadStream('./orders.csv')
  src.pipe(res)
})
```

## Distractors

### 1.
```javascript
server.on('request', (req, res) => {
  fs.readFile('./orders.csv', (err, data) => {
    if (err) {
      console.error(err)
      throw err
    }
    res.end(data)
  })
})
```

### 2.
```javascript
server.on('request', (req, res) => {
  try {
    const data = fs.readFileSync('./orders.csv', 'utf8')
    res.end(data)
  } catch (err) {
    console.error(err)
  }
})
```

### 3.
```javascript
server.on('request', (req, res) => {
  try {
    const data = fs.readFileSync('./orders.csv', 'utf-8')
    const src = fs.createReadStream(data)
    src.pipe(res)
  } catch (err) {
    console.log(err)
  }
})
```

## Common errors, misconceptions, or irrelevant information (optional):

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
