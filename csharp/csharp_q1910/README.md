# C# ♫ 6 Coding: Extension


## Item ID
1910

## Claim
-   Claim 6 (Coding): Complete basic to intermediate coding tasks in C#. Low end here should be fizzbuzz-level, high end should be complex or tricky but not require any highly esoteric knowledge.


## Claim Behavior (evidence)
```
% dotnet run
Colors Red
Colors Green
Extension Blue
```
-- [./Example/Program.cs](./Example/Program.cs)

>     // This method is never called in ExtensionMethodsDemo1, because each
>     // of the three classes A, B, and C implements a method named MethodB
>     // that has a matching signature.
>     public static void MethodB(this IMyInterface myInterface)
-- https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods


## Content Target
* extensions


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem
Given the following classes, what happens if you try to use `Colors` like this:
```csharp
var example = new Colors();
example.Red();
example.Green();
example.Blue();
```


## Code Snippet (optional)
```csharp
public interface IRed {
    void Red();
}
public static class Extension {
    public static void Red(this IRed red) {
        Console.WriteLine("Extension Red");
    }
    public static void Blue(this IRed red) {
        Console.WriteLine("Extension Blue");
    }
}
public class Colors: IRed {
    public void Red() {
        Console.WriteLine("Colors Red");
    }
    public void Green() {
        Console.WriteLine("Colors Green");
    }
}
```


## Answer Key
The following is printed:
```
Colors Red
Colors Green
Extension Blue
```


## Distractors
### 1.
The following is printed:
```
Extension Red
Colors Green
Extension Blue
```


### 2.
There is an error:
```log
Program.cs(9,21): error CS0111: Type 'Colors' already defines a member called 'Red' with the same parameter types ...
```


### 3.
There is an error:
```log
Program.cs(30,21): error CS1061: 'Color' does not contain a definition for 'Blue' ...
```


## Common errors, misconceptions, or irrelevant information:
When an extension conflicts with an implementation, the extension is not called.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

