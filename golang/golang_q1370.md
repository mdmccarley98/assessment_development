## Item ID
1370

## Claim 3

Candidates understand distinguishing features of the language

## Claim Behavior (evidence)

## Cognitive Model

- Use

## Item Type

Multiple Choice

## Stem

You are building a package to generate pdf's from different form data.
The package will be responsible of taking in form data, validating,
and generating a pdf from an html template. What would be a good design for the package?

## Code Snippet (optional)

## Answer Key

- Create a form interface with the behaviors of validating and generating html
  so the package can call the methods regardless of how they are implemented

## Distractors

- Create a form struct type to standardize the structure of fields so the package can define
  its own process to validate and generate html from the data
- Utilize goroutines to schedule the pdf generation to run validation and html generation independently
- Due to the language's lack of generics, it is easier for each form to implement its own process of pdf generation

## Common errors, misconceptions, or relevant information (optional)

---

# Triplebyte Review

## Language Review

## Bias/Fairness Review

## Content Review
