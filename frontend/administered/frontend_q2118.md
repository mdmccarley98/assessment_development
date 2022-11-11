# HTTP: Requesting No Cache

## Item ID
2118

## Claim
Claim 3: performance_and_security

## Claim Behavior (evidence)
[Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)

## Content Target
HTTP

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Your web client is requesting an HTTP resource.  In this case, you do NOT want the browser or intermediate servers to provide a cached version of the resource, regardless of cache validity.  Which `Cache-Control` header should your client provide in the request?

## Code Snippet (optional)

## Answer Key
`Cache-Control: no-store`

## Distractors
### 1.
`Cache-Control: no-cache`

### 2.
`Cache-Control: proxy-revalidate`

### 3.
`Cache-Control: immutable`

## Common errors, misconceptions, or irrelevant information:
* Unfortunately, `no-cache` doesn't mean not to use any cache.  It means to revalidate the cache.
* `proxy-revalidate` and `immutable` are both *response* directives, not request directives.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
