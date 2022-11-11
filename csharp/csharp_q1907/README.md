# C# 🎵 5 OOP: generics basic


## Item ID
1907

## Claim
-   Claim 5 (OOP): Understand inheritance, polymorphism, abstract classes, generic types. Use these to solve simple coding problems using predefined parent classes.


## Claim Behavior (evidence)

-- https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/

## Content Target
* generics


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem
You are making a generic type for a location that has a name, longitude, and latitude.
You want to allow things like the name or location to be a string, float, decimal, or other type like a class.

Which generic implementation of `Geo` fits this application best?


## Code Snippet (optional)

Example initialization:
```csharp
{ Name = "Null Island", Longitude = 0.0f, Latitude = 0.0f }
{ Name = Guid.NewGuid(), Longitude = 0.0m, Latitude = 0.0m }
```


## Answer Key
```csharp
class Geo<N, L>
{
    public N Name { get; set; }
    public L Longitude { get; set; }
    public L Latitude { get; set; }
}
```


## Distractors
### 1.
```csharp
class Geo<T>
{
    public T Name { get; set; }
    public T Longitude { get; set; }
    public T Latitude { get; set; }
}
```


### 2.
```csharp
class Geo
{
    public string Name { get; set; }
    public float Longitude { get; set; }
    public float Latitude { get; set; }
}
```


### 3.
```csharp
class Geo
{
    public Object Name { get; set; }
    public Object Longitude { get; set; }
    public Object Latitude { get; set; }
}
```


## Common errors, misconceptions, or irrelevant information:

A type parameters doesn't have to be named `T`, but it is convention to do so.

1. You need more than one type parameter.
2. This doesn't support the Guid example.
3. This doesn't use generics.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
