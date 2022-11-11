# Android - Activity Result

## Item ID
2911

## Claim
1: lifecycle_components

## Claim Behavior (evidence)
> [Launching an activity for result](https://developer.android.com/training/basics/intents/result#launch) should use the `registerForActivityResult` method to register for activity results in a predictable and testable way

> [Implicit intents](https://developer.android.com/training/basics/intents/sending#Build) may launch _any_ activity installed on the device to satisfy an `Intent`. There is no guarantee that your application will handle a given implicit intent.

## Content Target
- activity communication

## Target Level
Level 3

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
What is the **recommended** way to prompt a user to provide some text from another activity within your application?

## Code Snippet (optional)

## Answer Key
```kotlin
class PromptForDataFragment: Fragment() {
    val resultRegistration = registerForActivityResult(StartActivityForResult()) { result ->
        if (result.resultCode == Activity.RESULT_OK) {
            view?.findViewById<TextView>(R.id.selected_data)?.text = result.data?.getCharSequenceExtra(Intent.EXTRA_TEXT)
        }
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        view.findViewById<View>(R.id.pick_text).setOnClickListener {
            resultRegistration.launch(Intent(requireContext(), MyTextSelectionActivity::class.java))
        }
    }
}
```

## Distractors
### 1.
```kotlin
class PromptForDataFragment: Fragment() {
    val resultRegistration = registerForActivityResult(GetContent()) { uri ->
        val contents = uri?.let(requireContext().contentResolver::openInputStream)
        contents?.use {
            view?.findViewById<TextView>(R.id.selected_data)?.text = it.readBytes().toString(Charsets.UTF_8)
        }
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        
        view.findViewById<View>(R.id.pick_text).setOnClickListener {
            resultRegistration.launch("text/plain")
        }
    }
}
```

### 2.
```kotlin
class PromptForDataFragment: Fragment() {
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        view.findViewById<View>(R.id.pick_text).setOnClickListener {
            startActivityForResult(Intent(Intent.ACTION_GET_CONTENT).setType("text/plain"), CODE_REQUEST_TEXT)
        }
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        if (requestCode == CODE_REQUEST_TEXT && resultCode == Activity.RESULT_OK) {
            val contents = data?.data?.let(requireContext().contentResolver::openInputStream)
            contents?.use {
                view?.findViewById<TextView>(R.id.selected_data)?.text = it.readBytes().toString(Charsets.UTF_8)
            }    
        }
    }
    
    companion object {
        private val CODE_REQUEST_TEXT = 1
    }
}
```

### 3.
```kotlin
class PromptForDataFragment: Fragment() {
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        view.findViewById<View>(R.id.pick_text).setOnClickListener {
            startActivityForResult(Intent(Intent.ACTION_GET_CONTENT).setType("text/plain"), CODE_REQUEST_TEXT)
        }
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        if (requestCode == CODE_REQUEST_TEXT && resultCode == Activity.RESULT_OK) {
            view?.findViewById<TextView>(R.id.selected_data)?.text = data?.getStringExtra(Intent.EXTRA_TEXT)
        }
    }

    companion object {
        private val CODE_REQUEST_TEXT = 1
    }
}
```

## Common errors, misconceptions, or irrelevant information:
- The distractors all may source content from other applications capable of providing text content
- Distractors #2 and #3 use deprecated APIs for starting an activity for result

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
