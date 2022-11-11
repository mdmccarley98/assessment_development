# Linux CLI 3: FHS

## Item ID
2099

## Claim
Claim 3

## Threshold Probabilities
[0.05, 0.20, 0.40, 0.60]

## Claim Behavior (evidence)
> `/usr/sbin` : Non-essential standard system binaries  
> This directory contains any non-essential binaries used exclusively by the system administrator. System administration programs that are required for system repair, system recovery, mounting `/usr`, or other essential functions must be placed in `/sbin` instead.  
> Locally installed system administration programs should be placed in /usr/local/sbin.  
> -- https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch04s10.html

## Content Target
File Systems

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
A system has two different utilities A and B. A is used to mount a filesystem. B is used to update the firewall. Where are the executables located?

## Code Snippet (optional)

## Answer Key
* A is in `/sbin`
* B is in `/usr/sbin`

## Distractors
### 1.
* A is in `/usr/sbin`
* B is in `/usr/sbin`

### 2.
* A is in `/bin`
* B is in `/usr/local/bin`

### 3.
* A is in `/usr/bin`
* B is in `/usr/local/bin`

## Common errors, misconceptions, or irrelevant information:
Mounting the filesystem is considered important enough to be in /sbin, but firewalls aren't necessisary required in single-user-mode, so they go in /usr/sbin.  Both are only used by administrators, so they don't go in /bin.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
