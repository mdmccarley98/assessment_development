# Dev Automation 1: git rename branch


## Item ID
2068

## Claim

- Claim: 1

## Threshold Probabilities

[0.05, 0.30, 0.50, 0.70]

## Claim Behavior (evidence)
```
~/Dev/triplebyte-assessment % git status
On branch main
Your branch is up to date with 'triplebyte/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   devops/3-git-rename-branch.md

~/Dev/triplebyte-assessment % git commit    
[main 9daf1ac] DevOps 3: git rename branch
 1 file changed, 87 insertions(+)
 create mode 100644 devops/3-git-rename-branch.md
~/Dev/triplebyte-assessment % git status
On branch main
Your branch is ahead of 'triplebyte/main' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
~/Dev/triplebyte-assessment % git checkout -b devops/3-git-rename-branch
Switched to a new branch 'devops/3-git-rename-branch'
~/Dev/triplebyte-assessment % git branch -D main
Deleted branch main (was 9daf1ac).
~/Dev/triplebyte-assessment % git push -u triplebyte devops/3-git-rename-branch
Enter passphrase for key '/Users/robert/.ssh/id_rsa': 
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 16 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 882 bytes | 882.00 KiB/s, done.
Total 4 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote: 
remote: Create a pull request for 'devops/3-git-rename-branch' on GitHub by visiting:
remote:      https://github.com/triplebyte/assessment_development/pull/new/devops/3-git-rename-branch
remote: 
To github.com:triplebyte/assessment_development.git
 * [new branch]      devops/3-git-rename-branch -> devops/3-git-rename-branch
Branch 'devops/3-git-rename-branch' set up to track remote branch 'devops/3-git-rename-branch' from 'triplebyte'.
~/Dev/triplebyte-assessment % git checkout main
Branch 'main' set up to track remote branch 'main' from 'triplebyte'.
Switched to a new branch 'main'
~/Dev/triplebyte-assessment % git rev-parse main devops/3-git-rename-branch triplebyte/main triplebyte/devops/3-git-rename-branch
83fa94a7a305d5e033a10bcc5c6a6518ae318237
9daf1acb2671dab3dbc8662814612edc8d1e82fb
83fa94a7a305d5e033a10bcc5c6a6518ae318237
9daf1acb2671dab3dbc8662814612edc8d1e82fb
```
Note that `main` and `origin/main` (`triplebyte/main`) are both 83fa94a7a305d5e033a10bcc5c6a6518ae318237
But `feature_x` and `origin/feature_x` are both 9daf1acb2671dab3dbc8662814612edc8d1e82fb, which was the same as the commit hash 9daf1ac


## Content Target

Git


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
Your colleague just committed code to their local `main` branch.
Then, they run these commands:
```
git checkout -b feature_x
git branch -D main
git push -u origin feature_x
git checkout main
```

What is the state of the local and origin repositories?


## Code Snippet (optional)



## Answer Key
* local `feature_x` is `origin/feature_x`
* local `main` is `origin/main`


## Distractors
### 1.
* local `feature_x` is `origin/feature_x`
* local `main` is `feature_x`


### 2.
* local `feature_x` is `origin/feature_x`
* local `main` is `feature_x`
* `origin/main` is deleted


### 3.
* their recently committed code is deleted
* local `feature_x` is `origin/main`
* local `main` is `origin/main`



## Common errors, misconceptions, or irrelevant information:
This would have been easier:
```
git branch -m feature_x
git push -u origin feature_x
git checkout main
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

