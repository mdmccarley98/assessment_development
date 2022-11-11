# Dev Automation 1: bash script

## Item ID
2060

## Claim

- Claim: 1

## Threshold Probabilities

[0.20, 0.30, 0.50, 0.80]

## Claim Behavior (evidence)

```
bash-3.2$ mkdir example
bash-3.2$ cd example
bash-3.2$ git init --bare your-project
Initialized empty Git repository in /Users/robert/Dev/triplebyte-assessment/dev_automation/example/your-project/
bash-3.2$ cd ..
bash-3.2$ git clone example/your-project
Cloning into 'your-project'...
warning: You appear to have cloned an empty repository.
done.
bash-3.2$ cd your-project
bash-3.2$ touch README.md
bash-3.2$ git add .
bash-3.2$ git commit -am "initial commit"
[master (root-commit) b8985b3] initial commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.md
bash-3.2$ git push
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 217 bytes | 217.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To /Users/robert/Dev/triplebyte-assessment/dev_automation/example/your-project
 * [new branch]      master -> master
bash-3.2$ cd ..
bash-3.2$ rm -rf your-project
bash-3.2$ sed -i '' -e 's#https://github.com/example/your-project#example/your-project#g' example.sh
bash-3.2$ ./example.sh
Cloning into 'your-project'...
done.
bash-3.2$ cat result
elif
bash-3.2$ rm -rf example your-project
```


## Content Target

Scripting


## Cognitive Model
Use



## Item Type
Multiple Choice


## Stem

Your team has a repo at https://github.com/example/your-project and the repo is set up correctly.
(CI has the correct credentials to the repo.)

CI is setup to run the following script.

What is the contents of the file `result` after CI runs the script?

## Code Snippet (optional)
```
#!/bin/sh

set -e

echo "start" > result
git clone https://github.com/example/your-project
cd your-project
git rev-parse HEAD > test
if $(test -f .); then
	wc -l test > ../result
elif [ "your-project" = "$(ls .. | grep your-project)" ]; then
	echo "elif" > ../result
else
	echo "else" > ../result
fi
```


## Answer Key

```
elif
```

## Distractors
### 1.
```
start
```



### 2.
```
       1 test
```



### 3.
```
else
```



## Common errors, misconceptions, or irrelevant information:

* `set -e` is irrelevant, the `$(test -f .)` fails inside it's subcommand, and doesn't cancel the main script
* if someone just copied and pasted the script into the editor they would get distractor 1 because IRL `https://github.com/example/your-project` does not exist.



# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
