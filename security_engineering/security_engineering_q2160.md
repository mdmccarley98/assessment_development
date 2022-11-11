# Security Engineering 4: XSS


## Item ID
2160

## Claim
4


## Claim Behavior (evidence)
> An attacker can use XSS to send a malicious script to an unsuspecting user. The end user’s browser has no way to know that the script should not be trusted, and will execute the script. Because it thinks the script came from a trusted source, the malicious script can access any cookies, session tokens, or other sensitive information retained by the browser and used with that site.
>
> -- https://owasp.org/www-community/attacks/xss/


## Content Target
xss


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem

The logs of a web application show requests with the following contained in the URL: `/search?s=<script>alert('testing');</script>`

You test this URL and the javascript code triggers the popup with the word "testing".

What is the most likely action an attacker can perform?



## Code Snippet (optional)



## Answer Key

Steal a session token.

## Distractors
### 1.

View information in the database that they do not normally have access to.


### 2.

Execute an operating system command on the server as root.


### 3.

Open a backdoor shell on the users desktop.



## Common errors, misconceptions, or irrelevant information:
1. This is SQL Injection.
2. This is Command Injection.
3. This would require a browser engine vulnerability.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

