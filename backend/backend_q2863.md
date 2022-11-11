# backend_web_understanding - CSRF

## Item ID
2863

## Claim
3

## Target Skill Level
4

## Claim Behavior (evidence)
> - https://owasp.org/www-community/attacks/csrf
> - https://datatracker.ietf.org/doc/html/rfc6454

## Content Target
Infrastructure (security)

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
Suppose you are developing an application for a bank and you have to implement the `bank.com/payment` endpoint to allow transfer of one user's funds to another user's account. How can you ensure your application is not vulnerable to Cross-Site Request Forgery (CSRF) when the endpoint is called by a potential attacker from a different domain?

## Code Snippet (optional)

## Answer Key
When a user logs in to the `bank.com` website, generate a random token on the server, save it to the user's session and pass it back to the client with the HTTP response. Require the client to include the token in subsequent requests to the `bank.com/payment` endpoint, verify the token on the server, and only then perform the transfer.

## Distractors
### 1.
The same-origin policy security feature of modern browsers already protects from CSRF attacks.

### 2.
Use a strict Cross-Origin Resource Sharing policy on your server that doesn't allow web applications on other domains to access resources on your domain.

### 3.
Make the `bank.com/payment` endpoint support only POST requests, so it can't be exploited by an attacker using HTML injection.

## Common errors, misconceptions, or irrelevant information:
- CSRF attack does not bypass Same Origin Policy (SOP). SOP can only block the response.
- With regard to the CSRF issue it does not matter which method `bank.com/payment` endpoint implements. The endpoint would just be called a different way on the attacker’s website.
- Cross-Origin Resource Sharing policy (CORS) can allow us to bypass SOP for specified domains but does not tackle CSRF vulnerability.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
