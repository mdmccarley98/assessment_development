# Android View ID

## Item ID
android-view-id

## Claim
Android knowledge

## Claim Behavior (evidence)
* [Layout Value for android:id](https://developer.android.com/guide/topics/resources/layout-resource#idvalue) - android.com

## Content Target
Android View ID

## Cognitive Model


## Item Type


## Stem

You're writing an app that helps pet owners find people to watch their animals when they are away.

One of the views has a `EditText` with the id "petName".

How do you create a new id for `petName` in the `R` class?


## Code Snippet (optional)


## Answer Key
```xml
<EditText
    android:id="@+id/petName"
    ...
    />
```

## Distractors

### 1.
```java
public final class R {
    // ...
    public static final class id {
        // ...
        public static final int petName = 19008328;
    }
}
```

### 2.
```xml
<EditText
    android:id="@id/petName"
    ...
    />
```

### 3.
```kotlin
public class Example {
    // ...
    public object id {
        // ...
        const val petName = 19008328
    }
}
```

## Common errors, misconceptions, or irrelevant information (optional):

When you use the `+` symbol, the `aapt` tool will create a new integer in the generated `R` resource class.
App developers shouldn't modify this file directly.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

