# iOS: Custom Notifications


## Item ID
1824

## Claim
-   Claim/PI 3: The candidate is comfortable with native iOS development and Objective-C or Swift. They understand how to use common UI development tools and display a solid foundation in performance profiling and troubleshooting. They show markers of real-world app design experience, but lack the advanced knowledge necessary to fix very subtle bugs or squeeze out maximum performance. They are likely able to build simple iOS apps on their own, but may make a few design errors.


## Claim Behavior (evidence)

> To add a notification content app extension to your iOS app:
> Choose File > New > Target in Xcode.  
> ...  
> In the `Info.plist` file of your notification content app extension, configure the `UNNotificationExtensionCategory` key with the category strings of the notifications that your extension supports.  
> ...  
> The template provided by Xcode includes a storyboard and a view controller for you to configure. Build your custom notification interface by adding views to your view controller.  
> ...  
> Use the didReceive(_:) method of your view controller to update its labels and other views. The notification payload contains the data to use when configuring your view controller.  
> -- https://developer.apple.com/documentation/usernotificationsui/customizing_the_appearance_of_notifications

## Content Target
* user notifications
* custom notification
* extensions


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
The designers want to use custom art assets in your app's user notification.

Which of the following describes what needs to be done best?


## Code Snippet (optional)



## Answer Key
You need to do the following to make a custom notification:
* Create a new target for the notification content extension.
* Register the extension categories in `Info.plist`.
* Create a view controller for the notification and add views.
* Use the `didRecieve(_:)` method and configure the views.


## Distractors
### 1.
You need to do the following to make a custom notification:
* Create a view controller for the notification and add views.
* Use the `didRecieve(_:)` method and configure the views.
* Present the custom notification view controller in `application(_:didReceiveRemoteNotification:fetchCompletionHandler:)`


### 2.
It is NOT possible to customize the user notification alerts in iOS without using private Apple APIs.
The designers need to use a different design.


### 3.
You need to do the following to make a custom notification:
* Create a view controller for the notification and add views.
* Register the custom notification storyboard or xib in `Info.plist`.


## Common errors, misconceptions, or irrelevant information:
You need to create a different target extension.  Which means you can't easily check values stored in the AppDelegate of your main app from the custom notification target.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

