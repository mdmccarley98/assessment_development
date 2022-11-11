# Intent

## Item ID
1841

## Claim
Claim 1

## Claim Behavior (evidence)

https://developer.android.com/training/basics/firstapp/starting-activity

You don't "new up" your own Activities in Android.

D1:
```
2021-03-18 13:27:37.597 19857-19857/com.example.example E/AndroidRuntime: FATAL EXCEPTION: main
    Process: com.example.example, PID: 19857
    java.lang.NullPointerException: Attempt to invoke virtual method 'java.lang.String android.content.Context.getPackageName()' on a null object reference
        at android.content.ContextWrapper.getPackageName(ContextWrapper.java:132)
        at android.content.ComponentName.<init>(ComponentName.java:128)
        at android.content.Intent.<init>(Intent.java:4900)
        at com.example.example.MainActivity.lambda$onCreate$1$MainActivity(MainActivity.java:33)
```

D2:
```
2021-03-18 13:28:24.814 19933-19933/com.example.example E/AndroidRuntime: FATAL EXCEPTION: main
    Process: com.example.example, PID: 19933
    java.lang.NullPointerException: Attempt to invoke virtual method 'android.app.ActivityThread$ApplicationThread android.app.ActivityThread.getApplicationThread()' on a null object reference
        at android.app.Activity.startActivityForResult(Activity.java:4226)
        at androidx.fragment.app.FragmentActivity.startActivityForResult(FragmentActivity.java:675)
        at android.app.Activity.startActivityForResult(Activity.java:4183)
        at androidx.fragment.app.FragmentActivity.startActivityForResult(FragmentActivity.java:662)
        at android.app.Activity.startActivity(Activity.java:4522)
        at android.app.Activity.startActivity(Activity.java:4490)
        at com.example.example.MainActivity.lambda$onCreate$2$MainActivity(MainActivity.java:42)
```

D3:
```
2021-03-18 13:28:44.871 20034-20034/com.example.example E/AndroidRuntime: FATAL EXCEPTION: main
    Process: com.example.example, PID: 20034
    java.lang.NullPointerException: Attempt to invoke virtual method 'java.lang.String android.content.Context.getPackageName()' on a null object reference
        at android.content.ContextWrapper.getPackageName(ContextWrapper.java:132)
        at android.content.ComponentName.<init>(ComponentName.java:128)
        at android.content.Intent.<init>(Intent.java:4900)
        at com.example.example.MainActivity.lambda$onCreate$3(MainActivity.java:49)
```

## Content Target
* Intent
* Activity


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem
Which of the following will start `OtherActivity` from `MainActivity`?


## Code Snippet (optional)



## Answer Key
```java
Intent intent = new Intent(MainActivity.this, OtherActivity.class);
startActivity(intent);
```


## Distractors
### 1.
```java
OtherActivity otherActivity = new OtherActivity();
Intent intent = new Intent(otherActivity, OtherActivity.class);
startActivity(intent);
```

### 2.
```java
OtherActivity otherActivity = new OtherActivity();
Intent intent = new Intent(MainActivity.this, OtherActivity.class);
otherActivity.startActivity(intent);
```


### 3.
```java
OtherActivity otherActivity = new OtherActivity();
Intent intent = new Intent(otherActivity, OtherActivity.class);
otherActivity.startActivity(intent);
```


## Common errors, misconceptions, or irrelevant information:

In Android, you don't "new up" your own Activities to start them.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

