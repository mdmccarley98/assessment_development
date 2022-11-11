# iOS: XCTest continue


## Item ID
1830

## Claim
-   Claim/PI 3: The candidate is comfortable with native iOS development and Objective-C or Swift. They understand how to use common UI development tools and display a solid foundation in performance profiling and troubleshooting. They show markers of real-world app design experience, but lack the advanced knowledge necessary to fix very subtle bugs or squeeze out maximum performance. They are likely able to build simple iOS apps on their own, but may make a few design errors.


## Claim Behavior (evidence)

> The default is true. Set this property to false within a test method to end execution of that method as soon as a failure occurs. Other test methods in the suite may still execute after a test fails.
> -- https://developer.apple.com/documentation/xctest/xctestcase/1496260-continueafterfailure

## Content Target
* xctest
* assert


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem
In the following test case, `XCTAssertGreaterThanOrEqual` fails.
However the function continues to execute and `examples[3]` and `examples[4]` throw beyond bounds exceptions.

How do you get the test to stop executing after a failure?


## Code Snippet (optional)
```objc
NSArray* examples = [NSArray arrayWithObjects:
						[NSNumber numberWithBool: true],
						[NSNumber numberWithBool: true],
						[NSNumber numberWithBool: true],
						nil];
if (examples.count < 5) {
	XCTAssertGreaterThanOrEqual(examples.count, 5, "The number of examples is incorrect.");
}
XCTAssertTrue([examples[0] boolValue], "first example");
XCTAssertTrue([examples[1] boolValue], "second example");
XCTAssertTrue([examples[2] boolValue], "third example");
XCTAssertTrue([examples[3] boolValue], "fourth example");
XCTAssertTrue([examples[4] boolValue], "fifth example");
```


## Answer Key
Set a XCTestCase option.
```objc
self.continueAfterFailure = false;
```


## Distractors
### 1.
Split the test into separate methods.
```objc
- (void)testExampleFirst {
	XCTAssertTrue([examples[0] boolValue], "first example");
}
- (void)testExampleSecond {
	XCTAssertTrue([examples[1] boolValue], "second example");
}
- (void)testExampleThird {
	XCTAssertTrue([examples[2] boolValue], "third example");
}
- (void)testExampleFourth {
	XCTAssertTrue([examples[3] boolValue], "fourth example");
}
- (void)testExampleFifth {
	XCTAssertTrue([examples[4] boolValue], "fifth example");
}
```


### 2.
Make sure each test is in range.
```objc
XCTAssertTrue(examples.count > 0 && [examples[0] boolValue], "first example");
XCTAssertTrue(examples.count > 1 && [examples[1] boolValue], "second example");
XCTAssertTrue(examples.count > 2 && [examples[2] boolValue], "third example");
XCTAssertTrue(examples.count > 3 && [examples[3] boolValue], "fourth example");
XCTAssertTrue(examples.count > 4 && [examples[4] boolValue], "fifth example");
```


### 3.
Make sure there are enough test cases.
```objc
NSArray* examples = [NSArray arrayWithObjects:
						[NSNumber numberWithBool: true],
						[NSNumber numberWithBool: true],
						[NSNumber numberWithBool: true],
						[NSNumber numberWithBool: true],
						[NSNumber numberWithBool: true],
						nil];
```


## Common errors, misconceptions, or irrelevant information:
1. all the tests will execute independently
2. this ignores the instructions
3. this ignores the instructions


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

