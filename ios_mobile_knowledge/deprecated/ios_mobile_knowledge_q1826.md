# iOS: NotificationCenter.default.push


## Item ID
1826

## Claim
-   Claim/PI 3: The candidate is comfortable with native iOS development and Objective-C or Swift. They understand how to use common UI development tools and display a solid foundation in performance profiling and troubleshooting. They show markers of real-world app design experience, but lack the advanced knowledge necessary to fix very subtle bugs or squeeze out maximum performance. They are likely able to build simple iOS apps on their own, but may make a few design errors.


## Claim Behavior (evidence)

> ## NotificationCenter
> A notification dispatch mechanism that enables the broadcast of information to registered observers.
> -- https://developer.apple.com/documentation/foundation/notificationcenter

https://developer.apple.com/documentation/foundation/notificationcenter/1415812-post

> ## User Notifications
> Push user-facing notifications to the user's device from a server, or generate them locally from your app.
> -- https://developer.apple.com/documentation/usernotifications



## Content Target
* NotificationCenter
* User Notifications


## Cognitive Model
* Use


## Item Type
Multiple Choice


## Stem
Below is the code for the only view controller in the Example app.

What is displayed on the screen?


## Code Snippet (optional)
```swift
class ViewController: UIViewController {
	override func viewDidLoad() {
		super.viewDidLoad()

		let exampleName = Notification.Name("Triplebyte")
		NotificationCenter.default.post(name:exampleName, object: nil)
	}
}
```

## Answer Key
Nothing.  There aren't any observers for the "Triplebyte" notification.


## Distractors
### 1.
A user notification alert with the text "Triplebyte" from the app "Example".


### 2.
Nothing. The object is `nil` so no user notification alert is displayed.


### 3.
A user notification alert with the text "Triplebyte" but NO indication of which app sent the alert.


## Common errors, misconceptions, or irrelevant information:
NotificationCenter is a generic message passing and observing API, but User Notifications and PushKit are for displaying a notification alert.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

