# Dev Automation 1: git remote branch checked out


## Item ID
2054

## Claim

- Claim: 1

## Threshold Probabilities

[0.10, 0.20, 0.30, 0.60]

## Claim Behavior (evidence)

Answer:
```
% git push --force
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 216 bytes | 216.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
remote: error: refusing to update checked out branch: refs/heads/master
remote: error: By default, updating the current branch in a non-bare repository
remote: is denied, because it will make the index and work tree inconsistent
remote: with what you pushed, and will require 'git reset --hard' to match
remote: the work tree to HEAD.
remote: 
remote: You can set the 'receive.denyCurrentBranch' configuration variable
remote: to 'ignore' or 'warn' in the remote repository to allow pushing into
remote: its current branch; however, this is not recommended unless you
remote: arranged to update its work tree to match what you pushed in some
remote: other way.
remote: 
remote: To squelch this message and still keep the default behaviour, set
remote: 'receive.denyCurrentBranch' configuration variable to 'refuse'.
To arch-cube.local:example
 ! [remote rejected] master -> master (branch is currently checked out)
error: failed to push some refs to 'arch-cube.local:example'
```

Distractor 1:
```
% git commit -am "bare test"
[master ea7b621] bare test
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 bare-test
walnutcube:dev_automation/example % git push
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 16 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 249 bytes | 249.00 KiB/s, done.
Total 2 (delta 0), reused 0 (delta 0), pack-reused 0
To arch-cube.local:example
   e643acd..ea7b621  master -> master
```

Distractor 2:
https://www.git-scm.com/docs/githooks/2.19.0
Remote:
```
cd example
git config --local receive.denyCurrentBranch updateInstead
cat << EOF > .git/hooks/push-to-checkout
#!/bin/sh

git read-tree -u -m HEAD "\$1"
EOF
chmod +x .git/hooks/push-to-checkout
```
```
% touch push-to-checkout.txt
% git add .
% git commit -am "push to checkout hook test"
[master 053c701] push to checkout hook test
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 push-to-checkout.txt
 % git push
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 16 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 282 bytes | 282.00 KiB/s, done.
Total 2 (delta 0), reused 0 (delta 0), pack-reused 0
To arch-cube.local:example
   ea7b621..053c701  master -> master
```

Distractor 3:
On remote
```
git checkout -b remote-only-branch
```
```
walnutcube:dev_automation/example % git add remote-only.txt 
walnutcube:dev_automation/example % git commit -m "testing remote only branch"
[master 5915615] testing remote only branch
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 remote-only.txt
walnutcube:dev_automation/example % git push
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 16 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 263 bytes | 263.00 KiB/s, done.
Total 2 (delta 1), reused 0 (delta 0), pack-reused 0
To arch-cube.local:example
   d9507ff..5915615  master -> master
```


## Content Target

Git


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
You are setting up a remote git repository so that developers can push their code to your remote.

When testing it out, if you `git push` you get the following error.

Which method will continue to produce the SAME error below?


## Code Snippet (optional)
```
 ! [remote rejected] master -> master (branch is currently checked out)
```


## Answer Key
Force push from the client:
```
git push -f
```

## Distractors
### 1.
Use a 'bare' git repository on the remote:
```
git clone --bare example example2
rm -rf example
mv example2 example
```


### 2.
Use the `push-to-checkout` hook on the remote:
```
git config --local receive.denyCurrentBranch updateInstead
cat << EOF > .git/hooks/push-to-checkout
#!/bin/sh

git read-tree -u -m HEAD "\$1"
EOF
chmod +x .git/hooks/push-to-checkout
```


### 3.
Checkout a different branch on the remote:
```
git checkout -b remote-only-branch
```


## Common errors, misconceptions, or irrelevant information:



# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

