# Backend - JSON Parsing

## Item ID
2741

## Claim
2

## Target Skill Level
1

## Claim Behavior (evidence)
> - https://datatracker.ietf.org/doc/html/rfc8259

## Content Target
Web APIs (HTTP)

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Which JSON snippet could be parsed without any errors?

## Code Snippet (optional)

## Answer Key
```json
{
    "order_id": "34",
    "price": "$.5"
}
```

## Distractors

### 1.
```json
{
    "order_id": 34,
    "price": "0.50"  // decimal units
}
```

### 2.
```json
{
    "order_id": 34,
    "price": .5
}
```

### 3.
```json
{
    "order_id": "34",
    "price": "0.5",
}
```

## Common errors, misconceptions, or irrelevant information:
- JSON does not support comments
- Trailing comma at the end of the list would cause error
- Digits before decimal point must be specified for floating point numbers

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
