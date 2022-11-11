# Python std pip requirements

## Item ID
1319

## Claim
Claim 4

## Claim Behavior (evidence)

[pip requirements.txt docs](https://pip.pypa.io/en/latest/user_guide/#requirements-files)

## Content Target
`requirements.txt`

## Cognitive Model 

Comprehension

## Item Type
Multiple choice

## Stem

How do you make a `requirements.txt` file for a project and how do you install a `requirements.txt` from another project?

## Code Snippet (optional)

## Answer Key
* To create: Run `pip freeze > requirements.txt` from the command line in your virtual environment.
* To install: Run `pip install -r requirements.txt` from the command line in your virtual environment.

## Distractors 
### 1.
* To create: Run `pip freeze requirements.txt` from the command line in your virtual environment.
* To install: Run `pip install -r requirements.txt` from the command line in your virtual environment.

### 2.
* To create: Run `pip freeze > requirements.txt` from the command line in your virtual environment.
* To install: Run `pip install requirements.txt` from the command line in your virtual environment. 

### 3.
* To create: Run `pip freeze requirements.txt` from the command line in your virtual environment.
* To install: Run `pip install requirements.txt` from the command line in your virtual environment.

## Common errors, misconceptions, or irrelevant information (optional)

The `pip freeze` command does not write to a file.  It only prints a list of packages.  So you need save the output of the command into a file using `>`.

The `pip install` command takes the name of a package to download and install.
There is no package on pypi named `requirements.txt`.  However `pip install` also takes a `-r` argument to specify a local file.  So `pip install -r requirements.txt` is the correct syntax.



## Content Review

- Accuracy: ✅
    * Changed evidence from note.nkmk.me to a more official source pip.pypa.io
- Alignment: ✅
    * Having different distractors on `|` vs `>` is more of a command line test, than a test of arguments for `pip` so I changed the `|` distractors to empty, i.e. an argument to `pip`.
    * Changed the "common errors" section to talk about pip arguments instead of piping.
