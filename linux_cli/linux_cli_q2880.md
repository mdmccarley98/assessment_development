# Linux CLI - NFSD DEBUG

## Item ID
2880

## Claim
3: sys_admin

## Target Skill Level
2

## Claim Behavior (evidence)
>The rpcdebug command allows an administrator to set and clear the Linux kernel's NFS client and server debug flags.
>Setting these flags causes the kernel to emit messages to the system log in response to NFS activity;

https://linux.die.net/man/8/rpcdebug

>dmesg is used to examine or control the kernel ring buffer.
>       The default action is to display all messages from the kernel
>       ring buffer.

https://man7.org/linux/man-pages/man1/dmesg.1.html


## Content Target
Troubleshooting

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
Reports have been created regarding NFS service unavailability. The report contains logs of Windows machines showing frequent errors when accessing the NFS server, which is based on Centos 7.
<br><br>
You request one of the users to try again while you monitor the debug logs of the NFS server. The NFS daemon has been configured in debug mode using the following command:

```
rpcdebug -m nfsd -s all
```

Which command would you use to see the live output of the NFS daemon?

## Code Snippet (optional)

## Answer Key
`dmesg -wH`

## Distractors
### 1.
`systemctl status nfs`

### 2.
`journalctl -u nfs`

### 3.
`nfsd -f`

## Common errors, misconceptions, or irrelevant information:
NFSv4 is part of the Linux kernel, thus its output will be visible in the kernel ring buffer

1. This command will show that NFS service is running or not, debug messages will not be visible.
2. This command will show new service messages and status cycles, but not debug messages
3. This command does not exists

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
