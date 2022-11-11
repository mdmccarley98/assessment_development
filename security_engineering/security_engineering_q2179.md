# Security Engineering 3: Cookies


## Item ID
2179

## Claim
3


## Claim Behavior (evidence)
> By setting the secure attribute, the browser will prevent the transmission of a cookie over an unencrypted channel.
> -- https://owasp.org/www-community/controls/SecureCookieAttribute

> A cookie with the HttpOnly attribute is inaccessible to the JavaScript Document.cookie API; it is sent only to the server. For example, cookies that persist server-side sessions don't need to be available to JavaScript, and should have the HttpOnly attribute. This precaution helps mitigate cross-site scripting (XSS) attacks.
> -- https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies

## Content Target
xss


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem

Which of the following cookies is only transmitted over an encrypted connection and is also not available to client javascript?


## Code Snippet (optional)



## Answer Key

`Set-Cookie: sessionid=Kad7ovw6LT...; Expires=Fri, 4 May 2022 11:38:00 GMT; Secure; HttpOnly`

## Distractors
### 1.

`Set-Cookie: sessionid=Kad7ovw6LT...; Expires=Fri, 4 May 2022 11:38:00 GMT; SameSite=Strict;`

### 2.

`Set-Cookie: sessionid=Kad7ovw6LT...; Expires=Fri, 4 May 2022 11:38:00 GMT; Private; HTTPSOnly`

### 3.

`Set-Cookie: sessionid=Kad7ovw6LT...; Expires=Fri, 4 May 2022 11:38:00 GMT; Https=true`


## Common errors, misconceptions, or irrelevant information:

1. The SameSite attribute lets servers specify whether/when cookies are sent with cross-site requests.
2. Private and HTTPSOnly do not exist.
3. Https attribute does not exist.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

