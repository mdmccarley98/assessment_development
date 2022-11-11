# mobile_knowledge

## Item ID
q297

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
The following code loads an image asynchronously for table cells in a `UITableView`. Suppose all the methods being called are implemented correctly. Which of the following statement about this code is correct?

## Code Snippet (optional)
```swift
override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
    let cell = tableView.dequeueReusableCell(withIdentifier: "ImageCell", for: indexPath)
	
  	// Find the image view inside the cell
    let imageView: UIImageView = self.findImageView(cell.contentView)    
  	// Get the ID of the image to be loaded into that cell
    let imageId: Int = self.getImageId(indexPath.item)
	
    DispatchQueue.global().async {
      	// Loads the image by ID
        let image: UIImage = self.loadImageById(imageId)
        DispatchQueue.main.async {
          	// Display the image inside the imageView
            imageView.image = image
        }
    }
    
    return cell
}
```

## Answer Key
It could work but it may display image in the wrong cell as cells can be recycled when the user scrolls.

## Distractors

### 1.
It works correctly.

### 2.
It causes runtime errors because `imageView` cannot be updated from a background thread.

### 3.
It may cause runtime errors because `imageView` could have been deallocated.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

