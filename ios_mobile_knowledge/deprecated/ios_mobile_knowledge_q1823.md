# iOS: Constrain to Margins


## Item ID
1823

## Claim
-   Claim/PI 3: The candidate is comfortable with native iOS development and Objective-C or Swift. They understand how to use common UI development tools and display a solid foundation in performance profiling and troubleshooting. They show markers of real-world app design experience, but lack the advanced knowledge necessary to fix very subtle bugs or squeeze out maximum performance. They are likely able to build simple iOS apps on their own, but may make a few design errors.


## Claim Behavior (evidence)
> Layout margins provide a visual buffer between a view’s content and any content outside of the view’s bounds. The layout margins consist of inset values for each edge (top, bottom, leading, and trailing) of the view. These inset values create a space between the edges of the view’s bounds rectangle and the content inside the view.
> ...
> To set up constraints that respect the layout margins, enable the Constrain to margins option in Xcode, as shown in Figure 2. (If you do not enable that option, Xcode creates your constraints relative to the view’s bounds rectangle.) If the superview’s margins change later, the positions of elements tied to those margins are updated accordingly.
https://developer.apple.com/documentation/uikit/uiview/positioning_content_within_layout_margins


## Content Target
* interface builder
* constraints


## Cognitive Model
* Comprehension


## Item Type
Multiple Choice


## Stem
In the "Add new constraints" menu in Interface Builder, what does the "Constrain to margins" option do?


## Code Snippet (optional)



## Answer Key
Sets the constraints relative to an inset buffer instead of the view's bounds.


## Distractors
### 1.
Sets the constraints relative to the view's bounds instead of the inset values.


### 2.
Turns on or off constraints instead of frame layout.


### 3.
Sets the width and height constraints to the parent view's bounds.


## Common errors, misconceptions, or irrelevant information:



# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

