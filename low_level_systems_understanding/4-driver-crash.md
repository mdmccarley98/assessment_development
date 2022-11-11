# Low Level: Driver Crash


## Item ID
low-level-driver-crash


## Claim
-   Claim/PI 4: The candidate displays a strong understanding of both C memory management and concurrency. They are comfortable reasoning about different theoretical approaches to low-level problems, and they also demonstrate the practical ability to implement and troubleshoot solutions in a low-level codebase.


## Claim Behavior (evidence)

> For typical industrial I/O cards, only a very small kernel module is needed. The main part of the driver will run in user space.  
https://www.kernel.org/doc/html/v4.14/driver-api/uio-howto.html

> When you start a user-mode application, Windows creates a process for the application. The process provides the application with a private virtual address space and a private handle table. Because an application's virtual address space is private, one application cannot alter data that belongs to another application. Each application runs in isolation, and if an application crashes, the crash is limited to that one application. Other applications and the operating system are not affected by the crash.  
https://docs.microsoft.com/en-us/windows-hardware/drivers/gettingstarted/user-mode-and-kernel-mode

> if any kernel module crashes, the entire system should crash  
https://stackoverflow.com/questions/23040321/how-to-make-the-system-crash-using-a-faulty-kernel-module-fc19



## Content Target
* drivers
* kernel mode/kernel space
* user mode/user space


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
Your client has an I/O device that runs some industrial equipment.
When a parameter goes to 0 the driver crashes, but the OS does not crash.

What kind of driver is it?


## Code Snippet (optional)



## Answer Key
User Mode/Userspace


## Distractors
### 1.
Hardware Abstraction Layer


### 2.
Kernel


### 3.
initramfs


## Common errors, misconceptions, or irrelevant information:



# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

