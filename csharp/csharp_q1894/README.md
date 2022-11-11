# C# 🎵 3 Standard: casting


## Item ID
1894

## Claim
-   Claim 3 (Standard Library): Use major features of the C# standard library. I/O, exceptions, threads, type casting, etc.


## Claim Behavior (evidence)
> The as operator explicitly converts the result of an expression to a given reference or nullable value type. If the conversion is not possible, the as operator returns null. Unlike a cast expression, the as operator never throws an exception.
-- https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/type-testing-and-cast#as-operator


## Content Target
* type casting
* `as` keyword


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem
The `LogStrings` function should only write to the console if `v` is a string.

This program compiles fine, but crashes at runtime.

How can you fix it?


## Code Snippet (optional)
```csharp
class Program
{
    static void LogStrings(Object v)
    {
        String s = (String)v;
        if (s != null) {
            Console.WriteLine("string: " + s);
        }
    }
    static void Main(string[] args)
    {
        LogStrings("Triplebyte");
        LogStrings(555);
    }
}
```

## Answer Key
Use an `as` operator.
```csharp
String s = v as String;
```


## Distractors
### 1.
Wrap in a `try/finally` block.
```csharp
try {
    String s = (String)v;
    if (s != null) {
        Console.WriteLine("string: " + s);
    }
}
finally {}
```


### 2.
Use `$` string interpolation.
```csharp
Console.WriteLine($"string: {s}");
```


### 3.
Use `string` with a lowercase `s`.
```csharp
string s = (string)v;
```


## Common errors, misconceptions, or irrelevant information:
1. `try {} finally {}` is missing the `catch` section.
2. The exception is thrown at the cast, using a template string does not help here.
   And if the value `v` (instead of `s`) were in the string interpolation it would have a bug and write "string: 555".
3. Essentially the same as the original problem.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

