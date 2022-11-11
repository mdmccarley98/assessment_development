# Android - Constraint Layout

## Item ID
2909

## Claim
1: lifecycle_components

## Target Skill Level
Level 3

## Claim Behavior (evidence)
> Views with fixed sizes or which are set to `wrap_content` center themselves between opposing constraints (when no constraint bias is set). To fully center a view, equal opposing constraints can be set both horizontally and vertically on a view. https://developer.android.com/training/constraint-layout#add-a-constraint

## Content Target
- UI
- Layouts

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
Which of the following properly centers the view with ID `myView` inside its parent `ConstraintLayout`?

## Code Snippet (optional)

## Answer Key
```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout
    android:layout_height="match_parent"
    android:layout_width="match_parent">

    <View
        android:id="@+id/myView"
        android:layout_width="48dp"
        android:layout_height="48dp"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintBottom_toBottomOf="parent" />

</androidx.constraintlayout.widget.ConstraintLayout>
```

## Distractors
### 1.
```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout
    android:layout_height="match_parent"
    android:layout_width="match_parent">

    <View
        android:id="@+id/myView"
        android:layout_width="48dp"
        android:layout_height="48dp"
        android:layout_margin="auto" />

</androidx.constraintlayout.widget.ConstraintLayout>
```

### 2.
```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout
    android:layout_height="match_parent"
    android:layout_width="match_parent">

    <View
        android:id="@+id/myView"
        android:layout_width="48dp"
        android:layout_height="48dp"
        android:layout_gravity="center" />

</androidx.constraintlayout.widget.ConstraintLayout>
```

### 3.
```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout
    android:layout_height="match_parent"
    android:layout_width="match_parent">

    <View
        android:id="@+id/myView"
        android:layout_width="48dp"
        android:layout_height="48dp"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintHorizontal_chainStyle="packed"
        app:layout_constraintVertical_chainStyle="packed" />

</androidx.constraintlayout.widget.ConstraintLayout>
```

## Common errors, misconceptions, or irrelevant information:
- Developers familiar with less advanced layouts like `LinearLayout` and `FrameLayout` may assume `android:layout_gravity="center"` will be sufficient for centering views in `ConstraintLayout`s.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
