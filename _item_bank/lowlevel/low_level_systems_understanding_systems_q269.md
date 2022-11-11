# low_level_systems_understanding

## Item ID
q269

## Claim
2

## Claim Behavior (evidence)
NA

## Content Target
systems

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Suppose the `loadLatestValueFromServer()` method is implemented correctly and throws no exceptions. Which statement about the following code is true?

## Code Snippet (optional)
```java
protected void loadValueButtonClicked(View view) {
    final TextView textView = (TextView) findViewById(R.id.value_text);
    textView.setText("Loading...");

    new Thread(new Runnable() {
       public void run() {
           int value = loadLatestValueFromServer();
           textView.setText("Latest value: " + value);
       }
    }).start();
}
```

## Answer Key
It will crash the app because you cannot update `textView` from a different thread.

## Distractors

### 1.
It will fail to compile.

### 2.
It will occasionally crash the app after the value is loaded, if `textView` no longer exists.

### 3.
It will correctly load the value in the background and update `textView`.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

