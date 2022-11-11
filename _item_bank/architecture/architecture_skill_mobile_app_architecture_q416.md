# architecture_skill

## Item ID
q416

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
Suppose your Android app uses a custom service to download large files in background. Right after you launch the service by calling startService() in an Activity, entire app freezes and stops responding to user input. What is most likely the problem?

## Code Snippet (optional)


## Answer Key
The service is running in the main thread of the app. It should spawn a new thread for running the download task.

## Distractors

### 1.
The service is doing CPU intensive work and using up all the resources on the phone. The entire device is unresponsive.

### 2.
The service probably obtained the app's main looper and scheduled the download task on it by mistake.

### 3.
The app must be waiting for the service to return a result in the main thread. Instead, it should retrieve the result asynchronously.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

