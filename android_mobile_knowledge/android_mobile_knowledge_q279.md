# Blocking Download

## Item ID
279

## Claim
2: data_management

## Claim Behavior (evidence)
NA

## Content Target
android

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
The following code is an event handler for a button click. Suppose `loadAndProcessImage()` method is correctly implemented, what would happen before the image is fully loaded, if the image takes a long time to load and process?

## Code Snippet (optional)
```java
public void loadImageButtonClicked(View view) {
    // This method returns after the image is downloaded and processed.
    Bitmap bm = loadAndProcessImage("https://triplebyte.com/hugeimage.jpg");

    ImageView imageView = (ImageView) findViewById(R.id.image_view);
    imageView.setImageBitmap(bm);
}
```

## Answer Key
The UI freezes before `loadAndProcessImage()` method completes.

## Distractors

### 1.
The code might be executed more than once because user might click the button again.

### 2.
The code works fine, because the button will be disabled after the first click.

### 3.
The code would fail to set the image to `imageView`, as it is running in a background thread.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

