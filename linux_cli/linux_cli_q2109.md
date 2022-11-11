# Linux CLI 1: Shebang!

## Item ID
2109

## Claim
Claim 1

## Threshold Probabilities
[0.20, 0.30, 0.60, 0.80]

## Claim Behavior (evidence)
> `#!/usr/bin/env python3` – Execute with a Python interpreter, using the env program search path to find it
>
> -- https://en.wikipedia.org/wiki/Shebang_(Unix)

## Content Target
Scripting

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
The following is the contents of `./example` which has `-rwxrwxr-x` permissions.

```bash
#!/usr/bin/env python2
print "Triplebyte"
```

What happens when `./example` is executed?

## Code Snippet (optional)

## Answer Key
The `env` program finds the `python2` executable and sends the contents of `./example` to `python2` for execution.

## Distractors
### 1.
The program loader sends the current environment variables and the contents of `./example` to `python2` for execution.

### 2.
The default environment variables defined in the file `/usr/bin/env` are sent to `python2` which executes the rest of the file `./example`

### 3.
The first line is commented out.  Then the `print` command is executed with "Triplebyte" as the first argument.

## Common errors, misconceptions, or irrelevant information:
The entire contents of the file are executed by the program in the shebang.  You can convince yourself of this by executing this program:
```bash
#!/usr/bin/env cat
hi
```

The [`env`(1) man page](https://linux.die.net/man/1/env) has this interesting synopsis:
> `env [OPTION]... [-] [NAME=VALUE]... [COMMAND [ARG]...]`

So you can set environment variables in the shebang if you want:
```python
#!/usr/bin/env -S VAL="Triplebyte" python3
import os
print(os.getenv('VAL') + ' is 🆒')
```

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
