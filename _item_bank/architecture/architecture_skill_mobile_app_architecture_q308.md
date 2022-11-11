# architecture_skill

## Item ID
q308

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
Suppose you're writing an alarm clock app, and need the ability to wake up the user at a specified time. How might you best write this?

## Code Snippet (optional)


## Answer Key
This sounds like a pretty good application for local notifications. You can schedule a local notification for the right time, and take action when it is received.

## Distractors

### 1.
Push notification is a good way to do this. You can create an external web service, to schedule delivery of push notifications in the future. When the app gets the push notification, it can wake up the user in a nice way.

### 2.
Background processing is the right way to do this. The app can register a background task that checks the time, and does the right thing.

### 3.
Using an NSTimer is the best way to do this. You can set a delay, receiver (selector) and target, and the timer will call the selector on the specified target at the right time.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

