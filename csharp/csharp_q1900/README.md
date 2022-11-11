# C# 🎵 4 Features: event unsubscribe

## Item ID
1900

## Claim
-   Claim 4 (Distinguishing Features): Understand and use delegates, C# concurrency model (async/await), basic LINQ, properties, syntactic sugar (e.g. null-coalescing operator, auto-properties).


## Claim Behavior (evidence)
> and remove handler:
>
>     fileLister.FileFound -= onFileFound;
>
> Note that there's a local variable for the handler. If you used the body of the lambda, the remove would not work correctly. It would be a different instance of the delegate, and silently do nothing.
>
> -- https://docs.microsoft.com/en-us/dotnet/csharp/event-pattern

## Content Target
* events


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
Your colleague wrote the following program.
They were expecting only the Green event to be executed, but instead both Green and Blue are executed:
```
onClick: Green
onClick: Blue
```

What is wrong?

## Code Snippet (optional)
```csharp

class Example
{
    public event Action<string> ClickEvent;
    public void Click(string message)
    {
        ClickEvent?.Invoke(message);
    }
}

class Program
{
    static void Main(string[] args)
    {
        var example = new Example();
        example.Click("Red");
        example.ClickEvent += (string message) =>
        {
            Console.WriteLine($"onClick: {message}");
        };
        example.Click("Green");
        example.ClickEvent -= (string message) =>
        {
            Console.WriteLine($"onClick: {message}");
        };
        example.Click("Blue");
    }
}
```

## Answer Key
The lambda should have been saved in a local variable, so that the same lambda instance is added and removed.

## Distractors
### 1.
The `-=` operator replaces the original listener with a new one.

### 2.
The `ClickEvent` variable is no longer `null` after being set the first time.  So `?.Invoke(message)` continues to work after the event is removed.

### 3.
A second event is added to `ClickEvent` and multicast event dispatching is invoked.

## Common errors, misconceptions, or irrelevant information:

> It's important that you declare a local variable for the expression that represents the event handler. That ensures the unsubscribe removes the handler. If, instead, you used the body of the lambda expression, you are attempting to remove a handler that has never been attached, which does nothing.
>
> -- https://docs.microsoft.com/en-us/dotnet/csharp/events-overview

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

