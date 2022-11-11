# Dev Automation 1: git rejected


## Item ID
2069

## Claim

- Claim: 1

## Threshold Probabilities

[0.10, 0.25, 0.40, 0.60]

## Claim Behavior (evidence)

```
git init --bare example
```
Create a `example/hooks/update` file with the following contents.
```
#!/bin/sh
echo "No"
exit 1
```

Try to git push to it.

You'll get an error like the stem.


## Content Target

Git


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem

One of the devs on your team says when they push they get the following error.

Which debugging step will help figure out why this is happening?


## Code Snippet (optional)
```
$ git push origin master
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Writing objects: 100% (3/3), 264 bytes | 264.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To example.com:git/example
 ! [remote rejected] master -> master
error: failed to push some refs to 'example.com:git/example'
```


## Answer Key
Check that the remote `git/example/hooks/update` script is correct.


## Distractors
### 1.
Check that the user's password or ssh credentials on the remote `example.com` are correct. 


### 2.
Check that the file permissions for the user on the remote `git/example` repo are correct.


### 3.
Check that the network connection from the user to the remote `example.com` is working.


## Common errors, misconceptions, or irrelevant information:


1. Credential errors will give a different error, but data was successfully writen to the remote, so it's not the credentials.
`fatal: Could not read from remote repository.`
2. A remote file permisisons error looks like this:
`error: remote unpack failed: unable to create temporary object directory`
3. Connection errors would look like this:
`ssh: connect to host example.com port 22: Connection refused`, but this one said "Writing succeded at 264.KiB/s"


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
