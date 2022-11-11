# Frontend - dns-prefetch

## Item ID
2919

## Claim
3: performance_and_security

## Claim Behavior (evidence)
[dns-prefetch] https://developer.mozilla.org/en-US/docs/Web/Performance/dns-prefetch

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
<head>
    <meta charset="utf-8">
    <link rel="dns-prefetch" href="https://cdn.other-example.com/">
    <link rel="dns-prefetch" href="https://example.com/">
    <link rel="stylesheet" href="https://cdn.example.com/styles_1.css">
    <link rel="stylesheet" href="https://cdn.example.com/styles_2.css">
    <link rel="stylesheet" href="https://example.com/styles_3.css">
    <!-- and all other head elements -->
</head>
<body>
    <img src="https://cdn.example.com/icon.png">
    <img src="https://example.com/icon_2.png">
</body>
</html>
```

Which statement regarding its resources is FALSE?

## Code Snippet (optional)

## Answer Key
`styles_3.css` load time could be improved by dns-prefetch

## Distractors
### 1.
`icon.png` load time could be improved by dns-prefetch

### 2.
`styles_1.css` load time could be improved by dns-prefetch

### 3.
`icon_2.png` load time is not affected by dns-prefetch

## Common errors, misconceptions, or irrelevant information:
* dns-prefetch will work for any domain even with the same origin

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
