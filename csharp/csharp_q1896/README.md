# C# 🎵 3 Standard: Json


## Item ID
1896

## Claim
-   Claim 3 (Standard Library): Use major features of the C# standard library. I/O, exceptions, threads, type casting, etc.


## Claim Behavior (evidence)
> Gets or sets a value that determines whether a **property**'s name uses a case-insensitive comparison during deserialization. The default value is false.  
> -- https://docs.microsoft.com/en-us/dotnet/api/system.text.json.jsonserializeroptions.propertynamecaseinsensitive?view=netcore-3.1#System_Text_Json_JsonSerializerOptions_PropertyNameCaseInsensitive
(emphasis mine)


> Deserializing public property with non-public setter in json.net  
> -- https://stackoverflow.com/questions/28802288/deserializing-public-property-with-non-public-setter-in-json-net


> JsonSerializer should support private setters as an opt-in feature #29743
> -- https://github.com/dotnet/runtime/issues/29743 


> Fixes #29743 
>
>     JsonIncludeOnNonPublicInvalid
>
> -- https://github.com/dotnet/runtime/pull/34675/files (4/14/2020)
👆 needs an option and version bump to work

```
> dotnet run -p Example
A: 0
B: 11
C: 0
```
-- [./Example/Program.cs](./Example/Program.cs)


## Content Target
`JsonSerializer`


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
You have the following `Data` class:
```csharp
class Data {
    public int A;
    public int B { get; set; }
    public int C { get; private set; }
}
```

The JSON you are deserializing is this:
```json
{"a": 3, "b": 11, "C": 55}
```

What are the values of A, B, and C when the JSON is deserialized like this:

```csharp
var opts = new JsonSerializerOptions {
    PropertyNameCaseInsensitive = true,
};
Data d = JsonSerializer.Deserialize<Data>(json, opts);
```

## Code Snippet (optional)



## Answer Key
* A: 0
* B: 11
* C: 0


## Distractors
### 1.
* A: 3
* B: 11
* C: 0


### 2.
* A: 3
* B: 11
* C: 55



### 3.
* A: 0
* B: 0
* C: 0



## Common errors, misconceptions, or irrelevant information:

* `A` is NOT a property, so the option does NOT apply to it.
* `B` is a property, so it is deserialized.
* `C` has a private setter, so it won't be deserialized without extra options or annotations.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
