# Distributed Computing 3: JWT


## Item ID
2075

## Claim

-   Claim: 3

## Threshold Probabilities
[0.10, 0.30, 0.50, 0.70]

## Claim Behavior (evidence)

> The output is three Base64-URL strings separated by dots that can be easily passed in HTML and HTTP environments, while being more compact when compared to XML-based standards such as SAML.
>
> The following shows a JWT that has the previous header and payload encoded, and it is signed with a secret. 
>
> -- https://jwt.io/introduction

## Content Target
oauth
jwt


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem
There is an application that uses JWT for the `Authorization: Bearer` token.  
Which parts of the token are irreversibly hashed and encoded?


## Code Snippet (optional)



## Answer Key
Only the signature.


## Distractors
### 1.
The header, payload, and signature.


### 2.
The payload and signature.


### 3.
Only the payload.


## Common errors, misconceptions, or irrelevant information:

The header is base64 encoded, and describes the algorithm used to make the signature.

The payload is easily decodable by any man-in-the-middle without secure information.

The signature uses the algorithm in the payload, to hash the header and payload with a secret key.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

