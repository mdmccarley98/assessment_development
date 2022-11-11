# iOS: Pull-to-Refresh


## Item ID
1816

## Claim
-   Claim/PI 2: The candidate understands some of the basics of native iOS development and Objective-C or Swift. They show some familiarity with UI development tools, common iOS interface components like UITableView, and simple performance optimization strategies. However, they display little or no knowledge of troubleshooting techniques, iOS data persistence methods, or the internals of iOS as an operating system.


## Claim Behavior (evidence)
https://developer.apple.com/documentation/uikit/uirefreshcontrol

The action is commonly called "Pull-to-refresh": https://en.wikipedia.org/wiki/Pull-to-refresh

## Content Target
* controls
* UIKit
* UIScrollView


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem
How do you implement pull-to-refresh in UIKit on a `UIScrollView`?


## Code Snippet (optional)



## Answer Key
Add a `UIRefreshControl` to the scroll view.


## Distractors
### 1.
Add a `UIPullGestureRecognizer` to the scroll view.


### 2.
Override the `reloadData` function on the scroll view.


### 3.
Use `observeValueForKeyPath` on the `refresh` key of the scroll view.


## Common errors, misconceptions, or irrelevant information:

1. There is no "Pull" gesture: https://developer.apple.com/documentation/uikit/uigesturerecognizer
2. This doesn't listen for the pull gesture.
3. Pull-to-Refresh doesn't work like this.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

