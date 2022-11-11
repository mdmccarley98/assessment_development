# ViewModel Memory Leaks

## Item ID
2560

## Claim
1: lifecycle_components

## Claim Behavior (evidence)
> ViewModels should not hold direct references to lifecycle components like Fragments or Activities - https://developer.android.com/topic/libraries/architecture/viewmodel#lifecycle

## Content Target
- view models
- memory leaks

## Target Level
Level 3

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
Consider the given Fragment and ViewModel. Which option is a TRUE statement about the API key configuration in this example?


## Code Snippet (optional)
```kotlin
class GetDataViewModel(keySupplier: Supplier<String>): ViewModel() {
    // Data fetching methods
}

class ShowDataFragment: Fragment() {
    val defaultDataSupplier = { getString(R.string.default_data) }
    val viewModel by viewModels<GetDataViewModel> {
        object: ViewModelProvider.Factory {
            override fun <T : ViewModel?> create(modelClass: Class<T>): T = when(modelClass) {
                GetDataViewModel::class -> GetDataViewModel(defaultDataSupplier) as T
                else -> throw IllegalArgumentException()
            }
        }
    }
}
```

## Answer Key
The way `default_data` is supplied to GetDataViewModel leaks a reference to ShowDataFragment.

## Distractors
### 1.
It is not recommended to throw exceptions from within `ViewModelProvider.Factory.create`.

### 2.
This is an acceptable way to seed a ViewModel with some data.

### 3.
It is not recommended to pass data to ViewModel constructors.

## Common errors, misconceptions, or irrelevant information:
- An inexperienced developer may not understand that ViewModels outlive instances of Fragments
- Developers don't always understand that functions capturing lifeycycle comonents' (fragment/activity) scope can cause memory leaks

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
