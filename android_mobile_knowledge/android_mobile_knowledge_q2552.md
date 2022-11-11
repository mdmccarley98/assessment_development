# Downloading files

## Item ID
2552

## Claim
2: data_management

## Claim Behavior (evidence)
> It is recommended that all IO operations take place off the UI thread. https://developer.android.com/guide/background#principle

## Content Target
* file IO
* network IO
* threading

## Target Level
Level 3

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
Which of the following is **NOT** a valid issue with the provided code snippet?

## Code Snippet (optional)
```kotlin
class DownloadFileFragment: Fragment() {
    private val executor = Executors.newFixedThreadPool(4)
    private val handler = HandlerCompat.createAsync(Looper.getMainLooper())

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val callback = Consumer<InputStream> { data ->
            val stream = requireContext().openFileOutput("file.txt", Context.MODE_PRIVATE)
            data.copyTo(stream)
        }

        executor.execute {
            val result = URL("https://website.com/file.txt")
                .openConnection()
                .getInputStream()

            handler.post { callback.accept(result) }
        }
    }
}
```

## Answer Key
Downloading the file may block the UI thread.

## Distractors
### 1.
Saving the downloaded file may block the UI thread.

### 2.
`requireContext()` may throw if the fragment is destroyed before downloading finishes.

### 3.
The input and output streams in this code block are not closed.

## Common errors, misconceptions, or irrelevant information:
- Developers commonly remember to execute network tasks on background threads but forget to execute IO operations on background threads as well.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
