# Low Level: Windows Startup


## Item ID
low-level-3-windows-startup


## Claim
-   Claim/PI 3: The candidate is well-versed in the basics of both C memory management and concurrency. They also display the ability to reason about trade-offs between different approaches to low-level problems and troubleshoot common issues. However, they may have some difficulty creating implementations from scratch.


## Claim Behavior (evidence)

> The Startup directory in the “all users” Start menu
> * `%ALLUSERSPROFILE%\Microsoft\Windows\Start Menu\Programs\Startup`
>
> The Startup directory in the user’s Start menu
> * `%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup`
>
> Per-user ASEPs under HKCU\Software
> * `HKCU\Software\Microsoft\Windows\CurrentVersion\Run`
>
- https://www.microsoftpressstore.com/articles/article.aspx?p=2762082&seqNum=2


## Content Target
* Operating Systems
* Windows
* Startup

## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem
The user of your app wants your program to start when they log into Windows 10.

Where could you configure your app to start up?


## Code Snippet (optional)



## Answer Key
* `HKCU/SOFTWARE/Microsoft/Windows/CurrentVersion/Run`


## Distractors
### 1.
* `%APPDATA%\Programs\Startup`


### 2.
* `HKLM/SOFTWARE/Microsoft/Windows/CurrentVersion/Startup`


### 3.
* `C:\Windows\SystemApps`


## Common errors, misconceptions, or irrelevant information:



# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

