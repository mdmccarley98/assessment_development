# architecture_skill

## Item ID
q300

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
Suppose you're writing “Tinder for pets”. Whenever the user swipes left, you want to animate away the current dog picture and animate in the next. How might you best go about this?

## Code Snippet (optional)


## Answer Key
Add a swipe gesture recognizer to the view. When it fires, use the UIView `“animateWithDuration”` method to animate one image off the screen and another on. You can use the completion block to clean up the off-screen image and update state.

## Distractors

### 1.
Register the view as a gesture delegate on the application window. When a slide gesture is received, call `animateFrame` on both image views. It's important to disable touch events on the view while the animation is in progress.

### 2.
Override `“touchesBegan:withEvent:”` on the view. When touch events come in, pass them into a gesture classifier, and get a gesture type. If it's a left swipe, trigger the animations using `AnimationKit`.

### 3.
The best way is to use `SpriteKit` and set up a physics simulation. If you connect the images with a spring, and apply force when the user swipes, you'll get a great animation.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

