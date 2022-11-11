# backend_web_understanding

## Item ID
q149

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
Say you're building a web forum application, where users can create accounts and post messages on forums about a variety of subjects. What might your relational DB schema look like? Choose the most complete answer for this use-case. 

## Code Snippet (optional)


## Answer Key
The schema will likely have the tables: 
user(id,username,password_hash)
forum_subject(id,name,owner_user_id)
forum_thread(id,forum_subject_id,title,text,creator_user_id,creation_timestamp)
forum_message(id,forum_thread_id, message_text, order, creation_timestamp, user_id)

## Distractors

### 1.
The schema will likely have the tables

    user(id,username,password)  
    account(id,user_id)  
    forum_subject(id,name)  
    forum_thread(id,title)  
    forum_message(id, message_text)  

### 2.
The schema will likely have the tables

    user(id,username,password_hash)  
    roles(id,role_name)  
    user_roles(user_id,role_id)  
    user_forum_subjects(id,forum_subject_id)  



### 3.
The schema will likely have the tables

    user(id,username,password_hash)
    forum_subject(id,name,owner_user_id)
    forum_thread(id,forum_subject_id,title,text,creator_user_id,creation_timestamp)

## Common errors, misconceptions, or irrelevant information:
Tried to reuse the same Stem as the old question. The wrong items are easy to spot.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

