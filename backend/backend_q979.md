# backend_web_understanding

## Item ID
979

## Claim
2

## Claim Behavior (evidence)
NA

## Content Target
Databases (SQL)

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
In the following database schema, which field is an example of an associative relationship attribute?

## Code Snippet (optional)
```plain
User
  id: primary key
  name

Permission
  id: primary key
  description

UserPermission:
  user_id: references User(id)
  permission_id: references Permission(id)
  grant_date
```

## Answer Key
`UserPermission.grant_date`

## Distractors

### 1.
`User.id`

### 2.
`Permission.description`

### 3.
`UserPermission.user_id`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

