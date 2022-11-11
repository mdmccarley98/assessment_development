# C# 🎵 1 Basics: foreach

## Item ID
1885

## Claim
-   Claim 1 (Basics): Understand the core syntax: create a variable, define a class, define a function, use major keywords.


## Claim Behavior (evidence)
```csharp
foreach (int element in fibNumbers)
{
    count++;
    Console.WriteLine($"Element #{count}: {element}");
}
```
-- https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/foreach-in

## Content Target
* foreach


## Cognitive Model
* Recall


## Item Type
Multiple Choice


## Stem
The `LogDays` function should write every string in `days` to the console.

Complete the code below.


## Code Snippet (optional)
```csharp
void LogDays(IEnumerable<string> days) {
    /* **** COMPLETE THE CODE HERE *** */ {
        Console.WriteLine(i);
    }
}
```


## Answer Key
```csharp
foreach(var i in days)
```


## Distractors
### 1.
```csharp
for (var i = 0; i < days.Count; i++)
```


### 2.
```csharp
for (var i : days)
```


### 3.
```csharp
from i in days select i => 
```


## Common errors, misconceptions, or irrelevant information:
3.
```
error CS1942: The type of the expression in the select clause is incorrect.  Type inference failed in the call to 'Select'.
error CS0201: Only assignment, call, increment, decrement, await, and new object expressions can be used as a statement
```


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

