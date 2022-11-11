# backend_web_understanding

## Item ID
q996

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
databases

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
In the following database schema, which weak entity would be least likely to require a single primary key?

## Code Snippet (optional)
```plain
Customer

Product

Order
  customer_id: references Customer

OrderItem
  order_id: references Order
  product_id: references Product
```

## Answer Key
`OrderItem`

## Distractors

### 1.
`Customer`

### 2.
`Product`

### 3.
`Order`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

