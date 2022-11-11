# frontend

## Item ID
367

## Claim
Claim 3: performance_and_security

## Claim Behavior (evidence)
NA

## Content Target
security

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
When testing your website against your API, you get the following error: `Origin http://localhost:8080/ is not allowed by Access-Control-Allow-Origin`. Why does this occur?

## Code Snippet (optional)


## Answer Key
The same-origin policy restricts how scripts interact with resources on another origin. Make sure your API allows cross-origin requests.

## Distractors

### 1.
Cross-site requests require a preflight `CONNECT` request to be sent ahead of time. Make sure you manually send this request before accessing the external domain.

### 2.
Modern browsers have sandboxed tabs, which cannot make cross-site AJAX requests. Proxy the request through your server instead.

### 3.
Browsers automatically include a convenient `Origin` header in cross-site requests, but it can be overridden to suppress this warning.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

