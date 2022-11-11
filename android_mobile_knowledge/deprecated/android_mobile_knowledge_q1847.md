# minSdkVersion

## Item ID
1847

## Claim
Claim 3

## Claim Behavior (evidence)
> The module-level build file
>
> The module-level build.gradle file, located in each project/module/ directory, allows you to configure build settings for the specific module it is located in. Configuring these build settings allows you to provide custom packaging options, such as additional build types and product flavors, and override settings in the main/ app manifest or top-level build.gradle file.
> - https://developer.android.com/studio/build#module-level

## Content Target
* gradle


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
The team has decided to change your existing Android app's minimum API level to 19.
You start to make the change, but when you look in the project's `build.gradle` and in the `AndroidManifest.xml` files you can't find `minSdkVersion`.

What is likely the issue?


## Code Snippet (optional)



## Answer Key
You need to update the **module's** build file, not the **project's** build file.


## Distractors
### 1.
You need to **add** the missing attribute `<uses-sdk android:minSdkVersion="19" />` to the `AndroidManifest.xml` file.


### 2.
You need to **add** the following to the project's `build.gradle` file.
```
android {
    defaultConfig {
        minSdkVersion 19
    }
}
```


### 3.
The minimum SDK version is **automatically** chosen based on the version of Android Studio you are using.


## Common errors, misconceptions, or irrelevant information:
This is a fairly basic topic, but it throws a bunch of new devs.  So since it's troubleshooting I chose claim 3 instead of claim 2.

1. It is possible to specify the `minSdkVersion` in the manifest, but the module `build.gradle` file is likely setting it, because it's not already in the manifest.  And if you set it in both the manifest and module build.gradle, then gradle will overwrite the manifest version.  https://stackoverflow.com/questions/19997509/android-studio-why-are-minsdkversion-and-targetsdkversion-specified-both-in-and

2. The minSdkVersion is in the module level file.  If you change it in the project level, then you'd also have to import the android plugin, and remove the configuration from the module level configuration.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
