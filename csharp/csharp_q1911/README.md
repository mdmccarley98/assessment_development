# C# 🎵 6 Coding: grocery


## Item ID
1911

## Claim
-   Claim 6 (Coding): Complete basic to intermediate coding tasks in C#. Low end here should be fizzbuzz-level, high end should be complex or tricky but not require any highly esoteric knowledge.


## Claim Behavior (evidence)

```
> dotnet run
Total: 7.46
Calculate Total: 1.02
```
-- [./Program.cs](./Program.cs)


## Content Target
* Dictionary
* object references


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
You are maintaining a point-of-sale program with the `Item` and `Register` classes below:

```csharp
public struct Item
{
    public string Name;
    public decimal Price;
}
public class Register
{
    public decimal Total { get; private set; }
    private readonly Dictionary<Item, decimal> Items = new Dictionary<Item, decimal>();
    public void Add(Item item) {
        Total += item.Price;
        Items[item] = item.Price;
    }
    public void Remove(Item item) {
        Total -= item.Price;
        Items.Remove(item);
    }
    public decimal CalculateTotal() {
        decimal result = 0m;
        foreach(var pair in Items) {
            result += pair.Value;
        }
        return result;
    }
}
```

In a test, the checker scans 3 rolls of toilet paper and 1 bar of soap.  Then the customer decides they only want 2 rolls of toilet paper, so 1 is removed:

```csharp
var register = new Register();
var tp = new Item{ Name="Toilet Paper", Price=3.22m };
register.Add(tp);
register.Add(tp);
register.Add(tp);
var soap = new Item{ Name="Soap", Price=1.02m };
register.Add(soap);
register.Remove(tp);
```

What is the value of `register.Total` and `register.CalculateTotal()`?

## Code Snippet (optional)


## Answer Key
* Total: 7.46
* CalculateTotal: 1.02


## Distractors
### 1.
* Total: 7.46
* CalculateTotal: 7.46


### 2.
* Total: 10.68
* CalculateTotal: 7.46


### 3.
* Total: 10.68
* CalculateTotal: 1.02


## Common errors, misconceptions, or irrelevant information:
The same item reference is the key to the Items dictionary.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
