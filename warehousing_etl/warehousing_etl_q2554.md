# Star Refactoring

## Item ID
2554

## Claim
Claim 1

## Threshold Probabilities
[0.35, 0.55, 0.75, 0.85]

## Claim Behavior (evidence)
[Star Snowflake Data Warehousing](https://www.guru99.com/star-snowflake-data-warehousing.html)

```
Characteristics of Star Schema:
- The dimension table are not joined to each other
```

[Star Schema](https://www.techopedia.com/definition/14724/star-schema)

```
A star schema is a data warehousing architecture model where one fact table references multiple dimension tables, which, when viewed as a diagram, looks like a star with the fact table in the center and the dimension tables radiating from it. 
```

## Content Target
`Schemas – star/snowflake`

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Consider the following set of tables for tracking a retailer's sales of smartphones. Which of the following alterations rearranges the schema such that each dimensional table is related only to the central fact table?

## Code Snippet (Optional)
```
TABLE transactions (id, date, product_id, store_id, price, currency, qty)
TABLE product (id, manufacturer_id, screen_size, front_camera_megapixels, has_headphone_jack)
TABLE manufacturers (id, name, address)
TABLE store (id, address)
```

## Answer Key
Put manufacturer_id in the transactions table instead of the product table

## Distractors
### 1.
Make a new currency table with a row for each possible currency, and refer to that from transactions

### 2.
Move the has_headphone_jack data into a separate table that has only `(product_id, has_headphone_jack)`

### 3.
Store the address as (number, street, city, country) columns instead of one column

## Common errors, misconceptions, or irrelevant information (Optional):
In the initial schema, the dimensional table product is linked to both transactions and manufacturers, making it not a star schema according to the above definition. 

## Triplebyte Review
- Language Review:
- Bias/Fairness Review:
- Content Review:
