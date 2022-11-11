# Pragma Version Number

## Item ID
2397

## Claim
Claim 1

## Target Level
1

## Claim Behavior (evidence)
Version Pragma: 
https://docs.soliditylang.org/en/develop/layout-of-source-files.html 
https://ethereum.stackexchange.com/questions/50071/solidity-best-practices-which-compiler-version-should-i-use-advantages-dis

## Content Target
Core syntax: Understanding pragma solidity.

## Cognitive Model
Comprehension

## Item Type
Multiple choice

## Stem
You are looking at a pragma directive represented by the following line of code:

```
pragma solidity 0.6.2;
``` 

What information can we determine from this?

## Code Snippet (optional)
## Answer Key
The version number starts with a 0, followed by a major build number and a minor build number. For example, the version number 0.6.2 refers to major build 6 and minor build 2. This is the exact compiler version that is expected in this case.

## Distractors
### 1.
The version number starts with a 0, followed by a major build number and a minor build number. For example, the version number 0.6.2 refers to major build 6 and minor build 2. This is the only compiler version that should not be used, due to instability.

### 2.
The build number starts with a 0, followed by a major version number and a minor version number. For example, the version number 0.6.2 refers to major version 6 and minor version 2. This implies that the compiler version which should be used in this case is thus 0.6.3

### 3.
The older version number starts with a 0, whereas the newer versions start with 1, followed by a major build number and a minor build number. For example, the version number 0.6.2 refers to major build 6 and minor build 2. The new version is therefore 1.6.2. This is the exact compiler version that is expected in this case.

## Common errors, misconceptions, or irrelevant information:
1.) This is nonsensical technobable, since a compiler version would not have been knowingly released if it was unstable.

2.) It is not logical to first use the build and then the version number.

3.) This is nonsensical technobable, since there is currently no higher version than v0.8.11

## Triplebyte Review

Language Review: (TB only)

Bias and Fairness Review: (TB only)

Content Review: (TB only)
