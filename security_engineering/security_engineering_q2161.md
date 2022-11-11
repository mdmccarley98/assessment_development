# Security Engineering 4: Auth


## Item ID
2161

## Claim
4


## Claim Behavior (evidence)
> OpenID Connect enables scenarios where one login can be used across multiple applications, also known as single sign-on (SSO). For example, an application could support SSO with social networking services such as Facebook or Twitter so that users can choose to leverage a login they already have and are comfortable using.
>
> -- https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc#thats-not-all-folks-please-welcome-openid-connect

## Content Target
authorization


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem

The web development team is asking you for suggestions on implementing authentication and authorization in a new single page web application that also includes an API and iOS application available to the public. They would like the user to sign in via their Facebook or Google account.

Which of the following protocols is best suited for this?


## Code Snippet (optional)



## Answer Key
OIDC


## Distractors
### 1.
SAML


### 2.
LDAP


### 3.
OAuth2


## Common errors, misconceptions, or irrelevant information:
1. SAML is used for authentication and would not be used on its own for authorization.
2. LDAP - While it can be used in conjunction with OAuth2 services it is not ideal in this use case.
3. OAuth2 will only handle authorization.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
