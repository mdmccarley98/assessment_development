# Security Engineering 5: Web Application Security Features


## Item ID
2222

## Claim
5


## Claim Behavior (evidence)

Web Application Firewall is able to filter requests based on various attributes of the request.

These can be an effective means of adding security features without necessarily modifying the application itself.

> For many organizations, WAFs are a trusted, first line of defense for applications, especially to protect against the OWASP Top 10—the foundational list of the most seen application vulnerabilities.

> - https://www.f5.com/services/resources/glossary/web-application-firewall

## Content Target
waf


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem

You have been tasked to add 2 security features to a web application in production.

- Rate Limiting
- Reject common SQL Injection Attempts

Which of the following solutions would fill these two needs with minimal downtime to the application?


## Code Snippet (optional)



## Answer Key

Place a Web Application Firewall in front of the application.


## Distractors
### 1.

Place a Load Balancer in front of the application.

### 2.

Add these features to the web application by writing them yourself.

### 3.

Utilize a content distribution network to cache and serve the application.


## Common errors, misconceptions, or irrelevant information:

1. Load Balancers do not always have these security features.
2. Writing your own rate limiting and sql injection filters is not likely not as effective as using well known a well known and highly supported 3rd party WAF.
3. While utilizing a CDN does reduce how many requests hit the application directly, it does not truly rate limit requests or filter potential malicious requests such as SQLi.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

