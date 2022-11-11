# C# 🎵 6 Coding: zero member


## Item ID
1913

## Claim
-   Claim 6 (Coding): Complete basic to intermediate coding tasks in C#. Low end here should be fizzbuzz-level, high end should be complex or tricky but not require any highly esoteric knowledge.


## Claim Behavior (evidence)

> But if you ignore this type of warning, sooner or later, something like this may very well find its way into your code:

      class Account {
      
          int myId;
          int Id;   // compiler warned you about this, but you didn’t listen!
  
          // Constructor
          Account(int id) {
              this.myId = Id;     // OOPS!
          }
  
      }
>
> And at the speed Intellisense allows us to write code, this error isn’t as improbable as it looks.
> 
> You now have a serious error in your program (although the compiler has only flagged it as a warning, for the reasons already explained), and depending on how complex your program is, you could waste a lot of time tracking this one down. Had you paid attention to this warning in the first place, you would have avoided this problem with a simple five-second fix.
> 
> -- https://www.toptal.com/c-sharp/top-10-mistakes-that-c-sharp-programmers-make

## Content Target
* for loops
* variable names
* warnings


## Cognitive Model
* Use


## Item Type
Multiple Choice


## Stem

Using this buggy `Example` class...

```csharp
public class Example
{
    public int Counter;
    public int Count => Counter;
    public Example(int count)
    {
        Counter = Count + 1;
    }
}
```

What is the value of `result`?

```csharp
int result = 0;
Example example;
for (var i = 3; i < 5; i++)
{
    example = new Example(i);
    result += example.Counter;
}
```


## Code Snippet (optional)


## Answer Key
```
2
```


## Distractors
### 1.
```
9
```


### 2.
```
0
```


### 3.
```
15
```


## Common errors, misconceptions, or irrelevant information:
The constructor param `count` is lowercase, but the member value `Count` has an upper case.  So the `Counter` is always 0 + 1.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

