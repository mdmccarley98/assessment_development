# C➕➕ Valgrind Leak Detector Messages

## Item ID
2514

## Claim
Claim 3

## Claim Behavior (evidence)
> When using memcheck valgrind produces a lot of messages regarding the memory leak the user might have.

```
  ==19182== 40 bytes in 1 blocks are definitely lost in loss record 1 of 1
  ==19182==    at 0x1B8FF5CD: malloc (vg_replace_malloc.c:130)
  ==19182==    by 0x8048385: f (a.c:5)
  ==19182==    by 0x80483AB: main (a.c:11)
```

> Regarding lost blocks they can be:
> - "definitely lost" means your program is leaking memory -- fix those leaks!
> - "indirectly lost" means your program is leaking memory in a pointer-based structure. (E.g. if the root node of a binary tree is "definitely lost", all the children will be "indirectly lost".)
> - "possibly lost" means your program is leaking memory, unless you're doing unusual things with pointers that could cause them to point into the middle of an allocated block
> - "still reachable" means your program is probably ok -- it didn't free some memory it could have. This is quite common and often reasonable.
> - "suppressed" means that a leak error has been suppressed.

-- https://valgrind.org/docs/manual/faq.html

## Target Level
Level 3

## Content Target
- valgrind
- memcheck
- memory leak messages

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Which one of the following statements is FALSE?

## Code Snippet (optional)

## Answer Key
"indirectly lost" means Valgrind doesn't know if your program is leaking memory

## Distractors

### 1.
"definitely lost" means your program is leaking memory

### 2.
"possibly lost" means your program is leaking memory unless you're doing unusual things with pointers that could cause them to point into the middle of an allocated block

### 3.
"still reachable" means your program is probably ok -- it didn't free some memory it could have

## Common errors, misconceptions, or irrelevant information:
All distractors are factual statements about Valgrind memcheck leak error messages.
The statement on the answer is FALSE because "indirect lost" means that Valgrind KNOWS for sure that your memory is leaking. Usually, it is because another father node is already definitely lost, and all children are indirectly lost.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
