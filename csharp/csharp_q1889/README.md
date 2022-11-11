# C# 🎵 2 Composite: arrays


## Item ID
1889

## Claim
-   Claim 2 (Composite Objects): Use containers and classes to encapsulate other data types. Create and manipulate arrays, lists, and simple classes and structs. Understand the IEnumerable/IEnumerator interfaces.


## Claim Behavior (evidence)
```
> dotnet run
list_array: 4, 2, 3
array: 4, 7, 8
```
-- [./Example/Program.cs](./Example/Program.cs)

### Arrays are reference types: 
> All array types are implicitly derived from System.Array, which itself is derived from System.Object. This means that all arrays are always reference types which are allocated on the managed heap, and your app's variable contains a reference to the array and not the array itself.
> 
> -- https://docs.microsoft.com/en-us/previous-versions/dotnet/articles/bb985948(v=msdn.10)?redirectedfrom=MSDN


### Arrays are resizable:
```csharp
public static void Resize<T> (ref T[]? array, int newSize);
```
https://docs.microsoft.com/en-us/dotnet/api/system.array.resize?view=net-5.0


## Content Target
* arrays
* pass by reference vs pass by value
* List<T>.ToArray()


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
What are the values of `list_array` and `array` at the end of the function `Run()`?


## Code Snippet (optional)
```csharp
void F(int[] arr)
{
    arr[0] = 4;
}

void Run()
{
    var list = new List<int>() { 1, 2, 3 };
    var list_array = list.ToArray();
    F(list_array);

    int[] array = { 6, 7, 8 };
    F(array);
}
```


## Answer Key
* `list_array`: 4, 2, 3
* `array`: 4, 7, 8


## Distractors
### 1.
* `list_array`: 1, 2, 3
* `array`: 6, 7, 8


### 2.
* `list_array`: 4, 2, 3
* `array`: 6, 7, 8


### 3.
* `list_array`: 1, 2, 3
* `array`: 4, 7, 8


## Common errors, misconceptions, or irrelevant information:
1. Arrays are NOT copied like a value into a function argument.
2. Both arrays and lists have mutable contents, although arrays don't implement the `.Add` function, they are also resizable at a big performance cost compared to Lists.
3. The contents of `list` are unchanged, a copy of it's contents in `list_array` were modified.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

