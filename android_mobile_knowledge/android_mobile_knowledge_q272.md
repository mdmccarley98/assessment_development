# Content Observer

## Item ID
272

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
The following code in an activity class (similar to view controller) registers an observer that listens to changes in a piece of global data in your app. Which of the following statements is most accurate?

## Code Snippet (optional)
```java
@Override
protected void onStart() {
    super.onStart();
    
    this.observer = new ContentObserver(new Handler()) {
        @Override
        public void onChange(boolean selfChange) {
            // Call a method on the activity (view controller)
            doSometingWithChangedData();
        }
    };
        
    // Registers observer
    this.getContentResolver().registerContentObserver(
            MyObserveableContent.CONTENT_URI, 
            true, this.observer);
}
```

## Answer Key
The observer needs to be unregistered in onStop(), otherwise the activity instance can never be deallocated.

## Distractors

### 1.
There is no need to unregister the observer explicitly. It will automatically be unregistered.

### 2.
There is no need to unregister the observer explicitly. The observer will not be unregistered but there is no harm.

### 3.
The observer needs to be unregistered in a finally block, otherwise it's not exception safe.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

