# Linux CLI 2: SSH HOST KEY

## Item ID
2571

## Claim
Claim 2

## Target Skill Level
Level 2

## Threshold Probabilities
[0.25, 0.45, 0.75, 0.90]

## Claim Behavior (evidence)
>Known Host Keys
>SSH clients store host keys for hosts they have ever connected to. These stored host keys are called known host keys, and the collection is often called known hosts. In OpenSSH, the collection of known host keys is stored in /etc/ssh/known_hosts and in .ssh/known_hosts in each user's home directory.
> -- https://www.ssh.com/academy/ssh/host-key

## Content Target
Networking

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
A server you have connected to before has been formatted with a fresh Linux OS installation. Upon connecting, you see this message:

```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that the RSA host key has just been changed.
The fingerprint for the RSA key sent by the remote host is
------------------------(RSA key)
Please contact your system administrator.
Add correct host key in /home/users/myaccount/.ssh/known_hosts to get rid of this message.
Offending key in /home/users/myaccount/.ssh/known_hosts:7
RSA host key for '172.16.14.88' has changed and you have requested strict checking.
Host key verification failed.
lost connection
```

How can you fix this error?

## Code Snippet (optional)

## Answer Key
Remove line 7 on /home/users/myaccount/.ssh/known_hosts

## Distractors
### 1.
Change permissions on /home/users/myaccount/.ssh/known_hosts to 0644

### 2.
Contact the network administrator for a possible network breach or man-in-the-middle attack on the server

### 3.
Type the ssh-keygen command on the server to regenerate a new SSH host key

## Common errors, misconceptions, or irrelevant information:
Newer linux users will face this error over time when reconnecting to a server reformatted 
1. Changing permissions on the known_hosts file do not affect the host key verification.
2. Since this server was reformatted and the user have connected before, this error is expected.
3. ssh-keygen will issue a new ssh keypair, this command does not get involved with ssh host keys.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
