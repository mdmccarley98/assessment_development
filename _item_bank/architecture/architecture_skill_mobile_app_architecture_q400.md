# architecture_skill

## Item ID
q400

## Claim
2

## Claim Behavior (evidence)
NA

## Content Target
mobile_app_architecture

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Imagine you're building an app that loads a list of full-color images from a server. You want to display these images in black and white (grayscale). Assuming you are not able to modify the images on the server, which one of the following implementation is most reasonable?

## Code Snippet (optional)


## Answer Key
The app should use an image cache. When an image requested is not in the cache, the app downloads the image, converts the image to grayscale in a background thread, and stores it in the cache.

## Distractors

### 1.
Implement a custom image view that uses a GPU shader to display the image in grayscale.

### 2.
The default image view already supports grayscale images. You just needs to set the 'grayscale' property to true.

### 3.
The computation of converting an image to grayscale is heavy, but can be easily parallelized (by partitioning the image). You should write a custom image view that spawns several threads to convert the image.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

