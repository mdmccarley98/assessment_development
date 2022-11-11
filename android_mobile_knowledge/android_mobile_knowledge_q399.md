# Auth Best Practices

## Item ID
399

## Claim
2: data_management

## Claim Behavior (evidence)
NA

## Content Target
android

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Is it safe for a mobile app to collect email and password strings from a user, and send this information to a server for authentication?

## Code Snippet (optional)


## Answer Key
Yes. It is safe, as long as the app sends the password via HTTPS.

## Distractors

### 1.
No. This is insecure. The app should validate the credentials locally using an HMAC.

### 2.
No. Apps should always use web views for authentication. Web views better protect against cross-process attacks.

### 3.
Yes. It is safe, as long as the app hashes the password and sends only the hash to the server.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

