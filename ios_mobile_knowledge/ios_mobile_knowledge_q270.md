# mobile_knowledge

## Item ID
q270

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
ios

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
The following code is an event handler for a button click. If the image takes a long time to load, what would happen before the image is fully loaded?

## Code Snippet (optional)
```swift
@IBAction func loadImageButtonClicked(_ sender: Any) {
    do {
      	// Loads image data from URL and set it to imageView
        let url = URL(string: "https://triplebyte.com/hugeimage.jpg")
        let imageData = try Data(contentsOf: url!)
        imageView.image = UIImage(data: imageData)
    }  catch _ {
        print("Image failed to load")
    }
}
```

## Answer Key
The UI freezes while the image downloads.

## Distractors

### 1.
The code might be executed more than once because user might click the button again.

### 2.
The code works fine, because the button will be disabled after the first click.

### 3.
It prints out “Image failed to load” because by default loading an image would time out very quickly.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

