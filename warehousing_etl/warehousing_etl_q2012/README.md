# warehousing_etl

## Item ID
2012

## Claim
Claim 1

## Threshold Probabilities
[0.25, 0.4, 0.55, 0.75]

## Claim Behavior (evidence)
- [Granularity](https://www.kimballgroup.com/2009/05/the-10-essential-rules-of-dimensional-modeling/) - Kimball Dimensional Modeling

## Content Target
`Understand granularity of a table`

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Consider a database that stores order data.  An order represents a transaction where a customer purchases one or many products at a store at a specific point in time.  An order line represents each product within an order, which rolls up to order.  Based on this description, which of the following tables has the lowest granularity?

## Code Snippet (Optional)

## Answer Key
Order line table

## Distractors
### 1.
Order table

### 2.
Product, store, and day aggregate table

### 3.
Store and day aggregate table

## Common errors, misconceptions, or irrelevant information (Optional):
### 1.
As order lines roll up into orders, order table is a higher granularity

### 2.
Aggregate views of facts are at a higher granularity

### 3.
Aggregate views of facts are at a higher granularity

## Triplebyte Review
- Language Review:
- Bias/Fairness Review:
- Content Review:
