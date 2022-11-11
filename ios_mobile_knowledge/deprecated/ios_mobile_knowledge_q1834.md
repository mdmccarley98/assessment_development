# iOS: GemoetryReader


## Item ID
1834

## Claim
-   Claim/PI 4: The candidate is well-versed in native iOS development, along with both the underlying theory and practical application of Objective-C/Swift and of the iOS platform itself. They understand iOS data persistence methods, memory management, and performance profiling and troubleshooting, and they are comfortable using a range of UI development tools to create a responsive UI. They may not know all the details of advanced performance optimizations, but can clearly articulate tradeoffs between different libraries and tools. They display the ability to translate theoretical knowledge into practical solutions that are close to optimal.


## Claim Behavior (evidence)

> Let’s begin by actually looking to the documentation Apple provides about GeometryReader:
>
> > A container view that defines its content as a function of its own size and coordinate space.
>
> Comparing to other entries that only say “No overview available”, we can consider ourselves lucky!
> 
> But what does this mean anyway? Well basically, GeometryReader is yet another view! Surprised? I guess you’re not by now. Almost everything is a view with SwiftUI! As you will see in the example below, GeometryReader lets YOU define its contents, but unlike other views, you also have access to some useful information you can seize to do your thing in the process.
> - https://swiftui-lab.com/geometryreader-to-the-rescue/


> GeometryReader is a view that gives you access to the size and position of it's parent. 
> - https://stackoverflow.com/questions/56729619/what-is-geometry-reader-in-swiftui

## Content Target
* SwiftUI
* GeometryReader


## Cognitive Model
* Recall


## Item Type
* Multiple Choice


## Stem
What does the SwiftUI `GeometryReader` view do?


## Code Snippet (optional)
```swift
struct Example: View {
    var body: some View {
        GeometryReader { proxy in
            // ...
        }
    }
}
```


## Answer Key
`GeometryReader` gives you access to the size and position of it's parent.


## Distractors
### 1.
`GeometryReader` lets you draw custom vector layers in a view.


### 2.
`GeometryReader` provides MapKit information like your GPS coordinates.


### 3.
`GeometryReader` allows multiple views to overlap each-other.


## Common errors, misconceptions, or irrelevant information:



# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

