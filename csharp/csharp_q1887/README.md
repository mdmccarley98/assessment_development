# C# 🎵 1 Basics: using block


## Item ID
1887

## Claim
-   Claim 1 (Basics): Understand the core syntax: create a variable, define a class, define a function, use major keywords.


## Claim Behavior (evidence)
> When the lifetime of an `IDisposable` object is limited to a single method, you should declare and instantiate it in the `using` statement. The `using` statement calls the `Dispose` method on the object in the correct way, and (when you use it as shown earlier) it also causes the object itself to go out of scope as soon as `Dispose` is called. 
>
> -- https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/using-statement#remarks


## Content Target
* using statement (not using import)


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem
Why should `file` be in the `using` block below?


## Code Snippet (optional)
```csharp
using(var file = new System.IO.StreamWriter("text.txt")) {
    file.WriteLine("Triplebyte");
}
```


## Answer Key
* The `using` above will call `file.Dispose()` when the block goes out of scope.


## Distractors
* The `using` above will import the `System.IO` assembly automatically.
* The `using` above will group exceptions in the same block.
* The `using` above creates an asynchronous block for IO access.


## Common errors, misconceptions, or irrelevant information:
If the code exits a `using` block via a `return`, exception, or some other reason, the resource will still be disposed.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

