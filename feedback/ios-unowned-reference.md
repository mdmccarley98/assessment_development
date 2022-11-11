# iOS Knowledge - Unowned Reference

## Item ID
ios-unowned-reference

## Claim
iOS Knowledge

## Claim Behavior (evidence)
* [ARC and Memory Management in Swift](https://www.raywenderlich.com/966538-arc-and-memory-management-in-swift) - raywenderlich.com
* [urlsession](https://www.raywenderlich.com/3244963-urlsession-tutorial-getting-started) - raywenderlich.com
* [weak self if swift](https://matteomanferdini.com/swift-weak-self/) - matteomanferdini.com

## Content Target
weak self

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem

You're working on a weather app.  One of the app's view controllers calls an API to get data, but the API is so slow that sometimes it returns when the user is already on another screen.  This has caused the app to crash in rare cases.
```
Fatal error: Attempted to read an unowned reference but object 0x600000f00dee was already deallocated
```

What can be done to avoid this issue?


## Code Snippet (optional)


## Answer Key

```swift
    defaultSession.dataTask(with: slowApiUrl) { [weak self] data, response, error in
        guard let self = self else { return }
        // ... process data
        self.temperature = processedData.temperature
    }
```

## Distractors

### 1.
```swift
    defaultSession.dataTask(with: slowApiUrl) { data, response, error in
        if let error = error { return }
        // ... process data
        self.temperature = processedData.temperature
    }
```

### 2.

```swift
    AF.request(slowApiUrl).validate(statusCode: 200..<300).responseJSON { response in
        // ... process data
        self.temperature = processedData.temperature
    }
```

### 3.
```swift
    defaultSession.dataTask(with: slowApiURL) { data, response, error in
        guard let httpResponse = response as? HTTPURLResponse,
                    (200...299).contains(httpResponse.statusCode) else {
            return
        }
        // ... process data
        self.temperature = processedData.temperature
    }
```



## Common errors, misconceptions, or irrelevant information (optional):

The crash is not related to if the API returns an error or not.
The API could return an error, and the app could display an error message, all without crashing.

The crash can happen when something in `self` is referenced but `self` no longer exists.  In this case, the request finishes after the view controller is gone because they are on a totally different screen.  Then `temperature` cannot be set on `self` because `self` does not exist.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

