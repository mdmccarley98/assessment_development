# C# 🎵 5 OOP: explicit-inheritance


## Item ID
csharp-oop-explicit-inheritance


## Claim
-   Claim 5 (OOP): Understand inheritance, polymorphism, abstract classes, generic types. Use these to solve simple coding problems using predefined parent classes.


## Claim Behavior (evidence)

```csharp
public class SampleClass : IControl, ISurface
{
    void IControl.Paint()
    {
        System.Console.WriteLine("IControl.Paint");
    }
    void ISurface.Paint()
    {
        System.Console.WriteLine("ISurface.Paint");
    }
}
```
-- https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/interfaces/explicit-interface-implementation

## Content Target
* multiple inheritance
* diamond problem


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem
The following `Example` class writes a message to the console AND to a paper printer.
But it should only write to the printer OR the console.

By only changing `Example`, how can you separate `Printer` and `CLI`'s `Print` functionality?


## Code Snippet (optional)
```csharp
interface Printer {
    void Print(string message);
}
interface CLI {
    void Print(string message);
}
class Example: Printer, CLI {
    public void Print(string message)
    {
        var doc = new PrintDocument();
        ExamplePrintFormatter.AddPage(doc, message);
        doc.Print();
        Console.WriteLine(message);
    }
}
```


## Answer Key
```csharp
    void IPrinter.Print(string message)
    {
        var doc = new PrintDocument();
        ExamplePrintFormatter.AddPage(doc, message);
        doc.Print();
    }
    void IConsole.Print(string message)
    {
        Console.WriteLine(message);
    }
```


## Distractors
### 1.
```csharp
    public void Print(string message)
    {
        if (this is IPrinter)
        {
            var doc = new PrintDocument();
            ExamplePrintFormatter.AddPage(doc, message);
            doc.Print();
        }
        else if (this is IConsole)
        {
            Console.WriteLine(message);
        }
    }
```


### 2.
```csharp
    public void Print(string message)
    {
        if (this as IPrinter != null)
        {
            var doc = new PrintDocument();
            ExamplePrintFormatter.AddPage(doc, message);
            doc.Print();
        }
        else if (this as IConsole != null)
        {
            Console.WriteLine(message);
        }
    }
```


### 3.
```csharp
    void Print<IPrinter>(string message)
    {
        var doc = new PrintDocument();
        ExamplePrintFormatter.AddPage(doc, message);
        doc.Print();
    }
    void Print<IConsole>(string message)
    {
        Console.WriteLine(message);
    }
```


## Common errors, misconceptions, or irrelevant information:

1. `this is IPrinter` is always true
2. `this as IPrinter` is always non null
3. `Print<IPrinter>(string message)` creates a template class called IPrinter, it doesn't specify the existing `IPrinter` interface.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
