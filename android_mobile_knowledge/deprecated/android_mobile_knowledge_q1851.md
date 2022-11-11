# AIDL

## Item ID
1851

## Claim
Claim 3

## Claim Behavior (evidence)
> You must define your AIDL interface in an .aidl file using the Java programming language syntax, then save it in the source code (in the src/ directory) of both the application hosting the service and any other application that binds to the service.
>
> When you build each application that contains the .aidl file, the Android SDK tools generate an IBinder interface based on the .aidl file and save it in the project's gen/ directory. The service must implement the IBinder interface as appropriate. The client applications can then bind to the service and call methods from the IBinder to perform IPC.
> - https://developer.android.com/guide/components/aidl


## Content Target
* services
* IPC


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem
What is AIDL?


## Code Snippet (optional)



## Answer Key
An interface specification that the Android SDK uses to generate an IBinder for IPC.


## Distractors
### 1.
A native code interface to allow C++ code to communicate with Java code via IPC.


### 2.
An interface used by the internal Android SDK to allow background services to run without a user interface.


### 3.
A decompilation of an internal Android SDK interface used to validate type safety.


## Common errors, misconceptions, or irrelevant information:



# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
