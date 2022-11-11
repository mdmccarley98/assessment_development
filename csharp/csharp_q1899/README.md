# C# 🎵 4 Features: async/await

## Item ID
1899

## Claim
-   Claim 4 (Distinguishing Features): Understand and use delegates, C# concurrency model (async/await), basic LINQ, properties, syntactic sugar (e.g. null-coalescing operator, auto-properties).


## Claim Behavior (evidence)
```
PS C:\Users\Robert\Dev\triplebyte-assessment\csharp\4-features-async-await\Example> dotnet run
C:\Users\Robert\Dev\triplebyte-assessment\csharp\4-features-async-await\Example\Program.cs(18,27): warning CS1998: This async method lacks 'await' operators and will run synchronously. Consider using the 'await' operator to await non-blocking API calls, or 'await Task.Run(...)' 
to do CPU-bound work on a background thread. [C:\Users\Robert\Dev\triplebyte-assessment\csharp\4-features-async-await\Example\Example.csproj]
2021-01-06 03:36:10.586 PM: Start Main
2021-01-06 03:36:13.605 PM: Done Example
2021-01-06 03:36:13.605 PM: Done Main
```
-- [./Example/Program.cs](./Example/Program.cs)

* https://docs.microsoft.com/en-us/dotnet/csharp/async
* https://docs.microsoft.com/en-us/dotnet/standard/threading/pausing-and-resuming-threads


## Content Target
* async/await
* Thread.Sleep


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
When `Main()` is run what is printed and when?

## Code Snippet (optional)
```csharp
async Task Main()
{
    Console.WriteLine("Start Main");
    await Example();
    Console.WriteLine("Done Main");
}

async Task Example()
{
    Thread.Sleep(3000);
    Console.WriteLine("Done Example");
}
```


## Answer Key
Immediately prints:
```
Start Main
```
Then after 3 seconds:
```
Done Example
Done Main
```


## Distractors

### 1.
Immediately prints:
```
Start Main
Done Main
```
Then after 3 seconds:
```
Done Example
```


### 2.
Immediately prints:
```
Start Main
```
Then after 3 seconds:
```
Done Main
Done Example
```


### 3.
Immediately prints:
```
Start Main
Done Main
```
Then `Example()` is skipped when it leaves scope in `Main()`


## Common errors, misconceptions, or irrelevant information:


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

