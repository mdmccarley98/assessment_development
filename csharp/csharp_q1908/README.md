# C# 🎵 5 OOP: virtual


## Item ID
1908

## Claim
-   Claim 5 (OOP): Understand inheritance, polymorphism, abstract classes, generic types. Use these to solve simple coding problems using predefined parent classes.


## Claim Behavior (evidence)
> Base classes may define and implement `virtual` methods, and derived classes can `override` them.
> ...
> Give the Shape class a `virtual` method called Draw, and `override` it in each derived class to draw the particular shape that the class represents. 
>
> -- https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/polymorphism


## Content Target
* virtual
* override


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem
The following program prints "Bright", but you want it to print "Bright Blue".

What can you change so that `light.Display()` returns "Bright Blue"?


## Code Snippet (optional)
```csharp
class Light
{
    public string Display()
    {
        return "Bright";
    }
}

class SmartLight: Light
{
    public string Color { get; set; }

    public SmartLight(string color)
    {
        Color = color;
    }

    public string Display()
    {
        return $"Bright {Color}";
    }
}

class Program
{
    static void Main(string[] args)
    {
        var smartLight = new SmartLight("Blue");
        var light = smartLight as Light;
        Console.WriteLine(light.Display());
    }
}
```


## Answer Key
* add `virtual` to the `Light` `Display` function.
* add `override` to the `SmartLight` `Display` function.


## Distractors
### 1.
* add `virtual` to the `Light` `Display` function.


### 2.
* add `virtual` to the `Light` `Display` function.
* add `virtual` to the `SmartLight` `Display` function.


### 3.
* add `virtual` to the `SmartLight` `Display` function.


## Common errors, misconceptions, or irrelevant information:

Both `virtual` and `override` are required.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

