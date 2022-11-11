# architecture_skill

## Item ID
q402

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
mobile_app_architecture

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Suppose you are writing a finance app that stores tens of thousands of transaction records for offline access. The app should let users quickly filter the transactions by a flexible set of criteria, such as “in last 2 months”, “amount greater than $100”, “categorized as travel expenses”, etc. Which of the following is the best way to implement this?

## Code Snippet (optional)


## Answer Key
This is a perfect problem for SQLite. You can store the transaction data in a table, and create indexes to make querying faster.

## Distractors

### 1.
You should store the records as JSON objects in a file. As long as the app loads all of the records into memory when the app starts, filter operations will be fast.

### 2.
Because you want to search on multiple criteria, you'll need an inverted index for this. Elastic search is one good choice. You could also implment your own inverted index.

### 3.
To make sure the app is responsive, the records should be stored in a binary file format.  Writing a C/C++ library with all the operations you will make this as fast as possible.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

