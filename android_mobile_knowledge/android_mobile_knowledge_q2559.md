# Activity Result

## Item ID
2559

## Claim
3: publishing

## Claim Behavior (evidence)
> Activities may be started 'for result' to receive notification and data as a result of a requested action https://developer.android.com/training/basics/intents/result

## Content Target
- activities
- application interop

## Target Level
Level 1

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
If you've requested the user select a document to import into your application using `Intent.ACTION_GET_CONTENT`, how would your application be notified of which document is picked?

## Code Snippet (optional)

## Answer Key
`onActivityResult` would be called with the selected Uri via the Intent argument

## Distractors
### 1.
Your activity's `onCreate` method gets called with the selected Uri via the Bundle argument

### 2.
You would register a `BroadcastReceiver`, which would have the selected Uri passed via the Intent argument of `onReceive`

### 3.
A `ResultReceiver` you supplied to the Intent has its `onResultReceived` method called with the selected Uri in the Bundle argument

## Common errors, misconceptions, or irrelevant information:
- ResultReceivers are for accepting results from services
- Broadcast notifications aren't for direct communication between 2 apps

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
