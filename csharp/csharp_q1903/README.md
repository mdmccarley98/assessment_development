# C# 🎵 4 Features: property setter

## Item ID
1903

## Claim
-   Claim 4 (Distinguishing Features): Understand and use delegates, C# concurrency model (async/await), basic LINQ, properties, syntactic sugar (e.g. null-coalescing operator, auto-properties).


## Claim Behavior (evidence)
```csharp
    public double Hours
    {
        get { return _seconds / 3600; }
        set {
            if (value < 0 || value > 24)
                throw new ArgumentOutOfRangeException(
                    $"{nameof(value)} must be between 0 and 24.");

            _seconds = value * 3600;
        }
    }
```
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/properties


## Content Target
* properties
* setter


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem
Which of the following will only allow `X` to be a value over 3?


## Code Snippet (optional)



## Answer Key
```csharp
class Example
{
    private int _x;
    public int X {
        get { return _x; }
        set {
            if (value > 3) {
                _x = value;
            }
        }
    }
}
```


## Distractors
### 1.
```csharp
class Example
{
    private int _x;
    public int X {
        get() { return _x; };
        set(int value) {
            if (value > 3) {
                _x = value;
            }
        }
    }
}
```


### 2.
```csharp
class Example
{
    private int _x;
    public int X => {
        if (value > 3) {
            _x = value;
        }
    }
}
```


### 3.
```csharp
class Example
{
    private int X;
    public int SetX(int value) {
        if (value > 3) {
            return value;
        }
    }
}
```


## Common errors, misconceptions, or irrelevant information:


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

