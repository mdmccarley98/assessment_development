# iOS: LLDB po address


## Item ID
1838

## Claim
-   Claim/PI 5: The candidate displays strong theoretical knowledge of and practical expertise in iOS native development from the simple to the complex. They demonstrate a deep understanding of a wide range of UI development tools, iOS data persistence methods, and memory management techniques. They can create highly-performance, responsive iOS apps and handle advanced profiling and troubleshooting.


## Claim Behavior (evidence)

example:
```
lldb) po 0x7fb4cdd0a440
140414523843648

```
d1:
```
(lldb) p 0x7fb4cdd0a440
(Int) $R22 = 140414523843648
```
d2:
```
(lldb) expression -O -- 0x7fb4cdd0a440
140414523843648

```
d3:
```
(lldb) expr 0x7fb4cdd0a440
(Int) $R28 = 140414523843648
```
answer:
```
(lldb) expression -l objc -O -- 0x7fb4cdd0a440
<DC.ViewController: 0x7fb4cdd0a440>
```

>     (lldb) po 0x7fc2b240e3a0
>     140474190980000
> This is because unlike Objective-C, Swift does not treat numbers as pointers and thus does not dereference to convert them to object description
> We can easily solve this problem by printing the memory object description in Objective-C frame as we did before,
> 
>     (lldb) expression -l objc -O -- 0x7fc2b240e3a0
>     <UIView: 0x7fc2b240e3a0; frame = (0 0; 375 667); autoresize = W+H; layer = <CALayer: 0x60c000036e20>>
> 
>     (lldb) poc 0x7fc2b240e3a0
>     <UIView: 0x7fc2b240e3a0; frame = (0 0; 375 667); autoresize = W+H; layer = <CALayer: 0x60c000036e20>>
>
> And it works great!
> - https://jayeshkawli.ghost.io/advanced-debugging-in-ios/


## Content Target
* debugging
* lldb
* evaluating objc vs swift


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
You are debugging the following swift `ViewController` in XCode 12.4.  The debugger is paused at `super.viewDidLoad()`.

In the "View hierarchy" window you can see the address of `ViewController` is `0x7fc05a704b70` however when you run the following command in LLDB it just prints the decimal value.

```
(lldb) po 0x7fc05a704b70
140464127757168
```

Which of the following will print the object description "<Example.ViewController: 0x7fc05a704b70>"?


## Code Snippet (optional)

```swift
class ViewController: UIViewController {
	override func viewDidLoad() {
		super.viewDidLoad()
	}
}
```

## Answer Key
```
expression -l objc -O -- 0x7fc05a704b70
```


## Distractors
### 1.
```
p 0x7fc05a704b70
```


### 2.
```
expression -O -- 0x7fc05a704b70
```


### 3.
```
expr 0x7fc05a704b70
```


## Common errors, misconceptions, or irrelevant information:
D2 is equivalent of `po` and will only work if LLDB is already in objc mode.  But by default, in swift code LLDB is in swift mode, and swift doesn't detect the type dynamically like objc does.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

