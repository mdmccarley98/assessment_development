# backend_web_understanding

## Item ID
q223

## Claim
5

## Claim Behavior (evidence)
NA

## Content Target
http

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Suppose you want to serve an audio file over HTTP as it's being recorded. One problem with this is that the size of the file will not be known at request time, and you won't be able to set a regular content-length header. How might a server best get around this?

## Code Snippet (optional)


## Answer Key
If you use chunked transfer encoding, this will not be a problem.

## Distractors

### 1.
You can set a really large content-length header, and then close the connection when done.

### 2.
You can use a fast stream compression algorithm (like Snappy) to compress the audio file to a known size.

### 3.
You can return a 206 partial content with the first part of the data, and wait for the client to request more.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

