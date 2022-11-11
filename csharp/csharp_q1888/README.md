# C# 🎵 1 Basics: var


## Item ID
1888

## Claim
-   Claim 1 (Basics): Understand the core syntax: create a variable, define a class, define a function, use major keywords.


## Claim Behavior (evidence)
```
True
```
```csharp
var v = Value(88.0f);
Console.WriteLine(v is float);
```
-- [./Example/Program.cs](./Example/Program.cs)


## Content Target
* var
* types


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem

Using the C# code snippet below,
what is the type of `v` in the following statement:
```csharp
var v = Value(88.0f);
```


## Code Snippet (optional)
```csharp
static int Value(int n)
{
    return n;
}

static float Value(float n)
{
    return n;
}

static string Value(string n)
{
    return n;
}
```


## Answer Key
* `float`


## Distractors


### 1.
* `Func<float, float>`


### 2.
* `88.0f`


### 3.
* `var`


## Common errors, misconceptions, or irrelevant information:

This is an easy one.  But it's in the basic claim 🤷‍.
Usage of `var` is controversial: 

> You're about to enter some holy wars with that question!
> 
> It's really a matter of preference. [...]
>
> -- https://www.quora.com/Is-C-the-best-practice-to-use-a-var-keyword-or-type

Most people seem to agree that `var` can be used where the type is obvious or too long.

It seems strange that `var` is considered controversial to me because usage of `auto` in C++ is widely considered best practice:
>  An actual term was coined for this by Andrei Alexandrescu and promoted by Herb Sutter--almost always auto (AAA).
>
> -- https://subscription.packtpub.com/book/application_development/9781786465184/1/ch01lvl1sec5/using-auto-whenever-possible


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

