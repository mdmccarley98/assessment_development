# architecture_skill

## Item ID
q404

## Claim
5

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
You should store it using SharedPreferences. Though the data is stored in plain text, it is only accessible by your app by default.

## Distractors

### 1.
You should store it using SharedPreferences. The data will be automatically encrypted and is only accessible by your app by default.

### 2.
Your app should first encrypt the token and then store it as part of a binary file that only your app knows how to parse.

### 3.
Hard coding the token in the source code of the app is a good solution. Apps in the app store can't be disassembled, so this is secure.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

