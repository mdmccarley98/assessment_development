# frontend

## Item ID
373

## Claim
Claim 3: performance_and_security

## Threshold Probabilities
[.45, .60, .70, .80]

## Claim Behavior (evidence)
NA

## Content Target
javascript

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Why do `<script>` tags sometimes appear in the `<body>` instead of the `<head>`?

## Code Snippet (optional)


## Answer Key
The browser will block when it encounters a `<script>` tag, so scripts in the body won't be downloaded and executed until all the previous content is loaded.

## Distractors

### 1.
`<script>` tags in the body are downloaded asynchronously, so they do not block document parsing.

### 2.
This is a fragment of poor templating. Instead of inlining scripts in templates, developers should configure their asset pipeline to flag required scripts and include them in the `<head>`.

### 3.
It doesn't matter where `<script>` tags go because they will always be hoisted to the top of the `<head>` when the browser renders the document.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

