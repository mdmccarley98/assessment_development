# C# 🎵 1 Basics: new


## Item ID
1886

## Claim
-   Claim 1 (Basics): Understand the core syntax: create a variable, define a class, define a function, use major keywords.


## Claim Behavior (evidence)
> To create a new instance of a type, you typically invoke one of the constructors of that type using the `new` operator
>
> -- https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/new-operator#constructor-invocation

## Content Target
* new


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem
The following C# code has an error:
```
error CS0118: 'Example' is a namespace but is used like a variable
```

How can you change the code to make it work?


## Code Snippet (optional)
```csharp
using System;

namespace Example
{
    class Example {
        public Example(int value) {
            Console.WriteLine(value);
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            var example = Example(21);
        }
    }
}
```

## Answer Key
```csharp
var example = new Example(21);
```


## Distractors
### 1.
```csharp
using Example;
var example = Example(21);
```


### 2.
```csharp
var example = Example.Example(21);
```


### 3.
```csharp
var example = Example::Example(21);
```


## Common errors, misconceptions, or irrelevant information:
The error produced by the compiler is misleading.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

