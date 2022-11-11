# architecture_skill

## Item ID
q299

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
Suppose you're building an iOS app like Instagram, where users scroll through a vertical feed of photos pulled from an API. Which of the following designs makes the most sense?

## Code Snippet (optional)


## Answer Key
At the root, this should be a table view, with one cell per photo. The actual images should be loaded asynchronously (with caching) when each cell is displayed.

## Distractors

### 1.
At the most basic level, this will be a large vertical scroll view. The system can download all the images for a page of photos, and attach them as image views to the scroll view.

### 2.
This should be implemented with a ribbon view. The `drawRect` method of the ribbon view can then be overridden to draw each of photos in the right spot.

### 3.
This should be a web view. JavaScript code is highly optimized on iOS, and will give better scrolling performance than you're likely to get in native code.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

