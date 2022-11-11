# backend_web_understanding

## Item ID
q625

## Claim
5

## Claim Behavior (evidence)
NA

## Content Target
databases

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Consider the following code to update a user's email, using an ORM which follows the active record pattern.  What is a typical pitfall of such ORM code?

## Code Snippet (optional)
```ruby
user = session.query(User).get(id)
user.email = email
user.save()
```

## Answer Key
It is susceptible to race conditions on the other user fields

## Distractors

### 1.
The save method isn't run in a transaction

### 2.
It scans the table instead of using an index

### 3.
It doesn't validate the email address

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

