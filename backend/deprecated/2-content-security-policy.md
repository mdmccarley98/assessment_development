# Content Security Policy

## Item ID
backend-web-understanding-csp

## Claim
Claim 1

## Threshold Probabilities
[.50, .65, .85, .95]

## Claim Behavior (evidence)

> Content-Security-Policy: default-src 'self'; img-src *; media-src media1.com media2.com; script-src userscripts.example.com
> Media is only allowed from media1.com and media2.com (and not from subdomains of those sites).
> [source](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP#example_3)

## Content Target
- HTTP

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
The development team says that images are not loading from the new CDN they are using at `images.yournewcdn.com`. You look at the Content Security Policy here:

`Content-Security-Policy: default-src 'self'; img-src 'self' yournewcdn.com`

What is causing the issues?

## Code Snippet (optional)


## Answer Key
You need to specify the subdomain or use a wildcard.

## Distractors

### 1
You need to also include the domain in `default-src`.

### 2
You need to use `images-src`.

### 3
You need to use `media-src`.

## Common errors, misconceptions, or irrelevant information

## Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
