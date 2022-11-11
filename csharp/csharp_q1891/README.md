# C# 🎵 2 Composite: IEnumerator

## Item ID
1891

## Claim
-   Claim 2 (Composite Objects): Use containers and classes to encapsulate other data types. Create and manipulate arrays, lists, and simple classes and structs. Understand the IEnumerable/IEnumerator interfaces.

## Claim Behavior (evidence)
```
> dotnet run
A Adams
B Bao
C Cordova

Distractor 1:
1: IEnumerable can foreach? True 👆 just printed all the names
2: IEnumerator is enum? False

Distractor 2:
1: ArrayList is IEnumerable? True
2: List<T> is IEnumerator? False

Distractor 3:
1: IEnumerable is enum? False
2: IEnumerator can foreach? False
```
-- [./Example/Program.cs](./Example/Program.cs)

```csharp
// Summary:
//     Exposes an enumerator, which supports a simple iteration over a non-generic collection.
public interface IEnumerable
{
    //
    // Summary:
    //     Returns an enumerator that iterates through a collection.
    //
    // Returns:
    //     An System.Collections.IEnumerator object that can be used to iterate through
    //     the collection.
    IEnumerator GetEnumerator();
}
```
-- https://docs.microsoft.com/en-us/dotnet/api/system.collections.ienumerable?view=netcore-3.1

```csharp
// Summary:
//     Supports a simple iteration over a non-generic collection.
public interface IEnumerator
{
    //
    // Summary:
    //     Gets the element in the collection at the current position of the enumerator.
    //
    // Returns:
    //     The element in the collection at the current position of the enumerator.
    object? Current { get; }

    //
    // Summary:
    //     Advances the enumerator to the next element of the collection.
    //
    // Returns:
    //     true if the enumerator was successfully advanced to the next element; false if
    //     the enumerator has passed the end of the collection.
    bool MoveNext();
    //
    // Summary:
    //     Sets the enumerator to its initial position, which is before the first element
    //     in the collection.
    void Reset();
}
```
-- https://docs.microsoft.com/en-us/dotnet/api/system.collections.ienumerator?view=netcore-3.1


## Content Target
* IEnumerable
* IEnumerator


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem
What's the difference between `IEnumerable` and `IEnumerator`?


## Code Snippet (optional)


## Answer Key
* `IEnumerable` allows a class to be enumerated in a `foreach` loop.
* `IEnumerator` implements `Current`, `MoveNext()`, and `Reset()`.


## Distractors

### 1.
* `IEnumerable` allows a class to be enumerated in a `foreach` loop.
* `IEnumerator` allows a class to implement an `enum` type.


### 2.
* `IEnumerable` is a base class for `ArrayList`.
* `IEnumerator` is a base class for generics like `List<T>`.


### 3.
* `IEnumerable` allows a class to implement an `enum` type.
* `IEnumerator` allows a class to be enumerated in a `foreach` loop.


## Common errors, misconceptions, or irrelevant information:
There are many things in C# that have the letters "enum" in them, but they are not the same.
`IEnumerable` returns an `IEnumerator` via the `GetEnumerator()` method.
Strangely, `IEnumerator` is not usable in a `foreach` loop.

Also generic versions exist of the two interfaces: `IEnumerable<T>` and `IEnumerator<T>`.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
