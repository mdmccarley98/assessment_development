# iOS: LLDB skip


## Item ID
1837

## Claim
-   Claim/PI 5: The candidate displays strong theoretical knowledge of and practical expertise in iOS native development from the simple to the complex. They demonstrate a deep understanding of a wide range of UI development tools, iOS data persistence methods, and memory management techniques. They can create highly-performance, responsive iOS apps and handle advanced profiling and troubleshooting.


## Claim Behavior (evidence)

> Skip lines of code by dragging Instruction Pointer or “thread jump --by 1”
> - https://developer.apple.com/videos/play/wwdc2018/412/

## Content Target
* debugger
* lldb


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
The debugger is paused at a breakpoint on `var i = 0` in the following snippet.

Which debugging technique is most likely to result in "i: 0" in the console?


## Code Snippet (optional)
```swift
var i = 0

if i == 0 {
	i += 4
}

print("i: \(i)")
```


## Answer Key
Drag the instruction pointer to the `print` line and continue.


## Distractors
### 1.
Type `po i = 0` in the lldb console, and continue.


### 2.
Type `expression i = 0` in the lldb console, and continue.


### 3.
Type `p i = -4` in the lldb console, and continue.


## Common errors, misconceptions, or irrelevant information:
* Setting `i` to 0 does not prevent the `if` condition from executing.
* Setting `i` to -4 makes the `if` condition `false` so it prints `i: -4`.

But dragging the instruction pointer down will work, sometimes, well in this case it works.
At other times the assembler and swift code do not align correctly so moving the instruction pointer
may cause unexpected behavior.  For example, moving it to the line just above print still sets `i` to `4` even though that line is blank in swift.  (XCode 12.4, iPhone 12 simulator)

In this particular case, of all these debugging techniques, moving the instruction pointer is least likely to fail, and the other techniques will always fail.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

