# Android - Theme References

## Item ID
2910

## Claim
1: lifecycle_components

## Claim Behavior (evidence)
> Theme attributes like `selectableItemBackground` may be referenced from the currently applied theme in XML layout and drawable files by using syntax in the form `?[package:]type/name` https://developer.android.com/reference/android/R.attr#selectableItemBackground

## Content Target
- UI
- theme

## Target Level
Level 4

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
What does the `?attr/` prefix from the statement, `android:foreground="?attr/selectableItemBackground"` in the provided android XML layout code snippet accomplish?

## Code Snippet (optional)
```xml
<ConstraintLayout
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
  android:foreground="?attr/selectableItemBackground">
  ...
</ConstraintLayout>
```

## Answer Key
It references an attribute from the theme provided to the layout.

## Distractors
### 1.
It references a data binding attribute bound to this view.

### 2.
It references an attribute set in the layout hosting this layout.

### 3.
It references a build-time attribute specified by the application's BuildConfig.

## Common errors, misconceptions, or irrelevant information:
- Many developers hard code attributes or use only `@style` references for themeable attributes leaving their applications less configurable and unable to swap themes at runtime.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
