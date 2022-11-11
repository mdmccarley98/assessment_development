# DEX Limit

## Item ID
1844

## Claim
Claim 3

## Claim Behavior (evidence)
> Android app (APK) files contain executable bytecode files in the form of Dalvik Executable (DEX) files, which contain the compiled code used to run your app. The Dalvik Executable specification limits the total number of methods that can be referenced within a single DEX file to 65,536—including Android framework methods, library methods, and methods in your own code.  
> ...  
> Android 5.0 (API level 21) and higher uses a runtime called ART which natively supports loading multiple DEX files from APK files. ART performs pre-compilation at app install time which scans for classesN.dex files and compiles them into a single .oat file for execution by the Android device. Therefore, if your minSdkVersion is 21 or higher multidex is enabled by default, and you do not need the multidex library.
> - https://developer.android.com/studio/build/multidex


## Content Target
* building
* multidex


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem
What is the DEX limit?  And how do you get around it?


## Code Snippet (optional)



## Answer Key
- The DEX limit is 65536 methods.
- You can use a Multidex library on Dalvik or ART has native multidex support.


## Distractors
### 1.
- The DEX limit is 65536 methods.
- You must switch from Dalvik to ART to get multidex support.


### 2.
- The DEX limit is one `.dex` file per application.
- You must switch from Dalvik to ART to get multidex support.


### 3.
- The DEX limit is one `.dex` file per application.
- You can use a Multidex library on Dalvik or ART has native multidex support.


## Common errors, misconceptions, or irrelevant information:
64k methods seems like a ridiculous limit, including all 3rd party libraries and Google SDK code, but it's true.  However multidex solutions exist for both Dalvik and ART.

It's true that on Dalvik you can only have one dex file, but that is not what "DEX limit" means.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

