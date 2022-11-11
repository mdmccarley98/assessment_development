# C# 🎵 4 Features: Linq

## Item ID
1901

## Claim
-   Claim 4 (Distinguishing Features): Understand and use delegates, C# concurrency model (async/await), basic LINQ, properties, syntactic sugar (e.g. null-coalescing operator, auto-properties).


## Claim Behavior (evidence)
>     var startingDeck = from s in Suits()
>                        from r in Ranks()
>                        select new { Suit = s, Rank = r };
> ...  
> The multiple from clauses produce a `SelectMany`, which creates a single sequence from combining each element in the first sequence with each element in the second sequence. The order is important for our purposes. The first element in the first source sequence (Suits) is combined with every element in the second sequence (Ranks). This produces all thirteen cards of first suit. That process is repeated with each element in the first sequence (Suits). The end result is a deck of cards ordered by suits, followed by values.
> 
> It's important to keep in mind that whether you choose to write your LINQ in the query syntax used above or use method syntax instead, it's always possible to go from one form of syntax to the other. The above query written in query syntax can be written in method syntax as:
C#
>
>     var startingDeck = Suits().SelectMany(suit => Ranks().Select(rank => new { Suit = suit, Rank = rank }));
>
> -- https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/working-with-linq


## Content Target
* Linq
* anonymous types


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
The following is from an app that will schedule ringing a school's bell every weekday at 7 AM, 11 AM, and 4 PM.

What is the equivalent definition of `alarms` using Linq method syntax?


## Code Snippet (optional)
```csharp
var days = new[] { "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" };
var times = new[] { "7am", "11am", "4pm" };

var alarms = from d in days
             from t in times
             select new { Day = d, Time = t };

foreach (var a in alarms)
{
    Console.WriteLine($"{a.Day} at {a.Time}");
}
```


## Answer Key
```csharp
var alarms = days.SelectMany(
        day => times.Select(
            time => new { Day = day, Time = time }
        )
    );
```


## Distractors
### 1.
```csharp
var alarms = new List<>();
foreach (var day in days)
{
   foreach (var time in times)
   {
       alarms.Add(new { Day = day, Time = time });
   }
}
```


### 2.
```csharp
var alarms = days.Reduce(
    (acc, days) =>
        acc.AddRange(
            times.Map(
                time => new { Day = day, Time = time }
            )
        )
    );
```


### 3.
```csharp
var alarms = days.Join(
        times,
        day => day,
        time => time,
        (day, time) => new { Day = day, Time = time }
    );
```


## Common errors, misconceptions, or irrelevant information:
1. You can't create a `List<>` without a type.  
   If the `List<>` were instead an `ArrayList` of Objects, then foreach loop would need to change to use "`dynamic a`" instead of "`var a`".  So it's API is not equivalent to the key and example.
```csharp
// this works, but it's a different API when printing
var alarms = new ArrayList();
foreach (var day in days)
{
    foreach (var time in times)
    {
        alarms.Add(new { Day = day, Time = time });
    }
}
foreach (dynamic a in alarms) // different here: `dynamic` instead of `var`
{
    Console.WriteLine($"{a.Day} at {a.Time}");
}
```


2. `Reduce` is not in Linq, and the accumulator initializer is not specified if it were.


3. `Join` tries to match the days that equal the times, and ends up with an empty enumeration.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
