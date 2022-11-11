# Threading Scope

## Item ID
319

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
In the following code, the startBackgroundJob() method starts a new thread to perform a long running task. Which of the following statement is most accurate about what happens after it is called?

## Code Snippet (optional)
```java
public class MainActivity extends AppCompatActivity {

    private void logTaskDone() {
        System.out.println("Task Done");
    }

    public void startBackgroundJob() {
        new Thread() {
            @Override
            public void run() {
                MyLongRunningTask.performTask();
                logTaskDone();
            }
        }.start();
    }
    
    // ...
}
```

## Answer Key
The activity instance will not be garbage collected until after the long running task is done, even if you remove the call to logTaskDone() inside run().

## Distractors

### 1.
The activity instance will not be garbage collected until after the long running task is done, because the call to logTaskDone() needs a reference to the activity instance.

### 2.
It is possible for the  activity instance to be garbage collected before the long running task end, and thus the call to logTaskDone() might throw an exception.

### 3.
This is a memory leak. The activity instance and the background thread hold references to each other, and thus neither of them will be garbage collected.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

