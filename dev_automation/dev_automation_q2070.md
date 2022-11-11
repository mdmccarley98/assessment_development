# Dev Automation 3: Unix Socket


## Item ID
2070

## Claim

- Claim: 3

## Threshold Probabilities

[0.30, 0.40, 0.60, 0.80]

## Claim Behavior (evidence)

Unix Sockets are used to communicate on the **same machine**:

> The AF_UNIX (also known as AF_LOCAL) socket family is used to communicate between processes on the same machine efficiently.
> https://www.man7.org/linux/man-pages/man7/unix.7.html

>     INFO[0000] Listening for HTTP on unix (/var/run/docker.sock)
> -- https://docs.docker.com/config/daemon/

## Content Target

System Maintenance


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem
You are making a backup mirror of a server for redundancy.
The mirroring utility wants to copy the following 4 files to the backup server.

Which of the following files can NOT be moved to another computer?


## Code Snippet (optional)



## Answer Key
```
/var/run/docker.sock
```


## Distractors
### 1.
```
/var/docker/serverkey.pem
```


### 2.
```
/var/docker/server.pem
```


### 3.
```
/etc/docker/daemon.json
```


## Common errors, misconceptions, or irrelevant information:

This really doesn't have anything to do with docker.  Unix socket files are for IPC and are set up by running processes.

1. You could move the private key, maybe you shouldn't, but you could.
2. Same as 1.
3. The configuration file can be freely used on another machine.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

