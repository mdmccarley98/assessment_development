# Modal Content Nuances

## Item ID
2503

## Claim
Claim 1

## Claim Behavior (evidence)
> To display modal content, it is recommended that developers use Dialog components housed in DialogFragments from support libraries like AndroidX to maximize compatibility across Android OS versions. https://developer.android.com/guide/topics/ui/dialogs

## Content Target
- Level 4: The candidate is well-versed in native Android development, along with both the underlying theory and practical application of Java/Kotlin and of the Android platform itself. They understand Android data persistence methods, memory management, and performance profiling and troubleshooting, and they are comfortable using a range of UI development tools to create a responsive UI. They may not know all the details of advanced performance optimizations, but can clearly articulate tradeoffs between different libraries and tools. They display the ability to translate theoretical knowledge into practical solutions that are close to optimal.

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
Which of the following is the recommended way to display modal content on Android?

## Code Snippet (optional)

## Answer Key
Use an `androidx.fragment.app.DialogFragment`

## Distractors
### 1.
Use an `android.app.Dialog` launched from the hosting Fragment/Activity

### 2.
Use an `android.app.DialogFragment`

### 3.
Embed a layout for modal content at the top of the view hierarchy, which can be conditionally displayed

## Common errors, misconceptions, or irrelevant information:
- Commonly, developers incorrectly choose to use android.app.Dialog components directly to display modal content because of the perceived ease of use. This method does a poor job of insulating the hosting application component from the details and management of the modal’s lifecycle.
- Developers often are unsure which suite of lifecycle components to choose from, sometimes deciding to use deprecated android.app.DialogFragment components. Developers need to understand the enhanced device compatibility that androidx lifecycle components offer.
- Someone unfamiliar with Android may not realize canned modal UI components exist.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
