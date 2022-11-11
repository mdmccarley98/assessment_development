# Security Engineering 4: Insecure Direct Object References

## Item ID
2220

## Claim

4

## Claim Behavior (evidence)

> Insecure Direct Object References (IDOR) occur when an application provides direct access to objects based on user-supplied input. As a result of this vulnerability attackers can bypass authorization and access resources in the system directly, for example database records or files. Insecure Direct Object References allow attackers to bypass authorization and access resources directly by modifying the value of a parameter used to directly point to an object. Such resources can be database entries belonging to other users, files in the system, and more. This is caused by the fact that the application takes user supplied input and uses it to retrieve an object without performing sufficient authorization checks.

> Insecure Direct Object References allow attackers to bypass authorization and access resources directly by modifying the value of a parameter used to directly point to an object.

> -- https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/05-Authorization_Testing/04-Testing_for_Insecure_Direct_Object_References

## Content Target

secure coding

## Cognitive Model

Comprehend

## Item Type

Multiple Choice

## Stem

During a recent penetration test, it was discovered that a user could access other users details by passing in another value to the `details` parameter of the following url:

`https://somewebsite.triplebyte.com/dashboard?details=445`

What kind of vulnerability is this?

## Code Snippet (optional)

## Answer Key

Insecure Direct Object References.

## Distractors

### 1.

SQL Injection.


### 2.

Directory Traversal.


### 3.

Request Smuggling.

## Common errors, misconceptions, or irrelevant information:

Access control vulnerabilities are on the rise. It is important that a claim 4 candidate would be able to identity Insecure Direct Object References.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

