# iOS: Tab Bar


## Item ID
1818

## Claim
-   Claim/PI 2: The candidate understands some of the basics of native iOS development and Objective-C or Swift. They show some familiarity with UI development tools, common iOS interface components like UITableView, and simple performance optimization strategies. However, they display little or no knowledge of troubleshooting techniques, iOS data persistence methods, or the internals of iOS as an operating system.


## Claim Behavior (evidence)

> Tab bars always appear across the bottom edge of the screen and display the contents of one or more `UITabBarItem` objects.
https://developer.apple.com/documentation/uikit/uitabbar

* [class UITabBarItem][1] : UIBarItem
* [class UIBarItem][2] : NSObject
* [class UIView][3] : UIResponder
* [class UIResponder][4] : NSObject

[1]: https://developer.apple.com/documentation/uikit/uitabbaritem
[2]: https://developer.apple.com/documentation/uikit/uibaritem
[3]: https://developer.apple.com/documentation/uikit/uiview
[4]: https://developer.apple.com/documentation/uikit/uiresponder


## Content Target
* UIKit
* UITabBarController


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
Your app has a tab bar at the bottom managed by a `UITabBarController`.
The designers want you to create a search button and add it to the tab bar.

What base class does the search button need to have?

## Code Snippet (optional)



## Answer Key
`UITabBarItem`


## Distractors
### 1.
`UIView`


### 2.
`UIButtonBarItem`


### 3.
`UISearchBar`


## Common errors, misconceptions, or irrelevant information:
UITabBarItem and UIButtonBarItem are not subclasses of UIView.
UITabBarItem and UIButtonBarItem are subclasses of UIBarItem, which is a subclass of NSObject.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

