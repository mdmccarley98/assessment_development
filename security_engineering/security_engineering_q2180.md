# Security Engineering 4: Path Traversal


## Item ID
2180

## Claim
4


## Claim Behavior (evidence)
> A path traversal attack (also known as directory traversal) aims to access files and directories that are stored outside the web root folder.
> -- https://owasp.org/www-community/attacks/Path_Traversal

## Content Target
logging
path traversal


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem

You have been asked to review some suspicious requests in the web server logs.

What type of attack was attempted?

## Code Snippet (optional)

```bash
- - - [4/May/2021:11:38:10 -0700] "GET https://yoursite.triplebyte.com/ HTTP/2" 200 1280
- - - [4/May/2021:11:38:13 -0700] "GET https://yoursite.triplebyte.com/../../../../etc/shadow HTTP/1" 404 2801
- - - [4/May/2021:11:38:18 -0700] "GET https://yoursite.triplebyte.com/ HTTP/2" 200 1280
- - - [4/May/2021:11:38:19 -0700] "GET https://yoursite.triplebyte.com/dashboard?q=weekly HTTP/2" 200 1401
```

## Answer Key

Path Traversal


## Distractors
### 1.

SQL Injection


### 2.

Command Injection


### 3.

Format String Attack


## Common errors, misconceptions, or irrelevant information:
1. Not SQLi
2. Not Command Injection
3. Not Format String Attack


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

