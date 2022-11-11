# Leaks

## Item ID
1852

## Claim
Claim 1

## Claim Behavior (evidence)
> Be mindful of where you register and unregister the receiver, for example, if you register a receiver in onCreate(Bundle) using the activity's context, you should unregister it in onDestroy() to prevent leaking the receiver out of the activity context.
> -- https://developer.android.com/guide/components/broadcasts

> Your crash reporting tool might not correctly report OOMs. When memory is low because of memory leak accumulation, an OOM can be thrown from anywhere in the app code, which means that every OOM has a different stacktrace. So instead of one crash entry with a 1000 crashes, OOMs get reported as 1000 distinct crashes and hide in the long tail of low occuring crashes.
> -- https://square.github.io/leakcanary/fundamentals/

> If used from an Activity context, the receiver is being registered within that activity. This means that you are expected to unregister before the activity is done being destroyed; in fact if you do not do so, the framework will clean up your leaked registration as it removes the activity and log an error. Thus, if you use the Activity context to register a receiver that is static (global to the process, not associated with an Activity instance) then that registration will be removed on you at whatever point the activity you used is destroyed.
> If used from the Context returned here, the receiver is being registered with the global state associated with your application. Thus it will never be unregistered for you. This is necessary if the receiver is associated with static data, not a particular component. However using the ApplicationContext elsewhere can easily lead to serious leaks if you forget to unregister, unbind, etc.
> -- https://developer.android.com/reference/android/content/Context#getApplicationContext()

## Content Target
* memory managment
* leaks


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
An Android app with 20 different fragments sometimes runs out of memory and crashes with an OOM, but it crashes in **different fragments** and is inconsistent.

Which of the following is the most likely cause?


## Code Snippet (optional)



## Answer Key
BroadcastReceivers are being registered but not unregistered properly.


## Distractors
### 1.
The app has a list of 1000 strings of about 30 characters in length.  And it's using a ListView instead of a RecyclerView.


### 2.
Some of the fragments share layouts, but each fragment should have it's own layout.


### 3.
The app uses ConstraintLayouts with constraints that reference each-other.


## Common errors, misconceptions, or irrelevant information:

1. 1000 subviews is a lot, but it's relatively little data with just one string.  If this is causing an OOM it would be in a consistent place.
2. Which layout a fragment uses is unrelated to memory leaks.
3. Constraints are not commonly known to cause memory leaks.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

