# C# 🎵 5 OOP: Encapsulation


## Item ID
1905

## Claim
-   Claim 5 (OOP): Understand inheritance, polymorphism, abstract classes, generic types. Use these to solve simple coding problems using predefined parent classes.


## Claim Behavior (evidence)
```
Balance: 2400.00
Balance: 100.00
Alice: -2300.00
After messing with entries
Balance: 100.00
Alice: -200.00
```
-- [Example/Program.cs](./Example/Program.cs)

-- https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/intro-to-csharp/object-oriented-programming

## Content Target
* properties
* readonly
* encapsulation


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
You are writing the checkbook ledger app below.

There are private getters to enforce encapsulation, 
but users are complaining that the balance does NOT match the entry amounts.

How is this possible?


## Code Snippet (optional)
```csharp
class Checkbook
{
    public class Entry
    {
        public readonly string Note;
        public readonly decimal Amount;

        public Entry(string note, decimal amount)
        {
            Note = note;
            Amount = amount;
        }

        public override string ToString()
        {
            return $"{Note}: {Amount}";
        }
    }

    private List<Entry> _entries = new List<Entry>();
    private decimal _balance;

    public List<Entry> Entries
    {
        get => _entries;
    }

    public decimal Balance
    {
        get => _balance;
    }

    public Checkbook(decimal openingBalance)
    {
        _balance = openingBalance;
    }

    public void WriteCheck(Entry entry)
    {
        this._entries.Add(entry);
        _balance += entry.Amount;
    }
}
```


## Answer Key
The reference from the `Entries` getter is the same as the `_entries` private field.


## Distractors
### 1.
The `Entry.Amount` is public.


### 2.
The `_balance` is updated with `+=` but negative `Amount`s should be subtracted.


### 3.
The reference from the `Balance` getter is the same as the `_balance` private field.


## Common errors, misconceptions, or irrelevant information:
This is a leaky encapsulation because the reference returned from `Entries` is the same reference as `_entries`, and can be modified.
```csharp
    checkbook.Entries[0] = new Checkbook.Entry("Alice", -200.00m);
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
