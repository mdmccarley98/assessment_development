# iOS: NSMutableDictionary setObject:nil


## Item ID
1827

## Claim
-   Claim/PI 3: The candidate is comfortable with native iOS development and Objective-C or Swift. They understand how to use common UI development tools and display a solid foundation in performance profiling and troubleshooting. They show markers of real-world app design experience, but lack the advanced knowledge necessary to fix very subtle bugs or squeeze out maximum performance. They are likely able to build simple iOS apps on their own, but may make a few design errors.


## Claim Behavior (evidence)
> ## Important
> Raises an NSInvalidArgumentException if anObject is nil. If you need to represent a nil value in the dictionary, use NSNull.
> - https://developer.apple.com/documentation/foundation/nsmutabledictionary/1411616-setobject?language=objc


## Content Target
* objc
* NSMutableDictionary
* NSNull


## Cognitive Model
* Comprehension


## Item Type
* Multiple choice


## Stem
What does the following Obj-C code do?


## Code Snippet (optional)
```objc
NSMutableDictionary* dict = [[NSMutableDictionary alloc] init];
[dict setObject:nil forKey:@"triplebyte"];
```


## Answer Key
Throws an exception: `object cannot be nil (key: triplebyte)`


## Distractors
### 1.
Sets the key `triplebyte` to `nil`.


### 2.
Sets the key `triplebyte` to the object `NSNull`.


### 3.
Throws an exception: `method sent to an uninitialized mutable dictionary object`


## Common errors, misconceptions, or irrelevant information:
Using `NSNull` and mutable dictionaries is a common pattern in obj-c development.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

