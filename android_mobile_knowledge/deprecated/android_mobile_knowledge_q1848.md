# view binding

## Item ID
1848

## Claim
Claim 1

## Claim Behavior (evidence)
>     super.onCreate(savedInstanceState);
>     binding = ResultProfileBinding.inflate(getLayoutInflater());
>     View view = binding.getRoot();
>     setContentView(view);
>
> - https://developer.android.com/topic/libraries/view-binding


## Content Target
* view binding


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem
You have an activity for editing the user's profile called `EditProfileActivity` that uses the `edit_profile.xml` layout.

Which `onCreate` function uses view binding to setup the activity?


## Code Snippet (optional)



## Answer Key
```java
super.onCreate(savedInstanceState);
binding = EditProfileBinding.inflate(getLayoutInflater());
setContentView(binding.getRoot());
```


## Distractors
### 1.
```java
super.onCreate(savedInstanceState);
setContentView(R.layout.edit_profile);
```


### 2.
```java
super.onCreate(savedInstanceState);
View view = findViewById(R.layout.edit_profile);
setContentView(view);
```


### 3.
```java
super.onCreate(savedInstanceState);
View view = layoutInflater.inflate(R.layout.edit_profile, null, false);
setContentView(view);
```


## Common errors, misconceptions, or irrelevant information:
View Binding is an optional way to automatically bind views without having to use `findViewById`.

1. this doesn't use "view binding"
2. this doesn't use "view binding"
3. `OnCreate` doesn't provide a layoutInflater, `OnCreate` is for Activities, and `OnCreateView` is for Views.  Also this is not how you use "view binding" in a View.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

