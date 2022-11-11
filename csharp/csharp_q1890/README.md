# C# 🎵 2 Composite: IEnumerator.Reset()

## Item ID
1890

## Claim
-   Claim 2 (Composite Objects): Use containers and classes to encapsulate other data types. Create and manipulate arrays, lists, and simple classes and structs. Understand the IEnumerable/IEnumerator interfaces.


## Claim Behavior (evidence)
```
0
error
Enumeration has not started. Call MoveNext.
current should be 0 after reset and move next: 0
enumerator still works after Reset: 1 (should be 1)
```
-- [./Example/Program.cs](./Example/Program.cs)

> Current is undefined under any of the following conditions:
> 
> * The enumerator is positioned before the first element in the collection, immediately after the enumerator is created. MoveNext must be called to advance the enumerator to the first element of the collection before reading the value of Current.
> 
> * The last call to MoveNext returned false, which indicates the end of the collection.
> 
> * The enumerator is invalidated due to changes made in the collection, such as adding, modifying, or deleting elements.
>
> -- https://docs.microsoft.com/en-us/dotnet/api/system.collections.ienumerator.current?view=net-5.0


## Content Target
* IEnumerator::Reset


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem
What does the following code write to the console and why?


## Code Snippet (optional)
```csharp
var numbers = new int[]{ 0, 1, 2, 3, 4 };
try
{
    var e = numbers.GetEnumerator();
    e.MoveNext();
    Console.WriteLine(e.Current);
    e.Reset();
    Console.WriteLine(e.Current);
}
catch (Exception)
{
    Console.WriteLine("error");
}
```

## Answer Key
```
0
error
```
* `MoveNext` moves the enumerator to the first value `0`.
* `Reset` makes `Current` undefined, so it throws `InvalidOperationException`.


## Distractors

### 1.
```
1
0
```
* `MoveNext` moves the enumerator from the first to the second value `1`.
* `Reset` makes `Current` point to the first value `0`.


### 2.
```
0
error
```
* `MoveNext` moves the enumerator to the first value `0`.
* `Reset` destroys the enumerator, it's properties throw `InvalidOperationException`.
* You need to call `GetEnumerator` again if you want a valid enumerator.


### 3.
```
1
error
```
* `MoveNext` moves the enumerator from the first to the second value `1`.
* `Reset` destroys the enumerator, it's properties throw `InvalidOperationException`.
* You need to call `GetEnumerator` again if you want a valid enumerator.


## Common errors, misconceptions, or irrelevant information:

`Current` isn't valid until `MoveNext()` is called the first time.



# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

