# Node.js npm install github

## Item ID
2448

## Claim
Claim 3

## Threshold Probabilities
[0.25, 0.35, 0.45, 0.55]

## Claim Behavior (evidence)
- [Node.js runtime](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package) - Github

## Content Target
`Node.js Runtime`

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
There is an npm package called `graphql`. The package's creator on GitHub is `graphql-creator`, and the repo name of the package is `graphql-js`. The latest published package to the npm registry for the `graphql` package is `15.6.1`, but the main branch on GitHub has version `16.0.0-rc.3`. How can a user install the package version `16.0.0.-rc.3`?

## Code Snippet

## Answer Key
```
npm i graphql-creator/graphql-js
```

## Distractors
### 1.
```
npm i graphql-js
```

### 2.
```
npm i graphql-creator
```

### 3.
```
npm i graphql-creator/graphql-js@16.0.0.-rc.3
```

## Common errors, misconceptions, or irrelevant information (optional):
- NPM supports installing the package directly from Github using either `npm install https://github.com/<username>/<repository>` or `npm install <username>/<repository>`
- The first distractor would install version `15.6.1`
- Second and Third distractor would throw an error by npm.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
