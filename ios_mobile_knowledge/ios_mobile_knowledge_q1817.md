# iOS: UIStackView Distribution


## Item ID
1817

## Claim
-   Claim/PI 2: The candidate understands some of the basics of native iOS development and Objective-C or Swift. They show some familiarity with UI development tools, common iOS interface components like UITableView, and simple performance optimization strategies. However, they display little or no knowledge of troubleshooting techniques, iOS data persistence methods, or the internals of iOS as an operating system.


## Claim Behavior (evidence)

> ## case fill
> A layout where the stack view resizes its arranged views so that they fill the available space along the stack view’s axis. When the arranged views do not fit within the stack view, it shrinks the views **according to their compression resistance** priority. If the arranged views do not fill the stack view, it stretches the views according to their hugging priority. If there is any ambiguity, the stack view resizes the arranged views based on their index in the arrangedSubviews array.
> ## case fillEqually
> A layout where the stack view resizes its arranged views so that they fill the available space along the stack view’s axis. The views are resized so that they are **all the same size** along the stack view’s axis.
> ## case fillProportionally
> A layout where the stack view resizes its arranged views so that they fill the available space along the stack view’s axis. Views are resized proportionally **based on their intrinsic content size** along the stack view’s axis.
> ## case equalSpacing
> A layout where the stack view positions its arranged views so that they fill the available space along the stack view’s axis. When the arranged **views do not fill** the stack view, it pads the spacing between the views evenly. If the arranged views do not fit within the stack view, it shrinks the views **according to their compression resistance** priority. If there is any ambiguity, the stack view shrinks the views based on their index in the arrangedSubviews array.
> ## case equalCentering
> A layout that attempts to position the arranged views so that they have an equal center-to-center spacing along the stack view’s axis, while maintaining the spacing property’s distance between views. If the arranged views do not fit within the stack view, it shrinks the spacing until it reaches the minimum spacing defined by its spacing property. If the views still do not fit, the stack view shrinks the arranged views **according to their compression resistance** priority. If there is any ambiguity, the stack view shrinks the views based on their index in the arrangedSubviews array.
>
> - https://developer.apple.com/documentation/uikit/uistackview/distribution
Emphasis mine.  The only one that keeps them the same size is `.fillEqually`

## Content Target
* UIStackView


## Cognitive Model
* Comprehension


## Item Type
Multiple Choice


## Stem
Which of the following UIStackView distributions makes the views all the same size along the axis?


## Code Snippet (optional)



## Answer Key
Fill Equally


## Distractors
### 1.
Fill


### 2.
Equal Spacing


### 3.
Equal Centering


## Common errors, misconceptions, or irrelevant information:



# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

