# C# 🎵 2 Composite: struct accessibility

## Item ID
1892

## Claim
-   Claim 2 (Composite Objects): Use containers and classes to encapsulate other data types. Create and manipulate arrays, lists, and simple classes and structs. Understand the IEnumerable/IEnumerator interfaces.


## Claim Behavior (evidence)
>  Class and struct members, including nested classes and structs, have `private` access by default. 
-- https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/access-modifiers

```
> dotnet run
Does Withdraw 0 work? changed: True
Balance 0.0
Does Withdraw -0 work? changed: True
Balance 0.0
Does Withdraw Too Much Work? changed: False
Balance 0
Does Withdraw Negative Work? changed: True
Balance 50.0
```
-- [./Example/Program.cs](./Example/Program.cs)


## Content Target
* default access of structs is private
* properties
* negative numbers


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
You are working on a `struct` named `Account` that has been designed to prevent a negative balance.

Without reflection, is it still possible to set `_Balance` to a negative number?


## Code Snippet (optional)
```csharp
struct Account {
    decimal _Balance;

    public decimal Balance {
        get => _Balance;
        set {
            if (value < 0.0m) {
                throw new ArgumentOutOfRangeException("Balance", "Account cannot have a negative balance.");
            }
            _Balance = value;
        }
    }

    public void Deposit(decimal amount) {
        Balance += amount;
    }

    public bool Withdraw(decimal amount) {
        if (Balance - amount < 0.0m) {
            return false;
        }
        Balance -= amount;
        return true;
    }
}
```


## Answer Key
* It can ONLY be positive, `_Balance` is `private`, and the setter will throw the `ArgumentOutOfRangeException`.


## Distractors
### 1.
* It can be negative, `_Balance` is `public`.


### 2.
* It can be negative, `Desposit(-50.0m)` is not checked.


### 3.
* It can be negative, `Withdraw(-50.0m)` doesn't check for subtracting negatives.


## Common errors, misconceptions, or irrelevant information:
1. In C++ structs have public fields by default, but in C# they are private.
2. The setter is called in `Deposit` resulting in an `ArgumentOutOfRangeException`.
3. Subtracting a negative makes a positive.

Tools like Json.Net can set private fields with `ContractResolver.DefaultMembersSearchFlags = DefaultMembersSearchFlags | BindingFlags.NonPublic;` or `PrivateSetterContractResolver`
however this arguably uses reflection which was dismissed in the question.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

