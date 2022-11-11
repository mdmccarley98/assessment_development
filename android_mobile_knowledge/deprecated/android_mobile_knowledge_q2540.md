# File sharing

## Item ID
2540

## Claim
Claim 3

## Claim Behavior (evidence)
> It is recommended that files be shared with other applications using temporary Uri permissions granted on the Intent initiating a share. - https://developer.android.com/training/secure-file-sharing/share-file#GrantPermissions
> It is best not to assume any particular email client package is installed on a device. Use intent filters instead to aggregate applications capable of delivering emails and allow users to select which they prefer to use.

## Content Target
- intents
- extras
- file management

## Target Level
- Level 3

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
If you wanted to share a file from your application with another application which of the following would be the recommended way to do so?

## Code Snippet (optional)

## Answer Key
Share the file Uri from your app's private filespace with the `FLAG_GRANT_URI_PERMISSION` set

## Distractors
### 1.
Save the file in public storage and share the Uri to the file to another application

### 2.
Share the raw data of the file directly via the `Intent.EXTRA_STREAM` parameter

### 3.
Upload the file to your application's backend and share the Uri to where it is hosted to the other application

## Common errors, misconceptions, or irrelevant information:
- It is no longer recommended to write files to public storage
- The `Intent.EXTRA_STREAM` parameter refers to a Uri, not the literal file data being sent.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
