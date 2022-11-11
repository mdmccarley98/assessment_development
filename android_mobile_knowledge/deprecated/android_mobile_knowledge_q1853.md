# Prohibited

## Item ID
1853

## Claim
Claim 3

## Claim Behavior (evidence)
> VX-N2	CR-3	The app supports gesture navigation for going back / going to the home screen.  
> -- https://developer.android.com/docs/quality-guidelines/core-app-quality?authuser=1#ux


## Content Target
-   Claim/PI 4: The candidate is well-versed in native Android development, along with both the underlying theory and practical application of Java/Kotlin and of the Android platform itself. They understand Android data persistence methods, memory management, and performance profiling and troubleshooting, and they are comfortable using a range of UI development tools to create a responsive UI. They may not know all the details of advanced performance optimizations, but can clearly articulate tradeoffs between different libraries and tools. They display the ability to translate theoretical knowledge into practical solutions that are close to optimal.


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
Which of the following are guidelines to be accepted by the Play Store?


## Code Snippet (optional)



## Answer Key
Support for system gesture navigation, going back and going to the home screen gestures.


## Distractors
### 1.
Using AppCompatActivity instead of Activity.


### 2.
Write only to Internal Storage.  Reads from External Storage are allowed.


### 3.
Using Material Design components.


## Common errors, misconceptions, or irrelevant information:

It is possible in some cases to opt out of gesture navigation.  But it's still one of the guidelines that is tested by Google.

> ### Conflicts with Home/Quick Switch gestures
>
> The new system gestures for Home and Quick Switch both involve swipes at the bottom of the screen in the space previously occupied by the nav bar. Apps cannot opt out of these gestures, as they can with the Back gesture.
>
> To mitigate this problem, Android 10 introduces the WindowInsets.getMandatorySystemGestureInsets() API, which informs apps of the touch recognition thresholds.
>
> ### Games and other non-View apps
>
> Games and other apps that don't have a view hierarchy often require the user to swipe near the system gesture areas. In those cases, games can use Window.setSystemGestureExclusionRects() to exclude areas that overlap with areas reserved for system gestures. Games should make sure to only exclude these areas when necessary, such as during gameplay.
>
> If a game requires the user to swipe near the home gesture area, the app can request to be laid out in immersive mode. This disables the system gestures while the user is interacting with the game, but allows the user to re-enable the system gestures by swiping from the bottom of the screen.
>
> -- https://developer.android.com/training/gestures/gesturenav?authuser=1

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

