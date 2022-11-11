# backend_web_understanding

## Item ID
566

## Claim
2

## Claim Behavior (evidence)
NA

## Content Target
Databases (SQL)

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
You have a `orderItems` table in a relational database, which has columns e.g. `orderId, itemId, quantity, itemPrice`, etc. You would like to make sure each `orderId / itemId` pair is unique, and you would also like to be able to compute total price of all items in one order from data in this table. Which of the following statement is correct?

## Code Snippet (optional)


## Answer Key
It is sufficient to create one composite unique index on columns `{orderId, itemId}`. You don't need additional indexes.

## Distractors

### 1.
You should not create database indices until there are a large number of records in this table.

### 2.
You have to use both of `{orderId, itemId}` as composite primary key to guarantee uniqueness. You also need to create an index on orderId column.

### 3.
You can either use `{orderId, itemId}` as a composite primary key, or create a composite unique index from them. You also need to create an index on orderId column.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

