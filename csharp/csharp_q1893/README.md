# C# 🎵 2 Composite: Value or Reference


## Item ID
1893

## Claim
-   Claim 2 (Composite Objects): Use containers and classes to encapsulate other data types. Create and manipulate arrays, lists, and simple classes and structs. Understand the IEnumerable/IEnumerator interfaces.


## Claim Behavior (evidence)
> A value type can be one of the two following kinds:
>
> * a structure type, which encapsulates data and related functionality  
> ...  
> 
> -- https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types

> Common C# Programming Mistake #1: Using a reference like a value or vice versa  
> ...  
> As shown above, in C# programming, the `struct` keyword is used to define a value type, while the `class` keyword is used to define a reference type.
>
> -- https://www.toptal.com/c-sharp/top-10-mistakes-that-c-sharp-programmers-make


## Content Target
* struct passed by value
* class passed by reference


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem

Why does the following program print the result `8`?


## Code Snippet (optional)
```csharp
class C
{
    public int Value;
}

struct S
{
    public int Value;
}

class Program
{
    static void SetTo5(C c, S s)
    {
        c.Value = 5;
        s.Value = 5;
    }

    static void Main(string[] args)
    {
        var c = new C { Value = 3 };
        var s = new S { Value = 3 };

        SetTo5(c, s);

        var result = c.Value + s.Value;
        Console.WriteLine(result);
    }
}
```


## Answer Key
* The `struct S` is a value type.
* The `class C` is a reference type.


## Distractors
### 1.
* `struct` properties are `readonly`.


### 2.
* `SetTo5` is a `static` function.


### 3.
* `int` are stored in hexadecimal but `WriteLine` prints decimals.


## Common errors, misconceptions, or irrelevant information:
A copy of the value type `struct S` is passed into `SetTo5`.
Then the copy is changed, but the original value of 3 remains in the original `s`.

However the original value of 3 is modified to 5 for the reference type `class C`.

c.Value = 5  
s.Value = 3  
5 + 3 = 8  


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

