# architecture_skill

## Item ID
q301

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
Suppose you've written a custom UI element, with a UIImageView as a background and touch event handlers to respond to user input. When you test this class, it looks great visually, but does not respond when you tap it. What might be wrong?

## Code Snippet (optional)


## Answer Key
You need to set `isUserInteractionEnabled` to `YES` on the image view, to keep the view from discarding touch events. If you set this, you'll be good.

## Distractors

### 1.
View hierarchy elements that receive input need to be based on `UIControl`, not `UIView` (or `UIImageView`). Use a `UIImageControl` and everything will work.

### 2.
`UIKit` is blocking the touch events. If you want to get input and render a view, you need to write this at a lower level, using `drawRect` and `CoreGraphics`.

### 3.
`UIImageView` is not a full view. It's a view delegate. You need to add a transparent view on top, and process touch events on this transparent view.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

