# C# 🎵 1 Basic: class

## Item ID
1884

## Claim
-   Claim 1 (Basics): Understand the core syntax: create a variable, define a class, define a function, use major keywords.

## Claim Behavior (evidence)
> * Class members can have any of the five kinds of declared accessibility and default to `private` declared accessibility.
>
> -- [C# Declared Accessiblity](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/basic-concepts#declared-accessibility)

```
> dotnet run
Example\Program.cs(14,35): error CS0122: 'Example.Example()' is inaccessible due to its protection level [Example\Example.csproj]

The build failed. Fix the build errors and run again.
```
-- [./Example/Program.cs](./Example/Program.cs)

## Content Target
* class
* private


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem
What change will allow the following program to compile?


## Code Snippet (optional)
```csharp
class Example
{
    Example() {}
}
class Program
{
    static void Main(string[] args)
    {
        Example example = new Example();
    }
}
```


## Answer Key
* Add `public` to the `Example` constructor.

## Distractors
### 1.
* Add `public` to the `Example` class.


### 2.
* Add `void` to the `Example` constructor.


### 3.
* Remove `static` from the `Main` function.


## Common errors, misconceptions, or irrelevant information:
Removing the constructor will also allow it to be compiled.  The default constructor is `public`:

> If the class is `abstract` then the declared accessibility for the default constructor is `protected`. Otherwise, the declared accessibility for the default constructor is `public`.
> 
> -- https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/classes#default-constructors


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

