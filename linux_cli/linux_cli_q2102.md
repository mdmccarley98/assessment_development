# Linux CLI 1: Command Line Chaining

## Item ID
2102

## Claim
Claim 1

## Threshold Probabilities
[0.05, 0.20, 0.50, 0.70]

## Claim Behavior (evidence)
```bash
bash-3.2$ rm example.txt
bash-3.2$ test 1 = 2& echo "one" > example.txt && fg; echo "two" >> example.txt
[1] 63418
test 1 = 2
bash-3.2$ cat example.txt
one
two
bash-3.2$
```

```bash
bash-3.2$ rm example.txt 
bash-3.2$ test 1 = 2& echo "one" > example.txt; fg; echo "two" > example.txt
[1] 63462
test 1 = 2
bash-3.2$ cat example.txt 
two
bash-3.2$
```

```bash
bash-3.2$ rm example.txt
rm: example.txt: No such file or directory
bash-3.2$ test 1 = 2; echo "one" > example.txt; fg; echo "two" > example.txt
bash: fg: current: no such job
bash-3.2$ cat example.txt
two
bash-3.2$
```

```bash
bash-3.2$ rm example.txt
bash-3.2$ test 1 = 2 && echo "one" > example.txt && fg && echo "two" >> example.txt
bash-3.2$ cat example.txt
cat: example.txt: No such file or directory
bash-3.2$
```

## Content Target
Scripting

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
Which of the following will set the contents of `example.txt` to:

## Code Snippet (optional)
```
one
two
```

## Answer Key
```bash
test 1 = 2& echo "one" > example.txt && fg; echo "two" >> example.txt
```

## Distractors
### 1.
```bash
test 1 = 2& echo "one" > example.txt; fg; echo "two" > example.txt
```

### 2.
```bash
test 1 = 2; echo "one" > example.txt; fg; echo "two" > example.txt
```

### 3.
```bash
test 1 = 2 && echo "one" > example.txt && fg && echo "two" >> example.txt
```

## Common errors, misconceptions, or irrelevant information:
The key to understanding this is:
* `&&` only executes the right if the left returns success (0)
* `;` executes the right regardless of if the left is successful
* `&` backgrounds a task
* `fg` foregrounds a task, the backgrounded task `test 1=2` returns a failure when it is foregrounded
* `>` creates a new file and appends to it
* `>>` opens an existing file and appends to it

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
