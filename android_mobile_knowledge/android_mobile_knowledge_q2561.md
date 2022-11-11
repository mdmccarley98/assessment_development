# Canvas Save

## Item ID
2561

## Claim
1: lifecycle_components

## Target Level
Level 5

## Claim Behavior (evidence)
> Subsets of drawing instructions in Android's canvas API can be segmented with calls to save and restoreToCount to simplify & isolate canvas transformations during complex drawing operations. https://developer.android.com/reference/android/graphics/Canvas#save()

## Content Target
- views
- canvas

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
Consider the provided custom view. What will be drawn on the screen when this view is rendered?

## Code Snippet (optional)
```kotlin
class CustomView(context: Context, attributeSet: AttributeSet): View(context, attributeSet) {
    val paint = Paint().apply {
        color = Color.RED
        strokeWidth = 5f
        style = Paint.Style.STROKE
    }

    override fun onDraw(canvas: Canvas) {
        canvas.drawCircle(100f, 100f, 50f, paint)
        val count = canvas.save()
        canvas.translate(200f, 200f)
        canvas.drawCircle(100f, 100f, 50f, paint)
        canvas.restoreToCount(count)
        canvas.drawCircle(150f, 150f, 50f, paint)
    }
}
```

## Answer Key
Three circles on a diagonal with two overlapping in the upper left

## Distractors
### 1.
Three circles on a diagonal with two overlapping in the bottom right

### 2.
Two circles on a diagonal overlapping in the upper left

### 3.
One circle inset slightly from the upper left

## Common errors, misconceptions, or irrelevant information:
- Many developers do not understand the purpose of the Canvas.save and Canvas.restoreToCount APIs.
- Inexperienced developers may not be familiar with Android's canvas drawing APIs at all

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
