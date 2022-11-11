# iOS: IBOutlet/IBAction


## Item ID
1813

## Claim
-   Claim/PI 2: The candidate understands some of the basics of native iOS development and Objective-C or Swift. They show some familiarity with UI development tools, common iOS interface components like UITableView, and simple performance optimization strategies. However, they display little or no knowledge of troubleshooting techniques, iOS data persistence methods, or the internals of iOS as an operating system.


## Claim Behavior (evidence)

>As early as 2004 (and perhaps earlier), IBAction was no longer necessary for a method to be noticed by Interface Builder. Any method with the signature -(void){name}:(id)sender would be visible in the outlets pane.
>
> Nevertheless, many developers find it useful to still use the IBAction return type in method declarations to denote that a particular method is connected to by an action. Even projects not using Storyboards / XIBs may choose to employ IBAction to call out target / action methods.
> ...
> Unlike IBAction, IBOutlet is still required for hooking up properties in code with objects in a Storyboard or XIB.
> - https://nshipster.com/ibaction-iboutlet-iboutletcollection/

> The IBOutlet attribute tells Xcode that you can connect to the nameTextField property from Interface Builder (which is why the attribute has the IB prefix).
> ...
> The IBAction attribute indicates that the method is an action that you can connect to from your storyboard in Interface Builder.
> https://developer.apple.com/library/archive/referencelibrary/GettingStarted/DevelopiOSAppsSwift/ConnectTheUIToCode.html

## Content Target
* Interface Builder
* IBOutlet
* IBAction


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
When should you use `IBOutlet` or `IBAction`?


## Code Snippet (optional)



## Answer Key
* To connect an event from Interface Builder to a function you can use an `IBAction`
* To connect a control from Interface Builder to a member variable you need an `IBOutlet`


## Distractors
### 1.
* To connect an event from Interface Builder to a function you can use an `IBOutlet`
* To connect a control from Interface Builder to a member variable you need an `IBAction`


### 2.
* To add a target to a control using `addTarget(_:action:for)` you need an `IBAction`
* To save a member variable with a control type, you need an `IBOutlet`


### 3.
* To add a target to a control using `addTarget(_:action:for)` you need an `IBOutlet`
* To save a member variable with a control type, you need an `IBAction`



## Common errors, misconceptions, or irrelevant information:

IBAction is used by Interface Builder to indicate a function can be hooked up to an event from a control.
IBOutlet is used by Interface Builder to reference which control belongs to which member variable.
If you aren't using Interface Builder it's not strictly necessary.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

