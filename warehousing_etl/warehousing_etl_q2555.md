# etl

## Item ID
2555

## Claim
Claim 1

## Threshold Probabilities
[0.35, 0.55, 0.75, 0.85]

## Claim Behavior (evidence)
[Star Snowflake Data Warehousing](https://www.guru99.com/star-snowflake-data-warehousing.html)

```
Characteristics of Snowflake Schema:
The snowflake schema's main benefit is that it uses smaller disk space.
- Normalized Data Structure.
```

## Content Target
`Schemas – star/snowflake`

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Consider the following set of tables for tracking a retailer's sales of smartphones. Which of the following alterations is the best way to arrange the data into a snowflake schema?

## Code Snippet (Optional)

```
TABLE transactions (id, date_id, product_id, price, qty)
TABLE dates (id, year, month, week, day_of_week, quarter)
TABLE product (
 id, manufacturer_id, screen_size, 
 cpu_name, cpu_clock_speed, cpu_cache_size, cpu_num_cores, cpu_watts)
TABLE manufacturers (id, name, address) 
```

## Answer Key
Move information about the CPU into a new table

## Distractors

### 1.
Move information about the manufacturer into the product table

### 2.
Move manufacturer_id from the product table to the transactions table

### 3.
Move screen_size from the product table into the transactions table

## Common errors, misconceptions, or irrelevant information (Optional):

### 1.

### 2.

### 3.

## Triplebyte Review
- Language Review:
- Bias/Fairness Review:
- Content Review:
