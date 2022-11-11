# Android - Uses Feature

## Item ID
2869

## Claim
3: publishing

## Claim Behavior (evidence)
> `uses-feature` declarations help Google Play select the appropriate set of devices to which applications may be downloaded (https://developer.android.com/guide/topics/manifest/uses-feature-element).

## Content Target
- deployment
- hardware features

## Target Level
Level 5

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
Consider an application that allows users to take photos but is also designed to work properly without the use of the camera. Why might it be important to include a `<uses-feature android:name="android.hardware.camera" android:required="false"/>` declaration in such an application's `AndroidManifest.xml`?

## Code Snippet (optional)

## Answer Key
This declaration informs Google Play that this application should be available for download on devices with no camera.

## Distractors
### 1.
Without this declaration, the application will crash when users attempt to use the camera.

### 2.
Not providing this declaration for applications that may use the camera is a privacy violation in Google Play.

### 3.
Without this declaration, the application will fail to launch on devices with no camera.

## Common errors, misconceptions, or irrelevant information:
- Developers commonly don't realize that simply declaring permissions to use the camera in their manifest causes Google Play to avoid offering the application on devices which have no camera. Properly setting `uses-feature` settings in your manifest assures that your application is available to the broadest audience possible.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
