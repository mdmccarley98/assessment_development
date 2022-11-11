# C# 🎵 5 OOP: abstract implementation


## Item ID
1904

## Claim
-   Claim 5 (OOP): Understand inheritance, polymorphism, abstract classes, generic types. Use these to solve simple coding problems using predefined parent classes.


## Claim Behavior (evidence)
> An abstract class **may** contain abstract methods and accessors.
>
> -- https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/abstract


### Example
```
PS C:\Users\Robert\Dev\triplebyte-assessment\csharp\5-oop-abstract-implementation\Example> dotnet run
Example: example
```
-- [./Example/Program.cs](./Example/Program.cs)


### Key
```
PS C:\Users\Robert\Dev\triplebyte-assessment\csharp\5-oop-abstract-implementation\Key> dotnet run
Example: Key
Key Optional
```
-- [./Key/Program.cs](./Key/Program.cs)


### Distractor 1
```
PS C:\Users\Robert\Dev\triplebyte-assessment\csharp\5-oop-abstract-implementation\Distractor1> dotnet run
C:\Users\Robert\Dev\triplebyte-assessment\csharp\5-oop-abstract-implementation\Distractor1\Program.cs(14,30): error CS0506: 'ExampleLogger.Log(string)': cannot override inherited member 'BaseLogger.Log(string)' because it is not marked virtual, abstract, or override [C:\Users\Robert\Dev\triplebyte-assessment\csharp\5-oop-abstract-implementation\Distractor1\Key.csproj]

The build failed. Fix the build errors and run again.
```
-- [./Distractor1/Program.cs](./Distractor1/Program.cs)


### Distractor 2
```
PS C:\Users\Robert\Dev\triplebyte-assessment\csharp\5-oop-abstract-implementation\Distractor2> dotnet run
C:\Users\Robert\Dev\triplebyte-assessment\csharp\5-oop-abstract-implementation\Distractor2\Program.cs(7,30): error CS0500: 'BaseLogger.Log(string)' cannot declare a body because it is marked abstract [C:\Users\Robert\Dev\triplebyte-assessment\csharp\5-oop-abstract-implementation\Distractor2\Key.csproj]
C:\Users\Robert\Dev\triplebyte-assessment\csharp\5-oop-abstract-implementation\Distractor2\Program.cs(20,11): error CS0534: 'OptionalLogger' does not implement inherited abstract member 'BaseLogger.Log(string)' [C:\Users\Robert\Dev\triplebyte-assessment\csharp\5-oop-abstract-implementation\Distractor2\Key.csproj]

The build failed. Fix the build errors and run again.
```
-- [./Distractor2/Program.cs](./Distractor2/Program.cs)


### Distractor 3
```
PS C:\Users\Robert\Dev\triplebyte-assessment\csharp\5-oop-abstract-implementation\Distractor3> dotnet run
C:\Users\Robert\Dev\triplebyte-assessment\csharp\5-oop-abstract-implementation\Distractor3\Program.cs(17,27): error CS0535: 'OptionalLogger' does not implement interface member 'BaseLogger.Log(string)' [C:\Users\Robert\Dev\triplebyte-assessment\csharp\5-oop-abstract-implementation\Distractor3\Key.csproj]

The build failed. Fix the build errors and run again.
```
-- [./Distractor3/Program.cs](./Distractor3/Program.cs)


## Content Target
* abstract
* virtual


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem
The `ExampleLogger` class below must implement `Log`.

How can you make implementing `Log` optional?


## Code Snippet (optional)
```csharp
abstract class BaseLogger
{
    public abstract void Log(string message);
}
class ExampleLogger: BaseLogger
{
    public override void Log(string message)
    {
        Console.WriteLine($"Example: {message}");
    }
}
```


## Answer Key
Change `BaseLogger.Log` to `virtual`, and implement a default version:
```csharp
abstract class BaseLogger
{
    public virtual void Log(string message)
    {
        Console.WriteLine(message);
    }
}
```


## Distractors
### 1.
Remove `abstract` from `BaseLogger.Log`, and implement a default version:
```csharp
abstract class BaseLogger
{
    public void Log(string message)
    {
        Console.WriteLine(message);
    }
}
```


### 2.
Just implement a default version of `BaseLogger.Log`:
```csharp
abstract class BaseLogger
{
    public abstract void Log(string message)
    {
        Console.WriteLine(message);
    }
}
```


### 3.
Change `abstract class` to `interface`:
```csharp
interface BaseLogger
{
    void Log(string message);
}
```


## Common errors, misconceptions, or irrelevant information:
Virtual functions are optional, abstract functions and interface functions must be implemented.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

