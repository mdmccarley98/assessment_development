# Save Instance State

## Item ID
317

## Claim
Claim 1

## Claim Behavior (evidence)
NA

## Content Target
android

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What is wrong with this code?

## Code Snippet (optional)
```java
@Override
protected void onSaveInstanceState(Bundle outState) {
    ListView listView = (ListView) findViewById(R.id.test_list_view);
    outState.putLong(LIST_SELECTED_ITEM, listView.getSelectedItemId());
    super.onSaveInstanceState(outState);
}
```

## Answer Key
Everything is fine. This is a perfect example of using onSaveInstanceState().

## Distractors

### 1.
It is a bad idea to store selected list view item id into outState. Normally this method is used for persisting resources that were cached in memory.

### 2.
It's an error to fetch the status of a view, because this method might be invoked from a background thread.

### 3.
super.onSaveInstanceState(outState) should be move to the top of this method.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

