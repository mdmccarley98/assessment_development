# Dev Automation 1: Ctrl-C


## Item ID
2067

## Claim

- Claim: 1

## Threshold Probabilities

[0.20, 0.30, 0.65, 0.75]

## Claim Behavior (evidence)

> * The SIGINT (“program interrupt”) signal is sent when the user types the INTR character (normally C-c). See Special Characters, for information about terminal driver support for C-c.  
> https://www.gnu.org/software/libc/manual/html_node/Termination-Signals.html

>  If the signal signum is delivered to the process, then one of the
>  following happens:
> 
>  *  If the disposition is set to SIG_IGN, then the signal is
>     ignored.
> 
>  *  If the disposition is set to SIG_DFL, then the default action
>     associated with the signal (see signal(7)) occurs.
> 
>  *  If the disposition is set to a function, then first either the
>     disposition is reset to SIG_DFL, or the signal is blocked (see
>     Portability below), and then handler is called with argument
>     signum.  If invocation of the handler caused the signal to be
>     blocked, then the signal is unblocked upon return from the
>     handler.
> 
>  The signals SIGKILL and SIGSTOP cannot be caught or ignored.
>
> https://man7.org/linux/man-pages/man2/signal.2.html

## Content Target

System Maintenance
Scripting


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem
Your app wants to detect when someone presses Ctrl-C to exit it, so that it can clean up resources quickly without being terminated automatically.

Which signal should you handle?


## Code Snippet (optional)



## Answer Key
SIGINT


## Distractors
### 1.
SIGTERM


### 2.
SIGHUP


### 3.
SIGKILL


## Common errors, misconceptions, or irrelevant information:
Knowing about SIGINT is very valuable for system admins, and debugging applications.  Many applications will report in their logs that they "caught" a SIGINT.  This can happen through Ctrl-C or via the `kill -2` command among other possibilities.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

