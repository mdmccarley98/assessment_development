# Distributed Computing 1: Shared File System Permissions

## Item ID
2077

## Claim
- Claim 1

## Threshold Probabilities
[0.15, 0.25, 0.45, 0.65]

## Claim Behavior (evidence)

> The NFS server checks permissions by taking the credentials from
> the RPC authentication information in each remote request. For
> example, using the AUTH_UNIX flavor of authentication, the
> server gets the user's effective user ID, effective group ID and
> groups on each call, and uses them to check access. Using user
> ids and group ids implies that the client and server either
> share the same ID list or do local user and group ID mapping.
> Servers and clients must agree on the mapping from user to uid
> and from group to gid, for those sites that do not implement a
> consistent user ID and group ID space. In practice, such mapping
> is typically performed on the server, following a static mapping
> scheme or a mapping established by the user from a client at
> mount time.
> -- https://datatracker.ietf.org/doc/html/rfc1813


## Content Target
* nfs
* shared file systems
* permissions


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem
Several linux computers have an NFS file system mounted at `/shared_dir`. UserA is reporting that their files are being modified by someone else.

You check permissions from UserA's computer:
```
userA@computer1:/shared_dir$ ls -al
total 8
drwxr-xr-x  2 shareGroup shareGroup 4096 Jun 10 17:22 .
drwxr-xr-x 31 shareGroup shareGroup 4096 Jun 10 17:22 ..
-rw-r--r--  1 userA userA    0 Jun 10 17:22 file1
-rw-r--r--  1 userA userA    0 Jun 10 17:22 file2.txt
```

Then you check permissions from UserB's computer:
```
userB@computer2:/shared_dir$ ls -al
total 8
drwxr-xr-x  2 shareGroup shareGroup 4096 Jun 10 17:22 .
drwxr-xr-x 31 shareGroup shareGroup 4096 Jun 10 17:22 ..
-rw-r--r--  1 userB userB    0 Jun 10 17:22 file1
-rw-r--r--  1 userB userB    0 Jun 10 17:22 file2.txt
```

What is happening?


## Code Snippet (optional)



## Answer Key
The file permissions are correct. The users have the same UID and GID.


## Distractors
### 1.
The file permissions are incorrect. They allow the group to write.


### 2.
The permissions on the parent folder are incorrect.


### 3.
The file permissions allow everyone to write.


## Common errors, misconceptions, or irrelevant information:

1. The file permissions only allow the owner to write.
2. The permissions on the parent folder are correct.
3. The file permissions only allow everyone to read.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

