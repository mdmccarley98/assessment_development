# iOS: provisioning profile


## Item ID
1828

## Claim
-   Claim/PI 3: The candidate is comfortable with native iOS development and Objective-C or Swift. They understand how to use common UI development tools and display a solid foundation in performance profiling and troubleshooting. They show markers of real-world app design experience, but lack the advanced knowledge necessary to fix very subtle bugs or squeeze out maximum performance. They are likely able to build simple iOS apps on their own, but may make a few design errors.


## Claim Behavior (evidence)

> Source app (com.example.apple-samplecode.AVCam) that has this exact issue:
> https://developer.apple.com/documentation/avfoundation/cameras_and_media_capture/avcam_building_a_camera_app


## Content Target
* provisioning
* building


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
You go to build an iOS project and it fails with the following errors:

> No account for team "A93A5CM278". Add a new account in the Accounts preference pane or verify that your accounts have valid credentials.
> No profiles for 'com.example.apple-samplecode.AVCam' were found: Xcode couldn't find any iOS App Development provisioning profiles matching 'com.example.apple-samplecode.AVCam'.

How do you fix this error?


## Code Snippet (optional)



## Answer Key
Choose your team in the Signing settings.


## Distractors
### 1.
Make sure "Automatically manage signing" is checked.


### 2.
Make sure to run Archive first.


### 3.
Change the bundle identifier to something else.


## Common errors, misconceptions, or irrelevant information:
1. Automatic signing is already on, but the team below it is not your team.
2. Running Archive may choose a different deployment profile, but won't fix the development profile error above.
3. Changing the bundle identifier does not solve this issue.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

