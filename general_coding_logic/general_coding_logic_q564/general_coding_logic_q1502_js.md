# programmatic_problem_solving

## Item ID
1502

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What is the value of the variable `tree` after the following code runs?

## Code Snippet (optional)
```javascript
function buildWordTreeFromSentences(sentenceList) {
  let root = {}
  sentenceList.forEach(sentence => {
    let base = root
    sentence.split(' ').forEach(word => {
      if (base[word] === undefined) {
        base[word] = {}
      } 
      base = base[word]
    })
  })
  return root
}

let tree = buildWordTreeFromSentences(['Hello world', 'Hello there'])
```

## Answer Key
`{ Hello: { world: {}, there: {} } }`

## Distractors

### 1.
`[ 'Hello', [ 'world', 'there' ] ]`

### 2.
`{ Hello: [ 'world', 'there' ]}`

### 3.
`{ Hello: { 'Hello world': {}, 'Hello there': {} } }`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

