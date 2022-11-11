# C# 🎵 6 Coding: Disposable


## Item ID
1909

## Claim
-   Claim 6 (Coding): Complete basic to intermediate coding tasks in C#. Low end here should be fizzbuzz-level, high end should be complex or tricky but not require any highly esoteric knowledge.


## Claim Behavior (evidence)
```
> dotnet run --project Example
Dispose 0
Dispose 1
Dispose 2
count: 3
x: 3
```

> The common language runtime's garbage collector reclaims the memory used by managed objects, but types that use unmanaged resources implement the `IDisposable` interface to allow the resources needed by these unmanaged resources to be reclaimed. When you finish using an object that implements `IDisposable`, **you should call** the object's `IDisposable.Dispose` implementation.
>
> -- https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/using-objects


> using statement  
> Provides a convenient syntax that ensures the correct use of IDisposable objects.
>
> -- https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/using-statement

## Content Target
* `IDisposable`
* `using`


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
The `Texture` and `Context` classes below implement `IDisposable`.

In what order are the `Dispose` methods called on the classes when used in the following snippet?
```csharp
int x = 0;
using (var context = new Context())
{
    for (var i = 0; i < 3; i++)
    {
        using (var t = new Texture(i, context))
        {
            x += t.Id;
        }
    }
    Console.WriteLine($"count: {context.Textures.Count}");
}
Console.WriteLine($"x: {x}");
```


## Code Snippet (optional)

```csharp
class Texture : IDisposable
{
    public int Id;
    public Texture(int id, Context context)
    {
        Id = id;
        context.Textures.Add(this);
    }

    public void Dispose()
    {
        Console.WriteLine($"Dispose {Id}");
    }
}
class Context: IDisposable
{
    public List<Texture> Textures = new List<Texture>();

    public void Dispose()
    {
    }
}
```

## Answer Key
```
Dispose 0
Dispose 1
Dispose 2
count: 3
x: 3
```


## Distractors
### 1.
```
count: 3
Dispose 0
Dispose 1
Dispose 2
x: 3
```


### 2.
```
count: 3
x: 3
Dispose 0
Dispose 1
Dispose 2
```


### 3.
```
count: 3
x: 3
```


## Common errors, misconceptions, or irrelevant information:
The `using` directive immediately calls `Dispose`.  
The .NET garbage collector doesn't care about `IDisposable`.
https://stackoverflow.com/questions/538060/proper-use-of-the-idisposable-interface


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
