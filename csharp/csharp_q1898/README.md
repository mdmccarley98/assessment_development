# C# 🎵 3 Standard: Task


## Item ID
1898

## Claim
-   Claim 3 (Standard Library): Use major features of the C# standard library. I/O, exceptions, threads, type casting, etc.


## Claim Behavior (evidence)
> This constructor should only be used in advanced scenarios where it is required that the creation and starting of the task is separated.
>
> Rather than calling this constructor, the most common way to instantiate a `Task<TResult>` object and launch a task is by calling the static `Task.Run<TResult>(Func<TResult>)` and `TaskFactory<TResult>.StartNew(Func<TResult>)` methods.
>
> https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1.-ctor?view=net-5.0


## Content Target
* Task constructor vs Run
* multi-threading


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem

What happens when you run the `Example` function?


## Code Snippet (optional)
```csharp
void Example()
{
    Console.WriteLine("Start");

    var task = new Task(() => Console.WriteLine("Task"));

    Console.WriteLine("End");
}
```

## Answer Key
The task is not executed:
```
Start
End
```


## Distractors
### 1.
First "Start" is printed:
```
Start
```
Then either "Task" or "End" are printed, but the order is not defined:
```
Task
End
```


### 2.
The following are printed in order:
```
Start
Task
End
```

### 3.
First the main thread finishes, then the task finishes:
```
Start
End
Task
```


## Common errors, misconceptions, or irrelevant information:
Creating a Task does not run it.  Most examples of task use `Task.Run` and not the constructor.

> This constructor should only be used in advanced scenarios where it is required that the creation and starting of the task is separated.
>
> Rather than calling this constructor, the most common way to instantiate a `Task<TResult>` object and launch a task is by calling the static `Task.Run<TResult>(Func<TResult>)` and `TaskFactory<TResult>.StartNew(Func<TResult>)` methods.
>
> https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1.-ctor?view=net-5.0

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

