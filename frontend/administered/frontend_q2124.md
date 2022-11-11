# Conditional PATCH

## Item ID
2124

## Claim
Claim 3: performance_and_security

## Claim Behavior (evidence)
* [If-Match](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match)
* [PATCH](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH)

## Content Target
HTTP

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
What does it mean when a PATCH request has the following header?

## Code Snippet (optional)
```
If-Match: W/"d14c91f83b4554b6"
```

## Answer Key
The PATCH instructions in the Request should only be applied by the server if the resource is semantically equivalent to the version referenced by the "d14c91f83b4554b6" ETag.

## Distractors
### 1.
The PATCH instructions in the Request should only be applied by the server if the resource is byte-for-byte identical to the version referenced by the "d14c91f83b4554b6" ETag.

### 2.
The server should NOT include PATCH instructions in the Response body if the resource is semantically equivalent to the version referenced by the "d14c91f83b4554b6" ETag.

### 3.
The server should NOT include PATCH instructions in the Response body if the resource is byte-for-byte identical to the version referenced by the "d14c91f83b4554b6" ETag.

## Common errors, misconceptions, or irrelevant information:
* PATCH instructions are sent from the client to the server.
* The `W/` prefix indicates that a "weak" ETag is used, meaning semantic equivalence but not necessarily byte-for-byte equality.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
