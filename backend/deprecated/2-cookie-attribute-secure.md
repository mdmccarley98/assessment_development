# backend_web_understanding

## Item ID

backend-web-understanding-cookie-attribute-secure

## Claim
Claim 1

## Threshold Probabilities
[.60, .75, .90, .99]

## Claim Behavior (evidence)

> A cookie with the Secure attribute is only sent to the server with an encrypted request over the HTTPS protocol. It's never sent with unsecured HTTP (except on localhost), which means attackers man-in-the-middle can't access it easily.

[mozilla](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
[owasp](https://owasp.org/www-community/controls/SecureCookieAttribute)

## Content Target

http

## Cognitive Model

Recall

## Item Type

Multiple Choice

## Stem

What does the cookie attribute `Secure` do?

## Code Snippet (optional)

## Answer Key

By setting the secure attribute, the browser will not transmit the cookie over an unencrypted channel.

## Distractors

### 1

By setting the secure attribute, the browser will encrypt the cookie.

### 2

By setting the secure attribute, the browser will prevent JavaScript from accessing it.

### 3

By setting the secure attribute, the browser will never use the cookie.

## Common errors, misconceptions, or irrelevant information

## Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
