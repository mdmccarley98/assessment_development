# Linux CLI 3: UID

## Item ID
2112

## Claim
Claim 3

## Threshold Probabilities
[0.10, 0.30, 0.60, 0.80]

## Claim Behavior (evidence)
> Special values
> 
> *   0: The superuser normally has a UID of zero (0).[10]
> *   −1: The value (uid_t) -1 is reserved by POSIX to identify an omitted argument.[11]
> *   65535: This value is still avoided because it was the API error return value when uid_t was 16 bits.
> *   Nobody: Historically, the user "nobody" was assigned UID -2 by several operating systems, although other values such as 215−1 = 32,767 are also in use, such as by OpenBSD.[12] For compatibility between 16-bit and 32-bit UIDs, many Linux distributions now set it to be 216−2 = 65,534; the Linux kernel defaults to returning this value when a 32-bit UID does not fit into the return value of the 16-bit system calls.[13] Fedora Linux assigns the last UID of the range statically allocated for system use (0-99) to nobody: 99, and calls 65534 instead nfsnobody.
>
> -- https://en.wikipedia.org/wiki/User_identifier

## Content Target
user ids

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
You are looking at some logs on a system and you see the following:

```
> id -u
0
```

What information can we determine from these logs?

## Code Snippet (optional)

## Answer Key
The current user is "root".

## Distractors
### 1.
The current user is "nobody".

### 2.
The inode is in user-space 0.

### 3.
The inode is in kernel-space 0.

## Common errors, misconceptions, or irrelevant information:
1. "nobody" is usually 65534
2. this is nonsensical technobable, inodes are in the file system
2. this is nonsensical technobable, inodes are in the file system

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
