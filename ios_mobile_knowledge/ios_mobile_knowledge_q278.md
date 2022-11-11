# mobile_knowledge

## Item ID
q278

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
Suppose the `loadImageFromWeb` method is implemented correctly. Which statement about the following code is true?

## Code Snippet (optional)
```objectivec
@property (weak, nonatomic) IBOutlet UIImageView *imageView;

//...

- (void)viewDidLoad {
    [super viewDidLoad];
	
  	// Load the image asynchronously on global queue of GCD
    dispatch_queue_t queue = 
        dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0);
    dispatch_async(queue, ^() {
        UIImage* image = [self loadImageFromWeb];
        if (image) {
          	// After the image is loaded, display it in imageView
            self.imageView.image = image;
        }
    });
}
```

## Answer Key
It will fail to update the `imageView` because you cannot update `imageView` from a background thread.

## Distractors

### 1.
It will fail to compile.

### 2.
It will occasionally crash the app after the image is loaded, if `imageView` no longer exists.

### 3.
It will correctly load the image from server and update the `imageView`.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

