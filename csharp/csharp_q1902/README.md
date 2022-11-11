# C# 🎵 4 Features: null coalescing


## Item ID
1902

## Claim
-   Claim 4 (Distinguishing Features): Understand and use delegates, C# concurrency model (async/await), basic LINQ, properties, syntactic sugar (e.g. null-coalescing operator, auto-properties).


## Claim Behavior (evidence)
> The null-coalescing operator `??` returns the value of its left-hand operand if it isn't `null`; otherwise, it evaluates the right-hand operand and returns its result. The `??` operator doesn't evaluate its right-hand operand if the left-hand operand evaluates to non-null.
- https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/null-coalescing-operator

```
> dotnet run
dotnet run
Unhandled exception. System.ArgumentOutOfRangeException: Index was out of range. Must be non-negative and less than the size of the collection. (Parameter 'index')
   at System.Collections.Generic.List`1.get_Item(Int32 index)
   at Example.Program.Main(String[] args) in C:\Users\Robert\Dev\triplebyte-assessment\csharp\4-features-null-coalescing\Example\Program.cs:line 14
```
-- [./Example/Program.cs](./Example/Program.cs)

## Content Target
* null coalescing
* out of range exception


## Cognitive Model
* Comprehension


## Item Type
Multiple Choice


## Stem
What is the value of `day`?


## Code Snippet (optional)
```csharp
string bad_day = null;
var months = new Dictionary<string, List<KeyValuePair<int, string>>>();
months["February"] = new List<KeyValuePair<int, string>>{ new KeyValuePair<int, String>(28, "Last Day") };

var day = months?["February"]?[29].Value ?? bad_day ?? "Leap Day";
```

## Answer Key
It throws an exception:
```
Unhandled exception. System.ArgumentOutOfRangeException: Index was out of range.
```

## Distractors
### 1.
```
Leap Day
```


### 2.
It throws an exception:
```
Unhandled exception. System.NullReferenceException: Object reference not set to an instance of an object.
```


### 3.
```
null
```


## Common errors, misconceptions, or irrelevant information:


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

