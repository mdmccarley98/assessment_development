# architecture_skill

## Item ID
q403

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
mobile_app_architecture

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Suppose your need to store a user's access token for authenticating API calls. What's the best way to store the token, and why?

## Code Snippet (optional)


## Answer Key
You should store it using NSKeyChain. The data is automatically encrypted and is only accessible by your app.

## Distractors

### 1.
NSUserDefaults is the best choice. The data is automatically encrypted and is only accessible by your app.

### 2.
Your app should first encrypt the token and then store it as part of a binary file that only your app knows how to parse.

### 3.
You should hardcode it in the source code of the app. The App Store encrypts all the apps, so no one will be able to disassemble your app.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

