# Backend - Web Forum Relation DB Schema

## Item ID
2672

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
In the context of an online forum application where users can create accounts and post messages in threads categorized by subject, what might the core relational DB schema look like? 

## Code Snippet (optional)

## Answer Key

```
user(id,username,password_hash)
forum_subject(id,name,owner_user_id)
forum_thread(id,forum_subject_id,title,text,creator_user_id,creation_timestamp)
forum_message(id,forum_thread_id, message_text, order, creation_timestamp, user_id)
```

## Distractors
### 1.

```
user(id,username,password)
account(id,user_id)
forum_subject(id,name)
forum_thread(id,title)
forum_message(id, message_text)
```

### 2.

```
user(id,username,password_hash)
roles(id,role_name)
user_roles(user_id,role_id)
user_forum_subjects(id,forum_subject_id)
```

### 3.

```
user(id,username,password_hash)
forum_subject(id,name,owner_user_id)
forum_thread(id,forum_subject_id,title,text,creator_user_id,creation_timestamp)
```

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
