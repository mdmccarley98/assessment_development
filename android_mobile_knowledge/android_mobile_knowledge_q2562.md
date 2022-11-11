# Input filtering

## Item ID
2562

## Claim
1: lifecycle_components

## Claim Behavior (evidence)
> `InputFilter`s can be used to impose formatting and constraints on text input - https://developer.android.com/reference/android/text/InputFilter

## Content Target
- forms
- text input

## Target Level
Level 2

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
Imagine your app accepts user input of a number between 0 and 99. What would be the **recommended** way to enforce such a constraint?

## Code Snippet (optional)

## Answer Key
Attach an `InputFilter` to the text field, which enforces the numeric range as characters are entered.

## Distractors
### 1.
Add a text change listener to react to text entry and reset the text field's content based on the numeric range constraint.

### 2.
Set the text field to a `number` inputType and restrict its length to 2 characters.

### 3.
Create a subclass of `EditText` and override the `onTextChanged` method with logic to enforce the numeric constraint.

## Common errors, misconceptions, or irrelevant information:
- Inexperienced developers may not understand that text views support input filtering natively.
- Developers often forget that text fields set to inputType `number` still allow characters like `-` and `.` which may expose unintended edge cases.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
