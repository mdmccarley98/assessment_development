# architecture_skill

## Item ID
q302

## Claim
3

## Claim Behavior (evidence)
NA

## Content Target
mobile_app_architecture

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Suppose you're creating a iOS messaging app. When the app launches, it displays a list of conversations with the number of new messages from each conversation. You would like this view to display accurate numbers as fast as possible. Which one of the following implementation is most reasonable?

## Code Snippet (optional)


## Answer Key
You need to rely on the server to give you the accurate numbers of new messages. You can have the server provide a dedicated API that can return the numbers as fast as possible and call it when the app launches.

## Distractors

### 1.
When the app launches, read the push notifications it received after the last time the app was running, and count the numbers of new messages locally. These counts are always accurate.

### 2.
When the app is not running, it can still get push notifications and do simple processing in the background. The app should count incoming notifications, and save the counts to disk. These counts are always accurate.

### 3.
The app can execute long running tasks in the background. It should use that to maintain communication with the server, and keep the number of new messages for each contact persisted and up to date.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

