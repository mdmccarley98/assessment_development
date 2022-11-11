# Linux CLI - HOSTNAME WITH SUDO

## Item 
2882

## Claim
3: sys_admin

## Target Skill Level
3

## Claim Behavior (evidence)

>After I have figured out the root cause, I find either of the following ways can workaround and make the sudo run normally.
>Add an entry of 127.0.0.1 ubuntuwork to /etc/hosts

https://amyangfei.me/2022/02/20/diagnose-slow-sudo/

## Content Target
Troubleshooting

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
A user has filed a report for a slow sudo command on an application server that your team supports.
<br><br>
The developer states the following:
> "The sudo command takes too much time to come back. Without sudo, the command runs fast, and no delay is observed. This behavior is observed with all commands using sudo."
<br><br>
You log in to the server and verify this yourself by running the following commands:

```
user1@server12:~$ time date
Tue 23 Aug 2022 11:21:17 AM UTC

real    0m0.001s
user    0m0.001s
sys     0m0.000s

user1@server12:~$ time sudo date
Tue 23 Aug 2022 11:21:36 AM UTC

real    0m15.030s
user    0m0.003s
sys     0m0.005s

user1@server12:~$ time ls -ll
total 0

real    0m0.001s
user    0m0.001s
sys     0m0.000s
user1@server12:~$ time sudo ls -ll
total 0

real    0m15.019s
user    0m0.006s
sys     0m0.000s
```

*Note: the OS is Ubuntu 20.04.3 LTS*
<br><br>
What is the most probable cause of this slowness?


## Code Snippet (optional)

## Answer Key
Missing a hostname entry in the `/etc/hosts` file

## Distractors
### 1.
The sudo command is very CPU intensive

### 2.
The command that sudo runs is CPU intensive

### 3.
The `/etc/sudoers` file is missing

## Common errors, misconceptions, or irrelevant information:
sudo command does DNS lookups for the local hostname of the machine, if the entry is missing from /etc/hosts, it will do a DNS timeout.

1. sudo command is not CPU intensive
2. since this issue happens on all commands, this one is ruled out.
3. missing sudoers file will not delay sudo executions

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
