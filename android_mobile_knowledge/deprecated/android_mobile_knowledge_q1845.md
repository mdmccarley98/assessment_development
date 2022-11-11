# Intent Filters

## Item ID
1845

## Claim
Claim 3

## Claim Behavior (evidence)
> To request that the user select a file such as a document or photo and return a reference to your app, use the ACTION_GET_CONTENT action and specify your desired MIME type.
https://developer.android.com/guide/components/intents-common#OpenFile


## Content Target
* intents
* intent filters


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem
You are making a photo editing app.

Which intent filter would you use to put your app in the list of apps that can edit an image file from the web or an SD card?


## Code Snippet (optional)



## Answer Key
```xml
<action android:name="android.intent.action.GET_CONTENT" />
<data android:mimeType="image/*" />
```


## Distractors
### 1.
```xml
<action android:name="android.media.action.IMAGE_CAPTURE" />
```


### 2.
```xml
<action android:name="android.media.action.STILL_IMAGE_CAMERA" />
```


### 3.
```xml
<action android:name="android.intent.action.VIEW" />
```


## Common errors, misconceptions, or irrelevant information:
1. this means your app is a camera, producing an image not editing one
2. this means your app is a camera, producing an image not editing one
3. this would display your app instead of a web page


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

