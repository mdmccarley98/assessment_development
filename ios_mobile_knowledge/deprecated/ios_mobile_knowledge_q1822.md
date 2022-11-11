# iOS: Camera Usage Description


## Item ID
1822

## Claim
-   Claim/PI 3: The candidate is comfortable with native iOS development and Objective-C or Swift. They understand how to use common UI development tools and display a solid foundation in performance profiling and troubleshooting. They show markers of real-world app design experience, but lack the advanced knowledge necessary to fix very subtle bugs or squeeze out maximum performance. They are likely able to build simple iOS apps on their own, but may make a few design errors.


## Claim Behavior (evidence)

> Privacy - Camera Usage Description
> [access] This app has crashed because it attempted to access privacy-sensitive data without a usage description.  The app's Info.plist must contain an NSCameraUsageDescription key with a string value explaining to the user how the app uses this data.

> ## NSCameraUsageDescription
> A message that tells the user why the app is requesting access to the device’s camera.
> ## Important
> This key is required if your app uses APIs that access the device’s camera.
> https://developer.apple.com/documentation/bundleresources/information_property_list/nsmicrophoneusagedescription


## Content Target
* camera access
* Info.plist


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem
When accessing the camera in iOS a dialog is displayed.
How do you change the message in the dialog:

> "Example" Would Like to Access the Camera
>
> YOUR_MESSAGE_HERE

## Code Snippet (optional)



## Answer Key
Edit `NSCameraUsageDescription` "Privacy - Camera Usage Description" in the `Info.plist` with your message.


## Distractors
### 1.
Call `AVAuthorizationStatus.requestAccess()` with your message.


### 2.
Set your message when initializing the `AVCaptureDevice` object.


### 3.
Set your message in `AVCaptureSession.accessDescription`.


## Common errors, misconceptions, or irrelevant information:



# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

