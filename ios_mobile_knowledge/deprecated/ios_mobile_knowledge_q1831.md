# iOS: XCTest


## Item ID
1831

## Claim
-   Claim/PI 3: The candidate is comfortable with native iOS development and Objective-C or Swift. They understand how to use common UI development tools and display a solid foundation in performance profiling and troubleshooting. They show markers of real-world app design experience, but lack the advanced knowledge necessary to fix very subtle bugs or squeeze out maximum performance. They are likely able to build simple iOS apps on their own, but may make a few design errors.


## Claim Behavior (evidence)
> A test method is an instance method on an XCTestCase subclass, with no parameters, no return value, and a name that begins with the lowercase word test. Test methods are automatically detected by the XCTest framework in Xcode.
> -- https://developer.apple.com/documentation/xctest/defining_test_cases_and_test_methods


## Content Target
* XCTest
* testing
* assert


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
Which of the following tests FAILS (red)?


## Code Snippet (optional)


## Answer Key
```swift
class ExampleTests: XCTestCase {
	func testExample()
	{
		XCTAssertTrue(false, "This test should be red.")
	}
}
```


## Distractors
### 1.
```swift
class ExampleTests: XCTestCase {
	func exampleUnderTest()
	{
		XCTAssertTrue(false, "This test should be red.")
	}
}
```


### 2.
```swift
class ExampleTests: XCTestCase {
	func exampleUnderTest()
	{
		XCTAssertFalse(false, "This test should be red.")
	}
}
```


### 3.
```swift
class ExampleTests: XCTestCase {
	func testExample()
	{
		XCTAssertTrue(true, "This test should be red.")
	}
}
```


## Common errors, misconceptions, or irrelevant information:
Tests in XCTestCase should start with the word "test".


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

