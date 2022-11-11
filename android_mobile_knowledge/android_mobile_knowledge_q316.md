# Handler Posts

## Item ID
316

## Claim
1: lifecycle_components

## Claim Behavior (evidence)
NA

## Content Target
android

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What would be the result of running the following code inside an activity?

## Code Snippet (optional)
```java
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
    
    for (int i = 0; i < 10; i++) {
        final int val = i;
        new Handler().postAtFrontOfQueue(new Runnable() {
            @Override        
            public void run() {
                System.out.println(val);
            }
        });
    }
}
```

## Answer Key
It prints 0 to 9 in decreasing order.

## Distractors

### 1.
It fails to compile.

### 2.
It prints 0 to 9 in random order.

### 3.
It prints 0 to 9 in increasing order.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

