# Frontend - Content Security Policy 

## Item ID
2918

## Claim
3: performance_and_security

## Claim Behavior (evidence)
[CSP: content security policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)

## Content Target
Forms

## Cognitive Model
Usage

## Item Type
Multiple Choice

## Stem
The page below is served from "https://example.com":

```html
<html>
    <meta http-equiv="Content-Security-Policy" content="default-src https://*; img-src 'self' https://cdn.example.com/*">
    <link href="https://example.com/styles/main.css" rel="stylesheet" />
    <body>
        <img id='image1' src="https://example-two.com/image1.png" />
        <img id='image2' src="https://example.com/image2.png" />
        <img id='image3' src="https://cdn.example.com/image3.png" />
    </body>
</html>
```

What resources (css and images) are loaded by the browser?

## Code Snippet (optional)

## Answer Key
All resources are loaded except `image1.png` 

## Distractors
### 1.
All resources are loaded except `main.css`

### 2.
All resources are loaded

### 3.
All resources are loaded except `image1.png` and `image2.png`

## Common errors, misconceptions, or irrelevant information:
* default-src override specific could override img-src protocol 
* style-src policy is missing and any CSS resource can be loaded

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
