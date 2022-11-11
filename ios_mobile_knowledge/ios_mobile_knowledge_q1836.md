# iOS: LLDB Debug


## Item ID
1836

## Claim
-   Claim/PI 5: The candidate displays strong theoretical knowledge of and practical expertise in iOS native development from the simple to the complex. They demonstrate a deep understanding of a wide range of UI development tools, iOS data persistence methods, and memory management techniques. They can create highly-performance, responsive iOS apps and handle advanced profiling and troubleshooting.


## Claim Behavior (evidence)

> * LLDB expressions can modify program state
> * Use auto-continuing breakpoints with debugger commands to inject code live
> - https://developer.apple.com/videos/play/wwdc2018/412/

> So I am going to add the breakpoint on line 16, double-click on the line, and add action to execute the specific line of code to set up the delegate,
> - https://jayeshkawli.ghost.io/advanced-debugging-in-ios/


## Content Target
* lldb
* debugging


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
The following `Example` class is initialized with a shipping address of "123 Main" and the `run()` function is called.

However the console does not print `Running: 123 Main`.

Is it possible to use LLDB to set `self.shippingAddress = shippingAddress` without changing a line of code?


## Code Snippet (optional)
```swift
class Example {
	var shippingAddress: String?

	init(shippingAddress: String) {
		print("Initialized: \(shippingAddress)")
	}

	func run() {
		if let address = shippingAddress {
			print("Running: \(address)")
		}
	}
}
```


## Answer Key
Yes.
1. Put a breakpoint inside `init` on `print("Initialized ...`
2. Add a "Debugger Command" action of `expression self.shippingAddress = shippingAddress`
3. Then run the app.


## Distractors
### 1.
No.
Even if you put a breakpoint inside `init`, the local `shippingAddress` will have been optimized away, so LLDB CANNOT assign `self.shippingAddress` correctly.


### 2.
No.
Even if you put a breakpoint inside `init`, the name of the local `shippingAddress` and `self.shippingAddress` are the same, and LLDB CANNOT determine which variable to modify.


### 3.
No.
Even if you put a breakpoint inside `init`, the "condition" field in a breakpoint CANNOT execute arbitrary code.


## Common errors, misconceptions, or irrelevant information:
1. it's not optimized away while debugging swift code
2. LLDB has no trouble distinguishing `shippingAddress` from `self.shippingAddress`
3. Although the `condition` field meant to observe, you can misuse it to modify state with a condition of `self.shippingAddress = shippingAddress`


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

