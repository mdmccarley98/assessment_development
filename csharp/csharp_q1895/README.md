# C# 🎵 3 Standard: Exceptions


## Item ID
1895

## Claim
-   Claim 3 (Standard Library): Use major features of the C# standard library. I/O, exceptions, threads, type casting, etc.


## Claim Behavior (evidence)
```
> dotnet run
Divide by Zero
Unhandled exception. System.Exception: zero
   at Example.Program.Example(Int32 arg) in C:\Users\Robert\Dev\triplebyte-assessment\csharp\3-std-exceptions\Example\Program.cs:line 30
   at Example.Program.Main(String[] args) in C:\Users\Robert\Dev\triplebyte-assessment\csharp\3-std-exceptions\Example\Program.cs:line 37
```
-- [./Example/Program.cs](./Example/Program.cs)


## Content Target
* try
* catch
* catch when
* finally
* x / 0


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem
What is printed when the `Example` function is called with `1` as an argument?


## Code Snippet (optional)
```csharp
void Example(int arg)
{
    int zero = 0;
    int result;
    try
    {
        result = arg / zero;
        throw new ArgumentException("Argument Thrown", "arg");
    }
    catch (DivideByZeroException)
    {
        Console.WriteLine("Divide by Zero");
    }
    catch (ArgumentException ex) when (ex.ParamName == "zero")
    {
        Console.WriteLine("Argument when zero");
    }
    catch (Exception)
    {
        Console.WriteLine("Last Catch");
    }
    finally
    {
        throw new Exception("zero");
        Console.WriteLine("Finally");
    }
}
```


## Answer Key
```
Divide by Zero
Unhandled exception. System.Exception: zero
```


## Distractors
### 1.
```
Divide by Zero
Last Catch
Finally
```


### 2.
```
Last Catch
```


### 3.
```
Divide by Zero
Argument when zero
Finally
```


## Common errors, misconceptions, or irrelevant information:
Dividing by zero throws an exception.
The first matching catch is used.
Finally always runs.
Finally is outside the try, so the exception is unhandled.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

