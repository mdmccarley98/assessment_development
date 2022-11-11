# Low Level: Ctrl-C Catch


## Item ID
low-level-ctrl-c-catch


## Claim
-   Claim/PI 4: The candidate displays a strong understanding of both C memory management and concurrency. They are comfortable reasoning about different theoretical approaches to low-level problems, and they also demonstrate the practical ability to implement and troubleshoot solutions in a low-level codebase.


## Claim Behavior (evidence)

> SIGINT	CTRL+C signal  
> ...  
> The following example shows how to use signal to add some custom behavior to the SIGABRT signal.  
> ...  
>
>     previousHandler = signal(SIGABRT, SignalHandler)
>
> - https://docs.microsoft.com/en-us/cpp/c-runtime-library/reference/signal?view=msvc-160

> Use `sigaction()` unless you've got very compelling reasons not to do so.
>
> - https://stackoverflow.com/questions/231912/what-is-the-difference-between-sigaction-and-signal
(windows doesn't support sigaction)

## Content Target
* operating systems
* signals


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
When the user closes your app with Ctrl+C you want to gracefully shut down.
How do you implement this?


## Code Snippet (optional)



## Answer Key
Register a `SIGINT` handler function with `sigaction()` or `signal()`.


## Distractors
### 1.
Use `getch()` to scan for control code `0x03` "END OF TEXT"

### 2.
`Fork` the app into a second process so only the first is shut down.

### 3.
Start a new thread to check if the the `PID` (process id) is running.


## Common errors, misconceptions, or irrelevant information:

1. The `SIGINT` signal happens before `getch()` can process the keyboard.

2. a new thread is part of the same process

3. the signal is sent to every child process https://stackoverflow.com/a/12277671/92584


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

