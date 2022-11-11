# architecture_skill

## Item ID
q321

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
Suppose you're building an Android video app that allows users to download videos without keeping the app running, and to see the download progress when the app is open. Which of the following designs makes the most sense?

## Code Snippet (optional)


## Answer Key
When a user downloads a video, the app starts an `IntentService` to perform the download. The download progress view binds to the service when it is displayed, and unbinds when it is destroyed.

## Distractors

### 1.
There should be a service always running in background, outside the lifecycle of the app that performs download operations. The app communicates with the service via AIDL, to trigger download and fetch download progress.

### 2.
`AsyncTask` is a perfect match for this use case. It performs the download operation in background, and it has a `“onProgressUpdate”` method that the app can override to show download progress.

### 3.
The download task should be implemented as a custom thread that inherits from `Thread` class. The app starts a new thread for each download task, and these threads would keep running after the app exits.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

