# C# 🎵 6 Coding: Sequence


## Item ID
1912

## Claim
-   Claim 6 (Coding): Complete basic to intermediate coding tasks in C#. Low end here should be fizzbuzz-level, high end should be complex or tricky but not require any highly esoteric knowledge.


## Claim Behavior (evidence)
```csharp
> dotnet run
Key:
Least: 7
7, 7, 7, 7, 7, 7, 7, 7, 7, 7
8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8
5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5
9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9
6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6
Distractor 1
Least: 0
0, 0, 0, 0, 0, 0
3, 3, 3, 3, 3, 3, 3, 3
4, 4, 4, 4, 4, 4, 4, 4
2, 2, 2, 2, 2, 2, 2, 2, 2
1, 1, 1, 1, 1, 1, 1, 1, 1, 1
7, 7, 7, 7, 7, 7, 7, 7, 7, 7
8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8
5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5
9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9
6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6
Distractor 2
Least: 0
0, 0, 0, 0, 0, 0
1, 1, 1, 1, 1, 1, 1, 1, 1, 1
2, 2, 2, 2, 2, 2, 2, 2, 2
3, 3, 3, 3, 3, 3, 3, 3
4, 4, 4, 4, 4, 4, 4, 4
5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5
6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6
7, 7, 7, 7, 7, 7, 7, 7, 7, 7
8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8
9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9
Distractor 3
Least: 5
5
6
7
8
9
```
-- [./Key/Program.cs](./Key/Program.cs)


## Content Target
* Linq


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem
You have a string of 101 digits.
```
62831853071795864769252867665590057683943387987502116419498891846156328125724179972560696506842341359
```
Of all the digits from '5' to '9', '7' appears the least number of times.  '7' appears only 10 times.

Which Linq query below finds 7 using the above logic?



## Code Snippet (optional)



## Answer Key
```csharp
var result =
    from c in digits
    select Int32.Parse(c.ToString()) into d
    where d >= 5
    group d by d into g
    orderby g.Count()
    select g;
var least = result.First()?.Key;
```


## Distractors
### 1.
```csharp
var result =
    from c in digits
    where c >= 5
    group c by c into g
    orderby g.Count()
    select g;
var least = result.First()?.Key;
```


### 2.
```csharp
var result =
    from c in digits
    select Int32.Parse(c.ToString()) into d
    group d by d into g
    where g.Count() >= 5
    orderby g.Key
    select g;
var top = result.First();
```


### 3.
```csharp
var result =
    from c in digits
    group c by c into g
    select Int32.Parse(g.Key.ToString()) into d
    where d >= 5
    orderby d
    select d;
var least = result.First();
```


## Common errors, misconceptions, or irrelevant information:


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

